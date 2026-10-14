# Lean Canvas: CareerPath AI
**AI-Powered Career Roadmap Assistant for Students**  
*Academic Project Deliverable &bull; IBM SkillsBuild Masterclass 5*  
*Alignment: United Nations Sustainable Development Goal 8 (Decent Work and Economic Growth)*

---

```
+---------------------------------------------------------------------------------------------------------------------+
| 1. PROBLEM                   | 4. SOLUTION                  | 3. UNIQUE VALUE PROP.        | 9. UNFAIR ADVANTAGE     | 2. CUSTOMER SEGMENTS      |
| - Outdated academic          | - Automated AI skill gap     | - Instant, personalized,     | - Zero sign-up friction | - Primary: College        |
|   syllabi failing to match   |   analysis using Gemini API. |   week-by-week learning      |   with 100% client-side |   students (Tier 2 & 3    |
|   fast-evolving industry tech| - 4/8/12-week structured     |   schedules aligned with     |   privacy (localStorage)|   institutions).          |
|   expectations.              |   milestone roadmaps.        |   UN SDG 8.                  | - Aligned with official | - Secondary: Fresh grads  |
| - Fragmented, paywalled, or  | - Verified free resources    | - Direct links to free,      |   IBM SkillsBuild       |   and self-taught coders. |
|   overwhelming learning      |   (MDN, Kaggle, W3C).        |   high-quality docs (no      |   pedagogy.             | - Tertiary: Non-CS career |
|   tutorials causing anxiety. | - Career skill validation    |   paywalls or bootcamps).    | - Fast vanilla JS       |   switchers.              |
| - Lack of practical hands-on |   quizzes with explanations. | - Real-time progress         |   architecture.         |                           |
|   project guidance.          | - Browser-based progress     |   telemetry dashboard.       |                         | Early Adopters:           |
|                              |   persistence.               |                              |                         | Engineering undergraduates|
| Existing Alternatives:       |                              | High-Level Concept:          |                         | seeking campus placement  |
| - Expensive coding bootcamps |                              | "Google Maps for your        |                         | preparation.              |
| - Static roadmap images      |                              | technical career journey."   |                         |                           |
| - Generic chat prompts       |                              |                              |                         |                           |
+------------------------------+------------------------------+------------------------------+-------------------------+---------------------------+
|                              | 8. KEY METRICS               |                              | 5. CHANNELS             |                           |
|                              | - Roadmaps generated         |                              | - College placement     |                           |
|                              | - Milestone completion rate  |                              |   cells and faculty.    |                           |
|                              | - Skill quiz average score   |                              | - Student tech clubs    |                           |
|                              | - Progress retention across  |   (GDSC, ACM, IEEE).         |                         |                           |
|                              |   browser sessions           | - Open-source GitHub         |                         |                           |
|                              |                              |   showcase & peer referrals. |                         |                           |
|                              |                              | - Social platforms (LinkedIn,|                         |                           |
|                              |                              |   student Discord groups).   |                         |                           |
+-------------------------------------------------------------+--------------------------------------------------------+---------------------------+
| 7. COST STRUCTURE                                           | 6. REVENUE STREAMS (ACADEMIC / SUSTAINABILITY MODEL)   |
| - Compute & Hosting: Free tier on Render / Vercel.           | - 100% Free Open Educational Resource (OER) for        |
| - AI Inference: Google Gemini API free tier (15 RPM) with   |   students and academic reviewers.                     |
|   cached sample roadmaps to guarantee zero cost.            | - Future Sustainability (Post-Academic Scope):         |
| - Domain & Maintenance: Minimal open-source overhead.       |   Optional institutional analytics dashboard for       |
|                                                             |   college placement cells (B2B SaaS model).            |
+---------------------------------------------------------------------------------------------------------------------+
```

---

## Detailed Block Descriptions

### 1. Problem
- **Core Dilemma:** The global tech industry suffers from a severe talent shortage, while millions of computer science and IT graduates struggle to secure employment due to an acute *skill-job mismatch*.
- **Academic Reality:** Traditional university syllabi focus heavily on abstract computing theory (e.g. theoretical automata, compiler design) while neglecting modern industry standards (e.g., containerization, asynchronous architecture, CI/CD, cloud deployments).
- **Resource Fragmentation:** Students are overwhelmed by thousands of fragmented video playlists and aggressive paywalled bootcamps, leading to decision paralysis.
- **Assumptions vs. Verified Facts:**
  - *Verified Fact:* The International Labour Organization (ILO) and UN SDG 8 reports identify youth underemployment driven by curriculum misalignment as a leading structural economic challenge.
  - *Assumption:* Students will follow weekly tasks consistently if provided with milestone-driven interactive checklists.

