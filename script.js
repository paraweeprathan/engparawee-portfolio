/* =========================================================
   DATA
========================================================= */


/* ---------------------------------------------------------
   SKILLS
--------------------------------------------------------- */

const skills = [

    {
        name: "Microsoft Excel",
        category: "Data & Productivity",
        icon: "EX"
    },

    {
        name: "AI Tools",
        category: "Technology",
        icon: "AI"
    },

    {
        name: "Python",
        category: "Programming",
        icon: "PY"
    },

    {
        name: "Process Design",
        category: "Engineering",
        icon: "PD"
    },

    {
        name: "Process Validation",
        category: "Manufacturing",
        icon: "PV"
    },

    {
        name: "R&D",
        category: "Innovation",
        icon: "R&D"
    },

    {
        name: "Minitab",
        category: "Data Analysis",
        icon: "MI"
    },

    {
        name: "MATLAB",
        category: "Engineering",
        icon: "ML"
    },

    {
        name: "Aspen Plus",
        category: "Process Simulation",
        icon: "AP"
    },

    {
        name: "SimaPro",
        category: "Sustainability",
        icon: "SP"
    },

    {
        name: "Technical Documentation",
        category: "Engineering",
        icon: "TD"
    },

    {
        name: "Data Visualization",
        category: "Data",
        icon: "DV"
    },

    {
        name: "Project Coordination",
        category: "Professional",
        icon: "PC"
    },

    {
        name: "Sustainability",
        category: "Impact",
        icon: "SU"
    }

];


/* ---------------------------------------------------------
   JOURNEY
--------------------------------------------------------- */

const journey = [

    {
        role: "Process Technologist",
        company: "Reckitt",
        duration: "2025 — 2026",

        color: "#38bdf8",

        graphic: "process",

        highlights: [
            {
                label: "PROCESS VALIDATION",
                value: "OQ / PQ"
            },
            {
                label: "PROBLEM-SOLVING",
                value: "Production issues"
            }
        ],

        bullets: [
            "Executed process validation in GMP-regulated medical device manufacturing.",
            "Led UDI laser printing validation across 5 machines.",
            "Supported electronic leakage testing across 12 new machines.",
            "Worked with Production, QA, Engineering and operators to solve production issues.",
            "Collected and reviewed technical data to support validation and troubleshooting."
        ]
    },


    {
        role: "Bachelor of Engineering",
        company: "Chemical Engineering · Chulalongkorn University",
        duration: "2021 — 2025",

        color: "#a78bfa",

        graphic: "molecule",

        highlights: [
            {
                label: "ENGINEERING",
                value: "Chemical Engineering"
            },
            {
                label: "FOUNDATION",
                value: "Process • Data • Design"
            }
        ],

        bullets: [
            "Developed a strong foundation in chemical engineering principles and process systems.",
            "Worked on engineering design, simulation, laboratory experiments and technical analysis.",
            "Completed projects involving CO₂ conversion, materials and process design.",
            "Combined engineering fundamentals with sustainability and innovation activities."
        ]
    },


    {
        role: "Facilities Engineer Intern",
        company: "Mektec Manufacturing Corporation (Thailand)",
        duration: "2024",

        color: "#2dd4bf",

        graphic: "plant",

        highlights: [
            {
                label: "PLANT DATA",
                value: "Scope 1 & Scope 3"
            },
            {
                label: "ENVIRONMENT",
                value: "Wastewater analysis"
            }
        ],

        bullets: [
            "Collected and organized real plant data for carbon footprint assessment.",
            "Supported Scope 1 and Scope 3 carbon footprint data collection.",
            "Worked with chemical preparation and environmental data.",
            "Supported heavy-metal contamination analysis in wastewater.",
            "Collaborated with plant personnel to obtain and verify technical information."
        ]
    },


    {
        role: "R&D Intern",
        company: "Cirprise Startup",
        duration: "2025",

        color: "#fb923c",

        graphic: "flask",

        highlights: [
            {
                label: "R&D",
                value: "Product formulation"
            },
            {
                label: "INNOVATION",
                value: "Quality × Cost"
            }
        ],

        bullets: [
            "Conducted formulation trials for powdered hand soap.",
            "Evaluated formulation changes based on quality and cost considerations.",
            "Adjusted ingredients and experimental conditions during product development.",
            "Supported patent-related coordination.",
            "Worked in an early-stage startup environment where experiments had to be practical and resource-conscious."
        ]
    },


    {
        role: "Awards & Competitions",
        company: "Innovation • Sustainability • Engineering",
        duration: "2022 — 2025",

        color: "#facc15",

        graphic: "award",

        highlights: [
            {
                label: "INNOVATION",
                value: "Finalist / Winner"
            },
            {
                label: "SUSTAINABILITY",
                value: "National-level projects"
            }
        ],

        bullets: [
            "Young Sustainability Practitioner #4 — winning team.",
            "Faculty Future Race to Zero — finalist.",
            "Innovation Impact Challenge 2025 — finalist.",
            "Rakkaew Foundation National University Sustainability Showcase — winner.",
            "Participated in engineering, sustainability and innovation competitions."
        ]
    },


    {
        role: "International Experience",
        company: "Work & Travel · Montana, USA",
        duration: "2025",

        color: "#60a5fa",

        graphic: "globe",

        highlights: [
            {
                label: "INTERNATIONAL",
                value: "United States"
            },
            {
                label: "COMMUNICATION",
                value: "English • Multicultural"
            }
        ],

        bullets: [
            "Worked and lived in Livingston, Montana for approximately four months.",
            "Communicated with people from different cultural and professional backgrounds.",
            "Developed practical English communication skills in a working environment.",
            "Adapted to a new environment while working independently."
        ]
    }

];


