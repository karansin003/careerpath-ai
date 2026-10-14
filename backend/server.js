/**
 * CareerPath AI - Backend Server
 * Express.js server providing REST APIs and static frontend serving
 * Aligned with IBM SkillsBuild Masterclass 5 & UN SDG 8
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env if present (checks current dir and parent)
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const { GoogleGenAI } = require('@google/genai');
const { sampleRoadmaps, quizQuestions, getSampleRoadmap } = require('./sampleData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100kb' }));

// Simple in-memory rate limiter for AI endpoint (15 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;

function rateLimiter(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown-ip';
  const now = Date.now();
  
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
  
  if (now > clientData.resetTime) {
    clientData.count = 0;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
  }
  
  clientData.count += 1;
  rateLimitMap.set(ip, clientData);
  
  if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a moment before generating another roadmap.'
    });
  }
  
  next();
}

// Clean up old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime + RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000).unref();

// API Health Check
app.get('/api/health', (req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '' && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here');
  res.json({
    status: 'ok',
    app: 'CareerPath AI',
    version: '1.0.0',
    sdgAlignment: 'UN SDG 8 - Decent Work and Economic Growth',
    hasGeminiKey: hasKey,
    uptime: Math.round(process.uptime())
  });
});

// API: Get Predefined Quiz Questions for a Career
app.get('/api/quiz', (req, res) => {
  const requestedCareer = req.query.career || 'Full Stack Web Developer';
  
  // Find matching quiz or fallback to closest or Full Stack
  let questions = quizQuestions[requestedCareer];
  if (!questions) {
    const keys = Object.keys(quizQuestions);
    const found = keys.find(k => requestedCareer.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(requestedCareer.toLowerCase()));
    questions = found ? quizQuestions[found] : quizQuestions["Full Stack Web Developer"];
  }

  res.json({
    success: true,
    career: requestedCareer,
    totalQuestions: questions.length,
    questions: questions
  });
});

// API: Generate Career Roadmap (Real Gemini API with Safe Sample Fallback)
app.post('/api/roadmap', rateLimiter, async (req, res) => {
  try {
    const {
      name,
      degree,
      currentSkills,
      experienceLevel,
      targetCareer,
      dailyStudyTime,
      durationWeeks
    } = req.body || {};

    // Input Validation
    if (!targetCareer || typeof targetCareer !== 'string' || targetCareer.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Target career is required.'
      });
    }

    if (targetCareer.length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Target career name must not exceed 100 characters.'
      });
    }

    const cleanCareer = targetCareer.trim();
    const cleanDuration = [4, 8, 12].includes(Number(durationWeeks)) ? Number(durationWeeks) : 4;
    const cleanExperience = (experienceLevel && typeof experienceLevel === 'string') ? experienceLevel.slice(0, 50).trim() : 'Beginner';
    const cleanSkills = (currentSkills && typeof currentSkills === 'string') ? currentSkills.slice(0, 500).trim() : '';
    const cleanDegree = (degree && typeof degree === 'string') ? degree.slice(0, 100).trim() : 'Not specified';
    const cleanName = (name && typeof name === 'string') ? name.slice(0, 100).trim() : 'Student';
    const cleanStudyTime = (dailyStudyTime && typeof dailyStudyTime === 'string') ? dailyStudyTime.slice(0, 50).trim() : '2 hours/day';

    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : '';
    const hasValidKey = apiKey !== '' && apiKey !== 'your_gemini_api_key_here';

    // If Gemini API Key is not configured, return curated academic sample roadmap
    if (!hasValidKey) {
      const sample = getSampleRoadmap(cleanCareer, cleanDuration, cleanSkills, cleanExperience);
      return res.json({
        success: true,
        isSample: true,
        source: 'sample_fallback',
        message: 'Notice: Gemini API key is not configured in backend environment. Displaying a high-quality curated sample roadmap aligned with IBM SkillsBuild academic standards.',
        data: sample
      });
    }

    // Call Gemini API with timeout protection
    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });

      const systemPrompt = `You are an elite, highly encouraging career counseling and computer science curriculum expert.
Your goal is to build an empowering, practical, milestone-driven technical career roadmap for a college student or graduate.
Align the guidance with industry standards and UN Sustainable Development Goal 8 (Decent Work & Economic Growth).

CRITICAL INSTRUCTIONS:
1. Output MUST be ONLY valid JSON adhering strictly to the schema provided.
2. Provide exactly ${cleanDuration} weeks in the "weeks" array (numbered 1 to ${cleanDuration}).
3. For each week, provide 2 to 3 actionable, specific tasks in the "tasks" array. Give each task a unique id (e.g. "w1-t1", "w1-t2").
4. Provide genuine, reputable free learning resources (MDN, FreeCodeCamp, W3C, Kaggle, Official Docs, Coursera free tier, YouTube creators like Traversy, NetNinja, free university notes).
5. Never output markdown code blocks or backticks. Return raw valid JSON.`;

      const userPrompt = `Generate a ${cleanDuration}-week personalized learning roadmap for:
- Student Name: ${cleanName}
- Academic Course/Degree: ${cleanDegree}
- Target Career: ${cleanCareer}
- Current Skills: ${cleanSkills || 'None specified / Beginner'}
- Experience Level: ${cleanExperience}
- Available Daily Study Time: ${cleanStudyTime}

Required JSON format:
{
  "careerGoal": "${cleanCareer}",
  "overview": "2-3 sentences explaining this career role and responsibilities",
  "industryOutlook": "1-2 sentences on market demand and industry growth",
  "recognizedExistingSkills": ["Skill 1", "Skill 2"],
  "recommendedMissingSkills": ["Skill to learn 1", "Skill to learn 2", "Skill to learn 3", "Skill to learn 4"],
  "weeks": [
    {
      "weekNumber": 1,
      "theme": "Theme title for Week 1",
      "milestone": "Measurable achievement by end of week",
      "topics": ["Topic 1", "Topic 2", "Topic 3"],
      "exercises": ["Hands-on exercise 1", "Hands-on exercise 2"],
      "project": "Mini project title and 1 sentence description",
      "resources": [
        { "title": "Resource title", "url": "https://..." }
      ],
      "tasks": [
        { "id": "w1-t1", "text": "Specific actionable learning task 1" },
        { "id": "w1-t2", "text": "Specific actionable learning task 2" },
        { "id": "w1-t3", "text": "Specific actionable learning task 3" }
      ]
    }
  ]
}`;

      // Call model with 25 second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      let responseText = '';
      try {
        const result = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            responseMimeType: 'application/json',
            temperature: 0.4
          }
        });
        clearTimeout(timeoutId);

        if (result && result.text) {
          responseText = result.text;
        } else if (result && result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
          responseText = result.candidates[0].content.parts[0].text;
        }
      } catch (geminiError) {
        clearTimeout(timeoutId);
        throw geminiError;
      }

      if (!responseText) {
        throw new Error('Empty response from AI model');
      }

      // Clean up response if it wrapped in backticks despite instructions
      let cleanedJson = responseText.trim();
      if (cleanedJson.startsWith('```json')) {
        cleanedJson = cleanedJson.replace(/^```json/, '').replace(/```$/, '').trim();
      } else if (cleanedJson.startsWith('```')) {
        cleanedJson = cleanedJson.replace(/^```/, '').replace(/```$/, '').trim();
      }

      const parsedRoadmap = JSON.parse(cleanedJson);

      // Validate core required fields
      if (!parsedRoadmap.careerGoal || !Array.isArray(parsedRoadmap.weeks) || parsedRoadmap.weeks.length === 0) {
        throw new Error('AI response lacked required roadmap fields');
      }

      // Ensure each week has tasks with IDs
      parsedRoadmap.weeks.forEach((week, wIdx) => {
        if (!Array.isArray(week.tasks) || week.tasks.length === 0) {
          week.tasks = [
            { id: `w${wIdx + 1}-t1`, text: `Master core topics: ${Array.isArray(week.topics) ? week.topics.join(', ') : 'weekly concepts'}` },
            { id: `w${wIdx + 1}-t2`, text: `Complete hands-on exercise and lab` },
            { id: `w${wIdx + 1}-t3`, text: `Build module project: ${week.project || 'milestone deliverable'}` }
          ];
        } else {
          week.tasks.forEach((task, tIdx) => {
            if (!task.id) task.id = `w${wIdx + 1}-t${tIdx + 1}`;
          });
        }
      });

      return res.json({
        success: true,
        isSample: false,
        source: 'gemini_ai',
        model: 'gemini-2.5-flash',
        message: 'Roadmap generated successfully by Google Gemini AI.',
        data: parsedRoadmap
      });

    } catch (aiError) {
      // Safe logging on server side without leaking sensitive info
      console.warn('Gemini API call unsuccessful, falling back to curated sample roadmap:', aiError.message);

      const sample = getSampleRoadmap(cleanCareer, cleanDuration, cleanSkills, cleanExperience);
      return res.json({
        success: true,
        isSample: true,
        source: 'sample_fallback',
        message: `Notice: Gemini AI service was temporarily unavailable (${aiError.message.slice(0, 80)}). Displaying a curated sample roadmap as fallback.`,
        data: sample
      });
    }

  } catch (serverError) {
    console.error('Server error handling /api/roadmap:', serverError);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again.'
    });
  }
});

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Fallback to index.html for SPA/client-side navigation
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start Server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 CareerPath AI Server running on port ${PORT}`);
    console.log(`👉 Local: http://localhost:${PORT}`);
    console.log(`👉 Static frontend directory: ${frontendPath}`);
    console.log(`👉 Gemini Key Status: ${process.env.GEMINI_API_KEY ? 'Configured ✅' : 'Not configured (using sample fallback) ⚠️'}`);
    console.log(`====================================================`);
  });
}

module.exports = app;
