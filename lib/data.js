// Single source of truth for all portfolio content.
// Edit here; pages only handle layout.

export const profile = {
    name: "Sasank Talluri",
    firstName: "Sasank",
    fullName: "Sasank Dattu Talluri",
    role: "Software Engineer",
    tagline: "Backends that scale. UIs that feel effortless. AI that ships. Maintainable code, with reviews that hold the bar.",
    summary:
        "Software Engineer with 5 years of experience building scalable backend systems, distributed services, and full-stack applications using Java, Spring Boot, C#, .NET, and AWS. Experienced in API design, event-driven architecture, SQL performance optimization, fault tolerance, and data integration, with hands-on CI/CD and production on-call experience.",
    email: "sasankdt@gmail.com",
    phone: "+1 (716) 259-7128",
    location: "Austin, TX",
    github: "https://github.com/sasanktalluri",
    linkedin: "https://www.linkedin.com/in/tallurisasank/",
    site: "https://sasanktalluri.dev",
};

// Home page strip: how I work
export const principles = [
    { icon: "shield", title: "Design for failure", text: "Retries, idempotency, graceful fallbacks." },
    { icon: "gauge", title: "Measure, then optimize", text: "Profiles and query plans over hunches." },
    { icon: "repeat", title: "Automate the boring", text: "Infra as code, CI/CD, zero click-ops." },
    { icon: "activity", title: "Own it in production", text: "Observability, on-call, root causes." },
];

export const highlights = [
    {
        icon: "server",
        title: "Distributed systems",
        text: "Scalable, fault-tolerant backend services with concurrency, retries, circuit breakers and well-designed APIs.",
    },
    {
        icon: "flow",
        title: "Event-driven architecture",
        text: "Async pipelines on Kafka and SQS, with transactional outbox and idempotency keys for effectively-once processing.",
    },
    {
        icon: "cloud",
        title: "Cloud & DevOps",
        text: "AWS infrastructure as code, containerized deployments, CI/CD pipelines, monitoring and production on-call.",
    },
    {
        icon: "layers",
        title: "Full-stack applications",
        text: "End-to-end products with React and TypeScript frontends on top of Spring Boot, .NET and GraphQL APIs.",
    },
];

// "What I build" featured card: how a RAG + agent system actually flows
export const aiPipeline = {
    label: "Currently exploring · learning & building",
    title: "Agentic AI & LLM systems",
    text: "What I'm digging into now: retrieval-augmented agents in Python that index knowledge once, answer every query from retrieved context, and get measured with evals.",
    phases: [
        {
            name: "Ingest",
            note: "offline",
            steps: [
                { icon: "chunk", name: "Chunking", detail: "Split docs into overlapping chunks + metadata" },
                { icon: "embed", name: "Embeddings", detail: "Encode each chunk as a vector" },
                { icon: "vector", name: "Vector index", detail: "Store vectors & metadata in ChromaDB" },
            ],
        },
        {
            name: "Query",
            note: "per request",
            steps: [
                { icon: "cache", name: "Semantic cache", detail: "Reuse answers for similar past queries" },
                { icon: "agent", name: "Agent orchestration", detail: "Plan steps, route, call tools" },
                { icon: "search", name: "Retrieval", detail: "Top-k similarity search over the index" },
                { icon: "llm", name: "Grounded generation", detail: "LLM answers from retrieved context, streamed" },
                { icon: "evals", name: "Evals", detail: "Score relevance & faithfulness, catch regressions" },
            ],
        },
    ],
    stack: ["Python", "LangChain", "ChromaDB", "FastAPI", "AsyncIO", "Redis", "GPT-4"],
};

