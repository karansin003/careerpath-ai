/**
 * CareerPath AI - Main Client Logic
 * Features: Profile Form, AI Roadmap Rendering, Career Skill Quiz, Task Tracker, Telemetry Dashboard
 * Aligned with IBM SkillsBuild Masterclass 5 & UN SDG 8
 */

// ==========================================================================
// 1. Application State & Storage Configuration
// ==========================================================================
const STORAGE_KEY = 'careerpath_ai_v1_state';

const defaultState = {
  profile: null,
  roadmap: null,
  completedTasks: {}, // { [taskId]: boolean }
  quizState: {
    career: '',
    selectedAnswers: {}, // { [questionIdx]: selectedOptionIdx }
    score: null,         // { correct: 0, total: 5, percentage: 0 }
    graded: false
  }
};

let appState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaultState, ...parsed };
    }
  } catch (err) {
    console.warn('Unable to parse localStorage data:', err);
  }
  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn('Unable to write to localStorage:', err);
  }
}

// Active cached quiz questions
let activeQuizQuestions = [];

// ==========================================================================
// 2. DOM Elements Cache
// ==========================================================================
const DOM = {
  // Navigation
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  announcementBar: document.getElementById('announcementBar'),
  closeAnnouncement: document.getElementById('closeAnnouncement'),

  // Form Elements
  form: document.getElementById('careerProfileForm'),
  userName: document.getElementById('userName'),
  userDegree: document.getElementById('userDegree'),
  userDegreeError: document.getElementById('userDegreeError'),
  userSkills: document.getElementById('userSkills'),
  userSkillsError: document.getElementById('userSkillsError'),
  targetCareer: document.getElementById('targetCareer'),
  targetCareerError: document.getElementById('targetCareerError'),
  customCareerGroup: document.getElementById('customCareerGroup'),
  customCareer: document.getElementById('customCareer'),
  customCareerError: document.getElementById('customCareerError'),
  experienceLevel: document.getElementById('experienceLevel'),
  dailyStudyTime: document.getElementById('dailyStudyTime'),
  generateRoadmapBtn: document.getElementById('generateRoadmapBtn'),
  clearFormBtn: document.getElementById('clearFormBtn'),
  formSpinner: document.getElementById('formSpinner'),
  formGlobalAlert: document.getElementById('formGlobalAlert'),

  // Demo Prefill Chips
  prefillFullStack: document.getElementById('prefillFullStack'),
  prefillDataScience: document.getElementById('prefillDataScience'),
  prefillDevOps: document.getElementById('prefillDevOps'),
  prefillCyber: document.getElementById('prefillCyber'),

  // Loading Overlay
  loadingOverlay: document.getElementById('loadingOverlay'),
  loadingTitle: document.getElementById('loadingTitle'),
  lStep1: document.getElementById('lStep1'),
  lStep2: document.getElementById('lStep2'),
  lStep3: document.getElementById('lStep3'),
  lStep4: document.getElementById('lStep4'),

  // Dashboard Telemetry
  dashCareerName: document.getElementById('dashCareerName'),
  dashCareerMeta: document.getElementById('dashCareerMeta'),
  dashProgressPct: document.getElementById('dashProgressPct'),
  dashProgressRatio: document.getElementById('dashProgressRatio'),
  dashProgressBar: document.getElementById('dashProgressBar'),
  dashCompletedTasks: document.getElementById('dashCompletedTasks'),
  dashPendingTasks: document.getElementById('dashPendingTasks'),
  dashQuizScore: document.getElementById('dashQuizScore'),
  dashQuizPct: document.getElementById('dashQuizPct'),
  dashNextTaskCard: document.getElementById('dashNextTaskCard'),
  dashNextTaskTitle: document.getElementById('dashNextTaskTitle'),
  dashNextTaskDesc: document.getElementById('dashNextTaskDesc'),
  dashJumpToTaskBtn: document.getElementById('dashJumpToTaskBtn'),
  dashResetBtn: document.getElementById('dashResetBtn'),

  // Roadmap Display
  roadmapResultHeader: document.getElementById('roadmapResultHeader'),
  roadmapEmptyState: document.getElementById('roadmapEmptyState'),
  roadmapContent: document.getElementById('roadmapContent'),
  roadmapSourceBadge: document.getElementById('roadmapSourceBadge'),
  roadmapDurationBadge: document.getElementById('roadmapDurationBadge'),
  roadmapCareerTitle: document.getElementById('roadmapCareerTitle'),
  roadmapCandidateInfo: document.getElementById('roadmapCandidateInfo'),
  sampleNoticeBanner: document.getElementById('sampleNoticeBanner'),
  sampleNoticeText: document.getElementById('sampleNoticeText'),
  existingSkillsList: document.getElementById('existingSkillsList'),
  missingSkillsList: document.getElementById('missingSkillsList'),
  roadmapRoleOverview: document.getElementById('roadmapRoleOverview'),
  roadmapIndustryOutlook: document.getElementById('roadmapIndustryOutlook'),
  weeksTimelineContainer: document.getElementById('weeksTimelineContainer'),
  printRoadmapBtn: document.getElementById('printRoadmapBtn'),

  // Skill Quiz
  quizTopicName: document.getElementById('quizTopicName'),
  quizScoreBanner: document.getElementById('quizScoreBanner'),
  scoreNum: document.getElementById('scoreNum'),
  scoreTitle: document.getElementById('scoreTitle'),
  scoreDesc: document.getElementById('scoreDesc'),
  scorePctBadge: document.getElementById('scorePctBadge'),
  quizQuestionsList: document.getElementById('quizQuestionsList'),
  submitQuizBtn: document.getElementById('submitQuizBtn'),
  retakeQuizBtn: document.getElementById('retakeQuizBtn'),

  // Task Tracker
  filterAllTasks: document.getElementById('filterAllTasks'),
  filterPendingTasks: document.getElementById('filterPendingTasks'),
  filterCompletedTasks: document.getElementById('filterCompletedTasks'),
  countAll: document.getElementById('countAll'),
  countPending: document.getElementById('countPending'),
  countCompleted: document.getElementById('countCompleted'),
  trackerTaskList: document.getElementById('trackerTaskList'),

  // Modals
  resetConfirmModal: document.getElementById('resetConfirmModal'),
  cancelResetBtn: document.getElementById('cancelResetBtn'),
  confirmResetBtn: document.getElementById('confirmResetBtn'),
  infoModalBackdrop: document.getElementById('infoModalBackdrop'),
  infoModalTitle: document.getElementById('infoModalTitle'),
  infoModalBody: document.getElementById('infoModalBody'),
  closeInfoModal: document.getElementById('closeInfoModal'),
  dismissInfoModal: document.getElementById('dismissInfoModal')
};

