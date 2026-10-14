# Presentation Outline: CareerPath AI
**AI-Powered Career Roadmap Assistant for Students**  
*Academic Project Presentation & Viva Defense Guide*  
*IBM SkillsBuild Masterclass 5 &bull; UN SDG 8 Alignment*  
*Presenter: Karan Kumar*

---

## Slide 1: Title & Project Introduction
- **Slide Title:** CareerPath AI: AI-Powered Career Roadmap Assistant for Students
- **Subtitle:** Bridging the College-to-Industry Skill Gap with Milestone-Driven Artificial Intelligence
- **Presenter Info:** Karan Kumar &bull; IBM SkillsBuild Masterclass 5 Academic Assessment &bull; 2026
- **Key Visual:** CareerPath AI logo with badges: "UN SDG 8 Aligned" & "Google Gemini 2.5 Flash Engine".
- **Speaker Talking Points:**
  - *"Respected evaluators and mentors, welcome to the presentation of CareerPath AI. As engineering students, we constantly observe a painful paradox: companies complain they cannot find qualified software developers, while thousands of hardworking graduates remain unemployed. CareerPath AI is designed to solve this skill-job mismatch directly from the browser."*

---

## Slide 2: Problem Statement
- **Slide Title:** The Problem: The Skill-Job Mismatch Crisis
- **Key Bullet Points:**
  - **Academic Curricula Lag:** Colleges teach foundational theory, but industry requires hands-on experience in APIs, cloud, containerization, and modern security.
  - **Information Overload:** Students are overwhelmed by thousands of conflicting, unstructured YouTube videos and expensive commercial bootcamps.
  - **Decision Paralysis:** Lack of a clear, sequential, week-by-week learning roadmap causes students to abandon their career preparation.
  - **No Accountability:** Static roadmap infographics do not provide task checkoffs, quizzes, or measurable progress tracking.
- **Speaker Talking Points:**
  - *"Students don't suffer from a lack of information; they suffer from information paralysis. Without a structured roadmap that acknowledges what they already know and isolates what they are missing, self-learning quickly turns into burnout."*

---

## Slide 3: Target Users & Beneficiaries
- **Slide Title:** Who Are We Building For?
- **Key Segments:**
  - **Undergraduate Students (Years 1–4):** B.Tech, BCA, B.Sc IT students seeking focused preparation for campus placement seasons.
  - **Fresh College Graduates:** Job seekers needing a targeted 4, 8, or 12-week sprint to make their resumes competitive.
  - **Non-CS Students & Career Switchers:** Learners requiring structured foundational roadmaps without confusing jargon.
  - **Academic Placement Mentors:** Faculty looking for standardized industry benchmarks to guide student project work.
- **Speaker Talking Points:**
  - *"Our primary target audience is the undergraduate student at Tier-2 and Tier-3 colleges who does not have access to elite alumni networks or expensive private coaching. CareerPath AI levels the playing field."*

---

## Slide 4: The Proposed Solution
- **Slide Title:** Our Solution: An Intelligent Career Acceleration Engine
- **Core Pillars:**
  - **AI Skill Gap Diagnostics:** Evaluates the student's existing degree and skills against target industry roles.
  - **Personalized Weekly Schedules:** Formulates flexible 4, 8, or 12-week milestone syllabi.
  - **100% Free Resources:** Direct integration with MDN, W3C, Kaggle, and official framework documentation.
  - **Hands-On Milestones:** Every single week culminates in a concrete coding project.
  - **Privacy-First Telemetry:** Zero login requirements; full progress tracking using browser `localStorage`.
- **Speaker Talking Points:**
  - *"CareerPath AI acts like a personal engineering career counselor. In under 10 seconds, it delivers a week-by-week syllabus tailored to your exact degree and available daily study time, complete with free verified tutorials and milestone capstones."*

---

## Slide 5: Features & Architecture Workflow
- **Slide Title:** End-to-End Workflow & Core Features
- **Workflow Diagram (Spoken / Visual):**
  1. *Profile Input Form* (Degree, Current Skills, Career Target, Duration)
  2. *Express.js Backend Validation* (Input sanitization & Rate limiting)
  3. *Gemini 2.5 Flash Generation* (Strict JSON schema response)
  4. *Weekly Interactive Roadmap* (Timeline, exercises, projects, free docs)
  5. *Career Skill Quiz* (5 MCQs, instant grading & technical explanations)
  6. *Dynamic Dashboard* (Live telemetry: % progress, completed count, next task)
