import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",
    role: "[YOUR ROLE / DEGREE, e.g. Computer Engineering Grad]",
    specialization: "[YOUR SPECIALIZATION, e.g. Big Data Analytics Spec.]",
    tagline: "[I engineer data systems that turn raw chaos into clarity.]",
    shortBio: "[I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.]",
    heroStickers: {
      leftTag: "[TOP LEFT TAG / HIGHLIGHT 1]",
      rightTag: "[TOP RIGHT TAG / HIGHLIGHT 2]"
    },
    about: {
      subheader: "[what's up / about subheading]",
      paragraphs: [
        "[Paragraph 1: Tell your story here. Share how you got started in technology and design, what sparks your curiosity, and what drives you.]",
        "[Paragraph 2: Describe your creative process or technical interests. What kind of problems do you love solving? What tools do you adore working with?]",
        "[Paragraph 3: Share your current adventures, hobbies, or what you are excited to learn next. Add a warm invite to connect.]"
      ],
      location: "[YOUR LOCATION / RELOCATION]",
      email: "hello.yourname@example.com",
      availability: "[YOUR AVAILABILITY / STATUS, e.g. OPEN TO NEW ROLES]",
      yearsOfExperience: "[X]+",
      projectsCompleted: "[X]+",
      photoLeftCaption: "[PHOTO 1 CAPTION]",
      photoLeftDate: "[PHOTO 1 DATE/SUBTITLE]",
      photoRightCaption: "[PHOTO 2 CAPTION]",
      photoRightDate: "[PHOTO 2 DATE/SUBTITLE]"
    },
    stampBadges: [
      { label: "[SKILL BADGE 1]", iconType: "database" },
      { label: "[SKILL BADGE 2]", iconType: "cpu" },
      { label: "[SKILL BADGE 3]", iconType: "branch" },
      { label: "[SKILL BADGE 4]", iconType: "chart" }
    ],
    contactSection: {
      responseTimeNote: "[Response time: Within 24 hours. Open to full-time roles & freelance projects.]"
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
      title: "[Category 1 — e.g. Big Data & Distributed Computing]",
      skills: [
        { name: "[Skill 1 — e.g. Apache Spark]", level: "Expert" },
        { name: "[Skill 2 — e.g. Apache Kafka]", level: "Advanced" },
        { name: "[Skill 3 — e.g. Hadoop / HDFS]", level: "Intermediate" },
        { name: "[Skill 4 — e.g. Apache Airflow]", level: "Advanced" },
        { name: "[Skill 5 — e.g. SQL & Query Tuning]", level: "Expert" },
        { name: "[Skill 6 — e.g. Snowflake / Redshift]", level: "Intermediate" }
      ]
    },
    {
      title: "[Category 2 — e.g. Programming & Systems]",
      skills: [
        { name: "[Skill 7 — e.g. Python]", level: "Expert" },
        { name: "[Skill 8 — e.g. Java / Scala]", level: "Intermediate" },
        { name: "[Skill 9 — e.g. C / C++ Systems]", level: "Advanced" },
        { name: "[Skill 10 — e.g. SQL / PostgreSQL]", level: "Expert" },
        { name: "[Skill 11 — e.g. Bash & Linux Shell]", level: "Advanced" },
        { name: "[Skill 12 — e.g. TypeScript / Next.js]", level: "Intermediate" }
      ]
    },
    {
      title: "[Category 3 — e.g. Data Analytics & Machine Learning]",
      skills: [
        { name: "[Skill 13 — e.g. Pandas & NumPy]", level: "Expert" },
        { name: "[Skill 14 — e.g. Scikit-Learn]", level: "Advanced" },
        { name: "[Skill 15 — e.g. Data Cleaning & EDA]", level: "Expert" },
        { name: "[Skill 16 — e.g. Tableau & Power BI]", level: "Advanced" },
        { name: "[Skill 17 — e.g. Statistical Modeling]", level: "Advanced" }
      ]
    },
    {
      title: "[Category 4 — e.g. Cloud & DevOps Infrastructure]",
      skills: [
        { name: "[Skill 18 — e.g. AWS (S3, EMR, Glue)]", level: "Advanced" },
        { name: "[Skill 19 — e.g. Docker & Containers]", level: "Advanced" },
        { name: "[Skill 20 — e.g. Git & CI/CD Pipelines]", level: "Advanced" },
        { name: "[Skill 21 — e.g. Distributed System Design]", level: "Advanced" }
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
      degree: "[YOUR DEGREE, e.g. Bachelor of Science in Computer Engineering]",
      fieldOfStudy: "[YOUR SPECIALIZATION, e.g. Specialization in Big Data Analytics]",
      institution: "[YOUR UNIVERSITY / INSTITUTE NAME]",
      location: "[CITY, STATE / COUNTRY]",
      startDate: "[START YEAR, e.g. 2021]",
      endDate: "[GRAD YEAR, e.g. 2025]",
      gradeOrGpa: "[YOUR GPA / HONORS / DEAN'S LIST]",
      description: "[Comprehensive curriculum combining computer hardware engineering, distributed software systems, algorithm optimization, and large-scale data analytics.]",
      coursework: [
        "[Big Data Systems & Cloud Architecture]",
        "[Distributed Computing & Algorithms]",
        "[Database Management Systems & SQL]",
        "[Computer Organization & Architecture]",
        "[Statistical Machine Learning]",
        "[Data Structures & Algorithm Analysis]",
        "[Operating Systems & Multithreading]",
        "[Data Mining & Business Intelligence]"
      ],
      achievements: [
        "[Dean's Honor List for Academic Excellence]",
        "[Lead Engineer — Senior Capstone Distributed Data Pipeline Project]",
        "[Teaching Assistant / Peer Mentor for Computer Systems & Algorithms]"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "[CERTIFICATION TITLE 1, e.g. AWS Certified Data Analytics / Solutions Architect]",
      issuer: "[ISSUER 1, e.g. Amazon Web Services (AWS)]",
      issueDate: "[YEAR, e.g. 2024]",
      expirationDate: "[EXPIRATION YEAR, e.g. 2027]",
      credentialId: "[AWS-CERT-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["[AWS EMR]", "[AWS Glue]", "[S3 Lakehouse]", "[Redshift]", "[Cloud Security]"]
    },
    {
      id: "cert-2",
      title: "[CERTIFICATION TITLE 2, e.g. Databricks Certified Associate Developer for Apache Spark]",
      issuer: "[ISSUER 2, e.g. Databricks]",
      issueDate: "[YEAR, e.g. 2024]",
      credentialId: "[DATABRICKS-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["[PySpark]", "[DataFrame API]", "[Spark Architecture]", "[Query Optimization]"]
    },
    {
      id: "cert-3",
      title: "[CERTIFICATION TITLE 3, e.g. Google Cloud Big Data & Machine Learning Fundamentals]",
      issuer: "[ISSUER 3, e.g. Google Cloud]",
      issueDate: "[YEAR, e.g. 2023]",
      credentialId: "[GCP-BIGDATA-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["[BigQuery]", "[Cloud Dataflow]", "[Cloud Pub/Sub]", "[Data Pipelines]"]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "[YOUR INTERNSHIP / ROLE TITLE, e.g. Big Data Engineering Intern]",
      company: "[COMPANY / LAB NAME, e.g. Tech Studio / Enterprise]",
      location: "[CITY / REMOTE]",
      type: "Internship",
      startDate: "[START MONTH YEAR, e.g. JUN 2024]",
      endDate: "[END MONTH YEAR, e.g. AUG 2024]",
      description: [
        "[Describe an impactful project you built, e.g. Built and optimized distributed PySpark jobs processing over 2TB of daily operational telemetry.]",
        "[Describe an improvement or system you designed, e.g. Designed automated Airflow DAG workflows reducing ingestion lag from 4 hours to under 25 minutes.]",
        "[Describe cross-functional collaboration, e.g. Collaborated with data scientists and engineers to validate schema integrity and data warehouse performance.]"
      ],
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]"]
    }
  ]
};
