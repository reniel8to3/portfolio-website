import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "LOREM IPSUM",
    role: "Lorem Ipsum Dolor",
    specialization: "Consectetur Adipiscing",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroStickers: {
      leftTag: "LOREM IPSUM",
      rightTag: "DOLOR SIT AMET"
    },
    about: {
      subheader: "lorem ipsum",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      ],
      location: "Lorem City, Ipsum Country",
      email: "lorem.ipsum@example.com",
      availability: "LOREM IPSUM DOLOR SIT AMET",
      yearsOfExperience: "0+",
      projectsCompleted: "0+",
      photoLeftCaption: "Lorem & Ipsum",
      photoLeftDate: "Lorem 2026",
      photoRightCaption: "Dolor Sit Amet",
      photoRightDate: "lorem ipsum"
    },
    stampBadges: [
      { label: "Lorem Ipsum", iconType: "database" },
      { label: "Dolor Sit", iconType: "cpu" },
      { label: "Consectetur", iconType: "branch" },
      { label: "Adipiscing", iconType: "chart" }
    ],
    contactSection: {
      responseTimeNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin",
        label: "linkedin.com/in/lorem-ipsum"
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "github",
        label: "github.com/lorem-ipsum"
      },
      {
        name: "X (Twitter)",
        url: "https://x.com",
        icon: "twitter",
        label: "@lorem_ipsum"
      },
      {
        name: "Email",
        url: "mailto:lorem.ipsum@example.com",
        icon: "mail",
        label: "lorem.ipsum@example.com"
      }
    ],
    resumeUrl: "#resume"
  },

  skills: [
    {
      title: "Lorem Ipsum & Dolor",
      skills: [
        { name: "Lorem Spark", level: "Expert" },
        { name: "Ipsum Kafka", level: "Advanced" },
        { name: "Dolor HDFS", level: "Intermediate" },
        { name: "Sit Airflow", level: "Advanced" },
        { name: "Amet SQL", level: "Expert" },
        { name: "Consectetur Cloud", level: "Intermediate" }
      ]
    },
    {
      title: "Adipiscing & Elit Systems",
      skills: [
        { name: "Python Lorem", level: "Expert" },
        { name: "Java Ipsum", level: "Intermediate" },
        { name: "C / C++ Dolor", level: "Advanced" },
        { name: "SQL Sit", level: "Expert" },
        { name: "Linux Amet", level: "Advanced" },
        { name: "Next.js Elit", level: "Intermediate" }
      ]
    },
    {
      title: "Tempor & Incididunt Analytics",
      skills: [
        { name: "Pandas Lorem", level: "Expert" },
        { name: "Scikit Ipsum", level: "Advanced" },
        { name: "Dolor EDA", level: "Expert" },
        { name: "Sit BI", level: "Advanced" },
        { name: "Amet Modeling", level: "Advanced" }
      ]
    },
    {
      title: "Labore & Magna Infrastructure",
      skills: [
        { name: "AWS Lorem", level: "Advanced" },
        { name: "Docker Ipsum", level: "Advanced" },
        { name: "Git Dolor", level: "Advanced" },
        { name: "Sit Systems", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "project-01",
      title: "Lorem Ipsum Dolor: Consectetur Adipiscing",
      category: "Full Stack",
      featured: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Lorem", "Ipsum", "Dolor", "Consectetur", "Adipiscing"],
      highlights: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-02",
      title: "Vestibulum Ante Ipsum: Primis in Faucibus",
      category: "Backend",
      featured: true,
      description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
      tags: ["Vestibulum", "Curabitur", "Gravida", "Pharetra"],
      highlights: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-03",
      title: "Aenean Commodo Ligula: Eget Dolor Aenean",
      category: "AI / ML",
      featured: false,
      description: "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
      tags: ["Aenean", "Commodo", "Imperdiet", "Ultricies"],
      highlights: [
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    },
    {
      id: "project-04",
      title: "Donec Pede Justo: Fringilla Vel Aliquet",
      category: "Other",
      featured: false,
      description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
      tags: ["Donec", "Fringilla", "Elementum", "Vulputate"],
      highlights: [
        "Phasellus viverra nulla ut metus varius laoreet quisque rutrum.",
        "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com"
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Lorem Ipsum in Computer Engineering",
      fieldOfStudy: "Specialization in Dolor Analytics",
      institution: "Universitas Lorem Ipsum",
      location: "Dolor City, Ipsum Country",
      startDate: "2021",
      endDate: "2025",
      gradeOrGpa: "Summa Cum Laude (Lorem)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      coursework: [
        "Lorem Systems & Cloud",
        "Distributed Dolor Computing",
        "Database Consectetur & SQL",
        "Computer Adipiscing Architecture",
        "Statistical Elit Learning",
        "Data Structures & Tempor",
        "Operating Incididunt Multithreading",
        "Data Mining & Labore"
      ],
      achievements: [
        "Lorem ipsum dolor sit amet honoris",
        "Magna aliqua capstone distributed project lead",
        "Praesentium voluptatum deleniti atque mentor"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Lorem Ipsum Certified Data Architect",
      issuer: "Amazon Lorem Services",
      issueDate: "2024",
      expirationDate: "2027",
      credentialId: "LOREM-CERT-12345",
      credentialUrl: "https://example.com/verify",
      skills: ["Lorem EMR", "Ipsum Glue", "Dolor Lakehouse", "Sit Redshift", "Amet Security"]
    },
    {
      id: "cert-2",
      title: "Consectetur Certified Associate Spark",
      issuer: "Databricks Lorem",
      issueDate: "2024",
      credentialId: "IPSUM-CERT-67890",
      credentialUrl: "https://example.com/verify",
      skills: ["PySpark Lorem", "DataFrame Ipsum", "Spark Dolor", "Query Sit"]
    },
    {
      id: "cert-3",
      title: "Adipiscing Cloud Fundamentals",
      issuer: "Google Lorem Cloud",
      issueDate: "2023",
      credentialId: "DOLOR-CERT-54321",
      credentialUrl: "https://example.com/verify",
      skills: ["BigQuery Lorem", "Dataflow Ipsum", "Pub/Sub Dolor", "Pipelines Sit"]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Lorem Ipsum Engineering Intern",
      company: "Dolor Sit Enterprise",
      location: "Lorem City / Remote",
      type: "Internship",
      startDate: "JUN 2024",
      endDate: "AUG 2024",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
      ],
      technologies: ["Lorem", "Ipsum", "Dolor", "Sit"]
    }
  ]
};