export const experience = [
    {
        company: "Stem Solutions LLC",
        client: "Amazon",
        position: "Software Dev Engineer",
        duration: "Aug 2025 - Present",
        stack: ["Java", "Spring Boot", "PostgreSQL", "GraphQL", "React", "TypeScript", "AWS CDK", "SQS"],
        bullets: [
            "Designed a reusable Java/Spring Boot validation framework for ~300 demand lines per forecast, using Fork/Join concurrency and configurable batching to parallelize independent rules while balancing load against downstream API and database capacity.",
            "Integrated with internal RPC services for reliable service-to-service communication, handling request/response validation, retries, and timeout/exception management.",
            "Added circuit breakers and retry/fallback handling to keep the framework resilient to transient failures in external APIs and databases.",
            "Cut PostgreSQL query latency from 11s to 1.4s by rewriting recursive multi-join queries with CTEs, standardizing deduplication logic, and adding composite indexes guided by EXPLAIN plans.",
            "Replaced 60+ table-specific Spring Batch jobs with one configuration-driven framework for Oracle EBS → Aurora PostgreSQL replication, cutting new-table onboarding from 6-7 hours to 1-2 hours.",
            "Built an event-driven pipeline that validates and promotes forecast data to a plan-view review stage, then delivers submitted orders to procurement using a transactional outbox, SQS, and idempotency keys.",
            "Built Spring Boot GraphQL APIs and React/TypeScript features for large, data-heavy views with pagination, status indicators, and validation feedback.",
            "Maintained multi-stack AWS infrastructure in TypeScript CDK (ECS/Fargate, SQS, load balancers, API Gateway, VPC), plus CI/CD stages, integration tests, CloudWatch monitoring, and production on-call.",
        ],
    },
    {
        company: "Rebecca Everlene Trust",
        position: "Software Developer",
        duration: "Feb 2025 - Aug 2025",
        stack: [],
        bullets: [],
    },
    {
        company: "Infosys",
        client: "Cox Communications",
        position: "Specialist Engineer",
        duration: "Jun 2022 - Aug 2023",
        stack: ["C#", ".NET Web API", "WinForms", "SQLite", "Kubernetes", "Jenkins", "PowerShell"],
        bullets: [
            "Delivered three major releases of a C#/WinForms desktop client and .NET Web API layer for a device-health monitoring platform deployed to 8,000+ Windows devices, handling 500K+ health-metric events daily.",
            "Designed an event-driven, hierarchical notification engine with severity-based alerting and admin/user overrides, contributing to a 35% increase in recommendation engagement.",
            "Built a crash-resilient client telemetry pipeline with SQLite persistence and threshold/scheduled batched flushes to control backend ingestion load.",
            "Implemented persona-scoped configuration management with SQLite caching and refresh-on-poll, enabling runtime behavior changes without redeploys.",
            "Streamed device telemetry into an HBase/Spark ML pipeline that computed device health scores powering the recommendation engine.",
            "Automated device remediation through PowerShell workflows, and deployed containerized services on Kubernetes via Jenkins/Bitbucket CI/CD.",
        ],
    },
    {
        company: "iBridge Techsoft",
        position: "Software Engineer",
        duration: "Jun 2020 - May 2022",
        stack: ["Java", "Spring Boot", "Kafka", "React", "MySQL", "AWS", "Jenkins"],
        bullets: [
            "Designed and implemented 20+ secure RESTful APIs in Java and Spring Boot powering core business workflows for enterprise clients.",
            "Built event-driven, decoupled service integrations using Kafka for asynchronous, real-time data exchange.",
            "Integrated third-party APIs to reduce manual data entry, and contributed React frontend features on top of the REST APIs.",
            "Maintained multi-environment Jenkins CI/CD pipelines and MySQL-backed services on AWS EC2 and S3.",
        ],
    },
];

export const education = [
    {
        institution: "University at Buffalo, SUNY",
        degree: "MS in Computer Science",
        duration: "Aug 2023 - Feb 2025",
        note: "GPA 3.93 / 4.00",
    },
    {
        institution: "Infosys",
        degree: "Certified Spring Microservices Dev",
        duration: "Certified",
    },
    {
        institution: "Cisco Networking Academy",
        degree: "PCAP - Python Essentials",
        duration: "Certified",
    },
];

