/* =========================================================
   DATA
========================================================= */


/* =========================================================
   JOURNEY
========================================================= */

const journey = [

    {
        role: "Process Technologist",
        company: "Reckitt Benckiser",
        duration: "DEC 2025 — MAR 2026",
        type: "WORK EXPERIENCE",
        color: "#38bdf8",

        description:
            "Worked in GMP-regulated medical device manufacturing, supporting process validation, technical documentation, troubleshooting and production activities.",

        tags: [
            "OQ / PQ",
            "GMP",
            "Manufacturing",
            "Technical Data"
        ]
    },


    {
        role: "Bachelor of Engineering",
        company: "Chemical Engineering · Chulalongkorn University",
        duration: "2021 — 2025",
        type: "EDUCATION",
        color: "#a78bfa",

        description:
            "Built a strong foundation in chemical engineering, process systems, engineering design, simulation, laboratory work and technical analysis.",

        tags: [
            "Chemical Engineering",
            "Process Design",
            "Simulation"
        ]
    },


    {
        role: "Facilities Engineer Intern",
        company: "Mektec Manufacturing Corporation (Thailand)",
        duration: "2024",
        type: "INTERNSHIP",
        color: "#2dd4bf",

        description:
            "Collected and organized plant data for carbon footprint assessment and supported environmental and wastewater-related activities.",

        tags: [
            "Plant Data",
            "Scope 1",
            "Scope 3",
            "Environment"
        ]
    },


    {
        role: "R&D Intern",
        company: "Cirprise Startup",
        duration: "2025",
        type: "R&D EXPERIENCE",
        color: "#fb923c",

        description:
            "Conducted formulation trials for powdered hand soap, evaluating quality, cost and sustainability considerations during product development.",

        tags: [
            "R&D",
            "Formulation",
            "Innovation",
            "Product Development"
        ]
    },


    {
        role: "International Experience",
        company: "Work & Travel · Montana, USA",
        duration: "2025",
        type: "INTERNATIONAL",
        color: "#60a5fa",

        description:
            "Worked and lived in the United States for approximately four months, developing practical English communication and adaptability in a multicultural environment.",

        tags: [
            "USA",
            "English",
            "Communication",
            "Adaptability"
        ]
    }

];



/* =========================================================
   SKILLS
========================================================= */

const skills = [

    {
        name: "Microsoft Excel",
        category: "Data & Productivity",
        icon: "EX",

        description:
            "Used for organizing, cleaning, reviewing and working with technical and operational data."
    },


    {
        name: "Python",
        category: "Programming",
        icon: "PY",

        description:
            "Used as a programming foundation for data processing, analysis and technical problem-solving."
    },


    {
        name: "Process Validation",
        category: "Manufacturing",
        icon: "PV",

        description:
            "Hands-on experience supporting OQ/PQ activities, validation documentation, data review and GMP-regulated manufacturing."
    },


    {
        name: "Process Design",
        category: "Engineering",
        icon: "PD",

        description:
            "Experience with process design, material balances, simulation and engineering decision-making through university projects."
    },


    {
        name: "Technical Documentation",
        category: "Engineering",
        icon: "TD",

        description:
            "Experience preparing, reviewing and organizing technical information and validation-related documentation."
    }

];



/* =========================================================
   LEADERSHIP
========================================================= */

const leadership = [

    {
        title: "Chemical Engineering Night",
        description:
            "Supported event organization, coordination and registration activities for the faculty community."
    },


    {
        title: "Volunteer Activities",
        description:
            "Participated in volunteer and community activities through university organizations and student initiatives."
    },


    {
        title: "Mentorship & Student Activities",
        description:
            "Supported peer learning, mentoring and collaborative activities throughout university."
    }

];



/* =========================================================
   PROJECTS
========================================================= */