// ==========================================================================
// 3. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  setupModalTriggers();

  // If a saved roadmap exists, restore the view
  if (appState.roadmap) {
    renderRoadmap(appState.roadmap);
    updateDashboard();
    renderTaskTracker();
    loadCareerQuiz(appState.roadmap.careerGoal);
  } else {
    // Default initial quiz for showcase
    loadCareerQuiz('Full Stack Web Developer');
    updateDashboard();
  }
});

// ==========================================================================
// 4. Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Mobile drawer toggle
  if (DOM.mobileMenuBtn && DOM.mobileDrawer) {
    DOM.mobileMenuBtn.addEventListener('click', () => {
      const isOpen = DOM.mobileDrawer.classList.toggle('open');
      DOM.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer on link click
    DOM.mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        DOM.mobileDrawer.classList.remove('open');
        DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Announcement close
  if (DOM.closeAnnouncement && DOM.announcementBar) {
    DOM.closeAnnouncement.addEventListener('click', () => {
      DOM.announcementBar.style.display = 'none';
    });
  }

  // Custom Career Dropdown toggle
  DOM.targetCareer.addEventListener('change', () => {
    if (DOM.targetCareer.value === 'custom') {
      DOM.customCareerGroup.style.display = 'flex';
      DOM.customCareer.focus();
    } else {
      DOM.customCareerGroup.style.display = 'none';
      DOM.customCareer.value = '';
    }
    clearFieldError(DOM.targetCareer, DOM.targetCareerError);
  });

  // Real-time input error clearing
  DOM.userDegree.addEventListener('input', () => clearFieldError(DOM.userDegree, DOM.userDegreeError));
  DOM.userSkills.addEventListener('input', () => clearFieldError(DOM.userSkills, DOM.userSkillsError));
  DOM.customCareer.addEventListener('input', () => clearFieldError(DOM.customCareer, DOM.customCareerError));

  // Form Submission
  DOM.form.addEventListener('submit', handleFormSubmit);

  // Clear Form
  DOM.clearFormBtn.addEventListener('click', handleClearForm);

  // Quick Demo Prefill Buttons
  DOM.prefillFullStack.addEventListener('click', () => {
    prefillForm({
      name: 'Priya Sharma',
      degree: 'B.Tech Computer Science (3rd Year)',
      skills: 'HTML, CSS, JavaScript basics, Git, elementary C++',
      career: 'Full Stack Web Developer',
      experience: 'Intermediate / 3rd-4th Year Student',
      studyTime: '2-4 Hours/Day (Recommended Balanced)',
      duration: '4'
    });
  });

  DOM.prefillDataScience.addEventListener('click', () => {
    prefillForm({
      name: 'Rahul Verma',
      degree: 'Bachelor of Computer Applications (BCA)',
      skills: 'Python syntax, basic SQL, Excel data entry, statistics math',
      career: 'Data Scientist / AI Engineer',
      experience: 'Beginner / 1st-2nd Year Student',
      studyTime: '2-4 Hours/Day (Recommended Balanced)',
      duration: '8'
    });
  });

  DOM.prefillDevOps.addEventListener('click', () => {
    prefillForm({
      name: 'Aditi Rao',
      degree: 'B.Sc Information Technology',
      skills: 'Linux terminal commands, basic Python scripting, networking fundamentals',
      career: 'Cloud & DevOps Engineer',
      experience: 'Intermediate / 3rd-4th Year Student',
      studyTime: '4+ Hours/Day (Intensive Bootcamp)',
      duration: '4'
    });
  });

  DOM.prefillCyber.addEventListener('click', () => {
    prefillForm({
      name: 'Karan Kumar',
      degree: 'B.Tech Information Technology',
      skills: 'Computer networks, basic Wireshark, Python, fundamental cybersecurity terms',
      career: 'Cybersecurity Analyst',
      experience: 'Beginner / 1st-2nd Year Student',
      studyTime: '2-4 Hours/Day (Recommended Balanced)',
      duration: '12'
    });
  });

  // Quiz Submit & Retake
  DOM.submitQuizBtn.addEventListener('click', handleQuizSubmit);
  DOM.retakeQuizBtn.addEventListener('click', handleQuizRetake);

  // Task Tracker Filter Tabs
  DOM.filterAllTasks.addEventListener('click', () => setTrackerFilter('all'));
  DOM.filterPendingTasks.addEventListener('click', () => setTrackerFilter('pending'));
  DOM.filterCompletedTasks.addEventListener('click', () => setTrackerFilter('completed'));

  // Reset Progress Modal Handlers
  DOM.dashResetBtn.addEventListener('click', () => {
    DOM.resetConfirmModal.style.display = 'flex';
  });

  DOM.cancelResetBtn.addEventListener('click', () => {
    DOM.resetConfirmModal.style.display = 'none';
  });

  DOM.confirmResetBtn.addEventListener('click', handleResetAll);

  // Jump to Next Task button
  DOM.dashJumpToTaskBtn.addEventListener('click', () => {
    const nextTask = getNextPendingTask();
    if (nextTask) {
      // Find element in timeline or task tracker
      const taskElem = document.getElementById(`task-check-${nextTask.id}`);
      if (taskElem) {
        // Expand the parent week card if collapsed
        const weekCard = taskElem.closest('.week-card');
        if (weekCard && weekCard.classList.contains('collapsed')) {
          weekCard.classList.remove('collapsed');
        }
        taskElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Flash animation
        const item = taskElem.closest('.task-item');
        if (item) {
          item.style.transition = 'background-color 300ms ease';
          item.style.backgroundColor = '#bfdbfe';
          setTimeout(() => {
            item.style.backgroundColor = '';
          }, 1200);
        }
      }
    }
  });

  // Print button
  DOM.printRoadmapBtn.addEventListener('click', () => {
    window.print();
  });
}

function prefillForm(data) {
  DOM.userName.value = data.name;
  DOM.userDegree.value = data.degree;
  DOM.userSkills.value = data.skills;
  DOM.targetCareer.value = data.career;
  DOM.experienceLevel.value = data.experience;
  DOM.dailyStudyTime.value = data.studyTime;

  const radio = document.querySelector(`input[name="durationWeeks"][value="${data.duration}"]`);
  if (radio) radio.checked = true;

  if (data.career === 'custom') {
    DOM.customCareerGroup.style.display = 'flex';
  } else {
    DOM.customCareerGroup.style.display = 'none';
  }

  // Clear any existing errors
  clearFieldError(DOM.userDegree, DOM.userDegreeError);
  clearFieldError(DOM.userSkills, DOM.userSkillsError);
  clearFieldError(DOM.targetCareer, DOM.targetCareerError);

  // Scroll to form smoothly
  DOM.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleClearForm() {
  DOM.form.reset();
  DOM.customCareerGroup.style.display = 'none';
  clearFieldError(DOM.userDegree, DOM.userDegreeError);
  clearFieldError(DOM.userSkills, DOM.userSkillsError);
  clearFieldError(DOM.targetCareer, DOM.targetCareerError);
  clearFieldError(DOM.customCareer, DOM.customCareerError);
  DOM.formGlobalAlert.style.display = 'none';
}

function setFieldError(input, errorElement, message) {
  input.classList.add('is-invalid');
  errorElement.textContent = message;
  errorElement.classList.add('visible');
}

function clearFieldError(input, errorElement) {
  input.classList.remove('is-invalid');
  errorElement.classList.remove('visible');
}

// ==========================================================================
// 5. Form Submission & AI Roadmap Generation
// ==========================================================================
async function handleFormSubmit(e) {
  e.preventDefault();
  DOM.formGlobalAlert.style.display = 'none';

  // Validate fields
  let isValid = true;
  const name = DOM.userName.value.trim();
  const degree = DOM.userDegree.value.trim();
  const skills = DOM.userSkills.value.trim();
  let career = DOM.targetCareer.value;
  const experience = DOM.experienceLevel.value;
  const studyTime = DOM.dailyStudyTime.value;
  const durationRadio = document.querySelector('input[name="durationWeeks"]:checked');
  const durationWeeks = durationRadio ? parseInt(durationRadio.value, 10) : 4;

  if (!degree) {
    setFieldError(DOM.userDegree, DOM.userDegreeError, 'Academic degree or course is required.');
    isValid = false;
  }

  if (!skills) {
    setFieldError(DOM.userSkills, DOM.userSkillsError, 'Please enter at least a few skills or concepts.');
    isValid = false;
  }

  if (!career) {
    setFieldError(DOM.targetCareer, DOM.targetCareerError, 'Please select your desired target career.');
    isValid = false;
  } else if (career === 'custom') {
    const customTitle = DOM.customCareer.value.trim();
    if (!customTitle) {
      setFieldError(DOM.customCareer, DOM.customCareerError, 'Please specify your custom career title.');
      isValid = false;
    } else {
      career = customTitle;
    }
  }

  if (!isValid) {
    return;
  }

  // Show Loading Overlay with step animations
  showLoadingScreen(career);

  const payload = {
    name: name || 'Student',
    degree,
    currentSkills: skills,
    targetCareer: career,
    experienceLevel: experience,
    dailyStudyTime: studyTime,
    durationWeeks
  };

  try {
    const response = await fetch('/api/roadmap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to generate roadmap from server.');
    }

    // Attach metadata and sample status
    const roadmapData = data.data;
    roadmapData.isSample = Boolean(data.isSample);
    roadmapData.sampleNotice = data.message || '';
    roadmapData.candidate = {
      name: payload.name,
      degree: payload.degree,
      experience: payload.experienceLevel,
      dailyStudyTime: payload.dailyStudyTime,
      durationWeeks: payload.durationWeeks
    };

    // Update Application State
    appState.profile = payload;
    appState.roadmap = roadmapData;
    // Keep previously completed tasks if matching ids exist, else clean
    saveState();

    // Render components
    renderRoadmap(roadmapData);
    updateDashboard();
    renderTaskTracker();
    loadCareerQuiz(roadmapData.careerGoal);

    // Hide Loading
    hideLoadingScreen();

    // Scroll smoothly to roadmap view
    DOM.roadmapResultHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });

  } catch (err) {
    hideLoadingScreen();
    console.error('Roadmap generation error:', err);
    DOM.formGlobalAlert.className = 'form-alert alert-danger';
    DOM.formGlobalAlert.textContent = `Error: ${err.message}. Please check your connection and try again.`;
    DOM.formGlobalAlert.style.display = 'block';
  }
}

