/* =========================================================
   DATA
========================================================= */

const skills = [
    { name: "Microsoft Excel", icon: "▦" },
    { name: "AI Tools", icon: "✦" },
    { name: "Python", icon: "⌘" },
    { name: "Data Analysis", icon: "⌁" },
    { name: "Process Engineering", icon: "⚙" },
    { name: "Process Validation", icon: "✓" },
    { name: "Laboratory", icon: "⌬" },
    { name: "R&D", icon: "◇" },
    { name: "Minitab", icon: "▥" },
    { name: "MATLAB", icon: "∫" },
    { name: "Aspen Plus", icon: "△" },
    { name: "SimaPro", icon: "♧" },
    { name: "Technical Documentation", icon: "▤" },
    { name: "Data Visualization", icon: "◫" },
    { name: "Project Coordination", icon: "◎" },
    { name: "Sustainability", icon: "♧" }
];


const journey = [
    {
        number: "01",
        title: "Professional Experience",
        subtitle: "Reckitt | Process Technologist",
        description:
            "Worked in GMP-regulated medical device manufacturing, supporting process validation, machine trials, technical documentation and production-related problem solving.",
        bullets: [
            "Executed OQ/PQ process validation activities.",
            "Supported UDI laser printing validation across 5 machines.",
            "Supported electronic leakage testing validation across 12 new machines.",
            "Worked with Production, QA, Engineering and operators to coordinate trials and resolve issues."
        ],
        tags: [
            "Process Validation",
            "GMP",
            "Manufacturing",
            "Technical Documentation"
        ]
    },

    {
        number: "02",
        title: "Education",
        subtitle: "Bachelor of Engineering — Chemical Engineering",
        description:
            "Chulalongkorn University — Chemical Engineering. Developed a foundation in process design, transport phenomena, thermodynamics, reaction engineering, process control and engineering problem solving.",
        bullets: [
            "Chemical process design and simulation.",
            "Engineering calculations and data analysis.",
            "Laboratory and experimental work.",
            "Engineering projects and multidisciplinary activities."
        ],
        tags: [
            "Chemical Engineering",
            "Process Design",
            "Simulation"
        ]
    },

    {
        number: "03",
        title: "Internship",
        subtitle: "Mektec | Facilities Engineer Intern",
        description:
            "Worked with plant data and environmental-related engineering activities, including carbon footprint data collection and wastewater analysis.",
        bullets: [
            "Collected and organized plant data for Scope 1 and Scope 3 carbon footprint assessment.",
            "Worked with cross-functional teams to obtain operational data.",
            "Supported chemical preparation and environmental-related analysis.",
            "Worked with wastewater and heavy-metal contamination data."
        ],
        tags: [
            "Plant Data",
            "Scope 1 & 3",
            "Environmental",
            "Facilities"
        ]
    },

    {
        number: "04",
        title: "Internship",
        subtitle: "Cirprise Startup | R&D Intern",
        description:
            "Worked on product formulation and experimental development for powdered hand soap, balancing product quality, formulation performance and cost considerations.",
        bullets: [
            "Conducted formulation trials and evaluated product performance.",
            "Adjusted ingredients to investigate quality and cost trade-offs.",
            "Supported product development and experimental documentation.",
            "Coordinated with the team on patent-related activities."
        ],
        tags: [
            "R&D",
            "Formulation",
            "Experiment",
            "Product Development"
        ]
    },

    {
        number: "05",
        title: "Awards & Competitions",
        subtitle: "Innovation • Sustainability • Engineering",
        description:
            "Participated in engineering, sustainability and innovation competitions throughout university.",
        bullets: [
            "Young Sustainability Practitioner #4 — Winner.",
            "Faculty Future Race to Zero — Finalist.",
            "Innovation Impact Challenge 2025 — Finalist.",
            "Rakkaew Foundation National University Sustainability Showcase — Winner."
        ],
        tags: [
            "Innovation",
            "Sustainability",
            "Competition"
        ]
    },

    {
        number: "06",
        title: "International Experience",
        subtitle: "Work & Travel | Montana, USA",
        description:
            "Spent four months working and living in Livingston, Montana, gaining international work experience and communicating in an English-speaking multicultural environment.",
        bullets: [
            "Worked in an international environment.",
            "Communicated with people from different cultural backgrounds.",
            "Adapted to a new workplace and living environment.",
            "Developed practical English communication skills."
        ],
        tags: [
            "USA",
            "English",
            "International Experience"
        ]
    }
];


