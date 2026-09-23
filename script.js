/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [

    {
        number: "01",

        role: "PROCESS TECHNOLOGIST",

        company: "RECKITT • DUREX",

        duration: "2025 — 2026",

        color: "#38bdf8",

        keywords: [
            ["PROCESS VALIDATION", "OQ / PQ"],
            ["GMP", "MEDICAL DEVICE"],
            ["DATA", "ACCURACY"]
        ],

        description:
            "Worked in GMP-regulated medical device manufacturing, supporting process validation, technical documentation and production-related problem solving.",

        points: [
            "Led UDI laser printing validation across 5 machines.",
            "Supported electronic leakage testing OQ across 12 machines.",
            "Worked with Production, QA/QC, Engineering and operators.",
            "Collected, reviewed and documented technical process data."
        ],

        tags: [
            "PROCESS VALIDATION",
            "OQ / PQ",
            "GMP",
            "TECHNICAL DOCUMENTATION",
            "DATA REVIEW"
        ]
    },


    {
        number: "02",

        role: "CHEMICAL ENGINEERING",

        company: "CHULALONGKORN UNIVERSITY",

        duration: "2021 — 2025",

        color: "#a78bfa",

        stat: {
            number: "4",
            label: "VOLUNTEER CAMPS"
        },

        keywords: [
            ["CHEMICAL ENGINEERING", "B.ENG."],
            ["LEADERSHIP", "TEAMWORK"],
            ["PROJECTS", "R&D"]
        ],

        description:
            "Built a foundation in chemical engineering while exploring process design, materials, sustainability, research and leadership through academic and extracurricular projects.",

        points: [
            "Developed engineering projects across process design and materials.",
            "Participated in research, innovation and sustainability activities.",
            "Led and coordinated university activities and events.",
            "Joined 4 volunteer camps and community-oriented activities."
        ],

        tags: [
            "PROCESS DESIGN",
            "R&D",
            "SUSTAINABILITY",
            "LEADERSHIP",
            "VOLUNTEER"
        ]
    },


    {
        number: "03",

        role: "R&D INTERN",

        company: "CIRPRISE",

        duration: "2025",

        color: "#2dd4bf",

        keywords: [
            ["PRODUCT R&D", "FORMULATION"],
            ["SUSTAINABILITY", "CARBON"],
            ["INNOVATION", "STARTUP"]
        ],

        description:
            "Worked on product development and formulation trials for powdered hand soap, connecting product performance, cost and sustainability considerations.",

        points: [
            "Conducted formulation and product development trials.",
            "Evaluated product quality and cost considerations.",
            "Worked with technical information and experimental results.",
            "Supported patent-related coordination."
        ],

        tags: [
            "R&D",
            "FORMULATION",
            "PRODUCT DEVELOPMENT",
            "SUSTAINABILITY",
            "STARTUP"
        ]
    },


    {
        number: "04",

        role: "FACILITIES ENGINEER INTERN",

        company: "MEKTEC",

        duration: "2024",

        color: "#fb923c",

        keywords: [
            ["CARBON FOOTPRINT", "SCOPE 1 & 3"],
            ["FACILITIES", "PLANT DATA"],
            ["WASTEWATER", "HEAVY METALS"]
        ],

        description:
            "Worked with plant and facilities-related data while exploring environmental performance, carbon footprint and wastewater considerations.",

        points: [
            "Collected and organized plant-related data.",
            "Supported Scope 1 and Scope 3 carbon footprint work.",
            "Worked with wastewater and heavy-metal related information.",
            "Connected engineering data with environmental analysis."
        ],

        tags: [
            "FACILITIES",
            "CARBON FOOTPRINT",
            "SCOPE 1",
            "SCOPE 3",
            "WASTEWATER"
        ]
    },


    {
        number: "05",

        role: "WORK & TRAVEL",

        company: "LIVINGSTON • MONTANA, USA",

        duration: "2025",

        color: "#facc15",

        keywords: [
            ["INTERNATIONAL", "EXPERIENCE"],
            ["ENGLISH", "COMMUNICATION"],
            ["ADAPTABILITY", "CULTURE"]
        ],

        description:
            "A four-month international Work & Travel experience in Montana, gaining exposure to a new working environment, culture and everyday communication in English.",

        points: [
            "Worked and lived independently in the United States.",
            "Communicated with people from different backgrounds.",
            "Adapted to a new working and living environment.",
            "Strengthened English communication and independence."
        ],

        tags: [
            "USA",
            "ENGLISH",
            "COMMUNICATION",
            "ADAPTABILITY",
            "INTERNATIONAL"
        ]
    }

];

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
        title: "Methanol Production from CO₂",

        category: "UNIVERSITY PROJECT",

        color: "#38bdf8",

        icon: "factory",

        description:
            "Process design and simulation for converting CO₂ into methanol.",

        keywords: [
            "PROCESS DESIGN",
            "ASPEN PLUS",
            "SIMULATION",
            "CO₂"
        ],

        insights: [
            "Designed a conceptual methanol production process.",
            "Performed process simulation and material balance calculations.",
            "Evaluated equipment design and process economics."
        ],

        details: [
            {
                title: "OVERVIEW",

                text:
                    "Designed a conceptual process for producing methanol from CO₂, combining process simulation, equipment design and economic considerations."
            },

            {
                title: "CHALLENGE",

                text:
                    "Developing a technically feasible process while maintaining product purity and considering process integration."
            },

            {
                title: "APPROACH",

                text:
                    "Defined the process route, performed simulation and material balance calculations, designed major equipment and evaluated preliminary process economics."
            },

            {
                title: "KEY RESULT",

                text:
                    "The simulated process achieved methanol purity above 98%."
            },

            {
                title: "LEARNING",

                text:
                    "Strengthened my understanding of how chemical engineering fundamentals connect with real process design and decision-making."
            }
        ]
    },


    {
        title: "UDI Laser Printing Validation",

        category: "APPLIED / R&D",

        color: "#2563eb",

        icon: "laser",

        description:
            "Process validation of UDI laser printing across five production machines.",

        keywords: [
            "VALIDATION",
            "GMP",
            "OQ / PQ",
            "MANUFACTURING"
        ],

        insights: [
            "Led UDI laser printing validation across 5 machines.",
            "Collected and reviewed process and machine data.",
            "Worked across Production, QA/QC and Engineering."
        ],

        details: [
            {
                title: "OVERVIEW",

                text:
                    "Supported and led validation activities for UDI laser printing on foil within a GMP-regulated medical device manufacturing environment."
            },

            {
                title: "CHALLENGE",

                text:
                    "Ensuring consistent printing performance across multiple production machines while maintaining validation requirements."
            },

            {
                title: "APPROACH",

                text:
                    "Reviewed validation requirements, prepared and executed validation activities, collected process data and documented findings."
            },

            {
                title: "KEY RESULT",

                text:
                    "Generated validation evidence supporting evaluation of the UDI laser printing process."
            },

            {
                title: "LEARNING",

                text:
                    "Strengthened my understanding of validation, technical documentation and the importance of reliable process data."
            }
        ]
    },


    {
        title: "Recycled Plastic to Air Filter",

        category: "SUSTAINABILITY",

        color: "#2dd4bf",

        icon: "filter",

        description:
            "Development of an electrospun air filter using recycled plastic.",

        keywords: [
            "MATERIALS",
            "ELECTROSPINNING",
            "SUSTAINABILITY",
            "R&D"
        ],

        insights: [
            "Explored recycled polymer as a material feedstock.",
            "Produced electrospun fiber structures.",
            "Connected material processing with filtration performance."
        ],

        details: [
            {
                title: "OVERVIEW",

                text:
                    "Explored the conversion of recycled plastic from baby milk bottles into material suitable for high-efficiency air filtration."
            },

            {
                title: "CHALLENGE",

                text:
                    "Finding a practical way to transform waste plastic into a useful high-value material."
            },

            {
                title: "APPROACH",

                text:
                    "Prepared recycled polymer material, investigated processing conditions, produced electrospun fiber structures and evaluated filter characteristics."
            },

            {
                title: "KEY RESULT",

                text:
                    "Demonstrated the potential of recycled polymer waste as a feedstock for functional filtration materials."
            },

            {
                title: "LEARNING",

                text:
                    "Learned how material properties, processing conditions and final product performance are closely connected."
            }
        ]
    }

];