// Loading screen animation steps
let loadingInterval = null;
function showLoadingScreen(career) {
  DOM.loadingOverlay.style.display = 'flex';
  DOM.loadingTitle.textContent = `Analyzing ${career}...`;

  const steps = [DOM.lStep1, DOM.lStep2, DOM.lStep3, DOM.lStep4];
  steps.forEach(s => {
    s.classList.remove('active', 'completed');
  });
  steps[0].classList.add('active');

  let currentStep = 0;
  clearInterval(loadingInterval);
  loadingInterval = setInterval(() => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      steps[currentStep].classList.add('completed');
      currentStep++;
      steps[currentStep].classList.add('active');
    }
  }, 1200);
}

function hideLoadingScreen() {
  clearInterval(loadingInterval);
  DOM.loadingOverlay.style.display = 'none';
}

// ==========================================================================
// 6. Roadmap Rendering (Feature C)
// ==========================================================================
function renderRoadmap(roadmap) {
  DOM.roadmapEmptyState.style.display = 'none';
  DOM.roadmapResultHeader.style.display = 'flex';
  DOM.roadmapContent.style.display = 'block';

  // Badges & Header
  DOM.roadmapCareerTitle.textContent = `${roadmap.careerGoal} Career Roadmap`;
  const candidate = roadmap.candidate || {};
  DOM.roadmapCandidateInfo.textContent = `Candidate: ${candidate.name || 'Student'} • ${candidate.degree || 'Computer Science'} • ${candidate.experience || 'Beginner'} • ${candidate.dailyStudyTime || '2-4 hrs/day'}`;
  DOM.roadmapDurationBadge.textContent = `${roadmap.durationWeeks || roadmap.weeks.length} Weeks`;

  // Source Badge (AI vs Sample)
  if (roadmap.isSample) {
    DOM.roadmapSourceBadge.className = 'source-badge sample-badge';
    DOM.roadmapSourceBadge.textContent = 'Curated Academic Sample';
    DOM.sampleNoticeBanner.style.display = 'flex';
    DOM.sampleNoticeText.textContent = roadmap.sampleNotice || 'Displaying a high-quality curated sample roadmap because the Gemini API key is not configured or was unreachable. All task tracking and quiz features remain 100% functional.';
  } else {
    DOM.roadmapSourceBadge.className = 'source-badge ai-badge';
    DOM.roadmapSourceBadge.textContent = '✨ Generated by Google Gemini AI';
    DOM.sampleNoticeBanner.style.display = 'none';
  }

  // Skills Lists
  DOM.existingSkillsList.innerHTML = '';
  const existing = roadmap.recognizedExistingSkills || ['Foundational Computer Literacy'];
  existing.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag tag-existing';
    span.textContent = `✓ ${skill}`;
    DOM.existingSkillsList.appendChild(span);
  });

  DOM.missingSkillsList.innerHTML = '';
  const missing = roadmap.recommendedMissingSkills || ['Core Industry Stack'];
  missing.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag tag-missing';
    span.textContent = `+ ${skill}`;
    DOM.missingSkillsList.appendChild(span);
  });

  // Overview & Industry Outlook
  DOM.roadmapRoleOverview.textContent = roadmap.overview || 'Comprehensive software development role requiring cross-functional technical skills and problem-solving.';
  DOM.roadmapIndustryOutlook.textContent = roadmap.industryOutlook || 'High global demand across technology enterprises and startups.';

  // Render Weekly Timeline
  DOM.weeksTimelineContainer.innerHTML = '';
  (roadmap.weeks || []).forEach((week, index) => {
    const weekCard = document.createElement('div');
    weekCard.className = `week-card ${index > 0 ? 'collapsed' : ''}`;
    weekCard.id = `week-card-${week.weekNumber}`;

    // Header
    const header = document.createElement('div');
    header.className = 'week-header';
    header.innerHTML = `
      <div class="week-header-left">
        <span class="week-num-badge">Week ${week.weekNumber}</span>
        <h4 class="week-theme-title">${escapeHtml(week.theme)}</h4>
      </div>
      <svg class="week-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    header.addEventListener('click', () => {
      weekCard.classList.toggle('collapsed');
    });

    // Body
    const body = document.createElement('div');
    body.className = 'week-body';

    // Milestone callout
    const milestoneDiv = document.createElement('div');
    milestoneDiv.className = 'milestone-callout';
    milestoneDiv.innerHTML = `<strong>Weekly Milestone:</strong> ${escapeHtml(week.milestone || 'Master core concepts')}`;
    body.appendChild(milestoneDiv);

    // Detail grid (Topics & Exercises)
    const detailGrid = document.createElement('div');
    detailGrid.className = 'week-detail-grid';

    // Topics
    const topicsBlock = document.createElement('div');
    topicsBlock.className = 'detail-block';
    topicsBlock.innerHTML = `
      <h5>Core Topics to Master</h5>
      <ul class="detail-list">
        ${(week.topics || []).map(t => `<li>${escapeHtml(t)}</li>`).join('')}
      </ul>
    `;

    // Exercises
    const exercisesBlock = document.createElement('div');
    exercisesBlock.className = 'detail-block';
    exercisesBlock.innerHTML = `
      <h5>Hands-on Practice Labs</h5>
      <ul class="detail-list">
        ${(week.exercises || []).map(e => `<li>${escapeHtml(e)}</li>`).join('')}
      </ul>
    `;

    detailGrid.appendChild(topicsBlock);
    detailGrid.appendChild(exercisesBlock);
    body.appendChild(detailGrid);

    // Project Card
    if (week.project) {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project-card';
      projectDiv.innerHTML = `
        <h5>Milestone Project</h5>
        <p class="project-title">${escapeHtml(week.project)}</p>
      `;
      body.appendChild(projectDiv);
    }

    // Free Resources
    if (week.resources && week.resources.length > 0) {
      const resDiv = document.createElement('div');
      resDiv.className = 'resources-group';
      resDiv.innerHTML = `
        <h5>Curated Free Learning Resources</h5>
        <div class="resource-links">
          ${week.resources.map(r => `
            <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="resource-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              <span>${escapeHtml(r.title)}</span>
            </a>
          `).join('')}
        </div>
      `;
      body.appendChild(resDiv);
    }

    // Tasks Section (with sync checkboxes)
    const tasksSec = document.createElement('div');
    tasksSec.className = 'week-tasks-section';
    tasksSec.innerHTML = `<h5 class="week-tasks-header">Weekly Actionable Checkpoints</h5>`;

    const checklist = document.createElement('div');
    checklist.className = 'tasks-checklist';

    (week.tasks || []).forEach(task => {
      const isDone = Boolean(appState.completedTasks[task.id]);
      const taskItem = document.createElement('label');
      taskItem.className = `task-item ${isDone ? 'completed' : ''}`;
      taskItem.id = `task-item-container-${task.id}`;

      taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" id="task-check-${task.id}" data-task-id="${task.id}" ${isDone ? 'checked' : ''}>
        <span class="task-text">${escapeHtml(task.text)}</span>
      `;

      const checkbox = taskItem.querySelector('.task-checkbox');
      checkbox.addEventListener('change', (e) => {
        toggleTaskCompletion(task.id, e.target.checked);
      });

      checklist.appendChild(taskItem);
    });

    tasksSec.appendChild(checklist);
    body.appendChild(tasksSec);

    weekCard.appendChild(header);
    weekCard.appendChild(body);
    DOM.weeksTimelineContainer.appendChild(weekCard);
  });
}