const projects = [
    {
        id: "methanol-co2",
        category: "university",
        categoryLabel: "University",
        title: "Methanol from CO₂",
        shortDescription:
            "Conceptual process design and simulation for methanol production from CO₂, including process development, equipment design and economic consideration.",
        year: "2024–2025",
        role: "Chemical Engineering Project",
        tools: [
            "Aspen Plus",
            "Process Simulation",
            "Process Design"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "A chemical process design project focused on converting CO₂ into methanol. The project involved developing a conceptual process, performing simulation work and considering equipment configuration, layout and economics.",
        challenge:
            "The challenge was to translate the chemical conversion concept into a practical process flow while maintaining product quality and considering the relationships between reaction conditions, separation and equipment.",
        approach:
            "The process was developed from reaction and separation concepts, followed by process simulation and engineering calculations. Equipment and process configuration were then considered together with layout and economic aspects.",
        process: [
            "Defined the overall process concept.",
            "Developed the process flow and major unit operations.",
            "Performed process simulation and material/energy analysis.",
            "Selected and considered major equipment.",
            "Developed a conceptual layout.",
            "Evaluated economic considerations."
        ],
        results:
            "The conceptual process achieved a simulated methanol purity of more than 98%, providing a basis for evaluating the technical feasibility of the proposed process.",
        learning:
            "The project strengthened my understanding of how reaction engineering, process simulation, equipment selection, process integration and economics connect within a complete chemical process."
    },

    {
        id: "air-filter",
        category: "university",
        categoryLabel: "University",
        title: "Recycled Plastic → Electrospun Air Filter",
        shortDescription:
            "Developed a high-efficiency electrospun air filter using recycled plastic from used baby milk bottles.",
        year: "2024–2025",
        role: "Senior Project",
        tools: [
            "Electrospinning",
            "Material Preparation",
            "Laboratory"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "A senior project exploring the conversion of recycled plastic from used baby milk bottles into material for a high-efficiency electrospun air filter.",
        challenge:
            "The project explored how waste plastic could be transformed into a functional material while maintaining suitable properties for air filtration.",
        approach:
            "The work involved material preparation, experimental development and electrospinning to produce fibrous filter structures. The resulting material was then evaluated for its filtration performance.",
        process: [
            "Prepared recycled plastic material.",
            "Developed material suitable for electrospinning.",
            "Produced electrospun fiber structures.",
            "Evaluated the resulting filter material.",
            "Compared performance and material characteristics."
        ],
        results:
            "The project demonstrated the potential of recycled plastic as a feedstock for developing electrospun filtration materials.",
        learning:
            "I gained hands-on experience in laboratory experimentation, material processing, troubleshooting and connecting experimental results with engineering objectives."
    },

    {
        id: "powdered-hand-soap",
        category: "applied",
        categoryLabel: "Applied / R&D",
        title: "Powdered Hand Soap Development",
        shortDescription:
            "R&D formulation trials for powdered hand soap, focusing on product quality, performance and cost.",
        year: "2025",
        role: "R&D Intern",
        tools: [
            "Formulation",
            "Experimentation",
            "Product Development"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "An applied R&D project focused on developing a powdered hand soap formulation through iterative experimentation.",
        challenge:
            "The formulation needed to balance product quality, performance and cost while maintaining a practical formulation.",
        approach:
            "Different ingredient combinations and formulation conditions were tested and adjusted based on experimental observations and product requirements.",
        process: [
            "Reviewed the original formulation.",
            "Designed formulation trials.",
            "Adjusted ingredient ratios.",
            "Evaluated product quality and performance.",
            "Compared formulation alternatives."
        ],
        results:
            "The trials helped identify formulation directions that could improve product performance while considering cost and environmental impact.",
        learning:
            "The project strengthened my ability to design experiments, interpret results and make formulation decisions based on multiple constraints."
    },

    {
        id: "carbon-footprint",
        category: "sustainability",
        categoryLabel: "Sustainability",
        title: "Plant Carbon Footprint — Scope 1 & 3",
        shortDescription:
            "Collected and analyzed manufacturing plant data to support Scope 1 and Scope 3 carbon footprint assessment.",
        year: "2024",
        role: "Facilities Engineer Intern",
        tools: [
            "Plant Data",
            "Carbon Footprint",
            "SimaPro"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "An internship project involving real manufacturing plant data for carbon footprint assessment.",
        challenge:
            "The work required collecting information from different operational sources and organizing it into data suitable for environmental assessment.",
        approach:
            "Plant data was collected with support from relevant teams, organized and reviewed before being used for carbon footprint calculations and analysis.",
        process: [
            "Identified required operational data.",
            "Collected data from plant activities.",
            "Organized and reviewed the information.",
            "Supported Scope 1 and Scope 3 assessment.",
            "Worked with environmental-related datasets."
        ],
        results:
            "The work contributed to building a clearer picture of the plant's emissions-related activities and provided practical experience in working with real operational data.",
        learning:
            "I learned that reliable environmental analysis depends heavily on accurate data collection, clear assumptions and collaboration with people who understand the underlying operations."
    },

    {
        id: "marine-waste-carpet",
        category: "applied",
        categoryLabel: "Applied / R&D",
        title: "Marine Waste → Car Carpet",
        shortDescription:
            "Explored the use of marine waste as a material source for automotive carpet applications.",
        year: "University Project",
        role: "Innovation Project",
        tools: [
            "Material Development",
            "Sustainability",
            "Automotive"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "An innovation project exploring how marine waste could be transformed into a useful automotive material.",
        challenge:
            "The project focused on finding a pathway to convert waste material into a product with practical value.",
        approach:
            "The concept connected waste collection, material processing and automotive application requirements.",
        process: [
            "Identified the waste material opportunity.",
            "Considered material processing routes.",
            "Developed the automotive application concept.",
            "Considered practical and environmental value."
        ],
        results:
            "The project demonstrated a concept for connecting waste management with material development and automotive applications.",
        learning:
            "The project helped me think about engineering problems from both technical and application perspectives."
    },

    {
        id: "high-school-innovation",
        category: "high-school",
        categoryLabel: "High School",
        title: "Engineering & Innovation Project",
        shortDescription:
            "An early engineering project that sparked my interest in developing practical solutions to real-world problems.",
        year: "High School",
        role: "Student Project",
        tools: [
            "Engineering",
            "Problem Solving",
            "Innovation"
        ],
        heroLabel: "PROJECT IMAGE",
        overview:
            "A high-school project representing one of my early experiences with engineering and innovation.",
        challenge:
            "The project began with identifying a practical problem and exploring a possible technical solution.",
        approach:
            "The work involved defining the problem, developing an initial concept and testing the feasibility of the idea.",
        process: [
            "Identified the problem.",
            "Developed a solution concept.",
            "Built or tested the proposed idea.",
            "Reviewed the outcome."
        ],
        results:
            "The project became an early experience that encouraged me to continue exploring engineering and innovation.",
        learning:
            "It helped establish my interest in creating practical solutions rather than simply studying engineering concepts."
    }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const journeyList = document.getElementById("journeyList");
const skillsGrid = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const projectFilters = document.getElementById("projectFilters");

const projectDetail = document.getElementById("projectDetail");
const projectDetailContent = document.getElementById("projectDetailContent");

const backProjects = document.getElementById("backProjects");
const previousProject = document.getElementById("previousProject");
const nextProject = document.getElementById("nextProject");

const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");

const themeToggle = document.getElementById("themeToggle");

const backToTop = document.getElementById("backToTop");

let currentFilter = "all";
let visibleProjects = [...projects];
let currentProjectIndex = 0;


/* =========================================================
   JOURNEY
========================================================= */

function renderJourney() {

    journeyList.innerHTML = journey.map((item, index) => {

        return `
            <article class="journey-item reveal">

                <button
                    class="journey-header"
                    type="button"
                    aria-expanded="false"
                >

                    <span class="journey-number">
                        ${item.number}
                    </span>

                    <span>
                        <span class="journey-title">
                            ${item.title}
                        </span>

                        <span class="journey-subtitle">
                            ${item.subtitle}
                        </span>
                    </span>

                    <span class="journey-arrow">
                        ↓
                    </span>

                </button>


                <div class="journey-content">

                    <div class="journey-content-inner">

                        <p>
                            ${item.description}
                        </p>

                        <ul>
                            ${item.bullets
                                .map(bullet => `<li>${bullet}</li>`)
                                .join("")}
                        </ul>

                        <div class="journey-meta">
                            ${item.tags
                                .map(tag => `<span>${tag}</span>`)
                                .join("")}
                        </div>

                    </div>

                </div>

            </article>
        `;

    }).join("");

    document.querySelectorAll(".journey-header").forEach(button => {

        button.addEventListener("click", () => {

            const item = button.closest(".journey-item");
            const isOpen = item.classList.contains("open");

            document
                .querySelectorAll(".journey-item.open")
                .forEach(openItem => {

                    openItem.classList.remove("open");

                    const openButton =
                        openItem.querySelector(".journey-header");

                    openButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            if (!isOpen) {

                item.classList.add("open");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });
}


/* =========================================================
   SKILLS
========================================================= */

function renderSkills() {

    skillsGrid.innerHTML = skills.map(skill => {

        return `
            <div class="skill-card reveal">

                <div class="skill-icon">
                    ${skill.icon}
                </div>

                <div class="skill-name">
                    ${skill.name}
                </div>

            </div>
        `;

    }).join("");
}


/* =========================================================
   PROJECTS
========================================================= */

function renderProjects(filter = "all") {

    currentFilter = filter;

    if (filter === "all") {
        visibleProjects = [...projects];
    } else {
        visibleProjects = projects.filter(
            project => project.category === filter
        );
    }

    projectsGrid.innerHTML = visibleProjects.map((project, index) => {

        return `
            <article class="project-card reveal">

                <div class="project-image">

                    <span class="image-placeholder">
                        ${project.heroLabel}
                    </span>

                </div>


                <div class="project-content">

                    <span class="project-category">
                        ${project.categoryLabel}
                    </span>

                    <h3>
                        ${project.title}
                    </h3>

                    <p class="project-description">
                        ${project.shortDescription}
                    </p>

                    <a
                        href="#project/${project.id}"
                        class="project-link"
                        data-project-id="${project.id}"
                    >
                        View Project
                        <span>→</span>
                    </a>

                </div>

            </article>
        `;

    }).join("");

    document
        .querySelectorAll("[data-project-id]")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();

                const projectId =
                    link.dataset.projectId;

                openProject(projectId);

            });

        });

    observeRevealElements();
}


/* =========================================================
   PROJECT DETAIL
========================================================= */

function openProject(projectId, updateHistory = true) {

    const project =
        projects.find(item => item.id === projectId);

    if (!project) {
        return;
    }

    currentProjectIndex =
        visibleProjects.findIndex(
            item => item.id === projectId
        );

    if (currentProjectIndex === -1) {

        visibleProjects = [...projects];

        currentProjectIndex =
            visibleProjects.findIndex(
                item => item.id === projectId
            );
    }

    projectDetailContent.innerHTML = `

        <div class="project-detail-header">

            <span class="project-detail-category">
                ${project.categoryLabel}
            </span>

            <h1>
                ${project.title}
            </h1>

            <p class="project-detail-intro">
                ${project.shortDescription}
            </p>

        </div>


        <div class="project-hero-image">

            <span class="image-placeholder">
                ${project.heroLabel}
            </span>

        </div>


        <div class="project-detail-body">

            <aside class="project-detail-sidebar">

                <div class="detail-meta">

                    <div class="detail-meta-item">

                        <span class="detail-meta-label">
                            Year
                        </span>

                        <span class="detail-meta-value">
                            ${project.year}
                        </span>

                    </div>


                    <div class="detail-meta-item">

                        <span class="detail-meta-label">
                            Role
                        </span>

                        <span class="detail-meta-value">
                            ${project.role}
                        </span>

                    </div>


                    <div class="detail-meta-item">

                        <span class="detail-meta-label">
                            Category
                        </span>

                        <span class="detail-meta-value">
                            ${project.categoryLabel}
                        </span>

                    </div>


                    <div class="detail-meta-item">

                        <span class="detail-meta-label">
                            Tools
                        </span>

                        <span class="detail-meta-value">
                            ${project.tools.join(" • ")}
                        </span>

                    </div>

                </div>

            </aside>


            <div class="project-detail-text">

                <section>

                    <h2>
                        Overview
                    </h2>

                    <p>
                        ${project.overview}
                    </p>

                </section>


                <section>

                    <h2>
                        Challenge
                    </h2>

                    <p>
                        ${project.challenge}
                    </p>

                </section>


                <section>

                    <h2>
                        Approach
                    </h2>

                    <p>
                        ${project.approach}
                    </p>

                </section>


                <section>

                    <h2>
                        Process
                    </h2>

                    <ul>
                        ${project.process
                            .map(step => `<li>${step}</li>`)
                            .join("")}
                    </ul>

                    <div class="supporting-images">

                        <div class="supporting-image">
                            SUPPORTING IMAGE
                        </div>

                        <div class="supporting-image">
                            DIAGRAM / RESULT
                        </div>

                    </div>

                </section>


                <section>

                    <h2>
                        Results
                    </h2>

                    <p>
                        ${project.results}
                    </p>

                </section>


                <section>

                    <h2>
                        What I Learned
                    </h2>

                    <p>
                        ${project.learning}
                    </p>

                </section>

            </div>

        </div>
    `;


    document
        .querySelector("main")
        .querySelectorAll(
            ".hero, .about-section, .journey-section, .skills-section, .projects-section, .contact-section"
        )
        .forEach(section => {

            section.classList.add("hidden");

        });


    projectDetail.classList.remove("hidden");


    if (updateHistory) {

        history.pushState(
            { projectId },
            "",
            `#project/${projectId}`
        );

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateProjectNavigation();
}


/* =========================================================
   PROJECT NAVIGATION
========================================================= */

function updateProjectNavigation() {

    if (visibleProjects.length <= 1) {

        previousProject.style.visibility = "hidden";
        nextProject.style.visibility = "hidden";

        return;
    }

    previousProject.style.visibility =
        currentProjectIndex > 0
            ? "visible"
            : "hidden";

    nextProject.style.visibility =
        currentProjectIndex < visibleProjects.length - 1
            ? "visible"
            : "hidden";
}


previousProject.addEventListener("click", () => {

    if (currentProjectIndex > 0) {

        const previous =
            visibleProjects[currentProjectIndex - 1];

        openProject(previous.id);

    }

});


nextProject.addEventListener("click", () => {

    if (
        currentProjectIndex <
        visibleProjects.length - 1
    ) {

        const next =
            visibleProjects[currentProjectIndex + 1];

        openProject(next.id);

    }

});


/* =========================================================
   BACK TO PROJECTS
========================================================= */

function closeProjectDetail(updateHistory = true) {

    projectDetail.classList.add("hidden");

    document
        .querySelector("main")
        .querySelectorAll(
            ".hero, .about-section, .journey-section, .skills-section, .projects-section, .contact-section"
        )
        .forEach(section => {

            section.classList.remove("hidden");

        });


    if (updateHistory) {

        history.pushState(
            {},
            "",
            "#projects"
        );

    }

    setTimeout(() => {

        document
            .getElementById("projects")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 50);

}


backProjects.addEventListener(
    "click",
    () => closeProjectDetail()
);


/* =========================================================
   PROJECT FILTERS
========================================================= */

projectFilters
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            projectFilters
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.remove("active");

                });

            button.classList.add("active");

            renderProjects(
                button.dataset.filter
            );

        });

    });


/* =========================================================
   HASH / BROWSER NAVIGATION
========================================================= */

function handleHash() {

    const hash = window.location.hash;

    if (hash.startsWith("#project/")) {

        const projectId =
            hash.replace("#project/", "");

        openProject(
            projectId,
            false
        );

        return;
    }


    if (hash === "#projects") {

        closeProjectDetail(false);

        return;
    }


    if (projectDetail.classList.contains("hidden")) {
        return;
    }

    closeProjectDetail(false);
}


window.addEventListener(
    "popstate",
    handleHash
);

window.addEventListener(
    "hashchange",
    handleHash
);


/* =========================================================
   NAVIGATION
========================================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = [
    document.getElementById("home"),
    document.getElementById("journey"),
    document.getElementById("skills"),
    document.getElementById("projects"),
    document.getElementById("contact")
];

const navLinks =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    if (section) {
        sectionObserver.observe(section);
    }

});


/* =========================================================
   THEME TOGGLE
========================================================= */

function updateThemeIcon() {

    themeToggle.textContent =
        document.body.classList.contains("light-mode")
            ? "☼"
            : "◐";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    const isLight =
        document.body.classList.contains(
            "light-mode"
        );

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    updateThemeIcon();

});


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}

updateThemeIcon();


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function observeRevealElements() {

    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
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


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            if (
                !element.classList.contains(
                    "visible"
                )
            ) {

                revealObserver.observe(
                    element
                );

            }

        });

}


/* =========================================================
   INITIALIZE
========================================================= */

renderJourney();
renderSkills();
renderProjects();

observeRevealElements();

handleHash();