/* =========================================================
   SKILLS
========================================================= */

const skills = [

    {
        name: "Microsoft Excel",

        category: "DATA & PRODUCTIVITY",

        icon: "excel",

        description:
            "Used Excel for organizing, reviewing and working with technical and operational data.",

        points: [
            "Data organization and cleaning",
            "Technical data review",
            "Tables and reporting",
            "Data visualization"
        ]
    },


    {
        name: "Python",

        category: "PROGRAMMING",

        icon: "python",

        description:
            "Used Python as a tool for analytical thinking, data processing and exploring technical problems.",

        points: [
            "Data processing",
            "Basic analysis",
            "Problem-solving",
            "Automation concepts"
        ]
    },


    {
        name: "Process Validation",

        category: "MANUFACTURING",

        icon: "validation",

        description:
            "Practical experience supporting OQ/PQ validation in GMP-regulated medical device manufacturing.",

        points: [
            "OQ / PQ",
            "Validation documentation",
            "Process data review",
            "Acceptance criteria"
        ]
    },


    {
        name: "Aspen Plus",

        category: "PROCESS SIMULATION",

        icon: "aspen",

        description:
            "Used Aspen Plus for process simulation and engineering design during university projects.",

        points: [
            "Process simulation",
            "Material balance",
            "Process flowsheets",
            "Equipment considerations"
        ]
    },


    {
        name: "Sustainability",

        category: "IMPACT",

        icon: "leaf",

        description:
            "Experience connecting engineering projects with sustainability and environmental considerations.",

        points: [
            "Carbon footprint data",
            "Circular economy",
            "Environmental projects",
            "Sustainability innovation"
        ]
    }

];



