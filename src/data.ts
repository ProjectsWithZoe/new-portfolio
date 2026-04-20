export type Project = {
  name: string
  description: string
  stack: string[]
  demo: string
  github: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export const tagline = "Full-stack developer building fast, clean software from UI to database."

export const about =
  "I'm a full-stack software developer specialising in React and Svelte UIs, RESTful services with Node.js, and PostgreSQL. I enjoy modernising legacy codebases, working in agile teams, and using AI-assisted tools to keep code quality high and delivery fast. Currently at WhiteBullet Solutions in London, shipping high-performance interfaces and CI/CD pipelines on AWS."

export const projects: Project[] = [
  {
    name: "Todaysdevs.com",
    description:
      "A learning-to-code platform that encourages learning with friends and project collaboration.",
    stack: ["React", "Node.js / Fastify", "Tailwind CSS", "PostgreSQL / Neon", "Vercel", "Stripe"],
    demo: "https://todaysdevs.com",
    github: "https://github.com/ProjectsWithZoe/TodaysDevs",
  },
  {
    name: "Humble-ui.com",
    description:
      "A prompt generation site for developers — describe what you want and get a well detailed and concise prompt for you IDE.",
    stack: ["React", "Node.js / Fastify", "Tailwind CSS", "PostgreSQL", "Vercel", "Stripe"],
    demo: "https://humble-ui.com",
    github: "https://github.com/ProjectsWithZoe/mobileapp-dev",
  },
  {
    name: "Talentapp.co.uk",
    description:
      "A CV-to-job-description compatibility calculator built for technology and developer roles.",
    stack: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel", "Stripe"],
    demo: "https://talentapp.co.uk",
    github: "https://github.com/ProjectsWithZoe/match-me-v2",
  },
  {
    name: "Goodbadmeh.news",
    description:
      "A daily news app that fetches headlines and ranks each article as positive, negative, or neutral.",
    stack: ["React", "Node.js", "Tailwind CSS", "Vercel"],
    demo: "https://goodbadmeh.news",
    github: "",
  },
  {
    name: "Countdown",
    description:
      "Extremely simple app that counts down the days, hours, minutes to an event",
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    demo: "countdown-app-ten-sooty.vercel.app",
    github: "https://github.com/ProjectsWithZoe/Countdown-app",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Svelte", "Node.js", "Fastify", "Express.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git & GitHub", "AWS (CodeBuild · S3 · EC2)", "Vercel", "Vite", "CI/CD Pipelines", "Firebase", "Agile · Redmine", "Grafana", "Better-Auth", "REST APIs", "ClaudeCode", "OpenSpec", "Generative AI", "AI Assisted Development"
    ],
  },
]
