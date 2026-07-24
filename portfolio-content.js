/**
 * ================================================================
 * PORTFOLIO CONTENT — Edit this file to update your Portfolio PDF
 * ================================================================
 * All content for portfolio-pdf.html is managed here.
 * Changes here automatically reflect in the PDF page.
 *
 * ADDING PROJECT IMAGES:
 *   In mainProjects[].images, add more objects to the array:
 *   { src: "images/portfolio/your-image.png", caption: "Description" }
 *   The first image is always the main screenshot.
 *   Additional images appear as a thumbnail gallery below.
 * ================================================================
 */

const PORTFOLIO_CONTENT = {

    // ──────────────────────────────────────────────────────────────
    // PROFILE
    // ──────────────────────────────────────────────────────────────
    profile: {
        name: "Michail",
        fullName: "Michail Tjhang",
        role: "Full-Stack Web Developer",
        tagline: "PHP (Laravel) · Next.js · React.js · Docker",
        photo: "images/intro-bg.png",
        email: "michailaja@gmail.com",
        linkedin: "linkedin.com/in/michailtjhang",
        linkedinUrl: "https://linkedin.com/in/michailtjhang",
        github: "github.com/michailtjhang",
        githubUrl: "https://github.com/michailtjhang",
        website: "michailtjhang.github.io",
        location: "Central Jakarta, DKI Jakarta",
        bio: "Informatics Engineering graduate (GPA 3.89/4.00) with hands-on experience as a Full-Stack Web Developer. Specialized in PHP (Laravel), custom WordPress plugin engineering, RESTful API integration, and containerized deployments with Docker. Certified BNSP Junior Web Developer, adept at delivering end-to-end digital solutions from architecture to production.",
        highlights: [
            { value: "3.89", label: "GPA / 4.00" },
            { value: "2+",   label: "Years Exp." },
            { value: "8+",   label: "Projects" },
            { value: "BNSP", label: "Certified" }
        ],
        coreSkills: [
            "PHP / Laravel", "Next.js", "React.js",
            "Vue.js", "Golang (Gin)", "PostgreSQL",
            "MySQL", "Docker", "WordPress Plugins",
            "Tailwind CSS", "Google Apps Script", "Cloudflare WAF"
        ]
    },

    // ──────────────────────────────────────────────────────────────
    // MAIN PROJECTS
    // ──────────────────────────────────────────────────────────────
    mainProjects: [
        {
            id: "okoce",
            number: "01",
            title: "OK OCE Indonesia",
            subtitle: "Platform Redesign, Plugin Engineering & Security Hardening",
            category: "Web Development & Automation",
            period: "November 2025 – May 2026",
            role: "Web Developer · Maganghub Kemnaker",
            url: "https://okoce.net/",
            urlDisplay: "okoce.net",
            images: [
                {
                    src: "images/portfolio/okoce.png",
                    caption: "okoce.net — Homepage Redesign & Performance Optimization"
                }
                // Add more images below when ready:
                // { src: "images/portfolio/okoce-plugin.png", caption: "Finpay Plugin Admin Panel" },
                // { src: "images/portfolio/okoce-dashboard.png", caption: "Event Management Dashboard" }
            ],
            tech: [
                "WordPress", "Elementor", "Tailwind CSS", "PHP",
                "Google Apps Script", "Cloudflare WAF",
                "Fazzpass API (WhatsApp OTP)", "Finpay API", "MySQL"
            ],
            overview: "As Web Developer at OK OCE Indonesia (via Maganghub Kemnaker), I led multiple concurrent technical initiatives: a full homepage performance overhaul, development of two custom WordPress plugins, automated payment integration, real-time data pipeline engineering, and critical security incident response on compromised executive assets.",
            challengesSolutions: [
                {
                    challenge: "Homepage had poor mobile responsiveness and slow load times due to unoptimized Elementor block structures that could not be modified via the standard Elementor editor.",
                    solution: "Injected custom Tailwind CSS and targeted JavaScript directly into Elementor HTML blocks, fixing all responsive breakpoints and optimizing render-blocking resources — resulting in a 30% improvement in mobile loading speed."
                },
                {
                    challenge: "Paid event transactions required manual bank transfer receipt verification by admin, causing processing delays and introducing significant human error risk.",
                    solution: "Engineered the OK OCE Finpay Plugin from scratch — a custom WordPress plugin that bridges Elementor forms directly to the Finpay Payment Gateway API, fully automating 100% of paid event transactions end-to-end."
                },
                {
                    challenge: "Frontend engagement metrics (Pre/Post-test scores, M&E data) were not captured automatically, leaving the public laporan-dampak dashboard perpetually out of date.",
                    solution: "Built the OK OCE Tracker Plugin and architected a Google Apps Script data pipeline that intercepts form submissions, normalizes the payload, and pushes metrics into Google Sheets and the live public dashboard in real-time."
                },
                {
                    challenge: "Registration forms were overwhelmed with bot spam and fake accounts — no identity verification existed at the point of registration.",
                    solution: "Integrated Fazzpass API to enforce WhatsApp OTP verification on all registration flows, cutting spam and fake account registrations by over 95% immediately after deployment."
                },
                {
                    challenge: "The Executive Chairman's personal websites were compromised by malware injections, causing intermittent domain downtime and reputational risk.",
                    solution: "Led the full incident response: audited and removed all malware, hardened server configs, re-routed traffic through Cloudflare WAF, and compiled official documentation for PSE Kominfo certification."
                }
            ],
            impact: [
                "30% faster mobile page load speed",
                "100% automation of paid event transactions",
                "95%+ reduction in spam & fake registrations",
                "Real-time M&E data pipeline to public dashboard",
                "50+ community Penggerak manage events autonomously",
                "0% domain downtime after Cloudflare hardening"
            ]
        },

        {
            id: "reinsan",
            number: "02",
            title: "Reinsan Capital",
            subtitle: "Corporate Landing Page — MSME Investment Management Platform",
            category: "Corporate Web Development",
            period: "2025",
            role: "Frontend Developer",
            url: "https://reinsan-capital.co.id/",
            urlDisplay: "reinsan-capital.co.id",
            images: [
                {
                    src: "images/portfolio/reinsan-capital.png",
                    caption: "Reinsan Capital — Corporate Landing Page, Full Viewport View"
                }
                // { src: "images/portfolio/reinsan-mobile.png", caption: "Mobile Responsive View" },
                // { src: "images/portfolio/reinsan-sections.png", caption: "Service & Team Sections" }
            ],
            tech: [
                "React.js", "Tailwind CSS", "Vite",
                "HTML5 Semantic", "SEO Optimization",
                "Lazy Loading", "Responsive Design"
            ],
            overview: "Developed a high-performance corporate landing page for Reinsan Capital, an investment management firm focused on MSME scaling. The engagement required translating Elementor-based design references into a clean React architecture, with strong emphasis on visual trust-building, SEO fundamentals, and cross-device performance.",
            challengesSolutions: [
                {
                    challenge: "The client's design reference was provided in Elementor HTML format — no component structure, many inline styles — making it unsuitable for direct use in a React project.",
                    solution: "Manually deconstructed every Elementor HTML section into reusable, prop-driven React components with clean separation of layout, styling, and content — yielding a maintainable codebase ready for future updates."
                },
                {
                    challenge: "The site needed strong SEO foundations for organic search visibility in investment and MSME-related queries, without relying on third-party plugins.",
                    solution: "Implemented semantic HTML5 throughout (proper h1-h3 hierarchy, landmark elements), complete meta tags, Open Graph protocol for social sharing, and structured data — all manually within the React component tree."
                },
                {
                    challenge: "Corporate credibility depends on visual precision and fast responsiveness; any layout breakage on mobile would undermine investor trust.",
                    solution: "Applied Tailwind CSS with strict mobile-first methodology, verified every breakpoint manually, and optimized all image assets with lazy loading to ensure fast and flawless rendering across all screen sizes."
                }
            ],
            impact: [
                "Production-ready corporate site with mobile-first design",
                "Complete SEO structure implemented from day one",
                "Clean React component architecture for easy maintenance",
                "Pixel-accurate implementation of client design references",
                "Optimized performance across all device categories"
            ]
        },

        {
            id: "transtrack",
            number: "03",
            title: "TransTRACK Marketing Dashboard",
            subtitle: "Centralized Social Media Analytics Suite — Enterprise Internal Tool",
            category: "Enterprise Web Application",
            period: "April 2024 – October 2024",
            role: "Full Stack Developer · Internship at TransTRACK",
            url: "https://dashboard-marketing.transtrack.id/",
            urlDisplay: "dashboard-marketing.transtrack.id",
            images: [
                {
                    src: "images/portfolio/transtrack.png",
                    caption: "TransTRACK Marketing Dashboard — Multi-Platform Analytics Overview"
                }
                // { src: "images/portfolio/transtrack-queue.png", caption: "Queue Worker Monitoring" },
                // { src: "images/portfolio/transtrack-docker.png", caption: "Docker Container Setup" }
            ],
            tech: [
                "Laravel (PHP)", "Tailwind UI", "MySQL", "Redis",
                "Docker", "Docker Compose", "Queue Workers",
                "Instagram Graph API", "Facebook Graph API", "LinkedIn API"
            ],
            overview: "Built a centralized social media analytics dashboard during internship at TransTRACK, a B2B fleet management tech company. The platform aggregates data from official Instagram, Facebook, and LinkedIn APIs into a single unified interface, eliminating the need for the marketing team to manually log into each platform for reporting.",
            challengesSolutions: [
                {
                    challenge: "Each social platform uses a different OAuth flow, token lifecycle, rate-limit policy, and response schema — making it impossible to build a single generic API handler.",
                    solution: "Designed separate Laravel Service classes per platform (InstagramService, FacebookService, LinkedInService), each handling its own OAuth flow, token refresh, and response normalization into a unified internal DTO before persistence."
                },
                {
                    challenge: "API data fetching is slow (seconds to minutes per platform) and cannot run synchronously within an HTTP request lifecycle without causing timeouts and degraded UX.",
                    solution: "Implemented Laravel Queue Workers backed by Redis as the queue driver. All platform API fetches are dispatched as background jobs, keeping the UI fully responsive while data syncs reliably without manual intervention."
                },
                {
                    challenge: "Environment inconsistency between developers' local machines and the staging server caused 'works on my machine' bugs during team onboarding and feature integration.",
                    solution: "Containerized the full application stack with Docker Compose (PHP-FPM, Nginx, MySQL, Redis), allowing any team member to reproduce the exact environment with a single command, eliminating all env-related discrepancies."
                },
                {
                    challenge: "Multi-platform metrics had incompatible units and time granularities, making a unified dashboard view and apples-to-apples comparison difficult to implement.",
                    solution: "Designed a normalized MySQL schema mapping all platform-specific metrics to a canonical format. The Tailwind UI dashboard renders this data as unified KPI widgets and comparative time-series charts for the marketing team."
                }
            ],
            impact: [
                "Unified analytics from 3 social platforms in 1 dashboard",
                "Zero UI blocking — all syncs run async via Queue Workers",
                "Dockerized stack — new devs onboard in minutes",
                "Consistent staging environment across all team members",
                "Marketing team reporting workflow fully centralized & standardized"
            ]
        }
    ],

    // ──────────────────────────────────────────────────────────────
    // OTHER PROJECTS
    // ──────────────────────────────────────────────────────────────
    otherProjects: [
        {
            title: "Komorebi Comic Platform",
            category: "Web Application",
            url: "https://komorebi-labs.vercel.app/",
            image: "images/portfolio/komorebi.png",
            tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "UploadThing"],
            description: "Next-gen digital manga and comic reading platform with high-fidelity image rendering, structured content tracking via PostgreSQL, and secure chapter file management."
        },
        {
            title: "GroqGPT: AI Chat Interface",
            category: "AI Application",
            url: "https://groqgpt-chat-ai.vercel.app/",
            image: "images/portfolio/groqgpt.png",
            tech: ["React.js", "Groq LLM API", "Tailwind CSS", "Vercel"],
            description: "AI chat interface leveraging Groq API for ultra-fast LLM responses, with Markdown rendering, code syntax highlighting, and persistent client-side conversation history."
        },
        {
            title: "Budgetly: Finance Tracker",
            category: "Finance Application",
            url: "https://budgetly-neon.vercel.app/",
            image: "images/portfolio/budgetly.png",
            tech: ["React.js", "Chart.js", "CSS3 Modules"],
            description: "Personal finance tracking app with interactive Chart.js visualizations for monthly spending analysis, budget goal-setting, and reactive data state management."
        },
        {
            title: "Flash Mind AI: Study Assistant",
            category: "Education / AI",
            url: "https://flash-mind-ai-neon.vercel.app/",
            image: "images/portfolio/flashmind-ai.png",
            tech: ["React.js", "Generative AI", "Tailwind CSS"],
            description: "AI-powered study companion with automated flashcard generation from raw text and real-time progress tracking to optimize knowledge retention."
        },
        {
            title: "Swift Vote: Voting Platform",
            category: "Web Application",
            url: "https://swift-vote-beta.vercel.app/",
            image: "images/portfolio/swift-vote.png",
            tech: ["React.js", "State Management", "Vercel"],
            description: "Lightweight digital polling platform with real-time vote accumulation, structured candidate panels, and error-proof validation for transparent community ballots."
        }
    ]
};
