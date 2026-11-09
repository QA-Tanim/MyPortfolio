const emailAddress = "ishtiaqueahmed1998@gmail.com";

const expertise = [
  { title: "Manual testing", text: "Systematic validation of functionality, usability, workflows, and business requirements across web, mobile, and enterprise applications.", items: "Functional · Regression · Integration · Exploratory · End-to-end · Smoke & sanity · Test design · Defect triage" },
  { title: "Automation testing", text: "Building and maintaining resilient automation suites that improve regression coverage without adding brittle maintenance overhead.", items: "Playwright · Selenium · POM · Cross-browser · CI/CD · Appium · TestNG · Allure" },
  { title: "API testing", text: "Validating service behavior, business logic, payload integrity, schemas, authentication, and error boundaries.", items: "REST · Postman · Newman · JSON Schema · Token chaining · Negative cases · Contract checks" },
  { title: "Performance testing", text: "Evaluating stability, latency, throughput, and resource behavior under representative concurrent workloads.", items: "Apache JMeter · Load & stress · p90/p95/p99 · Throughput · Lighthouse · Bottleneck analysis" }
];

const tools = ["Playwright", "TypeScript", "Postman", "Newman", "Apache JMeter", "Selenium", "Appium", "Python", "Java", "JavaScript", "MySQL", "GitHub Actions", "Jira", "Allure", "Lighthouse", "Maestro"];

const responsibilities = [
  "Perform end-to-end quality assurance across enterprise business applications.",
  "Design test scenarios from requirements, acceptance criteria, and business workflows.",
  "Execute functional, regression, integration, and exploratory testing across sprint releases.",
  "Test HRMS PeopleDesk SaaS and POS Managerium with multi-role permissions and complex business rules.",
  "Partner with development and business analyst teams to investigate defects with reproducible logs.",
  "Validate API payload integrity, authentication, and service status codes.",
  "Evaluate application responsiveness under simulated concurrent loads.",
  "Build and maintain Playwright automation for stable application features using Page Object Model.",
  "Use AI-assisted workflows to generate scenarios, edge cases, and maintainable automation.",
  "Validate employee management, payroll, leave approvals, and multi-tier HR workflows.",
  "Support continuous quality improvements and production release sanity runs."
];