/* ---------------------------------------------------------
   PROJECTS
--------------------------------------------------------- */

const projects = [

    {
        id: "methanol-co2",

        category: "university",
        categoryLabel: "University",

        title: "Methanol Production from CO₂",

        description:
            "Process design and simulation for converting CO₂ into methanol.",

        tags: [
            "Process Design",
            "Aspen Plus",
            "Simulation"
        ],

        meta: {
            type: "University Project",
            tools: "Aspen Plus • Engineering Design",
            year: "2024"
        },

        overview:
            "Designed a conceptual process for producing methanol from CO₂ using an alcohol-assisted conversion route, combining process simulation, equipment design and economic considerations.",

        challenge:
            "Developing a technically feasible process while maintaining product purity and considering process integration.",

        approach: [
            "Defined the overall process route and reaction concept.",
            "Performed process simulation and material balance calculations.",
            "Designed major process equipment and supporting units.",
            "Developed preliminary equipment layout.",
            "Evaluated process economics."
        ],

        process:
            "The project moved from process concept to simulation, equipment selection, process integration and economic evaluation.",

        results:
            "The designed process achieved a simulated methanol purity above 98%.",

        learning:
            "The project strengthened my understanding of how chemical engineering fundamentals connect with real process design and decision-making."
    },


    {
        id: "electrospun-filter",

        category: "university",
        categoryLabel: "University",

        title: "Recycled Plastic to High-Efficiency Air Filter",

        description:
            "Development of an electrospun air filter using recycled baby milk bottle plastic.",

        tags: [
            "Materials",
            "Electrospinning",
            "Sustainability"
        ],

        meta: {
            type: "Senior Project",
            tools: "Electrospinning • Materials",
            year: "2024 — 2025"
        },

        overview:
            "Explored the conversion of recycled plastic from baby milk bottles into material suitable for high-efficiency air filtration.",

        challenge:
            "Finding a practical way to transform waste plastic into a useful high-value material.",

        approach: [
            "Prepared recycled polymer material.",
            "Investigated material preparation conditions.",
            "Produced electrospun fiber structures.",
            "Evaluated the resulting filter characteristics."
        ],

        process:
            "The work connected material preparation, electrospinning and filtration performance evaluation.",

        results:
            "The project demonstrated the potential of recycled polymer waste as a feedstock for functional filtration materials.",

        learning:
            "I learned how material properties, processing conditions and final product performance are closely connected."
    },


    {
        id: "udi-validation",

        category: "r&d",
        categoryLabel: "Applied / R&D",

        title: "UDI Laser Printing Validation",

        description:
            "Process validation of UDI laser printing across five production machines.",

        tags: [
            "Validation",
            "GMP",
            "Manufacturing"
        ],

        meta: {
            type: "Professional Experience",
            tools: "OQ / PQ • Technical Documentation",
            year: "2025 — 2026"
        },

        overview:
            "Supported and led validation activities for UDI laser printing on foil within a GMP-regulated medical device manufacturing environment.",

        challenge:
            "Ensuring consistent printing performance across multiple production machines while maintaining validation requirements.",

        approach: [
            "Reviewed validation requirements.",
            "Prepared and executed validation activities.",
            "Collected process and machine data.",
            "Compared results against predefined acceptance criteria.",
            "Documented findings and coordinated with relevant functions."
        ],

        process:
            "The validation covered five machines and required coordination across engineering, production and quality functions.",

        results:
            "Generated validation evidence supporting the evaluation of the UDI laser printing process.",

        learning:
            "The project strengthened my understanding of validation, technical documentation and the importance of reliable process data."
    },


    {
        id: "leakage-testing",

        category: "r&d",
        categoryLabel: "Applied / R&D",

        title: "Electronic Leakage Testing Validation",

        description:
            "Validation support for electronic leakage testing across 12 new machines.",

        tags: [
            "OQ / PQ",
            "Validation",
            "Data"
        ],

        meta: {
            type: "Professional Experience",
            tools: "Validation • Troubleshooting",
            year: "2025 — 2026"
        },

        overview:
            "Supported validation of electronic leakage testing equipment used within a medical device manufacturing process.",

        challenge:
            "Introducing and validating multiple new machines while ensuring reliable testing performance.",

        approach: [
            "Supported qualification and validation activities.",
            "Collected machine and process data.",
            "Reviewed test results.",
            "Worked with production and engineering teams.",
            "Investigated issues when results required further troubleshooting."
        ],

        process:
            "The work involved coordination across 12 new machines and multiple functions within the manufacturing environment.",

        results:
            "Provided documented validation and testing information for the newly introduced equipment.",

        learning:
            "I gained practical experience in how engineering, quality requirements and production realities interact."
    },


    {
        id: "carbon-footprint",

        category: "sustainability",
        categoryLabel: "Sustainability",

        title: "Plant Carbon Footprint Data",

        description:
            "Collection and analysis of plant data for Scope 1 and Scope 3 carbon footprint assessment.",

        tags: [
            "Sustainability",
            "Plant Data",
            "SimaPro"
        ],

        meta: {
            type: "Internship",
            tools: "Sustainability Data • SimaPro",
            year: "2024"
        },

        overview:
            "Supported environmental data collection and analysis during a facilities engineering internship.",

        challenge:
            "Collecting reliable real-world plant information from different sources for carbon footprint assessment.",

        approach: [
            "Collected plant activity data.",
            "Organized information for carbon footprint calculations.",
            "Supported Scope 1 and Scope 3 data preparation.",
            "Worked with plant personnel to verify information."
        ],

        process:
            "The project required connecting operational information from the plant with environmental assessment methodology.",

        results:
            "Produced organized plant data supporting carbon footprint assessment activities.",

        learning:
            "I learned that sustainability analysis depends heavily on data quality and understanding how real operations generate environmental impacts."
    },


    {
        id: "hand-soap-rd",

        category: "r&d",
        categoryLabel: "Applied / R&D",

        title: "Powdered Hand Soap Development",

        description:
            "R&D trials focused on formulation quality, cost and sustainability.",

        tags: [
            "R&D",
            "Formulation",
            "Product Development"
        ],

        meta: {
            type: "R&D Internship",
            tools: "Experimental Design • Formulation",
            year: "2025"
        },

        overview:
            "Conducted product formulation experiments for a powdered hand soap concept within a startup environment.",

        challenge:
            "Balancing product performance, material cost and sustainability considerations.",

        approach: [
            "Conducted formulation trials.",
            "Adjusted ingredient ratios.",
            "Compared product characteristics.",
            "Considered cost and environmental impact.",
            "Supported product development and patent coordination."
        ],

        process:
            "The development process involved repeated formulation trials and evaluation of results to identify more suitable combinations.",

        results:
            "Developed formulation directions that improved the balance between quality, cost and sustainability.",

        learning:
            "The experience taught me how R&D decisions often involve multiple competing variables rather than a single technical objective."
    },


    {
        id: "marine-waste-carpet",

        category: "sustainability",
        categoryLabel: "Sustainability",

        title: "Marine Waste to Car Carpet",

        description:
            "Exploration of marine waste as a material source for automotive applications.",

        tags: [
            "Circular Economy",
            "Materials",
            "Sustainability"
        ],

        meta: {
            type: "Innovation Project",
            tools: "Material Concept • Sustainability",
            year: "2024"
        },

        overview:
            "Explored the potential of marine waste as a material source for automotive carpet applications.",

        challenge:
            "Finding a useful application for waste material while considering technical feasibility.",

        approach: [
            "Identified potential marine waste material sources.",
            "Explored possible material applications.",
            "Considered processing and product requirements.",
            "Connected the concept with circular economy principles."
        ],

        process:
            "The project focused on translating a waste problem into a potential material application.",

        results:
            "Developed an early-stage concept for transforming marine waste into a useful automotive material.",

        learning:
            "The project strengthened my interest in engineering solutions that combine materials, industry and environmental impact."
    },


    {
        id: "highschool-innovation",

        category: "high-school",
        categoryLabel: "High School",

        title: "Engineering & Innovation Project",

        description:
            "An early engineering project that developed my interest in solving practical problems.",

        tags: [
            "Engineering",
            "Innovation",
            "Problem-Solving"
        ],

        meta: {
            type: "High School Project",
            tools: "Design • Experimentation",
            year: "2019 — 2021"
        },

        overview:
            "One of the projects that first introduced me to engineering-oriented problem solving and experimentation.",

        challenge:
            "Understanding a practical problem and developing a workable solution with limited resources.",

        approach: [
            "Defined the problem.",
            "Researched possible solutions.",
            "Developed an initial concept.",
            "Built and tested the idea.",
            "Improved the design based on observations."
        ],

        process:
            "The project followed a simple engineering cycle of identifying a problem, developing a solution and testing it.",

        results:
            "The experience became an early foundation for my interest in engineering and innovation.",

        learning:
            "It taught me that engineering is not only about calculations, but also about curiosity, experimentation and iteration."
    }

];


