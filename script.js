/* =====================================================
   DATA
===================================================== */

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


/* =====================================================
   JOURNEY
===================================================== */

const journey = [

    {
        role: "Process Technologist",
        company: "Reckitt Benckiser",
        duration: "DEC 2025 — MAR 2026",
        color: "#38bdf8",

        highlights: [
            ["PROCESS VALIDATION", "OQ / PQ"],
            ["SCOPE", "5 + 12 machines"]
        ],

        bullets: [
            "Executed process validation in GMP-regulated medical device manufacturing.",
            "Led UDI laser printing validation across 5 machines.",
            "Supported electronic leakage testing across 12 new machines.",
            "Worked with Production, QC/QA, Engineering and operators.",
            "Collected and reviewed technical data for validation and troubleshooting."
        ]
    },


    {
        role: "Bachelor of Engineering",
        company: "Chemical Engineering · Chulalongkorn University",
        duration: "2021 — 2025",
        color: "#a78bfa",

        highlights: [
            ["ENGINEERING", "Chemical Engineering"],
            ["FOUNDATION", "Process · Design · Analysis"]
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

        highlights: [
            ["PLANT DATA", "Carbon Footprint"],
            ["ENVIRONMENT", "Wastewater"]
        ],

        bullets: [
            "Collected and organized real plant data for carbon footprint assessment.",
            "Supported Scope 1 and Scope 3 data collection.",
            "Worked with chemical preparation and environmental data.",
            "Supported heavy-metal contamination analysis in wastewater.",
            "Collaborated with plant personnel to verify technical information."
        ]
    },


    {
        role: "R&D Intern",
        company: "Cirprise Startup",
        duration: "2025",
        color: "#fb923c",

        highlights: [
            ["R&D", "Product formulation"],
            ["FOCUS", "Quality × Cost"]
        ],

        bullets: [
            "Conducted formulation trials for powdered hand soap.",
            "Evaluated formulation changes based on quality and cost.",
            "Adjusted ingredients and experimental conditions during product development.",
            "Supported patent-related coordination.",
            "Worked in an early-stage startup environment."
        ]
    },


    {
        role: "Awards & Competitions",
        company: "Innovation · Sustainability · Engineering",
        duration: "2022 — 2025",
        color: "#facc15",

        highlights: [
            ["INNOVATION", "Finalist / Winner"],
            ["FOCUS", "Engineering Impact"]
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

        highlights: [
            ["INTERNATIONAL", "United States"],
            ["COMMUNICATION", "English · Multicultural"]
        ],

        bullets: [
            "Worked and lived in Livingston, Montana for approximately four months.",
            "Communicated with people from different cultural backgrounds.",
            "Developed practical English communication skills.",
            "Adapted to a new environment while working independently."
        ]
    }

];


/* =====================================================
   PROJECTS
===================================================== */

const projects = [

    {
        title: "Methanol Production from CO₂",

        category: "UNIVERSITY",

        description:
            "Process design and simulation for converting CO₂ into methanol.",

        tags: [
            "Process Design",
            "Aspen Plus",
            "Simulation"
        ],

        overview:
            "Designed a conceptual process for producing methanol from CO₂, combining process simulation, equipment design and economic considerations.",

        contribution: [
            "Defined the overall process route.",
            "Performed process simulation and material balance calculations.",
            "Designed major process equipment.",
            "Developed preliminary equipment layout.",
            "Evaluated process economics."
        ],

        results:
            "The designed process achieved a simulated methanol purity above 98%.",

        meta: [
            ["TYPE", "University Project"],
            ["TOOLS", "Aspen Plus"],
            ["YEAR", "2024"]
        ]
    },


    {
        title: "UDI Laser Printing Validation",

        category: "APPLIED / R&D",

        description:
            "Process validation of UDI laser printing across five production machines.",

        tags: [
            "Validation",
            "GMP",
            "Manufacturing"
        ],

        overview:
            "Supported and led validation activities for UDI laser printing on foil within a GMP-regulated medical device manufacturing environment.",

        contribution: [
            "Reviewed validation requirements.",
            "Prepared and executed validation activities.",
            "Collected process and machine data.",
            "Compared results against predefined acceptance criteria.",
            "Documented findings and coordinated with relevant functions."
        ],

        results:
            "Generated validation evidence supporting evaluation of the UDI laser printing process.",

        meta: [
            ["TYPE", "Professional Experience"],
            ["SCOPE", "5 Machines"],
            ["YEAR", "2025 — 2026"]
        ]
    },


    {
        title: "Recycled Plastic to High-Efficiency Air Filter",

        category: "UNIVERSITY",

        description:
            "Development of an electrospun air filter using recycled baby milk bottle plastic.",

        tags: [
            "Materials",
            "Electrospinning",
            "Sustainability"
        ],

        overview:
            "Explored the conversion of recycled plastic from baby milk bottles into material suitable for high-efficiency air filtration.",

        contribution: [
            "Prepared recycled polymer material.",
            "Investigated material preparation conditions.",
            "Produced electrospun fiber structures.",
            "Evaluated resulting filter characteristics."
        ],

        results:
            "Demonstrated the potential of recycled polymer waste as a feedstock for functional filtration materials.",

        meta: [
            ["TYPE", "Senior Project"],
            ["FOCUS", "Materials"],
            ["YEAR", "2024 — 2025"]
        ]
    },


    {
        title: "Electronic Leakage Testing Validation",

        category: "APPLIED / R&D",

        description:
            "Validation support for electronic leakage testing across 12 new machines.",

        tags: [
            "OQ / PQ",
            "Validation",
            "Data"
        ],

        overview:
            "Supported validation of electronic leakage testing equipment used within a medical device manufacturing process.",

        contribution: [
            "Supported qualification and validation activities.",
            "Collected machine and process data.",
            "Reviewed test results.",
            "Worked with production and engineering teams.",
            "Investigated issues requiring troubleshooting."
        ],

        results:
            "Provided documented validation and testing information for newly introduced equipment.",

        meta: [
            ["TYPE", "Professional Experience"],
            ["SCOPE", "12 Machines"],
            ["YEAR", "2025 — 2026"]
        ]
    },


    {
        title: "Plant Carbon Footprint Data",

        category: "SUSTAINABILITY",

        description:
            "Collection and analysis of plant data for Scope 1 and Scope 3 carbon footprint assessment.",

        tags: [
            "Sustainability",
            "Plant Data",
            "SimaPro"
        ],

        overview:
            "Supported environmental data collection and analysis during a facilities engineering internship.",

        contribution: [
            "Collected plant activity data.",
            "Organized information for carbon footprint calculations.",
            "Supported Scope 1 and Scope 3 data preparation.",
            "Worked with plant personnel to verify information."
        ],

        results:
            "Produced organized plant data supporting carbon footprint assessment activities.",

        meta: [
            ["TYPE", "Internship"],
            ["TOOLS", "SimaPro"],
            ["YEAR", "2024"]
        ]
    },


    {
        title: "Powdered Hand Soap Development",

        category: "APPLIED / R&D",

        description:
            "R&D trials focused on formulation quality, cost and sustainability.",

        tags: [
            "R&D",
            "Formulation",
            "Product Development"
        ],

        overview:
            "Conducted product formulation experiments for a powdered hand soap concept within a startup environment.",

        contribution: [
            "Conducted formulation trials.",
            "Adjusted ingredient ratios.",
            "Compared product characteristics.",
            "Considered cost and environmental impact.",
            "Supported product development and patent coordination."
        ],

        results:
            "Developed formulation directions balancing quality, cost and sustainability.",

        meta: [
            ["TYPE", "R&D Internship"],
            ["FOCUS", "Formulation"],
            ["YEAR", "2025"]
        ]
    }

];


/* =====================================================
   JOURNEY RENDER
===================================================== */

const journeyList =
    document.getElementById("journeyList");


function renderJourney() {

    journeyList.innerHTML =
        journey.map(item => `

            <article
                class="journey-card"
                style="--journey-color:${item.color}"
            >

                <div class="journey-header">

                    <div class="journey-graphic">
                        ◆
                    </div>

                    <div>

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

                            ${item.highlights.map(
                                h => `

                                <div class="journey-highlight">

                                    <div class="journey-highlight-label">
                                        ${h[0]}
                                    </div>

                                    <strong>
                                        ${h[1]}
                                    </strong>

                                </div>

                            `).join("")}

                        </div>


                        <ul class="journey-bullets">

                            ${item.bullets.map(
                                b => `<li>${b}</li>`
                            ).join("")}

                        </ul>

                    </div>

                </div>

            </article>

        `);


    document
        .querySelectorAll(".journey-header")
        .forEach(header => {

            header.addEventListener(
                "click",
                () => {

                    const card =
                        header.closest(".journey-card");

                    document
                        .querySelectorAll(".journey-card")
                        .forEach(c => {

                            if (c !== card) {
                                c.classList.remove("open");
                            }

                        });

                    card.classList.toggle("open");

                }
            );

        });

}


/* =====================================================
   SKILLS
===================================================== */

const skillsGrid =
    document.getElementById("skillsGrid");


function renderSkills() {

    skillsGrid.innerHTML =
        skills.map(skill => `

            <article class="skill-card">

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


/* =====================================================
   PROJECTS
===================================================== */

const projectsGrid =
    document.getElementById("projectsGrid");


function renderProjects() {

    projectsGrid.innerHTML =
        projects.map(
            (project, index) => `

                <article
                    class="project-card"
                    data-project="${index}"
                >

                    <div class="project-image">

                        <span>
                            ${project.category}
                        </span>

                    </div>


                    <div class="project-info">

                        <div class="project-category">
                            ${project.category}
                        </div>

                        <h3 class="project-title">
                            ${project.title}
                        </h3>

                        <p class="project-description">
                            ${project.description}
                        </p>


                        <div class="project-tags">

                            ${project.tags.map(
                                tag =>
                                `<span>${tag}</span>`
                            ).join("")}

                        </div>

                    </div>

                </article>

            `
        ).join("");

}


/* =====================================================
   PROJECT MODAL
===================================================== */

const modal =
    document.getElementById("projectModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


function openProject(index) {

    const project =
        projects[index];

    modalContent.innerHTML = `

        <div class="modal-category">
            ${project.category}
        </div>


        <h2 class="modal-title">
            ${project.title}
        </h2>


        <p class="modal-summary">
            ${project.description}
        </p>


        <div class="modal-tags">

            ${project.tags.map(
                tag =>
                `<span>${tag}</span>`
            ).join("")}

        </div>


        <div class="modal-grid">

            <div>

                <section class="modal-section">

                    <h3>
                        Overview
                    </h3>

                    <p>
                        ${project.overview}
                    </p>

                </section>


                <section class="modal-section">

                    <h3>
                        My Contribution
                    </h3>

                    <ul>

                        ${project.contribution.map(
                            item =>
                            `<li>${item}</li>`
                        ).join("")}

                    </ul>

                </section>


                <section class="modal-section">

                    <h3>
                        Results
                    </h3>

                    <p>
                        ${project.results}
                    </p>

                </section>

            </div>


            <aside class="modal-sidebar">

                ${project.meta.map(
                    item => `

                        <div class="modal-stat">

                            <span>
                                ${item[0]}
                            </span>

                            <strong>
                                ${item[1]}
                            </strong>

                        </div>

                    `
                ).join("")}

            </aside>

        </div>

    `;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


projectsGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(".project-card");

        if (!card) return;

        openProject(
            Number(card.dataset.project)
        );

    }
);


function closeProject() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeProject
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProject
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);


/* =====================================================
   THEME
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


function updateThemeIcon() {

    themeToggle.textContent =
        document.body.classList.contains(
            "light-mode"
        )
            ? "☾"
            : "☼";

}


updateThemeIcon();


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        const light =
            document.body.classList.contains(
                "light-mode"
            );

        localStorage.setItem(
            "portfolio-theme",
            light ? "light" : "dark"
        );

        updateThemeIcon();

    }
);


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    () => {

        backTop.classList.toggle(
            "show",
            window.scrollY > 600
        );

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderJourney();

renderSkills();

renderProjects();
