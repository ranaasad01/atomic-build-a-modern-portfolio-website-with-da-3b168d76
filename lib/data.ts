export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "E2E Test Automation Framework",
    description:
      "Built a scalable end-to-end test automation framework using Cypress and TypeScript for a fintech SaaS platform. Reduced regression testing time by 70% and integrated with CI/CD pipelines.",
    tags: ["Cypress", "TypeScript", "GitHub Actions", "Allure Reports"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
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
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
];