const projects = [
  { title: "Playwright TypeScript POM Framework", category: "Automation", language: "TypeScript", featured: true, description: "Production-ready E2E automation for OrangeHRM, built with Playwright, TypeScript, and Page Object Model.", detail: "A modular test architecture with accessible locators, auto-waiting assertions, typed fixtures, dynamic test data, cross-browser execution, CI workflows, and trace capture.", tags: ["Playwright", "TypeScript", "POM", "CI/CD", "Allure"], url: "https://github.com/QA-Tanim/playwright-typescript-pom-framework" },
  { title: "Postman & Newman API Automation Suite", category: "API Testing", language: "JavaScript", featured: true, description: "Automated REST API testing with synthetic data, stateful request chaining, and 22+ assertions.", detail: "Covers status codes, response-time bounds, JSON schemas, authentication, negative inputs, and a create-verify-update-delete lifecycle through Newman CLI.", tags: ["Postman", "Newman", "REST API", "Faker.js", "JSON Schema"], url: "https://github.com/QA-Tanim/Postman-API-test-automation" },
  { title: "Enterprise SQA Performance Testing Suite", category: "Performance Testing", language: "JMeter / XML", featured: true, description: "Apache JMeter load and stress tests, 100k-sample throughput benchmarks, and Lighthouse audits.", detail: "Parameterized test plans model ramp-up, peak, and endurance workloads; percentile response times and throughput curves help expose bottlenecks.", tags: ["Apache JMeter", "Load testing", "Stress testing", "Lighthouse"], url: "https://github.com/QA-Tanim/performance-testing-portfolio" },
  { title: "Mahfil Mobile App Manual Testing", category: "Manual Testing", language: "QA Documentation", featured: true, description: "Manual QA portfolio for the Mahfil Android app, including 20 functional cases, defect reports, and UX analysis.", detail: "Exploratory coverage targets audio playback, interruptions, orientation changes, network fluctuations, backgrounding, and diverse Android screen densities.", tags: ["Mobile QA", "Test design", "Defect reporting", "Android"], url: "https://github.com/QA-Tanim/Mahfil-Mobile-App-Manual-Testing" },
  { title: "Chaldal E-Commerce Manual Testing Suite", category: "Manual Testing", language: "QA Documentation", featured: false, description: "User journey validation across catalog navigation, search, cart state, and checkout workflows.", detail: "Includes order placement scenarios, quantity boundaries, coupon validation, cart persistence, session restoration, and release sanity checks.", tags: ["E-commerce QA", "Regression", "Smoke testing", "Manual testing"], url: "https://github.com/QA-Tanim/Chaldal-ecommerce-manual-testing" },
  { title: "DroidLogsPilot V2 - Android Log Analyzer", category: "Tools", language: "Python", featured: false, description: "CLI utility for adb logcat capture, crash extraction, ANR filtering, and QA log triage.", detail: "Scopes device logs by app package, highlights fatal exceptions, and exports timestamped, report-ready snippets for defect investigation.", tags: ["Python", "ADB", "Android", "CLI"], url: "https://github.com/QA-Tanim/DroidLogsPilot-V2" },
  { title: "Code Differ - QA & Dev Chrome Extension", category: "Tools", language: "JavaScript", featured: false, description: "Offline browser extension to compare code snippets and highlight line-by-line changes.", detail: "Designed for quick private comparisons of JSON payloads, configuration files, and code, with no external service or dependencies.", tags: ["JavaScript", "Chrome extension", "Diff", "DevTools"], url: "https://github.com/QA-Tanim/Code_Differ" },
  { title: "JSON Formatter & Schema Inspector", category: "Tools", language: "JavaScript", featured: false, description: "Browser utility for formatting, validating, and inspecting nested API payloads.", detail: "Includes a collapsible tree view, precise syntax error locations, and copy/minify options for everyday API testing workflows.", tags: ["JavaScript", "JSON", "API QA", "Web tools"], url: "https://github.com/QA-Tanim/Json_Formattor" },
  { title: "SQA Assessment - Thaura AI", category: "Manual Testing", language: "QA Documentation", featured: false, description: "Quality assessment covering functional scenarios, boundary analysis, defect grading, and release readiness.", detail: "Translates feature specifications into positive, negative, and edge-case test matrices with structured defect reports and acceptance checks.", tags: ["Test scenarios", "Bug reporting", "Quality assessment"], url: "https://github.com/QA-Tanim/sqa-assessment-thaura-ai" },
  { title: "UIAutomator 3", category: "Automation", language: "Python", featured: false, description: "Android UI automation framework with scored locators and a built-in web inspector.", detail: "Combines Android device control, UI inspection, interaction recording, and generated automation workflows.", tags: ["Android", "Python", "UI automation"], url: "https://github.com/QA-Tanim/UI_Automator3" },
  { title: "PhantomDroid X", category: "Tools", language: "Python", featured: false, description: "Android security testing project with structured evidence and report outputs.", detail: "Organizes assessment findings and produces reports for authorized Android testing work.", tags: ["Android", "Python", "Security testing"], url: "https://github.com/QA-Tanim/PanthomDroid" },
  { title: "QA Test Case Recorder", category: "Tools", language: "JavaScript", featured: false, description: "Chrome extension for recording QA steps, replaying flows, and exporting test cases.", detail: "Captures browser interactions and supports playback, automation code generation, and issue notes.", tags: ["Chrome extension", "JavaScript", "Test automation"], url: "https://github.com/QA-Tanim/QA_Recorder" },
  { title: "GitHub Profile", category: "Tools", language: "Markdown", featured: false, description: "Professional profile covering QA experience, testing skills, and selected projects.", detail: "A GitHub profile README introducing professional experience and ongoing quality engineering interests.", tags: ["GitHub", "Profile", "QA"], url: "https://github.com/QA-Tanim/QA-Tanim" },
  { title: "PDFZero - PDF Reader and Editor", category: "Tools", language: "JavaScript", featured: false, description: "Chrome PDF reader with local viewing, annotation, and export features.", detail: "A browser-based PDF extension with reading, search, annotation, and document export tools.", tags: ["Chrome extension", "JavaScript", "PDF"], url: "https://github.com/QA-Tanim/PDF-Reader-Extension-" },
  { title: "Receipt Lens - Offline Expense Tracker", category: "Tools", language: "Dart", featured: false, description: "Flutter expense tracker that scans receipts and organizes spending offline.", detail: "Uses on-device text recognition for receipt capture, expense categorization, duplicate detection, and reports.", tags: ["Flutter", "Dart", "Mobile app", "OCR"], url: "https://github.com/QA-Tanim/Offline-Expense-Tracker" },
  { title: "Ishtiaque Ahmed Tanim - Portfolio", category: "Tools", language: "TypeScript", featured: false, description: "React and TypeScript portfolio website with project filtering and responsive layouts.", detail: "A Vite-based personal portfolio featuring experience, skills, project, and contact sections.", tags: ["React", "TypeScript", "Vite"], url: "https://github.com/QA-Tanim/ishtiaque_portfolio" },
  { title: "DSA Visualizer", category: "Tools", language: "JavaScript", featured: false, description: "Interactive visualizations for sorting, searching, data structures, and graph traversal.", detail: "Demonstrates algorithms through animated steps and controls for exploring data structure operations.", tags: ["JavaScript", "Algorithms", "Visualization"], url: "https://github.com/QA-Tanim/DSA-Visualizer" },
  { title: "Chrome Start Page", category: "Tools", language: "HTML", featured: false, description: "Chrome new-tab extension with a clock, search, quick links, and recent history.", detail: "A static browser extension build that replaces the default new-tab page with a dashboard.", tags: ["Chrome extension", "HTML", "Browser"], url: "https://github.com/QA-Tanim/Chrome-Start-Page" },
  { title: "Banglish to English", category: "Tools", language: "TypeScript", featured: false, description: "Personal Banglish-to-English translation app.", detail: "A TypeScript application with a Vite setup and translation interface.", tags: ["TypeScript", "Translation", "Web app"], url: "https://github.com/QA-Tanim/Banglish-to-English" },
  { title: "MyPortfolio", category: "Tools", language: "HTML", featured: false, description: "Static portfolio website focused on software quality assurance and testing.", detail: "The portfolio source repository, including the page, styles, project data, and downloadable CV.", tags: ["HTML", "Portfolio", "QA"], url: "https://github.com/QA-Tanim/MyPortfolio" }
];