/* =========================================================
   DOM
========================================================= */

const journeyList =
    document.getElementById("journeyList");

const skillsGrid =
    document.getElementById("skillsGrid");

const projectsGrid =
    document.getElementById("projectsGrid");

const projectFilters =
    document.getElementById("projectFilters");

const projectDetail =
    document.getElementById("projectDetail");

const projectDetailContent =
    document.getElementById("projectDetailContent");

const backProjects =
    document.getElementById("backProjects");

const prevProject =
    document.getElementById("prevProject");

const nextProject =
    document.getElementById("nextProject");

const themeToggle =
    document.getElementById("themeToggle");

const mobileToggle =
    document.getElementById("mobileToggle");

const navMenu =
    document.getElementById("navMenu");

const backToTop =
    document.getElementById("backToTop");


/* =========================================================
   SVG GRAPHICS
========================================================= */

function getJourneyGraphic(type) {

    const common = `
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
    `;

    const graphics = {

        process: `
            <svg viewBox="0 0 64 64" ${common}>
                <rect x="8" y="26" width="12" height="12" rx="2"/>
                <rect x="26" y="14" width="12" height="12" rx="2"/>
                <rect x="26" y="38" width="12" height="12" rx="2"/>
                <rect x="44" y="26" width="12" height="12" rx="2"/>

                <path d="M20 32h6"/>
                <path d="M38 20h6"/>
                <path d="M38 44h6"/>
            </svg>
        `,

        molecule: `
            <svg viewBox="0 0 64 64" ${common}>
                <circle cx="32" cy="32" r="7"/>
                <circle cx="14" cy="18" r="5"/>
                <circle cx="50" cy="17" r="5"/>
                <circle cx="16" cy="48" r="5"/>
                <circle cx="49" cy="47" r="5"/>

                <path d="M27 27 18 21"/>
                <path d="M37 27 46 20"/>
                <path d="M27 37 19 44"/>
                <path d="M37 37 45 43"/>
            </svg>
        `,

        plant: `
            <svg viewBox="0 0 64 64" ${common}>
                <path d="M12 52h40"/>
                <path d="M18 52V27h12v25"/>
                <path d="M30 52V18h16v34"/>
                <path d="M46 18l6 7v27"/>
                <path d="M24 27v-8"/>
                <path d="M24 19c0-5 5-7 9-7"/>
                <path d="M37 18v-7"/>
                <path d="M37 11c0-4 4-6 7-6"/>
            </svg>
        `,

        flask: `
            <svg viewBox="0 0 64 64" ${common}>
                <path d="M26 8h12"/>
                <path d="M29 8v18L17 48c-2 4 1 8 6 8h18c5 0 8-4 6-8L35 26V8"/>
                <path d="M21 44h22"/>
                <circle cx="30" cy="39" r="2"/>
                <circle cx="37" cy="34" r="1.7"/>
            </svg>
        `,

        award: `
            <svg viewBox="0 0 64 64" ${common}>
                <circle cx="32" cy="23" r="13"/>
                <path d="M25 35 21 55l11-6 11 6-4-20"/>
                <path d="m27 23 4 4 7-8"/>
            </svg>
        `,

        globe: `
            <svg viewBox="0 0 64 64" ${common}>
                <circle cx="32" cy="32" r="23"/>
                <path d="M9 32h46"/>
                <path d="M32 9c7 7 10 15 10 23s-3 16-10 23"/>
                <path d="M32 9c-7 7-10 15-10 23s3 16 10 23"/>
                <path d="M14 19c11 5 25 5 36 0"/>
                <path d="M14 45c11-5 25-5 36 0"/>
            </svg>
        `
    };

    return graphics[type] || graphics.process;
}


