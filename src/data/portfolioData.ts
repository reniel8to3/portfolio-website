import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",
    role: "[Product Designer & Creative Technologist]",
    tagline: "[I design software that gets out of your way.]",
    shortBio: "[I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.]",
    about: {
      paragraphs: [
        "[Paragraph 1: Tell your story here. Share how you got started in technology and design, what sparks your curiosity, and what drives you.]",
        "[Paragraph 2: Describe your creative process or technical interests. What kind of problems do you love solving? What tools do you adore working with?]",
        "[Paragraph 3: Share your current adventures, hobbies, or what you are excited to learn next. Add a warm invite to connect.]"
      ],
      location: "[Chicago, IL / Remote]",
      email: "hello.yourname@example.com",
      availability: "OPEN TO NEW WORK AND GOOD PROBLEMS",
      yearsOfExperience: "[X]+",
      projectsCompleted: "[X]+"
    },
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin",
        label: "linkedin.com/in/[your-handle]"
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "github",
        label: "github.com/[your-handle]"
      },
      {
        name: "X (Twitter)",
        url: "https://x.com",
        icon: "twitter",
        label: "@[your-handle]"
      },
      {
        name: "Email",
        url: "mailto:hello.yourname@example.com",
        icon: "mail",
        label: "hello.yourname@example.com"
      }
    ],
    resumeUrl: "#resume"
  },

  skills: [
    {
      title: "Core Disciplines",
      skills: [
        { name: "Interaction Design", level: "Expert" },
        { name: "Prototyping", level: "Advanced" },
        { name: "User Research", level: "Expert" },
        { name: "Motion Design", level: "Advanced" },
        { name: "Design Systems", level: "Expert" },
        { name: "Frontend Architecture", level: "Advanced" }
      ]
    },
    {
      title: "Technical Stack",
      skills: [
        { name: "React & Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Node.js", level: "Intermediate" },
        { name: "HTML & CSS", level: "Expert" },
        { name: "REST APIs", level: "Intermediate" }
      ]
    },
    {
      title: "Creative Tools",
      skills: [
        { name: "Figma", level: "Expert" },
        { name: "VS Code", level: "Expert" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Vercel", level: "Advanced" },
        { name: "Linear", level: "Intermediate" }
      ]
    },
    {
      title: "Mindset & Approach",
      skills: [
        { name: "Attention to Detail", level: "Expert" },
        { name: "Fast Iteration", level: "Advanced" },
        { name: "Empathetic Communication", level: "Expert" },
        { name: "Systems Thinking", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "project-01",
      title: "Tandem",
      category: "Full Stack",
      featured: true,
      description: "From 'who owes who' to money that finally feels shared.",
      tags: ["Mobile App", "React Native", "TypeScript", "Design System"],
      highlights: [
        "Minimal friction expense splitting for modern roommates",
        "Sub-second sync with real-time balance calculations"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-02",
      title: "Forge",
      category: "Frontend",
      featured: true,
      description: "Getting a new engineer from day one to shipping without the panic.",
      tags: ["Next.js", "Tailwind CSS", "Developer Tooling", "Figma"],
      highlights: [
        "Interactive onboarding checklists and contextual architecture maps",
        "Reduced setup friction by 40% across engineering teams"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-03",
      title: "Pulse Studio",
      category: "AI / ML",
      featured: false,
      description: "A playful workspace for testing and designing thoughtful AI interactions.",
      tags: ["TypeScript", "Next.js", "AI Interfaces", "Motion"],
      highlights: [
        "Contextual prompt sandboxing with side-by-side comparative views"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-04",
      title: "Cadence",
      category: "Backend",
      featured: false,
      description: "Asynchronous task orchestration engine built with reliability at heart.",
      tags: ["Node.js", "Redis", "Distributed Queues", "Docker"],
      highlights: [
        "High throughput zero-loss event dispatch pipeline"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "[Your Degree / Program, e.g. B.S. in Computer Science & Design]",
      fieldOfStudy: "[Human-Computer Interaction / Software Engineering]",
      institution: "[University / Institute Name]",
      location: "[City, State / Country]",
      startDate: "[2021]",
      endDate: "[2025]",
      gradeOrGpa: "[Honors / GPA / Distinction]",
      description: "[Coursework spanning human-computer interaction, algorithms, web architecture, and visual design systems.]",
      coursework: [
        "Interaction Design",
        "Data Structures",
        "Web Architecture",
        "User Interface Systems",
        "Software Engineering"
      ],
      achievements: [
        "[Dean's Honor List / Academic Distinction]",
        "[Annual Hackathon Design Award Winner]"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "[Certification Title 1, e.g. AWS Certified Cloud Practitioner]",
      issuer: "[Issuing Academy, e.g. Amazon Web Services]",
      issueDate: "[JAN 2024]",
      expirationDate: "[JAN 2027]",
      credentialId: "[AWS-CCP-9872134]",
      credentialUrl: "https://example.com/verify",
      skills: ["Cloud Architecture", "Security", "Infrastructure"]
    },
    {
      id: "cert-2",
      title: "[Certification Title 2, e.g. Meta Front-End Developer]",
      issuer: "[Meta]",
      issueDate: "[AUG 2023]",
      credentialId: "[META-54129]",
      credentialUrl: "https://example.com/verify",
      skills: ["React", "UI/UX Architecture", "Modern Web"]
    },
    {
      id: "cert-3",
      title: "[Certification Title 3, e.g. Google UX Design Certificate]",
      issuer: "[Google]",
      issueDate: "[DEC 2023]",
      credentialId: "[GOOGLE-UX-88210]",
      credentialUrl: "https://example.com/verify",
      skills: ["Figma", "User Research", "Wireframing"]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "[Product Design & Engineering Intern]",
      company: "[Tech Studio / Company Name]",
      location: "[Remote / City]",
      type: "Internship",
      startDate: "[JUN 2024]",
      endDate: "[AUG 2024]",
      description: [
        "[Spearheaded design and frontend implementation of core user workflow.]",
        "[Conducted usability interviews and prototyped edge-case interactions.]",
        "[Collaborated with cross-functional engineers to launch the production portal.]"
      ],
      technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"]
    }
  ]
};