const caseStudies = [
  { title: "HRMS Regression Automation Architecture", subtitle: "Maintaining resilient Playwright suites as product workflows evolve.", category: "TEST AUTOMATION ARCHITECTURE", challenge: "Frequent UI changes make brittle selectors fail, while long workflows can time out as background jobs process payroll and employee records.", strategy: ["Prefer accessible, user-facing locators and collaborate on stable test attributes for dynamic components.", "Compose reusable Page Objects and encapsulate interactions in clear action methods.", "Replace arbitrary sleeps with web-first assertions; retain screenshots and traces when tests fail.", "Use AI-assisted workflows to explore scenario variants and maintain test fixtures."], takeaways: "Semantic selectors reduce maintenance; traces make failures actionable; clear separation of concerns keeps test code maintainable.", tech: "Playwright · TypeScript · POM · Trace Viewer · CI/CD" },
  { title: "REST API Quality Assurance & Automated Pipeline", subtitle: "Validating service integrity, schemas, and error boundaries with Postman and Newman.", category: "API RELIABILITY & INTEGRATION", challenge: "UI tests cannot efficiently cover every payload, permission boundary, and invalid input; repeated manual endpoint checks slow down releases.", strategy: ["Validate response contracts with reusable JSON schemas and explicit status assertions.", "Chain IDs and tokens across realistic create, verify, update, and teardown workflows.", "Cover malformed inputs, token expiry, role boundaries, and sanitized error responses.", "Run collections headlessly with Newman and generate consistent reports."], takeaways: "API-first checks surface business logic issues early; chained requests provide realistic workflows; strict schemas catch silent contract drift.", tech: "Postman · Newman · REST APIs · JavaScript · JSON Schema" },
  { title: "Enterprise Application Performance Testing", subtitle: "Modeling concurrent workloads and investigating bottlenecks with Apache JMeter.", category: "PERFORMANCE ENGINEERING", challenge: "Payroll cycles, attendance events, and simultaneous transactions can reveal latency spikes and contention not visible in single-user tests.", strategy: ["Model realistic arrival rates with staged workloads and user think-times.", "Parameterize requests and isolate test data to avoid unrealistic cache effects.", "Track p90, p95, and p99 latency alongside throughput as concurrency rises.", "Correlate slow transactions with database and server resource behavior."], takeaways: "Performance testing establishes baselines and service expectations; representative data and percentile metrics make results useful.", tech: "Apache JMeter · Load testing · Throughput · Resource monitoring" }
];