- **Speaker Talking Points:**
  - *"The architecture is intentionally lean and beginner-friendly: vanilla HTML5, CSS3, and JavaScript on the frontend, with an Express.js backend connecting to Google Gemini. If the AI service is unreachable or unconfigured, our resilient system automatically serves curated sample roadmaps without breaking."*

---

## Slide 6: Lean Canvas & Sustainable Impact
- **Slide Title:** Lean Canvas & Academic Model
- **Key Blocks Highlighted:**
  - **Unique Value Proposition:** Instant, personalized, zero-paywall tech career roadmap with browser persistence.
  - **Cost Structure:** $0 operational cost using Render free tier and Gemini API free quota (with sample fallbacks).
  - **Key Metrics:** Generated roadmaps, milestone task completion rate, average quiz scores, and student retention.
  - **Unfair Advantage:** Ultra-lightweight vanilla stack, zero tracking, aligned with official IBM SkillsBuild guidelines.
- **Speaker Talking Points:**
  - *"From a Lean Canvas perspective, our unfair advantage is zero user friction. Students do not need to create accounts, remember passwords, or risk their privacy. The entire application runs client-side and retains full state locally."*

---

## Slide 7: Implementation & UN SDG 8 Alignment
- **Slide Title:** Advancing UN SDG 8: Decent Work & Economic Growth
- **Direct Targets Addressed:**
  - **Target 8.6 (Youth Employment & Training):** Decreasing the proportion of youth not in employment or training (NEET) by democratizing high-value software skills.
  - **Target 8.5 (Productive Employment & Equal Opportunity):** Giving non-tier-1 college students access to the same curriculum quality as elite bootcamp graduates.
  - **Target 4.4 & 8.2 (Technical Competence for Productivity):** Shifting students from theoretical cramming to hands-on practical project creation.
- **Speaker Talking Points:**
  - *"CareerPath AI is not just a coding project; it is an academic response to UN Sustainable Development Goal 8. By empowering fresh graduates with industry-demanded technical capabilities, we help them transition from academic unemployment to decent, productive employment."*

---

## Slide 8: Live Demonstration, Viva Defense & Conclusion
- **Slide Title:** Live Demonstration & Project Summary
- **Live Demo Checklist (Demonstrated during Viva):**
  - Instant prefill with viva demonstration chips (Web Dev, Data Science, DevOps, Cyber).
  - AI roadmap generation & skills matrix breakdown (recognized vs. missing skills).
  - Expanding weekly milestone modules & clicking verified free documentation links.
  - Answering the career skill quiz & inspecting real-time technical explanations.
  - Toggling completed tasks & watching the dashboard progress bar update dynamically.
  - Refreshing the browser to verify persistent `localStorage` retention.
- **Conclusion Summary:**
  - Simple, robust, responsive, and completely aligned with the IBM SkillsBuild Masterclass 5 mandate.
- **Speaker Talking Points:**
  - *"Thank you, evaluators. I am now delighted to present the live working demonstration of CareerPath AI and answer any questions regarding the codebase, AI prompt engineering, or SDG 8 alignment."*

---

## Quick Viva Questions & Answers Cheat Sheet

| Question | Recommended Student Answer |
| :--- | :--- |
| **Q1: Why did you choose Vanilla JS instead of React or Next.js?** | *"For an academic project and student-facing tool, vanilla JavaScript ensures zero build bloat, instantaneous loading speeds, and makes every line of DOM and state manipulation easy to explain in a viva. It also satisfies the strict requirements of IBM SkillsBuild Masterclass 5."* |
| **Q2: How do you keep the Gemini API key secure?** | *"The API key is strictly isolated in backend environment variables (`.env`). It is never exposed in client-side HTML, CSS, or JS, and `.env` is excluded in `.gitignore`. The browser only communicates with our custom `/api/roadmap` endpoint."* |
| **Q3: What happens if the Gemini API is rate-limited or fails?** | *"Our backend has a fail-safe fallback mechanism. If the API key is missing or the call times out, it serves a comprehensive curated academic sample roadmap and clearly labels it in the UI, ensuring the application remains 100% testable without deceptive claims."* |
| **Q4: How does data persist across page reloads without a database?** | *"We utilize the browser's native `Window.localStorage` API. The application serializes the profile, roadmap, completed task IDs, and quiz scores into a JSON string under a unique key, restoring it automatically on page initialization."* |
| **Q5: How does this project align with UN SDG 8?** | *"It directly tackles the skill-job mismatch outlined in UN SDG Target 8.6 and 8.5 by diagnosing missing industry competencies, providing free learning materials, and promoting youth employment through practical skill acquisition."* |