/* =========================================================
   LEADERSHIP
========================================================= */

const leadership = [

    {
        icon: "♧",
        title: "Team Coordination",
        description:
            "Coordinated activities and worked with teams across engineering and university projects."
    },


    {
        icon: "♡",
        title: "Volunteer",
        description:
            "Participated in volunteer activities and community-oriented projects."
    },


    {
        icon: "◎",
        title: "Mentorship",
        description:
            "Supported student activities, mentoring and knowledge-sharing experiences."
    },


    {
        icon: "✦",
        title: "Competitions",
        description:
            "Participated in engineering, innovation and sustainability competitions."
    }

];



/* =========================================================
   SVG ICONS
========================================================= */

function iconSVG(type) {

    const icons = {

        excel: `
            <svg viewBox="0 0 64 64" fill="none">
                <rect x="10" y="8" width="44" height="48" rx="5"
                    fill="#21A366"/>
                <path d="M10 21h44" stroke="white" opacity=".25"/>
                <path d="M21 27l8 10-8 10"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M37 27l-8 10 8 10"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        `,


        python: `
            <svg viewBox="0 0 64 64" fill="none">
                <path
                    d="M31 7h-7c-7 0-10 4-10 10v8h17v5H14c-7 0-10 4-10 11v6c0 7 4 10 10 10h8v-8c0-7 4-10 10-10h10c7 0 10-4 10-10V17c0-7-4-10-10-10H31Z"
                    fill="#3776AB"/>
                <circle cx="25" cy="14" r="2.5" fill="white"/>
                <path
                    d="M33 57h7c7 0 10-4 10-10v-8H33v-5h19c7 0 10-4 10-11v-6c0-7-4-10-10-10h-8v8c0 7-4 10-10 10H24c-7 0-10 4-10 10v11c0 7 4 10 10 10h9Z"
                    fill="#FFD343"/>
                <circle cx="39" cy="50" r="2.5" fill="#3776AB"/>
            </svg>
        `,


        validation: `
            <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="24"
                    stroke="#38bdf8"
                    stroke-width="4"/>
                <path
                    d="m20 32 8 8 16-17"
                    stroke="#38bdf8"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        `,


        aspen: `
            <svg viewBox="0 0 64 64" fill="none">
                <path
                    d="M32 7 8 55h10l6-13h16l6 13h10L32 7Z"
                    fill="#ef4444"/>
                <path
                    d="m27 33 5-12 5 12H27Z"
                    fill="#38bdf8"/>
            </svg>
        `,


        leaf: `
            <svg viewBox="0 0 64 64" fill="none">
                <path
                    d="M52 10C28 10 13 21 13 39c0 8 5 13 13 13 18 0 26-17 26-42Z"
                    stroke="#2dd4bf"
                    stroke-width="4"/>
                <path
                    d="M14 52c9-14 20-23 35-31"
                    stroke="#2dd4bf"
                    stroke-width="3"
                    stroke-linecap="round"/>
            </svg>
        `,


        factory: `
            <svg viewBox="0 0 100 100" fill="none">
                <path
                    d="M10 82V45l28 15V45l28 15V25h24v57H10Z"
                    stroke="currentColor"
                    stroke-width="4"/>
                <path d="M18 82V67" stroke="currentColor" stroke-width="4"/>
                <path d="M31 82V67" stroke="currentColor" stroke-width="4"/>
                <path d="M46 82V70" stroke="currentColor" stroke-width="4"/>
                <path d="M61 82V70" stroke="currentColor" stroke-width="4"/>
            </svg>
        `,


        laser: `
            <svg viewBox="0 0 100 100" fill="none">
                <rect x="17" y="30" width="66" height="42" rx="5"
                    stroke="currentColor"
                    stroke-width="4"/>
                <path
                    d="M25 42h50M25 50h40M25 58h50"
                    stroke="currentColor"
                    stroke-width="3"/>
                <path
                    d="m45 10 10 10-10 10"
                    stroke="currentColor"
                    stroke-width="4"/>
                <path
                    d="M55 20h25"
                    stroke="currentColor"
                    stroke-width="4"/>
            </svg>
        `,


        filter: `
            <svg viewBox="0 0 100 100" fill="none">
                <path
                    d="M15 20h70L60 48v25l-20 10V48L15 20Z"
                    stroke="currentColor"
                    stroke-width="4"/>
                <path
                    d="M28 31h44M34 40h32"
                    stroke="currentColor"
                    stroke-width="3"/>
            </svg>
        `
    };

    return icons[type] || "";
}