export const skillGroups = [
    {
        name: "Languages",
        items: ["Java", "C#", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
    },
    {
        name: "Frameworks & APIs",
        items: ["Spring Boot", "Spring Batch", ".NET Web API", "FastAPI", "Django REST", "React", "Angular", "WinForms", "GraphQL", "REST", "Microservices", "JPA"],
    },
    {
        name: "Data & Messaging",
        items: ["PostgreSQL", "Aurora / RDS", "MySQL", "Oracle EBS", "SQLite", "MongoDB", "DynamoDB", "Redis", "Kafka", "Amazon SQS"],
    },
    {
        name: "Cloud & DevOps",
        items: ["AWS (ECS/Fargate, Lambda, EC2, S3, CloudWatch)", "AWS CDK", "Docker", "Kubernetes", "Jenkins", "Git", "Bitbucket", "CI/CD", "Infrastructure as Code"],
    },
    {
        name: "Architecture",
        items: ["System Design", "Distributed Systems", "Event-Driven Architecture", "Concurrency", "Fault Tolerance", "Caching", "Performance Optimization"],
    },
    {
        name: "AI & Tools",
        items: ["Agentic Workflows", "RAG", "Embeddings", "Vector Search", "Semantic Caching", "LLM Evals", "LangChain", "ChromaDB", "Kiro", "Claude", "GitHub Copilot", "Postman", "Jira", "Confluence"],
    },
];

export const about = [
    { fieldName: "Name", fieldValue: "Sasank Dattu Talluri" },
    { fieldName: "Experience", fieldValue: "5 Years" },
    { fieldName: "Location", fieldValue: "United States" },
    { fieldName: "Languages", fieldValue: "English" },
    { fieldName: "Email", fieldValue: "sasankdt@gmail.com" },
];

// Ordered by weight: featured first, then earlier/coursework work
export const projects = [
    {
        title: "GenAI Chatbot with Context",
        category: "AI & Backend",
        featured: true,
        description:
            "Built a low-latency backend for real-time query responses using FastAPI and REST APIs with a RAG pipeline powered by ChromaDB and LangChain. Implemented document ingestion (chunking, embeddings, metadata) to improve retrieval relevance, and added async streaming via SSE for a more responsive user experience. Used MongoDB for lightweight user/session data and Redis caching to reduce repeated work; documented API contracts, error handling, and deployment steps for maintainability.",
        stack: ["FastAPI", "ChromaDB", "LangChain", "MongoDB", "Redis", "GPT-4", "AsyncIO"],
        live: null,
        github: null,
    },
    {
        title: "VisTrack – Visitor Tracking Platform",
        category: "Full-stack",
        featured: true,
        description:
            "Developed a full-stack application with Spring Boot microservices and a React frontend for visitor check-ins, services, and payments. Integrated OCR workflows using Google Vision API to extract receipt data and persist transactions, and implemented secure authentication using JWT. Added consistent error handling and documentation for APIs, workflows, and deployment steps.",
        stack: ["React.js", "Spring Boot", "MySQL", "Google Vision API", "JWT"],
        live: null,
        github: "https://github.com/sasanktalluri/VisitorTrackingBackend",
    },
    {
        title: "Pintos Operating System",
        category: "Systems",
        featured: true,
        description:
            "Implemented core OS features including scheduling, synchronization primitives, and system call handling. Debugged low-level concurrency and memory issues, strengthening fundamentals in systems design, troubleshooting, and thread-safe programming.",
        stack: ["C", "C++", "Multithreading", "OS Architecture"],
        live: null,
        github: "https://github.com/UBCSE421-521/project-1-team-saj",
    },
    {
        title: "DMQL – Database Design and Web Application for SQL Query Operations",
        category: "Data",
        description:
            "Designed a PostgreSQL database from scratch by creating an ERD, converting it to a relational model, and normalizing to BCNF. Populated tables with thousands of records and implemented SQL operations (SELECT/INSERT/UPDATE/DELETE), including advanced JOINs and subqueries. Built a Django REST API and a JavaScript web UI that allows users to input SQL queries and view results, and improved performance through indexing and query optimization using response-time monitoring.",
        stack: ["PostgreSQL", "Django REST", "JavaScript"],
        live: null,
        github: "https://github.com/sasanktalluri/DMQL",
    },
    {
        title: "CLI Chat Multi-Threaded",
        category: "Systems",
        description:
            "Built a multithreaded chat application in Java using socket programming. Implemented a server that supports multiple simultaneous clients with a dedicated thread per client, real-time message broadcasting, and thread-safe handling of active client connections. Added a logout flow for graceful client disconnection.",
        stack: ["Java", "Sockets", "Multithreading"],
        live: null,
        github: "https://github.com/sasanktalluri/CLI_Chat_Multi_Threaded",
    },
    {
        title: "Fresh Veggies – Android Application",
        category: "Mobile",
        description:
            "Built an Android application with a clean workflow for listing and purchasing items, integrating a Firebase backend for real-time updates. Designed modular UI components, added input validation, and improved usability with predictable navigation and reliable data synchronization.",
        stack: ["Java", "Firebase"],
        live: null,
        github: "https://github.com/sasanktalluri/FreshVeggiesApp",
    },
    {
        title: "JDBC Connectivity – Amigo Wallet",
        category: "Data",
        description:
            "Demonstrates JDBC connectivity with PostgreSQL using Java and Maven by connecting to the database, inserting records into a table, and retrieving data for verification. Uses Maven for dependency management.",
        stack: ["Java", "JDBC", "PostgreSQL", "Maven"],
        live: null,
        github: "https://github.com/sasanktalluri/JDBC_Connectivity",
    },
];


export const navLinks = [
    { name: "home", path: "/" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
];