// ==========================================================================
// 7. Task Completion & Progress Tracking (Feature E)
// ==========================================================================
function toggleTaskCompletion(taskId, isCompleted) {
  if (isCompleted) {
    appState.completedTasks[taskId] = true;
  } else {
    delete appState.completedTasks[taskId];
  }
  saveState();

  // Sync checkboxes across both Timeline view and Tracker view
  const timelineCheck = document.getElementById(`task-check-${taskId}`);
  if (timelineCheck) {
    timelineCheck.checked = isCompleted;
    const container = timelineCheck.closest('.task-item');
    if (container) {
      container.classList.toggle('completed', isCompleted);
    }
  }

  const trackerCheck = document.getElementById(`tracker-check-${taskId}`);
  if (trackerCheck) {
    trackerCheck.checked = isCompleted;
    const row = trackerCheck.closest('.tracker-task-row');
    if (row) {
      row.classList.toggle('completed', isCompleted);
    }
  }

  // Update Dynamic Telemetry
  updateDashboard();
  renderTaskTracker();
}

function getAllRoadmapTasks() {
  if (!appState.roadmap || !Array.isArray(appState.roadmap.weeks)) {
    return [];
  }
  const tasks = [];
  appState.roadmap.weeks.forEach(week => {
    (week.tasks || []).forEach(task => {
      tasks.push({
        id: task.id,
        text: task.text,
        weekNumber: week.weekNumber,
        weekTheme: week.theme
      });
    });
  });
  return tasks;
}