/* =========================================================
   DOM
========================================================= */
const journeyGrid =
    document.getElementById("journeyGrid");

const projectsGrid =
    document.getElementById("projectsGrid");

const skillsGrid =
    document.getElementById("skillsGrid");

const leadershipGrid =
    document.getElementById("leadershipGrid");

const projectPreviewModal =
    document.getElementById("projectPreviewModal");

const projectDetailModal =
    document.getElementById("projectDetailModal");

const skillModal =
    document.getElementById("skillModal");


/* =========================================================
   RENDER JOURNEY
========================================================= */

function renderJourney() {

    journeyGrid.innerHTML =
        journey.map((item, index) => `

            <article
                class="journey-card"
                data-index="${index}"
            >

                <!-- JOURNEY HEADER -->

                <button
                    class="journey-header"
                    type="button"
                    aria-expanded="false"
                >

                    <div class="journey-year">
                        ${item.year}
                    </div>


                    <div class="journey-main">

                        <div class="journey-role">
                            ${item.role}
                        </div>

                        <div class="journey-company">
                            ${item.company}
                        </div>

                    </div>


                    <div class="journey-category">
                        ${item.category}
                    </div>


                    <div class="journey-arrow">
                        →
                    </div>

                </button>



                <!-- JOURNEY DETAILS -->

                <div class="journey-details">

                    <div class="journey-details-inner">

                        <div class="journey-detail-heading">

                            <span>
                                EXPERIENCE
                            </span>

                            <h3>
                                ${item.role}
                            </h3>

                        </div>


                        <p class="journey-description">
                            ${item.description}
                        </p>


                        <!-- KEYWORD TAGS -->

                        <div class="journey-tags">

                            ${item.tags.map(tag => `
                                <span class="journey-tag">
                                    ${tag}
                                </span>
                            `).join("")}

                        </div>


                        <!-- HIGHLIGHTS -->

                        <div class="journey-highlights">

                            <h4>
                                KEY HIGHLIGHTS
                            </h4>

                            <ul>

                                ${item.highlights.map(highlight => `
                                    <li>
                                        ${highlight}
                                    </li>
                                `).join("")}

                            </ul>

                        </div>

                    </div>

                </div>

            </article>

        `).join("");
}
/* =========================================================
   JOURNEY ACCORDION
========================================================= */