/* =========================================================
   RENDER JOURNEY
========================================================= */

function renderJourney() {

    if (!journeyList) return;

    journeyList.innerHTML = journey.map((item, index) => {

        return `

            <article
                class="journey-card reveal"
                style="
                    --journey-color: ${item.color};
                    transition-delay: ${index * 90}ms;
                "
            >

                <div
                    class="journey-header"
                    role="button"
                    tabindex="0"
                    aria-expanded="false"
                >

                    <div class="journey-graphic">
                        ${getJourneyGraphic(item.graphic)}
                    </div>


                    <div class="journey-heading">

                        <h3 class="journey-role">
                            ${item.role}
                        </h3>

                        <div class="journey-company">
                            ${item.company}
                        </div>

                        <div class="journey-duration">
                            ${item.duration}
                        </div>

                    </div>


                    <div class="journey-arrow">
                        ↓
                    </div>

                </div>


                <div class="journey-details">

                    <div class="journey-details-inner">

                        <div class="journey-highlights">

                            ${item.highlights.map(highlight => `

                                <div class="journey-highlight">

                                    <div class="journey-highlight-label">
                                        ${highlight.label}
                                    </div>

                                    <strong>
                                        ${highlight.value}
                                    </strong>

                                </div>

                            `).join("")}

                        </div>


                        <ul class="journey-bullets">

                            ${item.bullets.map(bullet => `
                                <li>
                                    ${bullet}
                                </li>
                            `).join("")}

                        </ul>

                    </div>

                </div>

            </article>

        `;

    }).join("");

    setupJourneyAccordion();
}