function getNextPendingTask() {
  const allTasks = getAllRoadmapTasks();
  return allTasks.find(t => !appState.completedTasks[t.id]) || null;
}

// Render Dedicated Milestone Task Tracker (Section Feature E)
let currentTrackerFilter = 'all';

function setTrackerFilter(filter) {
  currentTrackerFilter = filter;
  DOM.filterAllTasks.classList.toggle('active', filter === 'all');
  DOM.filterPendingTasks.classList.toggle('active', filter === 'pending');
  DOM.filterCompletedTasks.classList.toggle('active', filter === 'completed');
  renderTaskTracker();
}

function renderTaskTracker() {
  const allTasks = getAllRoadmapTasks();
  const completedCount = allTasks.filter(t => appState.completedTasks[t.id]).length;
  const pendingCount = allTasks.length - completedCount;

  DOM.countAll.textContent = allTasks.length;
  DOM.countPending.textContent = pendingCount;
  DOM.countCompleted.textContent = completedCount;

  if (allTasks.length === 0) {
    DOM.trackerTaskList.innerHTML = `
      <div class="tracker-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <p>No roadmap tasks generated yet. Generate a roadmap above to begin tracking milestones.</p>
      </div>
    `;
    return;
  }

  let filtered = allTasks;
  if (currentTrackerFilter === 'pending') {
    filtered = allTasks.filter(t => !appState.completedTasks[t.id]);
  } else if (currentTrackerFilter === 'completed') {
    filtered = allTasks.filter(t => appState.completedTasks[t.id]);
  }

  if (filtered.length === 0) {
    DOM.trackerTaskList.innerHTML = `
      <div class="tracker-empty">
        <p>No ${currentTrackerFilter} tasks found.</p>
      </div>
    `;
    return;
  }

  DOM.trackerTaskList.innerHTML = '';
  filtered.forEach(task => {
    const isDone = Boolean(appState.completedTasks[task.id]);
    const row = document.createElement('div');
    row.className = `tracker-task-row ${isDone ? 'completed' : ''}`;
    row.id = `tracker-row-${task.id}`;

    row.innerHTML = `
      <div class="tracker-task-left">
        <input type="checkbox" class="task-checkbox" id="tracker-check-${task.id}" data-task-id="${task.id}" ${isDone ? 'checked' : ''}>
        <span class="tracker-task-text">${escapeHtml(task.text)}</span>
      </div>
      <span class="tracker-week-pill">Week ${task.weekNumber}</span>
    `;

    const checkbox = row.querySelector('.task-checkbox');
    checkbox.addEventListener('change', (e) => {
      toggleTaskCompletion(task.id, e.target.checked);
    });

    DOM.trackerTaskList.appendChild(row);
  });
}