journeyGrid.addEventListener(
    "click",
    event => {

        const header =
            event.target.closest(
                ".journey-header"
            );

        if (!header) return;


        const card =
            header.closest(
                ".journey-card"
            );


        const isOpen =
            card.classList.contains(
                "open"
            );


        /*
         * Close all other cards
         */

        document
            .querySelectorAll(
                ".journey-card.open"
            )
            .forEach(openCard => {

                if (openCard !== card) {

                    openCard.classList.remove(
                        "open"
                    );

                    openCard
                        .querySelector(
                            ".journey-header"
                        )
                        .setAttribute(
                            "aria-expanded",
                            "false"
                        );

                }

            });


        /*
         * Toggle selected card
         */

        card.classList.toggle(
            "open",
            !isOpen
        );


        header.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    }
);

/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

    projectsGrid.innerHTML =
        projects.map((project, index) => `

            <article
                class="project-card"
                data-index="${index}"
                style="--project-color:${project.color}"
            >

                <div class="project-graphic">

                    ${iconSVG(project.icon)}

                </div>


                <div class="project-content">

                    <span class="project-tag">
                        ${project.category}
                    </span>


                    <h3 class="project-title">
                        ${project.title}
                    </h3>


                    <p class="project-description">
                        ${project.description}
                    </p>


                    <div class="project-keywords">

                        ${project.keywords.map(
                            keyword => `
                                <span class="keyword">
                                    ${keyword}
                                </span>
                            `
                        ).join("")}

                    </div>

                </div>


                <div class="project-arrow">
                    →
                </div>

            </article>

        `).join("");
}



/* =========================================================
   RENDER SKILLS
========================================================= */

function renderSkills() {

    skillsGrid.innerHTML =
        skills.map((skill, index) => `

            <article
                class="skill-card"
                data-skill="${index}"
            >

                <div class="skill-icon">

                    ${iconSVG(skill.icon)}

                </div>


                <div class="skill-name">
                    ${skill.name}
                </div>


                <div class="skill-category">
                    ${skill.category}
                </div>

            </article>

        `).join("");
}



/* =========================================================
   RENDER LEADERSHIP
========================================================= */

function renderLeadership() {

    leadershipGrid.innerHTML =
        leadership.map(item => `

            <article class="leadership-card">

                <div class="leadership-icon">
                    ${item.icon}
                </div>


                <h4>
                    ${item.title}
                </h4>


                <p>
                    ${item.description}
                </p>

            </article>

        `).join("");
}



/* =========================================================
   OPEN PROJECT PREVIEW
========================================================= */

let selectedProject = null;


function openProjectPreview(index) {

    selectedProject =
        projects[index];

    document.getElementById(
        "previewVisual"
    ).innerHTML =
        iconSVG(selectedProject.icon);


    document.getElementById(
        "previewCategory"
    ).textContent =
        selectedProject.category;


    document.getElementById(
        "previewTitle"
    ).textContent =
        selectedProject.title;


    document.getElementById(
        "previewDescription"
    ).textContent =
        selectedProject.description;


    document.getElementById(
        "previewKeywords"
    ).innerHTML =
        selectedProject.keywords.map(
            keyword =>
                `<span class="keyword">${keyword}</span>`
        ).join("");


    document.getElementById(
        "previewInsights"
    ).innerHTML =
        selectedProject.insights.map(
            insight =>
                `<li>${insight}</li>`
        ).join("");


    openModal(
        projectPreviewModal
    );
}



