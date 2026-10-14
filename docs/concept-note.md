# Concept Note: CareerPath AI
**AI-Powered Career Roadmap Assistant for Students**  
*Academic Project Concept Note &bull; IBM SkillsBuild Masterclass 5*  
*Candidate: Karan Kumar &bull; Target Evaluation: 2026 Academic Session*  
*Thematic Area: Educational Technology & UN Sustainable Development Goal 8*

---

## 1. Abstract
The transition from academic engineering education to high-productivity employment is one of the most critical challenges facing contemporary higher education. Despite surging global demand for technical professionals in software development, cloud computing, artificial intelligence, and cybersecurity, millions of university graduates struggle to secure meaningful, quality employment. This disconnect is predominantly caused by the **skill-job mismatch**: undergraduate curricula lag behind the rapid evolution of industry software engineering workflows.

**CareerPath AI** is an intelligent, accessible web application designed to empower students and recent graduates to bridge this divide. By providing structured, AI-guided skill gap analysis, personalized week-by-week learning roadmaps, curated free educational resources, career-specific validation quizzes, and dynamic progress tracking, CareerPath AI democratizes career acceleration. Built with vanilla HTML5, CSS3, JavaScript, Node.js, and Express, and integrated with the Google Gemini API, the platform delivers an intuitive, privacy-preserving solution aligned with **UN Sustainable Development Goal 8 (Decent Work and Economic Growth)**.

---

## 2. Problem Statement
The contemporary technical job market presents a glaring paradox:
1. **The Skill Gap Crisis:** Tech employers frequently report that while candidate volume is high, fewer than 20% of engineering applicants possess job-ready skills in modern practices such as REST API architecture, containerization, cloud deployment, and secure coding.
2. **Curriculum Stagnation:** University syllabi are updated over multi-year cycles, leaving students well-versed in theoretical concepts but inexperienced in building production-ready applications.
3. **Information Overload & Paywalls:** Students attempting self-directed learning encounter an overwhelming volume of fragmented, outdated YouTube playlists and aggressive, costly commercial bootcamps.
4. **Lack of Personalization & Milestone Tracking:** Existing online roadmaps are static images that fail to account for a student's existing degree, available daily study hours, or experience level, offering no mechanism to track weekly execution or validate conceptual comprehension.

---

## 3. Project Objectives
The overarching aim of CareerPath AI is to create a lightweight, robust, and accessible career roadmap generation system. Specific objectives include:
- **Diagnostic Skill Gap Analysis:** Ingest a student's degree, known skills, and desired career goal to isolate the exact technical competencies missing from their profile.
- **Personalized Schedule Formulation:** Generate flexible 4, 8, or 12-week milestone-driven learning roadmaps structured with weekly themes, core topics, hands-on labs, and resume-ready capstone projects.
- **Democratized Learning Access:** Curate reputable, 100% free educational resources (e.g., MDN Web Docs, W3C standards, Kaggle Learn, FreeCodeCamp, official framework documentation), removing economic barriers to technical education.
- **Competency Validation:** Provide career-specific multiple-choice quizzes with detailed technical answer explanations to test student conceptual readiness.
- **Accountability & Progress Telemetry:** Implement an interactive task checklist and dynamic dashboard that computes real-time completion percentages and persists across browser refreshes via client-side `localStorage`.
- **Fail-Safe Robustness:** Implement a resilient dual-mode architecture that uses Google Gemini 2.5 Flash when configured, and automatically falls back to curated sample roadmaps if the API key is omitted, ensuring 100% operational reliability during viva evaluations.

---

## 4. Target Users
1. **Undergraduate Students (Years 1 to 4):** Enrolled in B.Tech (CSE/IT), BCA, B.Sc IT, or MCA seeking clear direction for campus recruitment drives.
2. **Fresh Graduates & Job Seekers:** Individuals who have completed formal degrees and need an accelerated, structured sprint to become industry-hireable.
3. **Self-Taught Learners & Career Switchers:** Students transitioning from non-computer science disciplines who require foundational and practical software engineering milestones.
4. **Academic Mentors & Placement Coordinators:** Faculty seeking a standardized, transparent tool to advise students on modern industry skill requirements.

---

## 5. Proposed AI Solution
CareerPath AI leverages large language models (Google Gemini API) via a secure, isolated Node.js Express backend. The system operates as follows:
- **Input Sanitization & Normalization:** User inputs (degree, current skills, target career, study hours, duration) are validated against strict character length and type rules.
- **Structured Prompt Engineering:** The backend constructs an explicit system instruction enforcing role-play as a veteran computer science curriculum designer, mandating strict adherence to a JSON schema.
- **Deterministic Response Formatting:** The Gemini API is queried with low temperature (0.4) and `responseMimeType: "application/json"`, eliminating conversational preamble and guaranteeing structured JSON parsing.
- **Graceful Fallback Mechanism:** If the API key is not present or an API timeout occurs, the backend smoothly supplies high-quality, pre-compiled sample roadmaps, labeling the data clearly to ensure complete academic transparency.

---

## 6. System Architecture & Features