const projects = [

    {
        id: "methanol-co2",

        category: "UNIVERSITY PROJECT",

        title: "Methanol Production from CO₂",

        image: "project-methanol.jpg",

        description:
            "Process design and simulation for converting CO₂ into methanol.",

        insight:
            "Connecting chemical engineering fundamentals with process design, simulation and economic thinking.",

        tags: [
            "Process Design",
            "Aspen Plus",
            "Simulation",
            "CO₂"
        ],

        overview:
            "Designed a conceptual process for producing methanol from CO₂, combining process simulation, equipment design, process integration and economic considerations.",

        challenge:
            "Developing a technically feasible process while maintaining product purity and considering process integration.",

        approach: [
            "Defined the overall process route.",
            "Performed process simulation and material balance calculations.",
            "Designed major process equipment.",
            "Developed preliminary equipment layout.",
            "Evaluated process economics."
        ],

        result:
            "The designed process achieved a simulated methanol purity above 98%.",

        learning:
            "The project strengthened my understanding of how chemical engineering fundamentals connect with real process design and decision-making.",

        meta: {
            type: "University Project",
            tools: "Aspen Plus • Engineering Design",
            year: "2024"
        }
    },


    {
        id: "air-filter",

        category: "SENIOR PROJECT",

        title: "Recycled Plastic → Air Filter",

        image: "project-air-filter.jpg",

        description:
            "Development of an electrospun air filter using recycled plastic.",

        insight:
            "Turning a waste material into a potentially useful high-value engineering application.",

        tags: [
            "Materials",
            "Electrospinning",
            "Sustainability",
            "Circular Economy"
        ],

        overview:
            "Explored the conversion of recycled plastic from baby milk bottles into material suitable for high-efficiency air filtration.",

        challenge:
            "Finding a practical way to transform waste plastic into a useful functional material.",

        approach: [
            "Prepared recycled polymer material.",
            "Investigated material preparation conditions.",
            "Produced electrospun fiber structures.",
            "Evaluated resulting filter characteristics."
        ],

        result:
            "The project demonstrated the potential of recycled polymer waste as a feedstock for functional filtration materials.",

        learning:
            "The project strengthened my understanding of the relationship between material properties, processing conditions and final product performance.",

        meta: {
            type: "Senior Project",
            tools: "Electrospinning • Materials",
            year: "2024 — 2025"
        }
    },


    {
        id: "udi-validation",

        category: "PROFESSIONAL EXPERIENCE",

        title: "UDI Laser Printing Validation",

        image: "project-udi.jpg",

        description:
            "Process validation of UDI laser printing across five production machines.",

        insight:
            "Reliable technical data is essential when validating a process in a GMP-regulated manufacturing environment.",

        tags: [
            "Validation",
            "GMP",
            "OQ / PQ",
            "Manufacturing"
        ],

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

        result:
            "Generated validation evidence supporting the evaluation of the UDI laser printing process across five machines.",

        learning:
            "The project strengthened my understanding of validation, technical documentation and reliable process data.",

        meta: {
            type: "Professional Experience",
            tools: "OQ / PQ • Technical Documentation",
            year: "2025 — 2026"
        }
    }

];



/* =========================================================
   DOM
========================================================= */

const journeyList =
    document.getElementById("journeyList");

const skillsGrid =
    document.getElementById("skillsGrid");

const leadershipGrid =
    document.getElementById("leadershipGrid");

const projectsGrid =
    document.getElementById("projectsGrid");

const projectModal =
    document.getElementById("projectModal");

const projectModalContent =
    document.getElementById("projectModalContent");

const detailModal =
    document.getElementById("detailModal");

const detailModalContent =
    document.getElementById("detailModalContent");

const skillModal =
    document.getElementById("skillModal");

const skillModalContent =
    document.getElementById("skillModalContent");



/* =========================================================
   JOURNEY
========================================================= */

function renderJourney() {

    if (!journeyList) return;

    journeyList.innerHTML =
        journey.map((item, index) => `

            <article
                class="journey-card"
                style="--journey-color:${item.color}"
            >

                <div class="journey-top">

                    <span class="journey-type">
                        ${item.type}
                    </span>

                    <span class="journey-date">
                        ${item.duration}
                    </span>

                </div>


                <h3 class="journey-role">
                    ${item.role}
                </h3>


                <div class="journey-company">
                    ${item.company}
                </div>


                <p class="journey-description">
                    ${item.description}
                </p>


                <div class="journey-tags">

                    ${item.tags.map(tag => `
                        <span>
                            ${tag}
                        </span>
                    `).join("")}

                </div>

            </article>

        `).join("");
}



/* =========================================================
   SKILLS
========================================================= */

