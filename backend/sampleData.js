/**
 * CareerPath AI - Predefined High-Quality Sample Roadmaps and Question Banks
 * Aligned with IBM SkillsBuild Masterclass 5 & UN SDG 8
 * 
 * Used when GEMINI_API_KEY is not configured or when API is unreachable.
 * Clearly identified in responses as curated sample data.
 */

const sampleRoadmaps = {
  "Full Stack Web Developer": {
    careerGoal: "Full Stack Web Developer",
    overview: "Full Stack Web Developers build end-to-end web applications, encompassing intuitive user interfaces, secure RESTful APIs, business logic, and database management.",
    industryOutlook: "High demand across global software enterprises, startups, and IT consultancy services with clear progression towards Senior Engineer and Solution Architect roles.",
    recommendedMissingSkills: [
      "Modern JavaScript (ES6+ & Asynchronous Patterns)",
      "Node.js & Express.js Backend Architecture",
      "RESTful API Design & Authentication (JWT)",
      "Relational & Document Databases (PostgreSQL / MongoDB)",
      "Frontend State Management & Responsive UI",
      "Git, GitHub Actions & CI/CD Deployment"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "Frontend Foundations & Modern JavaScript Mastery",
        milestone: "Build responsive, accessible UI components with interactive asynchronous data fetching.",
        topics: [
          "Semantic HTML5 & Modern CSS3 Flexbox/Grid",
          "ES6+ Syntax: Destructuring, Spread Operators, Arrow Functions",
          "Asynchronous JavaScript: Promises, Async/Await, and Fetch API",
          "DOM Manipulation, Event Bubbling, and Local Storage"
        ],
        exercises: [
          "Create a responsive multi-column layout without CSS frameworks",
          "Build an interactive dashboard fetching real-time data from a public REST API"
        ],
        project: "Interactive API-Driven Currency Converter & Financial Tracker",
        resources: [
          { title: "MDN Web Docs - JavaScript Basics to Advanced", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript" },
          { title: "JavaScript.info - The Modern JavaScript Tutorial", url: "https://javascript.info/" }
        ],
        tasks: [
          { id: "fs-w1-t1", text: "Master ES6+ arrow functions, destructuring, and async/await syntax" },
          { id: "fs-w1-t2", text: "Build a responsive grid layout using modern CSS Flexbox and Grid" },
          { id: "fs-w1-t3", text: "Complete project: Currency Converter with public API integration" }
        ]
      },
      {
        weekNumber: 2,
        theme: "Backend Architecture with Node.js & Express.js",
        milestone: "Develop and test a modular RESTful API with structured routing and middleware.",
        topics: [
          "Node.js Event Loop, CommonJS/ES Modules, and File System (fs)",
          "Express.js Server Setup, Routing, and Controller Pattern",
          "Middleware Functions (Error Handling, Request Logging, CORS)",
          "HTTP Request Lifecycle, Status Codes, and Query/Params Validation"
        ],
        exercises: [
          "Build an Express router supporting full CRUD operations for an inventory system",
          "Implement custom authentication and logging middleware"
        ],
        project: "RESTful Student Course Registration & Gradebook API",
        resources: [
          { title: "Express.js Official Guide & Documentation", url: "https://expressjs.com/en/starter/installing.html" },
          { title: "Node.js Best Practices Repository", url: "https://github.com/goldbergyoni/nodebestpractices" }
        ],
        tasks: [
          { id: "fs-w2-t1", text: "Set up Express server with structured controllers and modular routing" },
          { id: "fs-w2-t2", text: "Implement custom middleware for request validation and centralized error handling" },
          { id: "fs-w2-t3", text: "Test CRUD endpoints using Postman or cURL" }
        ]
      },
      {
        weekNumber: 3,
        theme: "Database Persistence & User Authentication",
        milestone: "Connect backend APIs to persistent database storage with secure password hashing and JWT sessions.",
        topics: [
          "Relational vs NoSQL schema design considerations",
          "CRUD queries and connection pooling",
          "Password security with bcrypt and salt hashing",
          "Stateless token-based authentication with JSON Web Tokens (JWT)"
        ],
        exercises: [
          "Design a normalized schema for users, posts, and comments",
          "Implement user registration, login, and protected route authorization"
        ],
        project: "Secure Task & Note Management System with JWT Authentication",
        resources: [
          { title: "PostgreSQL Tutorial for Beginners", url: "https://www.postgresqltutorial.com/" },
          { title: "JWT.io Introduction & Best Practices", url: "https://jwt.io/introduction" }
        ],
        tasks: [
          { id: "fs-w3-t1", text: "Design normalized database schemas and establish connection pools" },
          { id: "fs-w3-t2", text: "Implement bcrypt password hashing and JWT token issuance" },
          { id: "fs-w3-t3", text: "Protect private routes with authorization middleware" }
        ]
      },
      {
        weekNumber: 4,
        theme: "Full-Stack Integration, Testing & Cloud Deployment",
        milestone: "Deploy a production-ready full-stack application with automated testing and CI/CD.",
        topics: [
          "CORS security configuration and environment variable isolation",
          "Unit and integration testing fundamentals",
          "Build optimization, asset caching, and security headers",
          "Cloud deployment on Render / Vercel with continuous deployment"
        ],
        exercises: [
          "Audit frontend accessibility with Lighthouse to achieve 90+ score",
          "Deploy live web service on Render with automated GitHub push hooks"
        ],
        project: "Capstone: Career Mentorship Hub Web Application",
        resources: [
          { title: "Render Deployment Documentation", url: "https://render.com/docs" },
          { title: "Web.dev Production Readiness Guide", url: "https://web.dev/fast/" }
        ],
        tasks: [
          { id: "fs-w4-t1", text: "Integrate frontend UI seamlessly with backend Express REST API" },
          { id: "fs-w4-t2", text: "Conduct security audit: sanitize inputs and secure HTTP headers" },
          { id: "fs-w4-t3", text: "Deploy complete project to Render and document in GitHub README" }
        ]
      }
    ]
  },

  "Data Scientist / AI Engineer": {
    careerGoal: "Data Scientist / AI Engineer",
    overview: "Data Scientists and AI Engineers extract actionable intelligence from structured and unstructured data, build predictive machine learning models, and deploy generative AI solutions.",
    industryOutlook: "Exponential market expansion across finance, healthcare, automation, and tech platforms seeking predictive analytics and generative AI integration.",
    recommendedMissingSkills: [
      "Advanced Python & Vectorized Computing (NumPy, Pandas)",
      "Exploratory Data Analysis (EDA) & Data Storytelling",
      "Statistical Hypothesis Testing & Probability Distributions",
      "Supervised & Unsupervised Machine Learning (scikit-learn)",
      "Deep Learning Foundations & Neural Architectures",
      "LLM Integration, Prompt Engineering & Model Serving"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "Python for Data Analysis & Statistical Foundations",
        milestone: "Clean, manipulate, and visualize complex datasets to derive business insights.",
        topics: [
          "NumPy multidimensional arrays, indexing, and vectorization",
          "Pandas DataFrames: data cleaning, missing value imputation, group-by aggregations",
          "Exploratory Data Analysis (EDA) with Matplotlib and Seaborn",
          "Descriptive statistics, variance, standard deviation, and correlation matrices"
        ],
        exercises: [
          "Perform automated data wrangling on messy real-world CSV datasets",
          "Generate statistical distribution charts and outlier detection boxplots"
        ],
        project: "Global Economic & Unemployment Data Analysis Dashboard",
        resources: [
          { title: "Python Data Science Handbook by Jake VanderPlas", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
          { title: "Kaggle Micro-Courses in Python & Pandas", url: "https://www.kaggle.com/learn" }
        ],
        tasks: [
          { id: "ds-w1-t1", text: "Master Pandas data wrangling, filtering, and aggregation methods" },
          { id: "ds-w1-t2", text: "Conduct exploratory analysis with correlation heatmaps and histograms" },
          { id: "ds-w1-t3", text: "Complete project: Economic Trends Dataset EDA Report" }
        ]
      },
      {
        weekNumber: 2,
        theme: "Classical Machine Learning Algorithms & Evaluation",
        milestone: "Train, tune, and validate predictive classification and regression models.",
        topics: [
          "Supervised learning: Linear Regression, Logistic Regression, Random Forests",
          "Feature engineering, scaling (StandardScaler/MinMax), and categorical encoding",
          "Model evaluation metrics: Precision, Recall, F1-Score, ROC-AUC, and Confusion Matrix",
          "Cross-validation techniques and hyperparameter optimization with GridSearchCV"
        ],
        exercises: [
          "Build a customer churn predictor with scikit-learn pipeline",
          "Tune ensemble tree models to minimize test set overfitting"
        ],
        project: "Student Academic Performance & Dropout Risk Classifier",
        resources: [
          { title: "scikit-learn User Guide and Documentation", url: "https://scikit-learn.org/stable/user_guide.html" },
          { title: "StatQuest with Josh Starmer Machine Learning Playlist", url: "https://www.youtube.com/c/joshstarmer" }
        ],
        tasks: [
          { id: "ds-w2-t1", text: "Build preprocessing pipelines with categorical encoding and scaling" },
          { id: "ds-w2-t2", text: "Train classification models and evaluate ROC-AUC and F1-scores" },
          { id: "ds-w2-t3", text: "Optimize hyperparameters using k-fold cross-validation" }
        ]
      },
      {
        weekNumber: 3,
        theme: "Deep Learning & Neural Network Foundations",
        milestone: "Construct neural networks for pattern recognition and tabular data prediction.",
        topics: [
          "Perceptron architecture, activation functions (ReLU, Sigmoid, Softmax)",
          "Backpropagation, gradient descent optimizers (Adam, SGD), and loss functions",
          "PyTorch or TensorFlow core tensor manipulations and layer abstraction",
          "Techniques to prevent overfitting: Dropout, Early Stopping, and Weight Decay"
        ],
        exercises: [
          "Train a multi-layer perceptron on image digits or sensor signals",
          "Implement early stopping callbacks to capture the best model weights"
        ],
        project: "Neural Network for Housing Price Multi-Variable Regression",
        resources: [
          { title: "DeepLearning.AI Machine Learning Specialization Materials", url: "https://www.deeplearning.ai/" },
          { title: "PyTorch Official 60-Minute Blitz Tutorials", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" }
        ],
        tasks: [
          { id: "ds-w3-t1", text: "Understand forward pass, backpropagation, and loss minimization" },
          { id: "ds-w3-t2", text: "Implement neural network architecture with PyTorch/TensorFlow" },
          { id: "ds-w3-t3", text: "Evaluate training loss vs validation loss curves" }
        ]
      },
      {
        weekNumber: 4,
        theme: "Generative AI, LLM Integration & Production Deployment",
        milestone: "Deploy an AI application integrating Large Language Models and REST API endpoints.",
        topics: [
          "LLM architecture basics, tokenization, and temperature settings",
          "Prompt engineering techniques: Few-Shot, Chain-of-Thought, Structured JSON",
          "Gemini API / OpenAI API integration in Python & Node.js services",
          "Model serving with FastAPI / Flask and containerization with Docker"
        ],
        exercises: [
          "Build an automated document summarizer using Gemini Flash API",
          "Create a FastAPI inference microservice wrapped in Docker"
        ],
        project: "Capstone: AI Study Coach & Question-Answering Assistant",
        resources: [
          { title: "Google Gemini API Official Documentation", url: "https://ai.google.dev/docs" },
          { title: "FastAPI Documentation for High-Performance APIs", url: "https://fastapi.tiangolo.com/" }
        ],
        tasks: [
          { id: "ds-w4-t1", text: "Write structured prompts enforcing JSON schema responses from LLMs" },
          { id: "ds-w4-t2", text: "Build FastAPI or Express server connecting AI model to web client" },
          { id: "ds-w4-t3", text: "Package and deploy AI application to cloud hosting" }
        ]
      }
    ]
  },

  "Cloud & DevOps Engineer": {
    careerGoal: "Cloud & DevOps Engineer",
    overview: "Cloud and DevOps Engineers design, automate, and maintain resilient cloud infrastructure, continuous deployment pipelines, and scalable microservices.",
    industryOutlook: "Rapidly expanding domain as enterprises transition legacy architectures to containerized multi-cloud ecosystems and automated GitOps workflows.",
    recommendedMissingSkills: [
      "Linux Shell Scripting & Systems Administration",
      "Containerization with Docker & Container Best Practices",
      "Container Orchestration with Kubernetes",
      "Infrastructure as Code (Terraform)",
      "CI/CD Pipeline Automation (GitHub Actions / GitLab CI)",
      "Cloud Architecture on AWS / GCP & Observability (Prometheus/Grafana)"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "Linux Administration & Bash Automation",
        milestone: "Automate system monitoring, permission management, and service configurations via Bash.",
        topics: [
          "Linux filesystem hierarchy, file permissions (chmod/chown), and SSH key management",
          "Process management (systemd, top, ps, kill) and log analysis (journalctl)",
          "Bash scripting: variables, control flow, loops, and cron job scheduling",
          "Networking basics: IP routing, DNS resolution, firewalls, and ports"
        ],
        exercises: [
          "Write a shell script to automate server health checks and log rotation",
          "Configure an NGINX reverse proxy with SSL termination"
        ],
        project: "Automated Linux Server Audit & Backup Automation Script",
        resources: [
          { title: "Linux Journey - Interactive Open Source Tutorials", url: "https://linuxjourney.com/" },
          { title: "Bash Guide for Beginners", url: "https://tldp.org/LDP/Bash-Beginners-Guide/html/" }
        ],
        tasks: [
          { id: "cd-w1-t1", text: "Master Linux terminal commands, permissions, and SSH hardening" },
          { id: "cd-w1-t2", text: "Write modular Bash scripts for system telemetry and automated backups" },
          { id: "cd-w1-t3", text: "Configure NGINX reverse proxy routing" }
        ]
      },
      {
        weekNumber: 2,
        theme: "Containerization with Docker",
        milestone: "Package multi-tier web applications into lightweight, secure Docker containers.",
        topics: [
          "Docker architecture: daemon, images, containers, and registries",
          "Writing production Dockerfiles: multi-stage builds, non-root users, .dockerignore",
          "Docker Compose for multi-container orchestration (App + DB + Redis)",
          "Container networking and persistent storage volumes"
        ],
        exercises: [
          "Optimize an application image size from 1GB to under 100MB using multi-stage builds",
          "Orchestrate a Node.js API with PostgreSQL and Redis cache using Docker Compose"
        ],
        project: "Production-Hardened Multi-Container Web Architecture",
        resources: [
          { title: "Docker Official Getting Started Guide", url: "https://docs.docker.com/get-started/" },
          { title: "Docker Labs on Katacoda / Killercoda", url: "https://killercoda.com/" }
        ],
        tasks: [
          { id: "cd-w2-t1", text: "Write efficient multi-stage Dockerfiles with minimal layers" },
          { id: "cd-w2-t2", text: "Configure Docker Compose networking and data persistence volumes" },
          { id: "cd-w2-t3", text: "Implement container security best practices and non-root user execution" }
        ]
      },
      {
        weekNumber: 3,
        theme: "CI/CD Automation with GitHub Actions",
        milestone: "Build an automated continuous integration and continuous deployment pipeline.",
        topics: [
          "CI/CD principles: build, test, lint, security scan, and deploy phases",
          "GitHub Actions workflow syntax, triggers, matrix builds, and secrets",
          "Automated unit testing and code coverage enforcement",
          "Pushing images to Docker Hub and zero-downtime deployment triggers"
        ],
        exercises: [
          "Create a GitHub Action running automated linter and unit tests on pull requests",
          "Automate deployment to staging environment upon merge to main branch"
        ],
        project: "End-to-End Automated CI/CD Pipeline for Microservice",
        resources: [
          { title: "GitHub Actions Official Documentation", url: "https://docs.github.com/en/actions" },
          { title: "GitLab CI/CD Fundamentals", url: "https://docs.gitlab.com/ee/ci/" }
        ],
        tasks: [
          { id: "cd-w3-t1", text: "Write GitHub Actions workflow for linting and automated test runs" },
          { id: "cd-w3-t2", text: "Configure repository secrets and automated container registry pushes" },
          { id: "cd-w3-t3", text: "Implement automated webhook deployment to cloud target" }
        ]
      },
      {
        weekNumber: 4,
        theme: "Kubernetes Orchestration & Cloud Observability",
        milestone: "Deploy self-healing, horizontally scalable workloads on Kubernetes with monitoring.",
        topics: [
          "Kubernetes primitives: Pods, Deployments, Services, and Ingress",
          "ConfigMaps, Secrets, Resource limits (CPU/Memory), and Health Probes (Liveness/Readiness)",
          "Horizontal Pod Autoscaling (HPA) and rolling zero-downtime upgrades",
          "Observability pillars: Metrics (Prometheus), Dashboards (Grafana), and Logs"
        ],
        exercises: [
          "Deploy a microservice on Minikube / K3s with cluster service discovery",
          "Simulate node failure and verify Kubernetes automatic pod recovery"
        ],
        project: "Capstone: Cloud-Native Microservices Deployment on Kubernetes",
        resources: [
          { title: "Kubernetes Official Documentation - Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
          { title: "Prometheus Monitoring 101", url: "https://prometheus.io/docs/introduction/overview/" }
        ],
        tasks: [
          { id: "cd-w4-t1", text: "Author Kubernetes Deployment and Service YAML manifests" },
          { id: "cd-w4-t2", text: "Configure liveness/readiness probes and horizontal pod autoscaler" },
          { id: "cd-w4-t3", text: "Set up Prometheus and Grafana dashboards for cluster telemetry" }
        ]
      }
    ]
  },

  "Cybersecurity Analyst": {
    careerGoal: "Cybersecurity Analyst",
    overview: "Cybersecurity Analysts protect networks, computer systems, and sensitive data from cyber threats, vulnerabilities, and unauthorized access.",
    industryOutlook: "Critically high global talent shortage with immense opportunities in SOC operations, vulnerability assessment, threat intelligence, and digital forensics.",
    recommendedMissingSkills: [
      "TCP/IP Networking, Ports, Protocols & Packet Analysis (Wireshark)",
      "Web Application Security & OWASP Top 10 Vulnerabilities",
      "Vulnerability Scanning & Penetration Testing Tools (Nmap, Burp Suite)",
      "Security Information and Event Management (SIEM)",
      "Cryptography, PKI & Secure Network Protocols",
      "Incident Response Methodologies & Threat Hunting"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "Network Defense & Traffic Inspection",
        milestone: "Analyze packet captures, identify anomalous network traffic, and configure defensive firewalls.",
        topics: [
          "OSI model and TCP/IP stack deep dive: Handshakes, DNS, DHCP, ARP",
          "Packet capture and protocol inspection with Wireshark",
          "Network mapping and port scanning methodologies using Nmap",
          "Host and network firewall rules (iptables, UFW) and IDS/IPS concepts (Snort)"
        ],
        exercises: [
          "Capture and analyze an unencrypted HTTP session and extract credentials in Wireshark",
          "Conduct an authorized Nmap reconnaissance scan across a local virtual machine"
        ],
        project: "Network Traffic Anomaly & Intrusion Detection Lab Report",
        resources: [
          { title: "Wireshark Official User Guide", url: "https://www.wireshark.org/docs/" },
          { title: "Professor Messer CompTIA Security+ Course", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/" }
        ],
        tasks: [
          { id: "sec-w1-t1", text: "Perform Wireshark packet capture analysis to isolate protocol anomalies" },
          { id: "sec-w1-t2", text: "Execute authorized Nmap discovery scans to identify open ports" },
          { id: "sec-w1-t3", text: "Configure host firewall rules to restrict unauthorized incoming traffic" }
        ]
      },
      {
        weekNumber: 2,
        theme: "Web Application Security & OWASP Top 10",
        milestone: "Identify and remediate critical vulnerabilities in web applications.",
        topics: [
          "OWASP Top 10: SQL Injection, Cross-Site Scripting (XSS), CSRF, Broken Access Control",
          "Web proxy inspection and intercepting requests with Burp Suite Community",
          "Authentication weaknesses, session hijacking, and JWT tampering",
          "Secure coding practices: parameterized queries, input sanitization, CSP headers"
        ],
        exercises: [
          "Exploit and patch SQL injection on OWASP Juice Shop or DVWA practice labs",
          "Intercept and manipulate HTTP headers to test server-side authorization"
        ],
        project: "Web Application Vulnerability Assessment & Mitigation Audit",
        resources: [
          { title: "OWASP Top 10 Web Application Security Risks", url: "https://owasp.org/www-project-top-ten/" },
          { title: "PortSwigger Web Security Academy (Free Labs)", url: "https://portswigger.net/web-security" }
        ],
        tasks: [
          { id: "sec-w2-t1", text: "Complete PortSwigger Web Security Academy labs on SQLi and XSS" },
          { id: "sec-w2-t2", text: "Intercept and analyze web requests using Burp Suite" },
          { id: "sec-w2-t3", text: "Write remediation report detailing defense-in-depth code fixes" }
        ]
      },
      {
        weekNumber: 3,
        theme: "Applied Cryptography & Access Control",
        milestone: "Implement cryptographic algorithms, digital certificates, and strict IAM policies.",
        topics: [
          "Symmetric (AES) vs Asymmetric (RSA, ECC) encryption mechanisms",
          "Cryptographic hashing (SHA-256) and message authentication codes (HMAC)",
          "Public Key Infrastructure (PKI), TLS/SSL certificates, and certificate authorities",
          "Identity and Access Management (IAM), Role-Based Access Control (RBAC), and MFA"
        ],
        exercises: [
          "Generate self-signed SSL/TLS certificates and enforce HTTPS on a local server",
          "Verify digital signatures and file integrity using OpenSSL CLI"
        ],
        project: "Secure File Transmission & Digital Signature Verification Tool",
        resources: [
          { title: "OpenSSL Cryptography Essentials Guide", url: "https://www.openssl.org/docs/" },
          { title: "NIST Special Publication 800-53 Security Controls", url: "https://csrc.nist.gov/" }
        ],
        tasks: [
          { id: "sec-w3-t1", text: "Execute OpenSSL cryptographic hashing and asymmetric key generation" },
          { id: "sec-w3-t2", text: "Configure TLS certificate validation for client-server communication" },
          { id: "sec-w3-t3", text: "Design least-privilege RBAC role matrices for sensitive resources" }
        ]
      },
      {
        weekNumber: 4,
        theme: "SOC Operations, SIEM & Incident Response",
        milestone: "Investigate security incidents, correlate SIEM alerts, and compile incident response reports.",
        topics: [
          "Security Operations Center (SOC) workflows and tiering",
          "Log aggregation and event correlation with open-source SIEM (Elastic / Wazuh)",
          "MITRE ATT&CK framework mapping for cyber threat actors",
          "Incident response phases (NIST SP 800-61): Preparation, Detection, Containment, Eradication, Recovery"
        ],
        exercises: [
          "Ingest authentication logs into a SIEM dashboard and craft brute-force alert rules",
          "Conduct tabletop simulation of a ransomware compromise and document containment actions"
        ],
        project: "Capstone: Simulated SOC Incident Investigation & Threat Report",
        resources: [
          { title: "Wazuh Open Source SIEM Documentation", url: "https://documentation.wazuh.com/" },
          { title: "MITRE ATT&CK Matrix for Enterprise", url: "https://attack.mitre.org/" }
        ],
        tasks: [
          { id: "sec-w4-t1", text: "Correlate authentication logs to detect brute-force attacks in SIEM" },
          { id: "sec-w4-t2", text: "Map threat adversary tactics to the MITRE ATT&CK framework" },
          { id: "sec-w4-t3", text: "Produce comprehensive NIST-compliant incident post-mortem report" }
        ]
      }
    ]
  },

  "Mobile App Developer (Flutter/Android)": {
    careerGoal: "Mobile App Developer (Flutter/Android)",
    overview: "Mobile Developers design, build, and deploy high-performance cross-platform and native mobile applications for smartphones, tablets, and wearables.",
    industryOutlook: "Continuous market growth driven by mobile-first digital consumer experiences, fintech apps, and on-demand cloud services worldwide.",
    recommendedMissingSkills: [
      "Dart / Kotlin Programming Language Syntax & OOP",
      "Widget Trees, UI State Management (Bloc / Provider / Riverpod)",
      "Mobile Responsive Layouts & Native Platform Channels",
      "REST API Integration, JSON Parsing & Offline Caching",
      "SQLite / Hive Local Mobile Databases",
      "App Store & Play Store Publishing Pipelines"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "Mobile Foundations & Responsive UI Building",
        milestone: "Construct smooth, responsive user interfaces following platform design guidelines.",
        topics: [
          "Dart / Kotlin syntax: null safety, collections, async programming",
          "Component lifecycle and widget trees (Stateless vs Stateful)",
          "Layout widgets: Rows, Columns, Stacks, ListView, and GridView",
          "Material Design 3 and Cupertino styling guidelines"
        ],
        exercises: [
          "Build an interactive profile and product catalog screen with custom card widgets",
          "Implement animated transitions between screens"
        ],
        project: "Interactive Student Campus News & Event Discovery App",
        resources: [
          { title: "Flutter Official Codelabs & Documentation", url: "https://docs.flutter.dev/codelabs" },
          { title: "Android Developers Official Training Guides", url: "https://developer.android.com/courses" }
        ],
        tasks: [
          { id: "mob-w1-t1", text: "Master Dart/Kotlin null safety, classes, and async streams" },
          { id: "mob-w1-t2", text: "Build responsive mobile UI screens following Material Design" },
          { id: "mob-w1-t3", text: "Implement clean multi-screen navigation and route parameters" }
        ]
      },
      {
        weekNumber: 2,
        theme: "State Management & Local Storage",
        milestone: "Architect predictable application state and persist user preferences locally.",
        topics: [
          "Why state management matters: lifting state up and prop drilling pitfalls",
          "Provider / Riverpod or Bloc architecture pattern",
          "Persisting user preferences with SharedPreferences",
          "Local structured databases with SQLite (sqflite) or Hive"
        ],
        exercises: [
          "Implement shopping cart state that syncs across multiple tabs and screens",
          "Store offline notes in SQLite with full CRUD persistence"
        ],
        project: "Offline-First Personal Expense & Budget Tracker",
        resources: [
          { title: "Flutter State Management Approaches", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro" },
          { title: "SQLite on Mobile Best Practices", url: "https://docs.flutter.dev/cookbook/persistence/sqlite" }
        ],
        tasks: [
          { id: "mob-w2-t1", text: "Implement reactive state management using Provider or Riverpod" },
          { id: "mob-w2-t2", text: "Configure local SQLite database schemas and CRUD operations" },
          { id: "mob-w2-t3", text: "Enable offline persistence and background data sync" }
        ]
      },
      {
        weekNumber: 3,
        theme: "RESTful API Integration & Device Features",
        milestone: "Connect mobile applications to cloud backends and access native hardware capabilities.",
        topics: [
          "HTTP network requests, headers, and error handling",
          "JSON deserialization with code generators (json_serializable)",
          "Camera, geolocation, and push notification integrations",
          "Handling device connectivity states (offline vs online banners)"
        ],
        exercises: [
          "Fetch and display paginated data from a REST endpoint with pull-to-refresh",
          "Capture device GPS coordinates and display interactive maps"
        ],
        project: "Location-Aware Nearby Amenities & Weather Finder App",
        resources: [
          { title: "Networking & Fetching Data in Flutter", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" },
          { title: "Firebase for Mobile Applications", url: "https://firebase.google.com/docs/flutter/setup" }
        ],
        tasks: [
          { id: "mob-w3-t1", text: "Implement asynchronous HTTP data fetching with pull-to-refresh" },
          { id: "mob-w3-t2", text: "Safely parse JSON responses into strongly-typed model objects" },
          { id: "mob-w3-t3", text: "Integrate device location permissions and map coordinates" }
        ]
      },
      {
        weekNumber: 4,
        theme: "Testing, Optimization & App Store Deployment",
        milestone: "Profile performance, write automated widget tests, and prepare release binaries.",
        topics: [
          "Unit, widget, and integration testing on mobile",
          "Profiling frame rendering (60fps target), memory leaks, and network traffic",
          "App signing (keystore, provisioning profiles), app icons, and splash screens",
          "Google Play Console and Apple App Store submission checklist"
        ],
        exercises: [
          "Write automated widget tests verifying user input and button interactions",
          "Generate release Android App Bundle (AAB) ready for Google Play"
        ],
        project: "Capstone: Production-Ready Career Mentorship Mobile Application",
        resources: [
          { title: "Flutter Testing Guide", url: "https://docs.flutter.dev/testing" },
          { title: "Google Play Store Launch Checklist", url: "https://developer.android.com/distribute/best-practices/launch/launch-checklist" }
        ],
        tasks: [
          { id: "mob-w4-t1", text: "Write unit and widget tests to achieve high test coverage" },
          { id: "mob-w4-t2", text: "Profile mobile performance and eliminate UI jank" },
          { id: "mob-w4-t3", text: "Generate signed release build and assemble app store assets" }
        ]
      }
    ]
  },

  "UI/UX Designer & Frontend": {
    careerGoal: "UI/UX Designer & Frontend",
    overview: "UI/UX & Frontend specialists design user-centric interfaces, conduct user research, create wireframes and high-fidelity prototypes, and implement accessible, responsive web interfaces.",
    industryOutlook: "Strong industry demand as software companies emphasize customer retention, conversion optimization, and accessible design compliance.",
    recommendedMissingSkills: [
      "User Research & Journey Mapping Methodologies",
      "Wireframing & High-Fidelity Prototyping (Figma)",
      "Design Systems, Typography & Color Theory",
      "Modern Semantic HTML5, CSS Variables & Fluid Typography",
      "Web Accessibility (WCAG 2.1 AA) Standards & Screen Reader Testing",
      "Frontend Component Architecture (Atomic Design)"
    ],
    weeks: [
      {
        weekNumber: 1,
        theme: "User Research, Information Architecture & Wireframing",
        milestone: "Conduct user interviews, create empathy maps, and design low-fidelity wireframes.",
        topics: [
          "Design thinking methodology: Empathize, Define, Ideate, Prototype, Test",
          "User personas, journey maps, and empathy mapping",
          "Information architecture, card sorting, and navigation hierarchies",
          "Low-fidelity wireframing and paper prototyping"
        ],
        exercises: [
          "Create two distinct student personas and draft user journey maps for a learning platform",
          "Design low-fidelity wireframes for a job search portal in Figma"
        ],
        project: "User Research Synthesis & Wireframe Spec for EdTech Platform",
        resources: [
          { title: "Nielsen Norman Group UX Research Articles", url: "https://www.nngroup.com/articles/" },
          { title: "Figma for Beginners Series", url: "https://help.figma.com/hc/en-us/categories/360002051613" }
        ],
        tasks: [
          { id: "ux-w1-t1", text: "Draft comprehensive user personas and journey maps" },
          { id: "ux-w1-t2", text: "Structure site information architecture and user flow diagrams" },
          { id: "ux-w1-t3", text: "Create low-fidelity wireframes in Figma" }
        ]
      },
      {
        weekNumber: 2,
        theme: "High-Fidelity UI Design & Design Systems in Figma",
        milestone: "Build a complete design system with reusable components, color tokens, and variants.",
        topics: [
          "Visual hierarchy, typography scales, and 8pt grid layouts",
          "Color psychology, contrast ratios, and dark mode theming",
          "Figma Auto-layout, components, variants, and interactive prototyping",
          "Micro-interactions, button hover states, and feedback animations"
        ],
        exercises: [
          "Construct a reusable Figma design system with buttons, inputs, and modals",
          "Create an interactive clickable high-fidelity prototype with smart animate transitions"
        ],
        project: "Comprehensive Design System & High-Fidelity Prototype in Figma",
        resources: [
          { title: "Refactoring UI by Adam Wathan and Steve Schoger", url: "https://www.refactoringui.com/" },
          { title: "Google Material Design 3 Guidelines", url: "https://m3.material.io/" }
        ],
        tasks: [
          { id: "ux-w2-t1", text: "Establish typographic scales, color tokens, and 8px grid rules" },
          { id: "ux-w2-t2", text: "Build modular component library with auto-layout in Figma" },
          { id: "ux-w2-t3", text: "Publish clickable interactive prototype demonstrating key user journeys" }
        ]
      },
      {
        weekNumber: 3,
        theme: "Frontend Implementation & Fluid CSS Layouts",
        milestone: "Translate Figma designs into pixel-perfect, responsive HTML5 and CSS3 code.",
        topics: [
          "CSS custom properties (variables) for scalable design tokens",
          "Fluid typography with CSS clamp() and responsive breakpoints",
          "Modern CSS Grid and Flexbox layouts without frameworks",
          "CSS transitions, keyframe animations, and prefers-reduced-motion"
        ],
        exercises: [
          "Convert a complex Figma hero section into responsive HTML/CSS code",
          "Implement smooth dark mode toggle using CSS variables"
        ],
        project: "Pixel-Perfect Responsive Landing Page from Figma Design",
        resources: [
          { title: "Every Layout - Relearn CSS Layout", url: "https://every-layout.dev/" },
          { title: "CSS-Tricks Guide to Flexbox & Grid", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
        ],
        tasks: [
          { id: "ux-w3-t1", text: "Set up CSS variable design system mapping tokens to styling rules" },
          { id: "ux-w3-t2", text: "Implement fluid responsive layout adapting across mobile and desktop" },
          { id: "ux-w3-t3", text: "Add accessible interactive states and smooth animations" }
        ]
      },
      {
        weekNumber: 4,
        theme: "Web Accessibility (WCAG 2.1), Usability Testing & Audit",
        milestone: "Conduct usability tests and achieve 100% WCAG 2.1 AA accessibility compliance.",
        topics: [
          "Web Content Accessibility Guidelines (WCAG 2.1 AA requirements)",
          "ARIA attributes, keyboard navigation, focus management, and skip links",
          "Screen reader testing (NVDA / VoiceOver) and color blindness simulation",
          "Usability testing protocol: script writing, recording sessions, and computing SUS scores"
        ],
        exercises: [
          "Audit a website with Axe DevTools and resolve all contrast and ARIA defects",
          "Conduct moderated usability test with 3 users and compute System Usability Scale (SUS)"
        ],
        project: "Capstone: Accessible Portfolio & UX Case Study Showcase",
        resources: [
          { title: "W3C Web Accessibility Initiative (WAI)", url: "https://www.w3.org/WAI/" },
          { title: "A11y Project - Digital Accessibility Checklist", url: "https://www.a11yproject.com/checklist/" }
        ],
        tasks: [
          { id: "ux-w4-t1", text: "Audit codebase with Lighthouse and Axe to achieve 100% a11y score" },
          { id: "ux-w4-t2", text: "Verify full keyboard navigation and screen reader compatibility" },
          { id: "ux-w4-t3", text: "Synthesize usability testing results into actionable case study" }
        ]
      }
    ]
  }
};

// Career-relevant predefined quiz questions (5 MCQs per career, 4 options each, correct index, detailed explanation)
const quizQuestions = {
  "Full Stack Web Developer": [
    {
      question: "Which of the following best describes the difference between synchronous and asynchronous code execution in JavaScript?",
      options: [
        "Synchronous code runs in parallel on multiple threads, while asynchronous code runs on a single thread.",
        "Synchronous code executes sequentially blocking further execution until complete, while asynchronous code executes via the event loop without blocking.",
        "Asynchronous code only executes when an explicit callback is triggered by the operating system kernel.",
        "Synchronous code can only be used in browser environments, while asynchronous code is exclusive to Node.js."
      ],
      correctAnswer: 1,
      explanation: "JavaScript is single-threaded. Synchronous code blocks the call stack, halting further execution until the current operation finishes. Asynchronous code (e.g. Promises, async/await, timers) delegates operations to Web APIs or Node C++ bindings, processing completed tasks via the Event Loop without freezing the thread."
    },
    {
      question: "In RESTful API design, which HTTP method is strictly idempotent and primarily intended to update or replace an entire existing resource?",
      options: [
        "POST",
        "PATCH",
        "PUT",
        "DELETE"
      ],
      correctAnswer: 2,
      explanation: "PUT is idempotent, meaning calling PUT multiple times with the same request payload results in the exact same state on the server (replacing the resource). PATCH is used for partial modifications, while POST is typically non-idempotent and creates a new resource each time."
    },
    {
      question: "Why should passwords never be stored in plain text or with standard fast cryptographic hash functions like MD5 or SHA-256?",
      options: [
        "MD5 and SHA-256 are too slow for server authentication throughput.",
        "Fast hashing algorithms are vulnerable to high-speed hardware brute-forcing and precomputed rainbow table attacks; salted slow hashes like bcrypt or Argon2 are required.",
        "SHA-256 produces variable-length outputs that cannot fit into standard SQL database columns.",
        "Hashing passwords prevents backend developers from recovering lost user passwords upon request."
      ],
      correctAnswer: 1,
      explanation: "Modern GPUs can compute billions of SHA-256 or MD5 hashes per second, making dictionary and rainbow table attacks trivial. Password hashing requires adaptive, computationally slow algorithms like bcrypt, scrypt, or Argon2 combined with unique cryptographic salts."
    },
    {
      question: "What is the primary role of the Cross-Origin Resource Sharing (CORS) mechanism in modern web security?",
      options: [
        "It prevents all external scripts from ever running in the client browser.",
        "It allows servers to specify which origins are permitted to read their HTTP responses via browser HTTP headers.",
        "It encrypts payload traffic between the browser and third-party APIs.",
        "It prevents SQL injection vulnerabilities in database queries."
      ],
      correctAnswer: 1,
      explanation: "CORS is a browser-enforced security policy that uses HTTP response headers (such as Access-Control-Allow-Origin) to tell browsers whether a web application running at one origin has permission to access resources from a different origin."
    },
    {
      question: "Which browser storage mechanism persists data without an expiration date and is strictly isolated to the specific origin protocol, domain, and port?",
      options: [
        "sessionStorage",
        "HTTP Cookies with max-age=0",
        "localStorage",
        "IndexedDB temporary cache"
      ],
      correctAnswer: 2,
      explanation: "Window.localStorage stores key-value pairs with no expiration date across browser sessions for that specific origin (protocol + host + port), whereas sessionStorage is cleared when the browsing tab is closed."
    }
  ],

  "Data Scientist / AI Engineer": [
    {
      question: "When evaluating a machine learning model for rare disease detection or critical fraud prevention, which metric is most vital when false negatives are extremely costly?",
      options: [
        "Accuracy",
        "Recall (Sensitivity)",
        "Precision",
        "Mean Squared Error"
      ],
      correctAnswer: 1,
      explanation: "Recall measures the proportion of actual positives correctly identified: True Positives / (True Positives + False Negatives). When false negatives carry catastrophic consequences (e.g., missing a cancer diagnosis or severe fraud), maximizing recall is prioritized."
    },
    {
      question: "What primary problem does the standard technique of 'k-fold cross-validation' resolve during model training?",
      options: [
        "It speeds up neural network inference on edge devices.",
        "It provides a robust estimate of model generalization performance across different data partitions to prevent overfitting to a single train-test split.",
        "It automatically removes duplicate records and handles missing values in DataFrames.",
        "It replaces the need for gradient descent optimization."
      ],
      correctAnswer: 1,
      explanation: "k-fold cross-validation divides the dataset into k equal subsets, iteratively training on k-1 folds and validating on the remaining fold. This ensures every data point is used for both training and validation, providing a reliable measure of model generalization."
    },
    {
      question: "In prompt engineering for Large Language Models (LLMs), what does 'Few-Shot Prompting' entail?",
      options: [
        "Limiting the model response to fewer than 50 tokens.",
        "Providing the model with a few high-quality input-output examples in the prompt to demonstrate the desired format and reasoning pattern.",
        "Calling the API multiple times in rapid succession until a valid answer is generated.",
        "Fine-tuning model weights using low-rank adaptation (LoRA)."
      ],
      correctAnswer: 1,
      explanation: "Few-shot prompting provides the model with a handful of exemplar input-output pairs within the context window, guiding in-context learning to output correct syntax, structure, or reasoning without changing model weights."
    },
    {
      question: "Which optimization algorithm is most commonly utilized in training modern deep neural networks due to its adaptive learning rate per parameter?",
      options: [
        "Adam (Adaptive Moment Estimation)",
        "Standard Batch Gradient Descent",
        "K-Means Clustering",
        "Nelder-Mead Simplex"
      ],
      correctAnswer: 0,
      explanation: "Adam combines the benefits of AdaGrad and RMSProp by computing adaptive learning rates for each parameter based on running averages of both the gradients and the second moments of the gradients, making it the standard optimizer for deep learning."
    },
    {
      question: "What is the key difference between Supervised and Unsupervised learning?",
      options: [
        "Supervised learning requires cloud GPU clusters, whereas unsupervised learning runs on CPU.",
        "Supervised learning trains on labeled input-output data pairs, while unsupervised learning discovers intrinsic patterns from unlabeled data.",
        "Supervised learning only works on numerical data, while unsupervised works on text.",
        "Supervised learning cannot be used for classification problems."
      ],
      correctAnswer: 1,
      explanation: "Supervised learning algorithms learn a mapping function from input features to known target labels (e.g. classification, regression). Unsupervised learning identifies underlying patterns, groupings, or clusters without target labels (e.g. K-Means, PCA)."
    }
  ],

  "Cloud & DevOps Engineer": [
    {
      question: "In Docker, what is the key advantage of utilizing multi-stage builds inside a Dockerfile?",
      options: [
        "It allows containers to run on multiple host operating systems simultaneously.",
        "It separates the build environment from the minimal runtime environment, dramatically reducing final container image size and attack surface.",
        "It bypasses container security constraints and gives containers root kernel access.",
        "It automatically deploys containers to Kubernetes without manifest files."
      ],
      correctAnswer: 1,
      explanation: "Multi-stage builds allow developers to use large SDKs and compilers in early stages to build application binaries, then copy only the compiled artifacts into a lean minimal production base image (like Alpine or distroless), keeping images secure and lightweight."
    },
    {
      question: "Which Kubernetes resource controller ensures that a specified number of Pod replicas are consistently running across cluster nodes?",
      options: [
        "Ingress Controller",
        "Deployment / ReplicaSet",
        "ConfigMap",
        "PersistentVolumeClaim"
      ],
      correctAnswer: 1,
      explanation: "A ReplicaSet (managed declaratively via a Deployment) continuously monitors active Pod states against desired replicas, automatically spinning up new Pods if a node crashes or killing excess Pods during scale-down."
    },
    {
      question: "What does the concept of 'Infrastructure as Code' (IaC) with tools like Terraform provide over manual cloud console clicks?",
      options: [
        "Free cloud hosting credits from cloud providers.",
        "Declarative, version-controlled, reproducible, and automated infrastructure provisioning that prevents configuration drift.",
        "Elimination of the need for operating system firewalls.",
        "Automatic conversion of SQL queries into microservices."
      ],
      correctAnswer: 1,
      explanation: "IaC allows infrastructure configurations to be written in declarative files, reviewed in version control (Git), tested in CI/CD pipelines, and reproducibly applied across environments, preventing human error and configuration drift."
    },
    {
      question: "In continuous integration and continuous deployment (CI/CD), what is the difference between Continuous Delivery and Continuous Deployment?",
      options: [
        "Continuous Delivery only compiles code, whereas Continuous Deployment only runs tests.",
        "In Continuous Delivery, code changes are automatically tested and prepared for release but require manual approval to push to production; in Continuous Deployment, changes passing all tests are released to production automatically.",
        "Continuous Delivery is only for mobile applications, while Continuous Deployment is for web servers.",
        "There is no difference; they are identical terms for Git push hooks."
      ],
      correctAnswer: 1,
      explanation: "In Continuous Delivery, every change is validated and built into a deployable artifact, but deployment to production is triggered manually by human decision. In Continuous Deployment, every change that passes all automated quality gates is deployed to production automatically without human intervention."
    },
    {
      question: "Which Linux systemd command is used to inspect recent diagnostic log entries for a specific service unit named 'my-app.service'?",
      options: [
        "systemctl status-all",
        "journalctl -u my-app.service -n 50 -f",
        "tail -f /var/run/systemd/current",
        "ps aux | grep my-app"
      ],
      correctAnswer: 1,
      explanation: "journalctl is the unified systemd logging utility. The flag -u filters logs for the specific unit, -n specifies number of lines, and -f follows live log streaming in real time."
    }
  ],

  "Cybersecurity Analyst": [
    {
      question: "Which principle of information security mandates that users and processes are granted only the minimum system permissions necessary to perform their legitimate job functions?",
      options: [
        "Defense in Depth",
        "Principle of Least Privilege (PoLP)",
        "Zero Trust Separation of Duties",
        "Security through Obscurity"
      ],
      correctAnswer: 1,
      explanation: "The Principle of Least Privilege (PoLP) dictates that identities, services, and accounts must only possess the minimal clearance and permissions strictly required to execute their specific duties, drastically limiting damage if an account is compromised."
    },
    {
      question: "In the OWASP Top 10, how does a SQL Injection (SQLi) vulnerability typically occur and how is it definitively prevented?",
      options: [
        "It occurs when servers run outdated PHP engines, prevented by switching to Node.js.",
        "It occurs when untrusted user input is directly concatenated into database query strings, prevented by using parameterized queries (prepared statements).",
        "It occurs when passwords are stored without salts, prevented by using AES-256.",
        "It occurs when SSL certificates expire, prevented by automated Let's Encrypt renewals."
      ],
      correctAnswer: 1,
      explanation: "SQLi occurs when user inputs are concatenated directly into SQL command strings, altering query semantics. Parameterized queries (prepared statements) treat user input strictly as literal data rather than executable code, definitively eliminating injection."
    },
    {
      question: "What type of attack involves an adversary intercepting and potentially altering communications between two parties who believe they are communicating directly with each other?",
      options: [
        "Distributed Denial of Service (DDoS)",
        "Man-in-the-Middle (MitM) Attack",
        "Buffer Overflow",
        "Cross-Site Request Forgery (CSRF)"
      ],
      correctAnswer: 1,
      explanation: "In a Man-in-the-Middle (MitM) attack, the attacker intercepts, decrypts, or manipulates traffic between two endpoints (e.g. via ARP spoofing or rogue Wi-Fi access points). Enforcing end-to-end TLS encryption with valid certificate validation defends against MitM."
    },
    {
      question: "What is the primary operational objective of a Security Information and Event Management (SIEM) platform in a modern SOC?",
      options: [
        "Automatically writing and compiling application source code.",
        "Aggregating, normalizing, and correlating security logs across diverse enterprise devices to detect threats and trigger incident alerts in real time.",
        "Replacing firewalls and antivirus software with cloud storage.",
        "Blocking all external incoming email attachments."
      ],
      correctAnswer: 1,
      explanation: "A SIEM (e.g. Splunk, Wazuh, Elastic Security) collects log and event data from firewalls, endpoints, servers, and cloud environments, performing automated correlation and anomaly detection to alert analysts to coordinated attacks."
    },
    {
      question: "Which cryptographic guarantee ensures that a sender cannot subsequently deny having sent a specific message or initiated a financial transaction?",
      options: [
        "Confidentiality",
        "Non-repudiation",
        "Availability",
        "Obfuscation"
      ],
      correctAnswer: 1,
      explanation: "Non-repudiation ensures that the author or sender of data cannot dispute the authenticity of their signature or message, typically achieved through asymmetric public-key cryptography and digital signatures."
    }
  ],

  "Mobile App Developer (Flutter/Android)": [
    {
      question: "In Flutter, what is the fundamental conceptual difference between a StatelessWidget and a StatefulWidget?",
      options: [
        "StatelessWidgets can only be rendered in debug mode, while StatefulWidgets run in production.",
        "StatelessWidgets describe UI that depends solely on configuration data passed at construction and never changes at runtime, whereas StatefulWidgets manage mutable state that triggers UI rebuilds via setState().",
        "StatefulWidgets execute in a separate background OS thread.",
        "StatelessWidgets are exclusively used for text and buttons."
      ],
      correctAnswer: 1,
      explanation: "A StatelessWidget is immutable and does not hold internal mutable state; its UI is rebuilt only when parent widget configurations change. A StatefulWidget maintains a mutable State object that can call setState() to trigger re-rendering when variables or data change."
    },
    {
      question: "Why is sound null safety a crucial feature in modern mobile development languages like Dart and Kotlin?",
      options: [
        "It eliminates all memory allocation overhead.",
        "It detects and prevents null dereference errors ('null pointer exceptions') at compile time rather than crashing apps during runtime.",
        "It encrypts local SQLite databases automatically.",
        "It replaces the requirement for asynchronous Futures and Promises."
      ],
      correctAnswer: 1,
      explanation: "Sound null safety ensures that variables cannot contain null values unless explicitly declared as nullable (e.g. `String?`). The compiler checks types at build time, preventing unexpected runtime null pointer exceptions that cause mobile apps to crash."
    },
    {
      question: "When parsing a REST API JSON response on mobile, why is it recommended to parse models into strongly-typed objects rather than accessing dynamic maps directly?",
      options: [
        "Dynamic maps consume 10 times more battery power on mobile devices.",
        "Strongly-typed classes provide compile-time safety, IDE autocompletion, refactoring support, and prevent runtime key spelling typo crashes.",
        "Mobile operating systems reject app store submissions that contain JSON maps.",
        "Strongly-typed models eliminate network latency."
      ],
      correctAnswer: 1,
      explanation: "Directly reading `response['usr_nme']` invites runtime crashes if keys are misspelled or null. Strongly-typed models (e.g. via fromJson factories or codegen) enforce type verification at compile time and provide rich IDE intellisense."
    },
    {
      question: "Which component in Android architecture handles long-running background tasks such as playing audio or uploading files without requiring an active UI window?",
      options: [
        "Activity",
        "Service / WorkManager",
        "BroadcastReceiver with 10-second timeout",
        "Fragment"
      ],
      correctAnswer: 1,
      explanation: "In Android, Services and the modern WorkManager API handle long-running, persistent, or deferred background operations independently of UI Activities, ensuring tasks complete even if the user leaves the application."
    },
    {
      question: "What is the standard target frame rate for smooth mobile application rendering to prevent UI stutter (jank)?",
      options: [
        "15 frames per second (fps)",
        "30 frames per second (fps)",
        "60 frames per second (fps) or higher (90/120Hz)",
        "240 frames per second (fps)"
      ],
      correctAnswer: 2,
      explanation: "Modern mobile screens refresh at 60Hz (giving each frame a 16.6ms rendering budget) or higher (90Hz / 120Hz ProMotion). Dropping below this threshold creates noticeable UI stutter and lag, termed 'jank'."
    }
  ],

  "UI/UX Designer & Frontend": [
    {
      question: "According to the Web Content Accessibility Guidelines (WCAG 2.1 AA), what is the minimum required contrast ratio for normal body text against its background?",
      options: [
        "2:1",
        "3:1",
        "4.5:1",
        "7:1"
      ],
      correctAnswer: 2,
      explanation: "WCAG 2.1 Level AA requires a contrast ratio of at least 4.5:1 for normal text (under 18pt or under 14pt bold). Large text (18pt+ or 14pt+ bold) requires a minimum ratio of 3:1."
    },
    {
      question: "What does the '8pt Grid System' commonly used in digital product UI design establish?",
      options: [
        "Font sizes must always be exactly 8 pixels.",
        "All layout dimensions, margins, padding, and spacing multiples should be divisible by 8 (e.g. 8px, 16px, 24px, 32px), creating visual rhythm and consistent scaling.",
        "Icons must contain exactly 8 vector nodes.",
        "Color palettes can only have 8 shades."
      ],
      correctAnswer: 1,
      explanation: "The 8pt grid uses multiples of 8 for spacing, padding, margins, and component dimensions. Because most modern screen resolutions are divisible by 8 (or 4 on retina scaling), it ensures clean pixel alignment and consistent visual hierarchy."
    },
    {
      question: "In Figma, what feature dynamically resizes components and adjusts child elements automatically when text content or padding changes?",
      options: [
        "Smart Animate",
        "Auto Layout",
        "Vector Networks",
        "Boolean Groups"
      ],
      correctAnswer: 1,
      explanation: "Auto Layout functions like CSS Flexbox inside Figma, allowing buttons, cards, and lists to expand or shrink automatically according to their content while maintaining predefined padding and spacing rules."
    },
    {
      question: "What is the primary purpose of conducting a 'Think-Aloud Protocol' usability test with prospective users?",
      options: [
        "To test the acoustic microphone quality of user laptops.",
        "To capture the user's real-time cognitive reasoning, expectations, confusions, and mental models as they navigate through an interface.",
        "To verify that users can read text without glasses.",
        "To convince participants to purchase the software product."
      ],
      correctAnswer: 1,
      explanation: "The Think-Aloud Protocol asks participants to verbalize their thoughts, intentions, and reactions while performing tasks. This reveals user mental models, confusing navigation terms, and design blind spots that click metrics alone cannot explain."
    },
    {
      question: "Which CSS feature allows developers to specify a value that smoothly scales between a defined minimum and maximum size based on viewport width without rigid media queries?",
      options: [
        "calc() only",
        "clamp(min, preferred, max)",
        "var()",
        "resize: both"
      ],
      correctAnswer: 1,
      explanation: "`clamp(MIN, VAL, MAX)` takes three parameters: a minimum value, a preferred flexible value (often using viewport units like vw), and a maximum value. It allows fluid typography and spacing that gracefully scales without clunky media query jumps."
    }
  ]
};

// Fallback helper to adapt sample roadmaps to requested duration (4, 8, 12 weeks)
function getSampleRoadmap(career, durationWeeks, userSkills, experienceLevel) {
  const baseCareer = sampleRoadmaps[career] || sampleRoadmaps["Full Stack Web Developer"];
  const duration = parseInt(durationWeeks, 10) || 4;
  
  // Clone base roadmap
  const roadmap = JSON.parse(JSON.stringify(baseCareer));
  roadmap.durationWeeks = duration;
  roadmap.experienceLevel = experienceLevel || "Beginner";
  roadmap.recognizedExistingSkills = userSkills ? userSkills.split(',').map(s => s.trim()).filter(Boolean) : ["Foundational Computer Literacy"];

  if (duration === 8) {
    // Expand to 8 weeks by breaking down milestones into deeper hands-on modules
    const expandedWeeks = [];
    baseCareer.weeks.forEach(w => {
      // Part A: Theory & Deep Architecture
      expandedWeeks.push({
        weekNumber: (w.weekNumber * 2) - 1,
        theme: `Phase ${w.weekNumber}A: ${w.theme} - Architecture & Deep Dive`,
        milestone: `Master conceptual foundations, patterns, and security best practices for ${w.theme}.`,
        topics: w.topics.slice(0, 2).concat(["Underlying Runtime Internals & Edge Cases", "Performance & Scalability Considerations"]),
        exercises: [w.exercises[0], "Analyze real-world open-source codebases implementing these patterns"],
        project: `Mini-Lab: ${w.project.split('&')[0] || w.project} Prototype`,
        resources: w.resources,
        tasks: [
          { id: `${w.tasks[0].id}-a1`, text: `Deep-dive study: ${w.topics[0] || 'Foundational topics'}` },
          { id: `${w.tasks[0].id}-a2`, text: `Hands-on architectural exercise: ${w.exercises[0]}` }
        ]
      });
      // Part B: Applied Implementation & Project
      expandedWeeks.push({
        weekNumber: (w.weekNumber * 2),
        theme: `Phase ${w.weekNumber}B: ${w.theme} - Production Implementation`,
        milestone: w.milestone,
        topics: w.topics.slice(2).concat(["Automated Testing & Edge-Case Validation", "Documentation & Code Quality Review"]),
        exercises: [w.exercises[1] || w.exercises[0], "Refactor code for modularity, clean architecture, and linting compliance"],
        project: `Capstone Module: ${w.project}`,
        resources: w.resources,
        tasks: [
          { id: `${w.tasks[0].id}-b1`, text: `Implement comprehensive project: ${w.project}` },
          { id: `${w.tasks[0].id}-b2`, text: `Conduct unit tests, optimize performance, and write README documentation` }
        ]
      });
    });
    roadmap.weeks = expandedWeeks;
  } else if (duration === 12) {
    // 12 weeks: Comprehensive curriculum with Capstone, Portfolio, and Interview Preparation
    const expandedWeeks = [];
    // Weeks 1-8: core modules
    baseCareer.weeks.forEach(w => {
      expandedWeeks.push({
        weekNumber: (w.weekNumber * 2) - 1,
        theme: `Phase ${w.weekNumber} Core: ${w.theme}`,
        milestone: `Foundational mastery of ${w.theme}.`,
        topics: w.topics.slice(0, 2),
        exercises: [w.exercises[0]],
        project: `Lab: ${w.project.split('&')[0]} Architecture`,
        resources: w.resources,
        tasks: [
          { id: `12w-w${(w.weekNumber * 2) - 1}-t1`, text: `Study ${w.topics[0]}` },
          { id: `12w-w${(w.weekNumber * 2) - 1}-t2`, text: `Complete exercise: ${w.exercises[0]}` }
        ]
      });
      expandedWeeks.push({
        weekNumber: (w.weekNumber * 2),
        theme: `Phase ${w.weekNumber} Applied: ${w.theme}`,
        milestone: w.milestone,
        topics: w.topics.slice(2),
        exercises: [w.exercises[1] || w.exercises[0]],
        project: `Module Capstone: ${w.project}`,
        resources: w.resources,
        tasks: [
          { id: `12w-w${(w.weekNumber * 2)}-t1`, text: `Build module project: ${w.project}` },
          { id: `12w-w${(w.weekNumber * 2)}-t2`, text: `Review code quality and add tests` }
        ]
      });
    });
    // Add weeks 9-12 (Advanced portfolio, system design, mock interviews, job-ready prep)
    expandedWeeks.push({
      weekNumber: 9,
      theme: "System Design, Scalability & Architecture Best Practices",
      milestone: "Architect scalable, fault-tolerant systems considering caching, load balancing, and high availability.",
      topics: ["High-level system design fundamentals", "Caching strategies (Redis, CDNs)", "Database indexing and query optimization", "Decoupled asynchronous messaging"],
      exercises: ["Design an end-to-end architecture diagram for a high-traffic student portal", "Simulate load testing and identify performance bottlenecks"],
      project: "Comprehensive System Architecture Blueprint & Documentation",
      resources: [
        { title: "System Design Primer by Donne Martin", url: "https://github.com/donnemartin/system-design-primer" }
      ],
      tasks: [
        { id: "12w-w9-t1", text: "Study core system design patterns (Load Balancing, Caching, Sharding)" },
        { id: "12w-w9-t2", text: "Create architectural diagrams using Draw.io or Excalidraw" }
      ]
    });
    expandedWeeks.push({
      weekNumber: 10,
      theme: "Security Auditing, Performance Profiling & WCAG Accessibility",
      milestone: "Harden application security, audit accessibility, and achieve optimal Lighthouse scores.",
      topics: ["Security headers (Helmet/CSP) and dependency auditing", "Core Web Vitals and network asset optimization", "Automated accessibility testing (axe/Lighthouse)", "Secrets management and CI/CD security scanning"],
      exercises: ["Run automated npm audit and fix high-severity vulnerabilities", "Optimize image compression and CSS bundle sizes to improve load times"],
      project: "Security & Accessibility Hardening Audit Report",
      resources: [
        { title: "OWASP Top Ten Security Risks", url: "https://owasp.org/www-project-top-ten/" },
        { title: "Google Lighthouse Documentation", url: "https://developer.chrome.com/docs/lighthouse/overview" }
      ],
      tasks: [
        { id: "12w-w10-t1", text: "Conduct security vulnerability scan and patch outdated dependencies" },
        { id: "12w-w10-t2", text: "Achieve 95+ score on Lighthouse Performance and Accessibility audits" }
      ]
    });
    expandedWeeks.push({
      weekNumber: 11,
      theme: "Portfolio Polish, Open-Source Contributions & GitHub Presentation",
      milestone: "Showcase polished projects on GitHub with comprehensive documentation, live demo links, and video walkthroughs.",
      topics: ["Writing engaging, professional GitHub READMEs with architecture diagrams", "Open-source contribution etiquette and pull request workflows", "Recording crisp 2-minute product demos and GIF walkthroughs", "Creating a professional technical portfolio website"],
      exercises: ["Contribute a bug fix or documentation improvement to an open-source repository", "Structure a flagship project repository with automated CI badges"],
      project: "Flagship Open-Source Portfolio Showcase Repository",
      resources: [
        { title: "Make a README - Best Practices for Project Documentation", url: "https://www.makeareadme.com/" }
      ],
      tasks: [
        { id: "12w-w11-t1", text: "Draft professional README with architecture diagram, setup guide, and screenshots" },
        { id: "12w-w11-t2", text: "Deploy live demo to Render/Vercel and link in repository header" }
      ]
    });
    expandedWeeks.push({
      weekNumber: 12,
      theme: "Technical Interview Mastery, Resume Crafting & Career Launch",
      milestone: "Prepare for technical viva / coding interviews, align resume with job descriptions, and apply to opportunities.",
      topics: ["Data structures & algorithms review for technical screenings", "Behavioral interview STAR method (Situation, Task, Action, Result)", "Crafting ATS-friendly resumes tailored to entry-level tech roles", "LinkedIn networking and direct recruiter outreach strategies"],
      exercises: ["Conduct 3 mock technical interview rounds with peers or mentors", "Audit resume keywords against 5 real job postings"],
      project: "Job-Ready Application Package: ATS Resume, Portfolio & Viva Defense Notes",
      resources: [
        { title: "Tech Interview Handbook by Yangshun Tay", url: "https://www.techinterviewhandbook.org/" },
        { title: "IBM SkillsBuild Career Readiness Learning Tracks", url: "https://skillsbuild.org/" }
      ],
      tasks: [
        { id: "12w-w12-t1", text: "Prepare answers to 20 frequent technical and viva questions for your target career" },
        { id: "12w-w12-t2", text: "Finalize ATS-optimized resume and LinkedIn profile highlighting completed projects" }
      ]
    });
    roadmap.weeks = expandedWeeks;
  }

  return roadmap;
}

module.exports = {
  sampleRoadmaps,
  quizQuestions,
  getSampleRoadmap
};