// ==========================================================================
// 8. Dynamic Telemetry Dashboard (Feature F)
// ==========================================================================
function updateDashboard() {
  const allTasks = getAllRoadmapTasks();
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(t => appState.completedTasks[t.id]).length;
  const pendingTasks = totalTasks - completedTasks;
  const progressPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Active Career Banner
  if (appState.roadmap) {
    DOM.dashCareerName.textContent = appState.roadmap.careerGoal;
    const cand = appState.roadmap.candidate || {};
    DOM.dashCareerMeta.textContent = `${cand.degree || 'Academic Track'} • ${appState.roadmap.durationWeeks || 4} Weeks Plan • Dedicated: ${cand.dailyStudyTime || '2-4 hrs/day'}`;
  } else {
    DOM.dashCareerName.textContent = 'No Roadmap Generated Yet';
    DOM.dashCareerMeta.textContent = 'Fill out the form below to generate your personalized AI career roadmap.';
  }

  // Progress Metrics
  DOM.dashProgressPct.textContent = `${progressPct}%`;
  DOM.dashProgressRatio.textContent = `${completedTasks} / ${totalTasks} Tasks`;
  DOM.dashProgressBar.style.width = `${progressPct}%`;
  DOM.dashCompletedTasks.textContent = completedTasks;
  DOM.dashPendingTasks.textContent = pendingTasks;

  // Quiz Score Telemetry
  if (appState.quizState && appState.quizState.score) {
    const qScore = appState.quizState.score;
    DOM.dashQuizScore.textContent = `${qScore.correct} / ${qScore.total}`;
    DOM.dashQuizPct.textContent = `${qScore.percentage}% Score`;
  } else {
    DOM.dashQuizScore.textContent = 'N/A';
    DOM.dashQuizPct.textContent = 'Take Quiz Below';
  }

  // Recommended Next Task
  const nextTask = getNextPendingTask();
  if (nextTask) {
    DOM.dashNextTaskTitle.textContent = `Week ${nextTask.weekNumber}: ${nextTask.text}`;
    DOM.dashNextTaskDesc = `Theme: ${nextTask.weekTheme}. Mark completed once finished to boost your progress.`;
    DOM.dashJumpToTaskBtn.disabled = false;
  } else if (totalTasks > 0 && completedTasks === totalTasks) {
    DOM.dashNextTaskTitle.textContent = '🎉 All Roadmap Milestones Completed!';
    DOM.dashNextTaskDesc = 'Outstanding effort! You have completed all weekly exercises and projects for this pathway.';
    DOM.dashJumpToTaskBtn.disabled = true;
  } else {
    DOM.dashNextTaskTitle.textContent = 'Generate a roadmap to start learning';
    DOM.dashNextTaskDesc = 'Your roadmap tasks will appear here dynamically to guide your daily study routine.';
    DOM.dashJumpToTaskBtn.disabled = true;
  }
}

// Reset All Progress
function handleResetAll() {
  appState = JSON.parse(JSON.stringify(defaultState));
  saveState();
  DOM.resetConfirmModal.style.display = 'none';

  // Reset UI
  DOM.roadmapContent.style.display = 'none';
  DOM.roadmapResultHeader.style.display = 'none';
  DOM.sampleNoticeBanner.style.display = 'none';
  DOM.roadmapEmptyState.style.display = 'block';

  handleClearForm();
  updateDashboard();
  renderTaskTracker();
  loadCareerQuiz('Full Stack Web Developer');

  // Flash confirmation message
  alert('All local progress, roadmap data, and quiz scores have been cleared successfully.');
}

// ==========================================================================
// 9. Career Skill Quiz (Feature D)
// ==========================================================================
async function loadCareerQuiz(careerGoal) {
  DOM.quizTopicName.textContent = careerGoal;
  DOM.quizScoreBanner.style.display = 'none';

  try {
    const res = await fetch(`/api/quiz?career=${encodeURIComponent(careerGoal)}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.questions)) {
      activeQuizQuestions = data.questions;
      renderQuizQuestions();
    }
  } catch (err) {
    console.warn('Error loading quiz from backend:', err);
  }
}

function renderQuizQuestions() {
  DOM.quizQuestionsList.innerHTML = '';
  const selectedAnswers = (appState.quizState && appState.quizState.career === DOM.quizTopicName.textContent) ? appState.quizState.selectedAnswers : {};

  activeQuizQuestions.forEach((q, qIdx) => {
    const qBlock = document.createElement('div');
    qBlock.className = 'question-block';
    qBlock.id = `q-block-${qIdx}`;

    qBlock.innerHTML = `
      <div class="question-title">
        <span class="q-num">Q${qIdx + 1}.</span>
        <span>${escapeHtml(q.question)}</span>
      </div>
      <div class="options-group">
        ${q.options.map((opt, optIdx) => `
          <label class="option-label" id="opt-label-${qIdx}-${optIdx}">
            <input type="radio" name="quiz-q-${qIdx}" value="${optIdx}" ${selectedAnswers[qIdx] === optIdx ? 'checked' : ''}>
            <span>${escapeHtml(opt)}</span>
          </label>
        `).join('')}
      </div>
      <div class="explanation-card" id="explanation-${qIdx}" style="display: none;"></div>
    `;

    // Radio change listener
    const radios = qBlock.querySelectorAll(`input[name="quiz-q-${qIdx}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (!appState.quizState) appState.quizState = {};
        appState.quizState.career = DOM.quizTopicName.textContent;
        if (!appState.quizState.selectedAnswers) appState.quizState.selectedAnswers = {};
        appState.quizState.selectedAnswers[qIdx] = parseInt(e.target.value, 10);
        saveState();
      });
    });

    DOM.quizQuestionsList.appendChild(qBlock);
  });

  // If already graded in state, display grading
  if (appState.quizState && appState.quizState.career === DOM.quizTopicName.textContent && appState.quizState.graded) {
    displayGradedQuiz();
  }
}