const principles = [
  { title: "Think beyond the happy path", tagline: "Test edge cases, failure modes, and unexpected behavior.", body: "Quality work starts where the standard user flow ends: network drops, invalid data, boundaries, and graceful degradation.", details: ["Treat negative and boundary cases as first-class requirements.", "Protect data integrity and avoid exposing internal errors."] },
  { title: "Understand the business", tagline: "Technical success must satisfy real requirements.", body: "A successful response is not enough if payroll rules, permissions, or accounting workflows are wrong. Understand the domain and advocate for users.", details: ["Tie scenarios to real workflows.", "Clarify acceptance criteria before implementation."] },
  { title: "Automate with purpose", tagline: "Reduce repetition and raise confidence with maintainable coverage.", body: "Automate stable, high-value regression paths first. Resilient locators and state-driven synchronization keep suites useful as products change.", details: ["Prioritize critical, frequent workflows.", "Review test code with production-quality rigor."] },
  { title: "Quality is a team effort", tagline: "Prevent defects together, not just report them later.", body: "Quality belongs throughout development. Early feedback, clear triage, and shared ownership make dependable releases possible.", details: ["Share reproducible steps and useful diagnostics.", "Clarify edge cases before sprint commitments."] }
];

const learning = [
  { title: "Advanced Playwright Automation", focus: "Network mocking, workers, distributed execution", description: "Exploring sharding across CI runners, fixture orchestration, and WebSocket testing.", status: "Active exploration" },
  { title: "Python Automation & Scripting", focus: "Pytest, data validation, QA triage utilities", description: "Expanding test parametrization, log analysis, and backend validation scripting.", status: "In progress" },
  { title: "SQL & Database Validation", focus: "Joins, transactions, data integrity", description: "Practicing multi-table consistency, audit trails, and relational data validation.", status: "Continuous practice" },
  { title: "AI-Assisted Quality Engineering", focus: "Scenario generation, locator maintenance", description: "Exploring how AI workflows can accelerate defect reproduction and automation upkeep.", status: "Active exploration" },
  { title: "Application Security & OWASP", focus: "Input handling, sessions, access control", description: "Studying baseline security checks to incorporate into API and functional testing.", status: "In progress" },
  { title: "Performance Engineering", focus: "Distributed loads, telemetry, bottleneck analysis", description: "Advancing workload simulation and correlation with server resource metrics.", status: "Active exploration" },
  { title: "CI/CD Pipeline Integration", focus: "GitHub Actions, triggers, artifacts", description: "Connecting smoke and regression tests to pull requests with useful reporting.", status: "Continuous practice" }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const tagMarkup = (items, className = "tool-tag") => items.map((item) => `<span class="${className}">${escapeHtml(item)}</span>`).join("");

const expertiseGrid = document.querySelector("#expertise-grid");
expertiseGrid.innerHTML = expertise.map((item, index) => `<article class="expertise-card reveal"><span class="card-index">0${index + 1} / DOMAIN</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><div class="card-foot">${escapeHtml(item.items)}</div></article>`).join("");
document.querySelector("#tool-tags").innerHTML = tagMarkup(tools);
document.querySelector("#responsibility-list").innerHTML = responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
document.querySelector("#experience-tools").innerHTML = tagMarkup(["Playwright", "TypeScript", "Postman", "Newman", "Apache JMeter", "MySQL", "Jira", "Git"], "inline-tag");

const categories = ["All", "Automation", "API Testing", "Performance Testing", "Manual Testing", "Tools"];
const filterHost = document.querySelector("#project-filters");
const projectHost = document.querySelector("#projects-grid");
const searchInput = document.querySelector("#project-search");
const projectToggle = document.querySelector("#projects-toggle");
const initialProjectCount = 6;
let activeCategory = "All";
let showAllProjects = false;
let revealObserver;
filterHost.innerHTML = categories.map((category, index) => `<button class="filter-button" type="button" aria-pressed="${index === 0}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");

function renderProjects() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const searchable = `${project.title} ${project.description} ${project.language} ${project.category} ${project.tags.join(" ")}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });
  const displayed = showAllProjects ? visible : visible.slice(0, initialProjectCount);
  projectHost.innerHTML = displayed.map((project) => `<article class="project-card reveal"><div class="project-card-top"><span class="project-category">${escapeHtml(project.category.toUpperCase())}</span>${project.featured ? '<span class="project-featured">FEATURED</span>' : ""}</div><div class="project-body"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><div class="project-tags">${tagMarkup(project.tags, "")}</div></div><details class="project-details"><summary>Project notes</summary><p>${escapeHtml(project.detail)}</p><p><strong>Primary language:</strong> ${escapeHtml(project.language)}</p></details><a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a></article>`).join("");
  document.querySelector("#project-count").textContent = `SHOWING ${displayed.length} OF ${visible.length} PROJECTS`;
  projectToggle.hidden = visible.length <= initialProjectCount;
  projectToggle.textContent = showAllProjects ? "Show Less" : "View All";
  projectToggle.setAttribute("aria-expanded", String(showAllProjects));
  document.querySelector("#empty-state").hidden = visible.length > 0;
  observeReveals(projectHost);
}

