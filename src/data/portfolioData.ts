import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",
    role: "Computer Engineer • Big Data Analytics Specialist",
    tagline: "I engineer distributed systems and pipelines that turn raw data into actionable clarity.",
    shortBio: "Computer Engineering graduate specialized in Big Data Analytics, high-throughput distributed architectures, and end-to-end data pipelines.",
    about: {
      paragraphs: [
        "I'm a Computer Engineering graduate with a deep fascination for high-throughput distributed systems, big data architectures, and analytical modeling. My foundation bridges hardware-level computing with large-scale cloud data processing.",
        "I care about low latency, reliable ETL pipelines, the nuanced edge cases in data cleansing everyone overlooks, and engineering infrastructure that transforms millions of unstructured events into genuine business insight.",
        "When I'm not tuning Spark jobs or benchmarking distributed databases, I enjoy exploring cloud infrastructure, hacking on open-source tools, and collaborating on impactful technical challenges."
      ],
      location: "[Your City, Country / Open to Relocation]",
      email: "hello.yourname@example.com",
      availability: "OPEN TO FULL-TIME DATA & SOFTWARE ROLES",
      yearsOfExperience: "Fresh Graduate",
      projectsCompleted: "8+"
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
      title: "Big Data & Distributed Computing",
      skills: [
        { name: "Apache Spark / PySpark", level: "Advanced" },
        { name: "Apache Kafka", level: "Advanced" },
        { name: "Hadoop / HDFS", level: "Intermediate" },
        { name: "Apache Airflow", level: "Advanced" },
        { name: "SQL & Query Tuning", level: "Expert" },
        { name: "Snowflake / Redshift", level: "Intermediate" }
      ]
    },
    {
      title: "Programming & Engineering Foundations",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Java / Scala", level: "Intermediate" },
        { name: "C / C++ (Hardware & Systems)", level: "Advanced" },
        { name: "SQL (PostgreSQL, MySQL)", level: "Expert" },
        { name: "Bash & Linux Shell", level: "Advanced" },
        { name: "TypeScript / Next.js", level: "Intermediate" }
      ]
    },
    {
      title: "Data Analytics & Machine Learning",
      skills: [
        { name: "Pandas & NumPy", level: "Expert" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "Data Cleaning & EDA", level: "Expert" },
        { name: "Tableau & Power BI", level: "Advanced" },
        { name: "Statistical Modeling", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & DevOps Infrastructure",
      skills: [
        { name: "AWS (S3, EMR, Glue, Lambda)", level: "Advanced" },
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "Git & CI/CD Pipelines", level: "Advanced" },
        { name: "Distributed System Design", level: "Advanced" },
        { name: "Vercel & Cloud Deployments", level: "Intermediate" }
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
      degree: "Bachelor of Science in Computer Engineering",
      fieldOfStudy: "Specialization in Big Data Analytics",
      institution: "[Your University / Institute Name]",
      location: "[City, State / Country]",
      startDate: "2021",
      endDate: "2025",
      gradeOrGpa: "[Your GPA / Honors / Dean's List]",
      description: "Comprehensive curriculum combining computer hardware engineering, distributed software systems, algorithm optimization, and large-scale data analytics.",
      coursework: [
        "Big Data Systems & Cloud Architecture",
        "Distributed Computing & Algorithms",
        "Database Management Systems & SQL",
        "Computer Organization & Architecture",
        "Statistical Machine Learning",
        "Data Structures & Algorithm Analysis",
        "Operating Systems & Multithreading",
        "Data Mining & Business Intelligence"
      ],
      achievements: [
        "Dean's Honor List for Academic Excellence",
        "Lead Engineer — Senior Capstone Distributed Data Pipeline Project",
        "Teaching Assistant / Peer Mentor for Computer Systems & Algorithms"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Data Analytics / Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2024",
      expirationDate: "2027",
      credentialId: "[AWS-CERT-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["AWS EMR", "AWS Glue", "S3 Lakehouse", "Redshift", "Cloud Security"]
    },
    {
      id: "cert-2",
      title: "Databricks Certified Associate Developer for Apache Spark",
      issuer: "Databricks",
      issueDate: "2024",
      credentialId: "[DATABRICKS-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["PySpark", "DataFrame API", "Spark Architecture", "Query Optimization"]
    },
    {
      id: "cert-3",
      title: "Google Cloud Big Data & Machine Learning Fundamentals",
      issuer: "Google Cloud",
      issueDate: "2023",
      credentialId: "[GCP-BIGDATA-ID]",
      credentialUrl: "https://example.com/verify",
      skills: ["BigQuery", "Cloud Dataflow", "Cloud Pub/Sub", "Data Pipelines"]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Big Data & Analytics Engineering Intern",
      company: "[Tech Enterprise / Data Lab Name]",
      location: "[Remote / City]",
      type: "Internship",
      startDate: "JUN 2024",
      endDate: "AUG 2024",
      description: [
        "Built and optimized distributed PySpark jobs processing over 2TB of daily operational telemetry.",
        "Designed automated Airflow DAG workflows reducing scheduled ingestion lag from 4 hours to under 25 minutes.",
        "Collaborated with data scientists and infrastructure engineers to validate schema integrity and data warehouse performance."
      ],
      technologies: ["Apache Spark", "Python", "Airflow", "PostgreSQL", "Docker", "Git"]
    }
  ]
};