/* =========================================================
   JOURNEY ACCORDION
========================================================= */

function setupJourneyAccordion() {

    const cards =
        document.querySelectorAll(".journey-card");

    cards.forEach(card => {

        const header =
            card.querySelector(".journey-header");

        function toggleCard() {

            const isOpen =
                card.classList.contains("open");

            cards.forEach(otherCard => {

                otherCard.classList.remove("open");

                const otherHeader =
                    otherCard.querySelector(".journey-header");

                if (otherHeader) {
                    otherHeader.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

            if (!isOpen) {

                card.classList.add("open");

                header.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        }

        header.addEventListener(
            "click",
            toggleCard
        );

        header.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleCard();
                }

            }
        );

    });
}


/* =========================================================
   RENDER SKILLS
========================================================= */

function renderSkills() {

    if (!skillsGrid) return;

    skillsGrid.innerHTML =
        skills.map(skill => `

            <article class="skill-card reveal">

                <div class="skill-icon">
                    ${skill.icon}
                </div>

                <div>

                    <div class="skill-name">
                        ${skill.name}
                    </div>

                    <div class="skill-category">
                        ${skill.category}
                    </div>

                </div>

            </article>

        `).join("");
}


/* =========================================================
   RENDER PROJECTS
========================================================= */

let currentFilter = "all";


function getFilteredProjects() {

    if (currentFilter === "all") {
        return projects;
    }

    return projects.filter(
        project =>
            project.category === currentFilter
    );
}


function renderProjects() {

    if (!projectsGrid) return;

    const filtered =
        getFilteredProjects();

    projectsGrid.innerHTML =
        filtered.map(project => `

            <article
                class="project-card reveal"
                data-project="${project.id}"
            >

                <div class="project-image">

                    <span class="project-placeholder">
                        PROJECT IMAGE
                    </span>

                </div>


                <div class="project-info">

                    <div class="project-category">
                        ${project.categoryLabel}
                    </div>

                    <h3 class="project-title">
                        ${project.title}
                    </h3>

                    <p class="project-description">
                        ${project.description}
                    </p>


                    <a
                        href="#project/${project.id}"
                        class="project-link"
                    >
                        View Project
                        <span>→</span>
                    </a>

                </div>

            </article>

        `).join("");

    observeRevealElements();
}


/* =========================================================
   PROJECT FILTER
========================================================= */

if (projectFilters) {

    projectFilters.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(".filter-btn");

            if (!button) return;

            currentFilter =
                button.dataset.filter;

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            renderProjects();

        }
    );
}