```
+-----------------------------------------------------------------------------------+
|                                  USER BROWSER                                     |
|  [ Landing Page & Hero ] -> [ Career Profile Form ] -> [ Roadmap & Task Tracker ] |
|  [ Skill Quiz Engine ]   -> [ Telemetry Dashboard ] -> [ LocalStorage Storage ]   |
+-----------------------------------------------------------------------------------+
                                       |
                           HTTP Fetch (REST API)
                                       v
+-----------------------------------------------------------------------------------+
|                             EXPRESS.JS BACKEND                                    |
|  - In-Memory Sliding Window Rate Limiter (15 req/min per IP)                      |
|  - Input Validation & Sanitization Engine                                         |
|  - Static Asset Delivery (HTML5, CSS3, Vanilla JS)                                |
+-----------------------------------------------------------------------------------+
             |                                              |
      (API Key Present)                             (API Key Missing / Error)
             v                                              v
+-----------------------------+               +-------------------------------------+
|   GOOGLE GEMINI API ENGINE  |               |  PREDEFINED CURATED ROADMAP MODULE  |
|  - Model: gemini-2.5-flash  |               |  - Full Stack Web Developer         |
|  - System Instruction       |               |  - Data Scientist / AI Engineer     |
|  - Strict JSON Schema       |               |  - Cloud & DevOps Engineer          |
|  - 25s Timeout Protection   |               |  - Cybersecurity Analyst            |
+-----------------------------+               |  - Mobile App Developer (Flutter)   |
                                              |  - UI/UX & Frontend Specialist      |
                                              +-------------------------------------+
```

### Key Functional Features:
- **Feature A (Landing Experience):** Professional hero section, feature breakdown, how-it-works process, and UN SDG 8 alignment highlights.
- **Feature B (Career Profile Form):** Dynamic form capturing degree, skills, career target (with custom career support), study hours, and duration; includes real-time inline validation.
- **Feature C (AI Roadmap Generator):** Full skill gap matrix (recognized vs. missing skills), role overview, industry outlook, and collapsible weekly modules with exercises and projects.
- **Feature D (Skill Quiz):** 5 career-specific MCQs with automatic grading, percentage calculations, answer rationales, and retake capabilities.
- **Feature E (Milestone Task Tracker):** Interactive checklists synchronized between the weekly timeline and the master tracker, with status filtering (all/pending/completed).
- **Feature F (Dynamic Dashboard):** Real-time telemetry computing active career title, total tasks, completed tasks, pending tasks, percentage progress bar, and recommended next action.

---

## 7. Technology Stack

| Layer | Technology | Justification |
| :--- | :--- | :--- |
| **Frontend Markup** | HTML5 | Clean, semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). |
| **Frontend Styling** | CSS3 (Vanilla) | Custom CSS variable design system; responsive Flexbox/Grid; dark navy & blue palette; zero bloated UI frameworks. |
| **Client Scripting** | Vanilla JavaScript (ES6+) | Native DOM manipulation, async/await fetch, and `Window.localStorage` persistence without virtual DOM overhead. |
| **Backend Runtime** | Node.js (v24 LTS) | High-performance, event-driven JavaScript runtime. |
| **Web Server** | Express.js | Minimal, unopinionated REST API framework and static asset server. |
| **AI Integration** | Google Gemini API (`@google/genai`) | Advanced reasoning model (`gemini-2.5-flash`) delivering structured JSON curriculums. |
| **Persistence** | Browser `localStorage` | Zero-login friction; 100% privacy-preserving client-side state retention. |
| **Deployment Target** | Render Web Services | Cloud deployment supporting continuous Git integration and environment secret isolation. |

---

## 8. Alignment with UN Sustainable Development Goal 8
CareerPath AI directly contributes to **UN SDG 8: Decent Work and Economic Growth**:
- **Target 8.6 (Youth Employment & Training):** By providing structured pathways for self-skilling, the application directly targets youth not in employment, education, or training (NEET).
- **Target 8.5 (Productive Employment & Decent Work):** Enables students from non-elite institutions to build competitive software engineering portfolios, enhancing their employability and earning potential.
- **Target 4.4 & 8.2 (Technical Skill Upgrading):** Enhances technical literacy in emerging domains (AI, Cloud, Cybersecurity) to foster higher levels of economic productivity through technological upgrading.

---

## 9. Expected Outcomes
1. **Elimination of Career Anxiety:** Students receive an organized, predictable weekly schedule replacing ambiguity with concrete milestones.
2. **Practical Portfolio Building:** By mandating a tangible coding project for each weekly milestone, students graduate with demonstrable code rather than theoretical certificates.
3. **Academic Evaluation Readiness:** Provides an intuitive, demonstrable artifact for the IBM SkillsBuild Masterclass 5 viva defense.

---

## 10. Limitations
- **Stateless AI Generation:** Each roadmap generation is independent; conversational follow-up questions within the same roadmap are not supported in the initial version.
- **Client-Side Persistence Scope:** Data stored in `localStorage` remains local to the specific browser and device, and does not automatically synchronize across multiple devices.
- **Curated Quiz Question Bank:** Skill quizzes utilize validated predefined question banks rather than dynamic AI generation to ensure high pedagogical accuracy and eliminate AI hallucinations during testing.

---

## 11. Future Scope
- **Institutional Analytics Portal:** Aggregate anonymous skill gap metrics for college placement directors to help universities update curriculum syllabi.
- **Automated GitHub Integration:** Direct webhook to create a GitHub repository initialized with the student's weekly project assignments.
- **Peer Study Circles:** WebRTC or lightweight community rooms where students following identical 8-week tracks can collaborate on capstone projects.

---

## 12. References
1. United Nations. (2015). *Transforming our world: The 2030 Agenda for Sustainable Development (Goal 8: Decent Work and Economic Growth)*. United Nations Department of Economic and Social Affairs.
2. World Economic Forum. (2023). *The Future of Jobs Report 2023*. World Economic Forum, Geneva, Switzerland.
3. IBM SkillsBuild. (2024). *SkillsBuild Academic Curriculum and Workforce Readiness Guidelines*. IBM Corporation.
4. Mozilla Developer Network (MDN). (2025). *Web Standards and Asynchronous JavaScript Architecture*. Mozilla Foundation.
5. Google AI Studio. (2025). *Gemini API Developer Documentation: Structured Outputs and JSON Schemas*. Google LLC.