function renderSkills() {

    if (!skillsGrid) return;

    skillsGrid.innerHTML =
        skills.map((skill, index) => `

            <article
                class="skill-card"
                data-skill="${index}"
            >

                <div class="skill-icon">
                    ${skill.icon}
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
   LEADERSHIP
========================================================= */

function renderLeadership() {

    if (!leadershipGrid) return;

    leadershipGrid.innerHTML =
        leadership.map(item => `

            <article class="leadership-card">

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
   PROJECTS
========================================================= */

function renderProjects() {

    if (!projectsGrid) return;

    projectsGrid.innerHTML =
        projects.map((project, index) => `

            <article
                class="project-card"
                data-project="${index}"
            >

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        onerror="this.style.display='none'"
                    >

                    <div class="project-image-placeholder">
                        PROJECT ${String(index + 1).padStart(2,"0")}
                    </div>

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

                        ${project.tags.map(tag => `
                            <span>
                                ${tag}
                            </span>
                        `).join("")}

                    </div>


                    <div class="project-link">
                        View Project ↗
                    </div>

                </div>

            </article>

        `).join("");
}



/* =========================================================
   PROJECT POPUP
========================================================= */

function openProject(index) {

    const project =
        projects[index];

    if (!project) return;


    projectModalContent.innerHTML = `

        <div class="modal-category">
            ${project.category}
        </div>


        <h2 class="modal-title">
            ${project.title}
        </h2>


        <p class="modal-description">
            ${project.description}
        </p>


        <div class="key-insight">

            <div class="key-insight-label">
                KEY INSIGHT
            </div>

            <strong>
                ${project.insight}
            </strong>

        </div>


        <div class="modal-tags">

            ${project.tags.map(tag => `
                <span>
                    #${tag}
                </span>
            `).join("")}

        </div>


        <button
            class="btn btn-primary"
            onclick="openProjectDetail(${index})"
        >
            Explore Project
            <span>↗</span>
        </button>

    `;


    projectModal.classList.add("open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}



/* =========================================================
   PROJECT DETAIL
========================================================= */

function openProjectDetail(index) {

    const project =
        projects[index];

    if (!project) return;


    projectModal.classList.remove("open");


    detailModalContent.innerHTML = `

        <div class="modal-category">
            ${project.category}
        </div>


        <h2 class="modal-title">
            ${project.title}
        </h2>


        <img
            class="detail-image"
            src="${project.image}"
            alt="${project.title}"
        >


        <div class="detail-grid">

            <div>

                <section class="detail-block">

                    <h3>
                        OVERVIEW
                    </h3>

                    <p>
                        ${project.overview}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        CHALLENGE
                    </h3>

                    <p>
                        ${project.challenge}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        APPROACH
                    </h3>

                    <ul>

                        ${project.approach.map(item => `
                            <li>
                                ${item}
                            </li>
                        `).join("")}

                    </ul>

                </section>


                <section class="detail-block">

                    <h3>
                        RESULT
                    </h3>

                    <p>
                        ${project.result}
                    </p>

                </section>


                <section class="detail-block">

                    <h3>
                        LEARNING
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

    `;


    detailModal.classList.add("open");

    detailModal.setAttribute(
        "aria-hidden",
        "false"
    );
}



/* =========================================================
   SKILL POPUP
========================================================= */

function openSkill(index) {

    const skill =
        skills[index];

    if (!skill) return;


    skillModalContent.innerHTML = `

        <div class="skill-modal-icon">
            ${skill.icon}
        </div>


        <h2 class="skill-modal-title">
            ${skill.name}
        </h2>


        <div class="skill-modal-category">
            ${skill.category}
        </div>


        <p class="skill-modal-text">
            ${skill.description}
        </p>

    `;


    skillModal.classList.add("open");

    skillModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}



/* =========================================================
   CLOSE MODALS
========================================================= */

function closeModal(modal) {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


document
    .querySelectorAll("[data-close-modal]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => closeModal(projectModal)
        );

    });


document
    .querySelectorAll("[data-close-detail]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => closeModal(detailModal)
        );

    });


document
    .querySelectorAll("[data-close-skill]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => closeModal(skillModal)
        );

    });



/* =========================================================
   CARD CLICKS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const projectCard =
            event.target.closest(".project-card");

        if (projectCard) {

            openProject(
                Number(projectCard.dataset.project)
            );

            return;
        }


        const skillCard =
            event.target.closest(".skill-card");

        if (skillCard) {

            openSkill(
                Number(skillCard.dataset.skill)
            );

        }

    }
);



/* =========================================================
   CLOSE BY OVERLAY
========================================================= */

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
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        document
            .querySelectorAll(".modal.open")
            .forEach(modal => {
                closeModal(modal);
            });

    }
);



/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

    }
);



/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "main > section"
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
        window.innerHeight * 0.35;


    let current = "home";


    sections.forEach(section => {

        if (
            position >= section.offsetTop &&
            position <
            section.offsetTop +
            section.offsetHeight
        ) {

            current = section.id;

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
            item.dataset.section === current
        );

    });

}


window.addEventListener(
    "scroll",
    updateNavigation,
    {
        passive: true
    }
);



/* =========================================================
   INITIALIZE
========================================================= */

renderJourney();
renderSkills();
renderLeadership();
renderProjects();
updateNavigation();