/* =========================================================
   PROJECT DETAIL
========================================================= */

function renderProjectDetail(id) {

    const project =
        projects.find(
            item => item.id === id
        );

    if (!project) return;

    const index =
        projects.findIndex(
            item => item.id === id
        );


    projectDetailContent.innerHTML = `

        <div class="detail-category">
            ${project.categoryLabel}
        </div>

        <h1 class="detail-title">
            ${project.title}
        </h1>

        <p class="detail-summary">
            ${project.description}
        </p>


        <div class="detail-hero">
            <span>
                PROJECT HERO IMAGE
            </span>
        </div>


        <div class="detail-content-grid">

            <div class="detail-main">

                <section class="detail-block">

                    <h3>
                        Overview
                    </h3>

                    <p>
                        ${project.overview}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        Challenge
                    </h3>

                    <p>
                        ${project.challenge}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        Approach
                    </h3>

                    <ul>
                        ${project.approach.map(
                            item => `<li>${item}</li>`
                        ).join("")}
                    </ul>

                </section>


                <section class="detail-block">

                    <h3>
                        Process
                    </h3>

                    <p>
                        ${project.process}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        Results
                    </h3>

                    <p>
                        ${project.results}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        Learning
                    </h3>

                    <p>
                        ${project.learning}
                    </p>

                </section>

            </div>


            <aside class="detail-sidebar">

                <div class="detail-meta">

                    <span>
                        TYPE
                    </span>

                    <strong>
                        ${project.meta.type}
                    </strong>

                </div>


                <div class="detail-meta">

                    <span>
                        TOOLS
                    </span>

                    <strong>
                        ${project.meta.tools}
                    </strong>

                </div>


                <div class="detail-meta">

                    <span>
                        YEAR
                    </span>

                    <strong>
                        ${project.meta.year}
                    </strong>

                </div>

            </aside>

        </div>


        <div class="detail-supporting">

            <div class="supporting-image">
                SUPPORTING IMAGE
            </div>

            <div class="supporting-image">
                DIAGRAM / PROCESS
            </div>

            <div class="supporting-image">
                RESULT / DATA
            </div>

        </div>

    `;


    /* PREVIOUS / NEXT */

    const previous =
        projects[index - 1];

    const next =
        projects[index + 1];


    if (previous) {

        prevProject.disabled = false;

        prevProject.textContent =
            `← ${previous.title}`;

        prevProject.onclick = () => {

            window.location.hash =
                `project/${previous.id}`;

        };

    } else {

        prevProject.disabled = true;

        prevProject.textContent =
            "← Previous";

        prevProject.onclick = null;
    }


    if (next) {

        nextProject.disabled = false;

        nextProject.textContent =
            `${next.title} →`;

        nextProject.onclick = () => {

            window.location.hash =
                `project/${next.id}`;

        };

    } else {

        nextProject.disabled = true;

        nextProject.textContent =
            "Next →";

        nextProject.onclick = null;
    }
}