### 2. Customer Segments
- **Primary Segment:** Undergraduate engineering and computer application students (B.Tech, BCA, B.Sc IT, MCA) in Tier-2 and Tier-3 institutions with limited on-campus placement mentorship.
- **Secondary Segment:** Recent college graduates actively interviewing for entry-level software engineering roles.
- **Tertiary Segment:** Non-traditional learners and career switchers transitioning from non-IT disciplines.
- **Early Adopters:** Final-year college students preparing for immediate placement drives and viva assessments.

### 3. Unique Value Proposition (UVP)
- **Primary Proposition:** "Instant, personalized AI-powered tech career roadmaps that bridge your academic syllabus to industry hiring standards—complete with free tutorials, weekly projects, and skill quizzes."
- **High-Level Analogy:** *Google Maps for your technical career journey.*
- **Key Differentiators:**
  - No account creation or personal data harvesting (privacy-first localStorage model).
  - Explicit distinction between AI-generated insights and curated academic fallbacks.
  - Zero expensive prerequisites: 100% grounded in high-quality free documentation (MDN, W3C, Kaggle).

### 4. Solution
- **Profile Diagnostic:** Captures academic degree, self-reported skills, study time, and target career.
- **AI Skill Gap Engine:** Analyzes prerequisites and computes precisely what is missing.
- **Structured Schedule:** Generates 4, 8, or 12-week phased roadmaps with weekly milestones, practice exercises, projects, and official docs.
- **Validation Engine:** 5 multiple-choice questions with deep technical explanations to confirm mastery.
- **Dynamic Telemetry:** Local progress dashboard tracking completed tasks, percentages, and next steps.

### 5. Channels
- **Academic Dissemination:** University placement departments, project viva demonstrations, and faculty recommendations.
- **Developer Student Clubs:** Google Developer Student Clubs (GDSC), ACM student chapters, and IEEE collegiate groups.
- **Peer & Community Referral:** Tech student subreddits, Telegram/Discord study servers, and LinkedIn project showcases.
- **Code Repository:** Public GitHub repository with documentation and live Render deployment.

### 6. Revenue Streams (Academic & Sustainability Model)
- **Current Academic Baseline:** 100% Free and Open-Source Educational Resource (OER) for public benefit aligned with UN SDG 8.
- **Potential Future Expansion (Post-Masterclass):**
  - **Freemium Tier:** Free student roadmaps permanently; optional institutional subscription for colleges to track aggregate placement preparedness metrics.
  - **Sponsorship & Grants:** Educational technology grants and university partner endorsements.

### 7. Cost Structure
- **Cloud Hosting:** Deployed on Render's free tier web services.
- **AI Inference:** Google Gemini API free-tier quotas (15 requests per minute) with client-side rate limiting and curated sample fallback to eliminate API costs.
- **Development & Maintenance:** Zero paid dependencies; built on lightweight vanilla web technologies (HTML5, CSS3, Vanilla JS, Express.js).

### 8. Key Metrics
- **Roadmap Generation Volume:** Number of personalized roadmaps created.
- **Milestone Completion Rate:** Percentage of weekly tasks checked off by students.
- **Quiz Performance Index:** Average score on the 5 career-specific assessment questions.
- **Dashboard Retention:** Recurring visits and milestone progression stored in browser `localStorage`.
- **System Reliability:** Zero uncaught exceptions, 100% fallback reliability when AI key is absent.

### 9. Unfair Advantage
- **Lightweight, Zero-Friction Architecture:** Works instantly in any browser without account registration, logins, or cloud database latency.
- **Academic & SDG 8 Grounding:** Specifically designed around the pedagogical requirements of IBM SkillsBuild Masterclass 5 and UN SDG Target 8.6.
- **Fail-Safe Robustness:** Dual-mode architecture seamlessly transitioning between Gemini 2.5 Flash and curated academic sample roadmaps.