/* =========================================================
   OPEN PROJECT DETAIL
========================================================= */

function openProjectDetail() {

    if (!selectedProject) return;


    document.getElementById(
        "detailCategory"
    ).textContent =
        selectedProject.category;


    document.getElementById(
        "detailTitle"
    ).textContent =
        selectedProject.title;


    document.getElementById(
        "detailKeywords"
    ).innerHTML =
        selectedProject.keywords.map(
            keyword =>
                `<span class="keyword">${keyword}</span>`
        ).join("");


    document.getElementById(
        "detailBody"
    ).innerHTML =
        selectedProject.details.map(
            block => `

                <section class="detail-block">

                    <h3>
                        ${block.title}
                    </h3>

                    <p>
                        ${block.text}
                    </p>

                </section>

            `
        ).join("");


    closeModal(projectPreviewModal);

    openModal(projectDetailModal);
}



/* =========================================================
   OPEN SKILL
========================================================= */

function openSkill(index) {

    const skill =
        skills[index];


    document.getElementById(
        "skillModalIcon"
    ).innerHTML =
        iconSVG(skill.icon);


    document.getElementById(
        "skillModalCategory"
    ).textContent =
        skill.category;


    document.getElementById(
        "skillModalTitle"
    ).textContent =
        skill.name;


    document.getElementById(
        "skillModalDescription"
    ).textContent =
        skill.description;


    document.getElementById(
        "skillModalPoints"
    ).innerHTML =
        skill.points.map(
            point =>
                `<li>${point}</li>`
        ).join("");


    openModal(skillModal);
}



/* =========================================================
   MODAL HELPERS
========================================================= */

function openModal(modal) {

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal(modal) {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    if (
        !document.querySelector(".modal.open")
    ) {

        document.body.style.overflow =
            "";

    }
}



/* =========================================================
   PROJECT CLICK
========================================================= */

projectsGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".project-card"
            );

        if (!card) return;


        const index =
            Number(card.dataset.index);


        openProjectPreview(index);

    }
);



/* =========================================================
   SKILL CLICK
========================================================= */

skillsGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".skill-card"
            );

        if (!card) return;


        const index =
            Number(card.dataset.skill);


        openSkill(index);

    }
);



/* =========================================================
   EXPLORE PROJECT
========================================================= */

document
    .getElementById("exploreProject")
    .addEventListener(
        "click",
        openProjectDetail
    );



/* =========================================================
   CLOSE MODALS
========================================================= */

document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const modal =
                    document.getElementById(
                        button.dataset.close
                    );

                closeModal(modal);

            }
        );

    });


document
    .querySelectorAll(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener(
            "click",
            () => {

                const modal =
                    overlay.closest(".modal");

                closeModal(modal);

            }
        );

    });



/* =========================================================
   ESC TO CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) return;


        document
            .querySelectorAll(".modal.open")
            .forEach(modal => {

                closeModal(modal);

            });

    }
);



/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "main section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const mobileNavItems =
    document.querySelectorAll(
        ".mobile-nav-item"
    );


function updateNavigation() {

    const position =
        window.scrollY +
        window.innerHeight * .35;


    let current =
        "home";


    sections.forEach(section => {

        if (
            position >= section.offsetTop &&
            position <
            section.offsetTop +
            section.offsetHeight
        ) {

            current =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.toggle(
            "active",

            link.getAttribute("href") ===
            `#${current}`
        );

    });


    mobileNavItems.forEach(item => {

        item.classList.toggle(
            "active",

            item.dataset.section ===
            current
        );

    });

}


window.addEventListener(
    "scroll",
    updateNavigation,
    { passive: true }
);


updateNavigation();



/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        themeToggle.textContent =
            document.body.classList.contains(
                "light-mode"
            )
                ? "☾"
                : "☼";

    }
);



/* =========================================================
   INITIALIZE
========================================================= */

renderJourney();
renderProjects();
renderSkills();
renderLeadership();