/* =========================================================
   SHOW PROJECT DETAIL
========================================================= */

function showProject(id) {

    const exists =
        projects.some(
            project => project.id === id
        );

    if (!exists) return;

    document.querySelector("main").style.display =
        "none";

    projectDetail.hidden = false;

    renderProjectDetail(id);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   BACK TO PROJECTS
========================================================= */

function closeProject() {

    projectDetail.hidden = true;

    document.querySelector("main").style.display =
        "";

    window.location.hash = "projects";

    setTimeout(() => {

        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }, 50);
}


if (backProjects) {

    backProjects.addEventListener(
        "click",
        closeProject
    );

}


/* =========================================================
   HASH ROUTING
========================================================= */

function handleHash() {

    const hash =
        window.location.hash;

    if (
        hash.startsWith("#project/")
    ) {

        const id =
            hash.replace("#project/", "");

        showProject(id);

        return;
    }


    projectDetail.hidden = true;

    document.querySelector("main").style.display =
        "";


    if (hash) {

        const target =
            document.querySelector(hash);

        if (target) {

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }, 50);

        }

    }

}


window.addEventListener(
    "hashchange",
    handleHash
);


/* =========================================================
   MOBILE NAV
========================================================= */

/* Old hamburger menu */
if (mobileToggle) {

    mobileToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

        }
    );

}


/* Desktop nav links */
document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("open");

            }
        );

    });


/* ---------------------------------------------------------
   MOBILE BOTTOM NAVIGATION
--------------------------------------------------------- */

const mobileNavItems =
    document.querySelectorAll(
        ".mobile-nav-item"
    );


function setMobileNavActive(sectionId) {

    mobileNavItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.mobileNav === sectionId
        );

    });

}


/* Change active button when clicked */

mobileNavItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const target =
                item.dataset.mobileNav;

            setMobileNavActive(target);

        }
    );

});

/* =========================================================
   ACTIVE NAV
========================================================= */

/* =========================================================
   ACTIVE NAV
========================================================= */

const sections = document.querySelectorAll(
    "main > section"
);

const navLinks = document.querySelectorAll(
    ".nav-link"
);

function updateActiveNav() {

    const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection = section.id;
        }

    });

    /* Desktop navbar */

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") ===
            `#${currentSection}`
        );

    });

    /* Mobile bottom navigation */

    setMobileNavActive(currentSection);
}


/* Update while scrolling */

window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);


/* Update on page load */

updateActiveNav();

/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


function updateThemeIcon() {

    const icon =
        document.querySelector(
            ".theme-icon"
        );

    if (!icon) return;

    icon.textContent =
        document.body.classList.contains(
            "light-mode"
        )
            ? "☾"
            : "☼";
}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );

            localStorage.setItem(
                "portfolio-theme",
                isLight
                    ? "light"
                    : "dark"
            );

            updateThemeIcon();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.revealed)"
        );


    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

    }


    elements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

}


/* =========================================================
   PROJECT CARD CLICK
========================================================= */

document.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".project-card"
            );

        if (!card) return;

        const link =
            event.target.closest(
                ".project-link"
            );

        if (link) return;

        const id =
            card.dataset.project;

        if (id) {

            window.location.hash =
                `project/${id}`;

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderJourney();

renderSkills();

renderProjects();

observeRevealElements();

handleHash();
