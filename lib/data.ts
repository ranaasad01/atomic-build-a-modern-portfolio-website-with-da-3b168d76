export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Rao Muhammad Ali",
  tagline: "SQA Engineer · Test Automation · Quality Assurance",
  email: "raoali.qa@gmail.com",
  linkedin: "https://www.linkedin.com/in/rao-muhammad-ali-sqa/",
  location: "Pakistan",
  bio: "Results-driven SQA Engineer with 3+ years of hands-on experience in manual and automated testing across web, mobile, and API platforms. Skilled in building scalable test automation frameworks using Cypress, Selenium, and Playwright. Proven track record of reducing regression cycles, improving software quality, and collaborating with cross-functional Agile teams to deliver high-quality software products. ISTQB-certified with a strong foundation in QA methodologies, CI/CD integration, and performance testing.",
};

export const experience = [
  {
    id: 1,
    role: "SQA Engineer",
    company: "Arbisoft",
    period: "Jan 2023 – Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Designed and maintained end-to-end test automation frameworks using Cypress and Playwright for large-scale web applications.",
      "Collaborated with developers and product managers in Agile sprints to define acceptance criteria and test plans.",
      "Integrated automated test suites into CI/CD pipelines via GitHub Actions, reducing regression time by 65%.",
      "Conducted API testing using Postman and REST Assured, covering 300+ endpoints with data-driven test cases.",
      "Performed performance and load testing with JMeter and k6, identifying bottlenecks before production releases.",
    ],
  },
  {
    id: 2,
    role: "Junior SQA Engineer",
    company: "Systems Limited",
    period: "Jun 2021 – Dec 2022",
    location: "Lahore, Pakistan",
    bullets: [
      "Executed manual functional, regression, and exploratory testing for enterprise web and mobile applications.",
      "Developed Selenium WebDriver automation scripts in Java using the Page Object Model design pattern.",
      "Managed bug lifecycle in JIRA, writing detailed defect reports and coordinating with dev teams for timely resolution.",
      "Participated in test planning, test case design, and sprint reviews as part of a cross-functional Agile team.",
      "Contributed to test documentation including test plans, test cases, and traceability matrices.",
    ],
  },
  {
    id: 3,
    role: "QA Intern",
    company: "Techlogix",
    period: "Jan 2021 – May 2021",
    location: "Lahore, Pakistan",
    bullets: [
      "Assisted senior QA engineers in manual testing of web-based enterprise applications.",
      "Wrote and executed test cases for functional and UI testing across multiple browsers.",
      "Learned and applied ISTQB testing principles and Agile QA practices.",
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "University of Engineering and Technology (UET)",
    degree: "Bachelor of Science in Computer Science",
    period: "2017 – 2021",
    location: "Lahore, Pakistan",
  },
  {
    id: 2,
    institution: "ISTQB",
    degree: "Certified Tester Foundation Level (CTFL)",
    period: "2022",
    location: "International",
  },
];

export const projects = [
  {
    id: 1,
    title: "E2E Test Automation Framework",
    description:
      "Built a scalable end-to-end test automation framework using Cypress and TypeScript for a fintech SaaS platform. Reduced regression testing time by 70% and integrated with CI/CD pipelines.",
    tags: ["Cypress", "TypeScript", "GitHub Actions", "Allure Reports"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "API Testing Suite",
    description:
      "Designed a comprehensive REST API testing suite using Postman and Newman with automated collection runs. Covered 300+ endpoints with data-driven tests and detailed HTML reporting.",
    tags: ["Postman", "Newman", "JavaScript", "REST API"],
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Selenium WebDriver Framework",
    description:
      "Developed a Page Object Model-based Selenium framework in Java with TestNG, Maven, and ExtentReports. Automated 500+ test cases across multiple browsers.",
    tags: ["Selenium", "Java", "TestNG", "Maven"],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Performance Testing Dashboard",
    description:
      "Created a JMeter-based performance testing setup with Grafana and InfluxDB dashboards to monitor load, stress, and spike tests in real time for a high-traffic e-commerce platform.",
    tags: ["JMeter", "Grafana", "InfluxDB", "Performance"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const skills = [
  { category: "Test Automation", items: ["Cypress", "Selenium", "Playwright", "Appium", "TestNG", "JUnit"] },
  { category: "API & Performance", items: ["Postman", "Newman", "JMeter", "REST Assured", "GraphQL Testing", "k6"] },
  { category: "CI/CD & DevOps", items: ["GitHub Actions", "Jenkins", "Docker", "JIRA", "Azure DevOps", "Git"] },
  { category: "Methodologies", items: ["Agile/Scrum", "BDD/TDD", "Risk-Based Testing", "Test Planning", "Bug Lifecycle", "ISTQB"] },
];

export const techBadges = [
  "Cypress", "Selenium", "Playwright", "Postman", "JMeter", "JIRA",
  "GitHub Actions", "TestNG", "Appium", "REST Assured", "Docker", "k6",
  "Cypress", "Selenium", "Playwright", "Postman", "JMeter", "JIRA",
  "GitHub Actions", "TestNG", "Appium", "REST Assured", "Docker", "k6",
];

export const stats = [
  { value: "3+", label: "Years in QA" },
  { value: "500+", label: "Test Cases Written" },
  { value: "70%", label: "Regression Time Saved" },
  { value: "15+", label: "Projects Tested" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rao-muhammad-ali-sqa/", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:raoali.qa@gmail.com", icon: "Mail" },
];