function handleQuizSubmit() {
  if (activeQuizQuestions.length === 0) return;

  const userSelections = {};
  let answeredCount = 0;

  activeQuizQuestions.forEach((_, qIdx) => {
    const checked = document.querySelector(`input[name="quiz-q-${qIdx}"]:checked`);
    if (checked) {
      userSelections[qIdx] = parseInt(checked.value, 10);
      answeredCount++;
    }
  });

  if (answeredCount < activeQuizQuestions.length) {
    const proceed = confirm(`You have answered ${answeredCount} of ${activeQuizQuestions.length} questions. Do you want to submit anyway?`);
    if (!proceed) return;
  }

  // Calculate score
  let correctCount = 0;
  activeQuizQuestions.forEach((q, qIdx) => {
    if (userSelections[qIdx] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / activeQuizQuestions.length) * 100);

  // Update State
  appState.quizState = {
    career: DOM.quizTopicName.textContent,
    selectedAnswers: userSelections,
    score: {
      correct: correctCount,
      total: activeQuizQuestions.length,
      percentage
    },
    graded: true
  };
  saveState();

  // Render Grading & Explanations
  displayGradedQuiz();
  updateDashboard();

  // Scroll to score banner
  DOM.quizScoreBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function displayGradedQuiz() {
  if (!appState.quizState || !appState.quizState.score) return;
  const score = appState.quizState.score;
  const selections = appState.quizState.selectedAnswers || {};

  // Show score banner
  DOM.quizScoreBanner.style.display = 'flex';
  DOM.scoreNum.textContent = `${score.correct}/${score.total}`;
  DOM.scorePctBadge.textContent = `${score.percentage}% Score`;

  if (score.percentage >= 80) {
    DOM.scoreTitle.textContent = '🌟 Outstanding Mastery!';
    DOM.scoreDesc.textContent = 'You demonstrate an exceptional conceptual foundation in this engineering track.';
  } else if (score.percentage >= 60) {
    DOM.scoreTitle.textContent = '👍 Solid Foundation!';
    DOM.scoreDesc.textContent = 'Good grasp of the basics. Review the missed questions below to sharpen your edge.';
  } else {
    DOM.scoreTitle.textContent = '📚 Keep Learning & Practicing!';
    DOM.scoreDesc.textContent = 'Review the detailed technical explanations below and revisit your weekly syllabus.';
  }

  // Grade each option
  activeQuizQuestions.forEach((q, qIdx) => {
    const userSelected = selections[qIdx];
    const isCorrect = userSelected === q.correctAnswer;

    q.options.forEach((_, optIdx) => {
      const optLabel = document.getElementById(`opt-label-${qIdx}-${optIdx}`);
      if (optLabel) {
        optLabel.classList.remove('is-correct', 'is-incorrect');
        if (optIdx === q.correctAnswer) {
          optLabel.classList.add('is-correct');
        } else if (userSelected === optIdx) {
          optLabel.classList.add('is-incorrect');
        }
      }
    });

    // Show Explanation Card
    const explCard = document.getElementById(`explanation-${qIdx}`);
    if (explCard) {
      explCard.style.display = 'block';
      explCard.className = `explanation-card ${isCorrect ? 'correct-expl' : 'incorrect-expl'}`;
      explCard.innerHTML = `
        <strong>${isCorrect ? '✓ Correct Answer' : '✕ Needs Review'}: Option ${q.correctAnswer + 1}</strong>
        <p>${escapeHtml(q.explanation)}</p>
      `;
    }
  });
}

function handleQuizRetake() {
  if (!appState.quizState) appState.quizState = {};
  appState.quizState.selectedAnswers = {};
  appState.quizState.score = null;
  appState.quizState.graded = false;
  saveState();

  DOM.quizScoreBanner.style.display = 'none';
  renderQuizQuestions();
  updateDashboard();
  DOM.quizQuestionsList.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// 10. Academic Information Modals Setup
// ==========================================================================
const modalData = {
  modalAbout: {
    title: 'About CareerPath AI',
    content: `
      <h4>Project Vision & Background</h4>
      <p><strong>CareerPath AI</strong> is an open-access, AI-powered career roadmap assistant engineered specifically for college students and recent engineering graduates. Developed for the <strong>IBM SkillsBuild Masterclass 5 Academic Assessment</strong>.</p>
      <h4>Core Academic Objectives</h4>
      <ul>
        <li>Bridge the gap between theoretical college syllabi and real industry hiring requirements.</li>
        <li>Eliminate the need for expensive commercial bootcamps through verified free learning tracks.</li>
        <li>Provide actionable, week-by-week milestones with hands-on coding capstones.</li>
        <li>Validate conceptual competencies via career-tailored quizzes and dynamic telemetry.</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Pure HTML5, CSS3, Vanilla JavaScript, Node.js, Express.js, and Google Gemini API. Designed with zero unnecessary frameworks for maximum performance, maintainability, and viva clarity.</p>
    `
  },
  modalConcept: {
    title: 'Concept Note Summary',
    content: `
      <h4>Abstract</h4>
      <p>In developing economies, millions of engineering students face a persistent "skill-job mismatch paradox": while enterprises experience acute talent shortages in modern software engineering, graduates struggle to secure entry-level roles due to lack of practical hands-on experience and unclear learning trajectories.</p>
      <h4>Target Audience</h4>
      <ul>
        <li>College students (1st through 4th year) preparing for campus placements.</li>
        <li>Self-taught coders seeking structured curriculum.</li>
        <li>Non-CS students and career switchers entering tech.</li>
      </ul>
      <h4>Key Deliverables</h4>
      <p>AI gap analysis, 4/8/12 week customized syllabi, curated free documentation from MDN/FreeCodeCamp/Kaggle, career quizzes, and local telemetry dashboard.</p>
    `
  },
  modalLeanCanvas: {
    title: 'Lean Canvas Summary',
    content: `
      <h4>Business Model Overview (Academic Framework)</h4>
      <ul>
        <li><strong>Problem:</strong> Outdated curricula, overwhelming fragmented learning resources, absence of personalized career guidance.</li>
        <li><strong>Solution:</strong> Automated Gemini AI skill roadmap generation, weekly projects, career quizzes, and privacy-preserving progress tracking.</li>
        <li><strong>Unique Value Proposition:</strong> 100% free, personalized, instant week-by-week career pathways aligned with UN SDG 8 with zero sign-up barrier.</li>
        <li><strong>Channels:</strong> College placement cells, student developer communities, academic hackathons, open-source repositories.</li>
        <li><strong>Cost Structure:</strong> Minimal cloud hosting (Render free tier), Gemini API free/pay-as-you-go tokens.</li>
        <li><strong>Unfair Advantage:</strong> Lightweight vanilla architecture, zero tracking, aligned with IBM SkillsBuild standards.</li>
      </ul>
    `
  },
  modalContact: {
    title: 'Academic Contact & Mentorship',
    content: `
      <h4>Project Candidate Details</h4>
      <p><strong>Student Name:</strong> Karan Kumar</p>
      <p><strong>Program:</strong> IBM SkillsBuild Masterclass 5 Capstone Project</p>
      <p><strong>Focus Area:</strong> Full Stack Web Engineering & Applied Generative AI</p>
      <p><strong>Submission Year:</strong> 2026</p>
      <h4>Academic Evaluation Criteria</h4>
      <p>This application was developed to demonstrate mastery of end-to-end full-stack development, structured prompt engineering with Gemini API, accessibility compliance, and real-world alignment with UN Sustainable Development Goals.</p>
    `
  },
  modalPrivacy: {
    title: 'Privacy Policy',
    content: `
      <h4>Commitment to Student Privacy</h4>
      <p>CareerPath AI is built with an absolute privacy-first philosophy:</p>
      <ul>
        <li><strong>No User Account or Login:</strong> We never ask for your email, phone number, password, or sensitive identifiers.</li>
        <li><strong>Client-Side Persistence:</strong> All your roadmap data, task checkmarks, and quiz results are stored locally in your browser's <code>localStorage</code>.</li>
        <li><strong>Zero Data Tracking or Cookies:</strong> We do not use third-party advertising trackers, profiling cookies, or data telemetry beacons.</li>
        <li><strong>API Requests:</strong> Only your academic inputs (degree, skills, career goal) are sent to the backend server to generate your roadmap, and they are never stored in a database.</li>
      </ul>
    `
  },
  modalDisclaimer: {
    title: 'Academic Disclaimer',
    content: `
      <h4>Educational Guidance Notice</h4>
      <p>CareerPath AI is an educational guidance system created for academic and research purposes. The career recommendations, milestone schedules, and resource links are synthesized using artificial intelligence and curated computer science pedagogical frameworks.</p>
      <p>While roadmaps reflect modern software engineering best practices, students should also consult academic advisors, industry mentors, and official hiring notices for job-specific requirements.</p>
    `
  },
  modalStorage: {
    title: 'LocalStorage Notice',
    content: `
      <h4>How Local Data Works</h4>
      <p>CareerPath AI uses your browser's built-in <code>Window.localStorage</code> storage facility:</p>
      <ul>
        <li>Data persists across page reloads and browser restarts on this device.</li>
        <li>Data is strictly isolated to your current browser profile and is not synced to external cloud databases.</li>
        <li>You can wipe all stored data at any time by clicking the <strong>"Reset All"</strong> button on the dashboard.</li>
      </ul>
    `
  }
};

function setupModalTriggers() {
  document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const data = modalData[modalId];
      if (data) {
        DOM.infoModalTitle.textContent = data.title;
        DOM.infoModalBody.innerHTML = data.content;
        DOM.infoModalBackdrop.style.display = 'flex';
      }
    });
  });

  DOM.closeInfoModal.addEventListener('click', () => {
    DOM.infoModalBackdrop.style.display = 'none';
  });

  DOM.dismissInfoModal.addEventListener('click', () => {
    DOM.infoModalBackdrop.style.display = 'none';
  });

  // Close modals on clicking backdrop
  DOM.infoModalBackdrop.addEventListener('click', (e) => {
    if (e.target === DOM.infoModalBackdrop) {
      DOM.infoModalBackdrop.style.display = 'none';
    }
  });

  DOM.resetConfirmModal.addEventListener('click', (e) => {
    if (e.target === DOM.resetConfirmModal) {
      DOM.resetConfirmModal.style.display = 'none';
    }
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      DOM.infoModalBackdrop.style.display = 'none';
      DOM.resetConfirmModal.style.display = 'none';
      DOM.loadingOverlay.style.display = 'none';
    }
  });
}

// Utility: HTML Escaper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