filterHost.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  showAllProjects = false;
  filterHost.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  renderProjects();
});
searchInput.addEventListener("input", () => {
  showAllProjects = false;
  renderProjects();
});
projectToggle.addEventListener("click", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showAllProjects = !showAllProjects;
    renderProjects();
    return;
  }

  const startHeight = projectHost.getBoundingClientRect().height;
  projectToggle.disabled = true;
  projectHost.style.height = `${startHeight}px`;
  projectHost.classList.add("is-animating");
  projectHost.offsetHeight;
  showAllProjects = !showAllProjects;
  renderProjects();

  projectHost.style.height = "auto";
  const endHeight = projectHost.getBoundingClientRect().height;
  projectHost.style.height = `${startHeight}px`;
  projectHost.offsetHeight;

  const finishAnimation = (event) => {
    if (event.target !== projectHost || event.propertyName !== "height") return;
    projectHost.removeEventListener("transitionend", finishAnimation);
    projectHost.classList.remove("is-animating");
    projectHost.style.height = "";
    projectToggle.disabled = false;
  };
  projectHost.addEventListener("transitionend", finishAnimation);
  requestAnimationFrame(() => {
    projectHost.style.height = `${endHeight}px`;
  });
});
renderProjects();

document.querySelector("#case-list").innerHTML = caseStudies.map((study, index) => `<article class="case-study reveal"><span class="case-number">0${index + 1}</span><div><p class="case-meta">${escapeHtml(study.category)}</p><h3>${escapeHtml(study.title)}</h3><p class="case-subtitle">${escapeHtml(study.subtitle)}</p><details><summary>Read the approach</summary><div class="case-content"><div><h4>THE CHALLENGE</h4><p>${escapeHtml(study.challenge)}</p></div><div><h4>THE APPROACH</h4><ul>${study.strategy.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul></div><div><h4>KEY TAKEAWAYS</h4><p>${escapeHtml(study.takeaways)}</p></div><p class="case-tech">${escapeHtml(study.tech)}</p></div></details></div></article>`).join("");
document.querySelector("#principles-grid").innerHTML = principles.map((principle, index) => `<article class="principle reveal"><span class="principle-number">0${index + 1}</span><h3>${escapeHtml(principle.title.toUpperCase())}</h3><p class="principle-tagline">${escapeHtml(principle.tagline)}</p><p>${escapeHtml(principle.body)}</p><ul>${principle.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul></article>`).join("");
document.querySelector("#learning-grid").innerHTML = learning.map((item) => `<article class="learning-item reveal"><span class="learning-status">${escapeHtml(item.status)}</span><h3>${escapeHtml(item.title)}</h3><strong>${escapeHtml(item.focus)}</strong><p>${escapeHtml(item.description)}</p></article>`).join("");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isExpanded);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("open");
  }
});

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 18);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function observeReveals(root = document) {
  if (!("IntersectionObserver" in window)) {
    root.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}
observeReveals();

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...navigation.querySelectorAll("a")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = String(values.get("subject")).trim();
  const body = `Hello Tanim,\n\n${String(values.get("message")).trim()}\n\nFrom: ${String(values.get("name")).trim()} (${String(values.get("email")).trim()})`;
  document.querySelector("#form-note").textContent = "Opening your email app. If it does not open, email ishtiaqueahmed1998@gmail.com directly.";
  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
