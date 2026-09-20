/* =========================================================
   DATA
========================================================= */

const skills = [
    {
        name: "Microsoft Excel",
        icon: "fa-solid fa-table"
    },
    {
        name: "AI Tools",
        icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
        name: "Python",
        icon: "fa-brands fa-python"
    },
    {
        name: "Data Analysis",
        icon: "fa-solid fa-chart-column"
    },
    {
        name: "Process Engineering",
        icon: "fa-solid fa-gears"
    },
    {
        name: "Process Validation",
        icon: "fa-solid fa-circle-check"
    },
    {
        name: "Laboratory",
        icon: "fa-solid fa-flask"
    },
    {
        name: "R&D",
        icon: "fa-solid fa-microscope"
    },
    {
        name: "Minitab",
        icon: "fa-solid fa-chart-line"
    },
    {
        name: "MATLAB",
        icon: "fa-solid fa-square-root-variable"
    },
    {
        name: "Aspen Plus",
        icon: "fa-solid fa-industry"
    },
    {
        name: "SimaPro",
        icon: "fa-solid fa-leaf"
    },
    {
        name: "Technical Documentation",
        icon: "fa-solid fa-file-lines"
    },
    {
        name: "Data Visualization",
        icon: "fa-solid fa-chart-pie"
    },
    {
        name: "Project Coordination",
        icon: "fa-solid fa-diagram-project"
    },
    {
        name: "Sustainability",
        icon: "fa-solid fa-seedling"
    }
];


const journey = [
    {
        number: "01",
        type: "PROFESSIONAL EXPERIENCE",
        title: "Reckitt",
        subtitle: "Process Technologist",
        year: "2025 — 2026",
        icon: "fa-solid fa-gears",
        details: `
            <p>
                Worked in GMP-regulated medical device manufacturing,
                supporting process validation, machine trials,
                technical documentation, and production troubleshooting.
            </p>

            <ul>
                <li>Executed OQ/PQ process validation.</li>
                <li>Supported UDI laser printing validation across 5 machines.</li>
                <li>Supported electronic leakage testing across 12 machines.</li>
                <li>Worked with Production, QA, Engineering, and operators.</li>
            </ul>
        `
    },

    {
        number: "02",
        type: "EDUCATION",
        title: "Chulalongkorn University",
        subtitle: "Bachelor of Engineering — Chemical Engineering",
        year: "2021 — 2025",
        icon: "fa-solid fa-graduation-cap",
        details: `
            <p>
                Studied Chemical Engineering with coursework and
                project experience covering process design,
                simulation, laboratory experimentation,
                sustainability, and engineering analysis.
            </p>
        `
    },

    {
        number: "03",
        type: "INTERNSHIP",
        title: "Mektec",
        subtitle: "Facilities Engineer Intern",
        year: "2024",
        icon: "fa-solid fa-industry",
        details: `
            <p>
                Worked with plant and environmental data,
                supporting carbon footprint analysis and
                wastewater-related activities.
            </p>

            <ul>
                <li>Collected and organized plant data.</li>
                <li>Supported Scope 1 and Scope 3 analysis.</li>
                <li>Worked with wastewater and heavy-metal data.</li>
            </ul>
        `
    },

    {
        number: "04",
        type: "INTERNSHIP",
        title: "Cirprise Startup",
        subtitle: "R&D Intern",
        year: "2025",
        icon: "fa-solid fa-flask",
        details: `
            <p>
                Worked on powdered hand soap formulation,
                focusing on product quality, cost, experimentation,
                and sustainability.
            </p>

            <ul>
                <li>Conducted formulation trials.</li>
                <li>Evaluated quality and cost considerations.</li>
                <li>Supported patent coordination.</li>
            </ul>
        `
    },

    {
        number: "05",
        type: "AWARDS & COMPETITIONS",
        title: "Innovation & Sustainability",
        subtitle: "Competitions • Projects • Leadership",
        year: "2022 — 2025",
        icon: "fa-solid fa-trophy",
        details: `
            <p>
                Participated in engineering, innovation,
                sustainability, and university competitions
                throughout my undergraduate years.
            </p>

            <ul>
                <li>Young Sustainability Practitioner #4 — Winner</li>
                <li>Faculty Future Race to Zero — Finalist</li>
                <li>Innovation Impact Challenge 2025 — Finalist</li>
                <li>Rakkaew Foundation Sustainability Showcase — Winner</li>
            </ul>
        `
    },

    {
        number: "06",
        type: "INTERNATIONAL EXPERIENCE",
        title: "Work & Travel",
        subtitle: "Livingston, Montana, USA",
        year: "2025",
        icon: "fa-solid fa-earth-americas",
        details: `
            <p>
                Spent approximately four months working and living
                in Montana, United States, gaining international
                work experience and communicating in a multicultural
                environment.
            </p>
        `
    }
];


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
        id: "methanol-co2",
        category: "university",
        categoryLabel: "University Project",
        title: "Methanol Production from CO₂",
        shortDescription:
            "Process design and simulation for converting CO₂ into methanol.",
        imageLabel: "Project Image",
        overview:
            "Designed a conceptual process for methanol production from CO₂, including process simulation, equipment selection, process layout, and economic considerations.",
        challenge:
            "Develop a technically feasible process while considering product purity, process conditions, equipment requirements, and overall economics.",
        approach:
            "Used chemical engineering principles and process simulation to develop and evaluate the proposed process.",
        process:
            "Process flow development → simulation → equipment design → layout → economic evaluation.",
        result:
            "The designed process achieved a methanol purity of more than 98% under the selected process conditions.",
        learning:
            "Strengthened skills in process design, simulation, engineering calculations, and communicating technical results.",
        gallery: [
            "Process Flow Diagram",
            "Simulation",
            "Equipment Design",
            "Process Layout"
        ]
    },

    {
        id: "air-filter",
        category: "university",
        categoryLabel: "University Project",
        title: "Recycled Plastic → High-Efficiency Air Filter",
        shortDescription:
            "Developed an electrospun air filter from recycled baby milk bottle plastic.",
        imageLabel: "Project Image",
        overview:
            "Explored the conversion of recycled plastic from baby milk bottles into electrospun fibers for high-efficiency air filtration.",
        challenge:
            "Create a useful engineering application from post-consumer plastic waste while maintaining suitable filtration performance.",
        approach:
            "Prepared recycled polymer material and investigated electrospinning conditions to produce fibrous filter structures.",
        process:
            "Material preparation → electrospinning → fiber characterization → filtration evaluation.",
        result:
            "Developed an electrospun filter concept using recycled plastic as the primary material.",
        learning:
            "Gained experience in materials, laboratory experimentation, process optimization, and sustainability-oriented engineering.",
        gallery: [
            "Material Preparation",
            "Electrospinning",
            "Fiber Structure",
            "Filter Testing"
        ]
    },

    {
        id: "powdered-hand-soap",
        category: "applied",
        categoryLabel: "R&D",
        title: "Powdered Hand Soap Development",
        shortDescription:
            "R&D formulation trials balancing product quality, cost, and sustainability.",
        imageLabel: "Project Image",
        overview:
            "Worked on powdered hand soap formulation during an R&D internship.",
        challenge:
            "Develop a formulation that balances product performance, quality, cost, and environmental considerations.",
        approach:
            "Conducted formulation trials and compared different ingredient combinations.",
        process:
            "Formulation → testing → comparison → adjustment → evaluation.",
        result:
            "Supported the development of a revised formulation with improved sustainability characteristics.",
        learning:
            "Developed practical experience in R&D experimentation, formulation, documentation, and product-oriented problem solving.",
        gallery: [
            "Formulation",
            "Experiment",
            "Testing",
            "Result"
        ]
    },

    {
        id: "carbon-footprint",
        category: "applied",
        categoryLabel: "Sustainability",
        title: "Plant Carbon Footprint Analysis",
        shortDescription:
            "Worked with real manufacturing data to support Scope 1 and Scope 3 analysis.",
        imageLabel: "Project Image",
        overview:
            "Supported carbon footprint-related work during a Facilities Engineering internship.",
        challenge:
            "Collect and organize relevant plant data for environmental analysis.",
        approach:
            "Worked with plant information and cross-functional teams to gather and prepare data.",
        process:
            "Data collection → data organization → calculation → analysis.",
        result:
            "Supported the preparation of plant-level carbon footprint information.",
        learning:
            "Built experience in environmental data, manufacturing operations, and working with real industrial datasets.",
        gallery: [
            "Plant Data",
            "Data Collection",
            "Analysis",
            "Output"
        ]
    },

    /*
    ---------------------------------------------------------
    ADD HIGH-SCHOOL PROJECTS HERE LATER
    ---------------------------------------------------------

    {
        id: "high-school-project-01",
        category: "high-school",
        categoryLabel: "High School",
        title: "Project Name",
        shortDescription: "Short description.",
        imageLabel: "Project Image",
        overview: "...",
        challenge: "...",
        approach: "...",
        process: "...",
        result: "...",
        learning: "...",
        gallery: [
            "Image 01",
            "Image 02",
            "Image 03"
        ]
    }
    */
];


/* =========================================================
   RENDER SKILLS
========================================================= */

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(skill => {

    const card = document.createElement("div");

    card.className = "skill-card";

    card.innerHTML = `
        <div class="skill-icon">
            <i class="${skill.icon}"></i>
        </div>

        <span>${skill.name}</span>

        <div class="skill-arrow">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
    `;

    skillsGrid.appendChild(card);
});


/* =========================================================
   RENDER JOURNEY
========================================================= */

const journeyList = document.getElementById("journeyList");

journey.forEach((item, index) => {

    const card = document.createElement("article");

    card.className = "journey-card";

    card.innerHTML = `

        <button class="journey-header">

            <div class="journey-number">
                ${item.number}
            </div>

            <div class="journey-main">

                <span class="journey-type">
                    ${item.type}
                </span>

                <h3>${item.title}</h3>

                <p>${item.subtitle}</p>

            </div>

            <div class="journey-year">
                ${item.year}
            </div>

            <div class="journey-arrow">
                <i class="fa-solid fa-chevron-down"></i>
            </div>

        </button>

        <div class="journey-details">

            <div class="journey-details-inner">

                <div class="journey-detail-icon">
                    <i class="${item.icon}"></i>
                </div>

                <div>
                    ${item.details}
                </div>

            </div>

        </div>
    `;

    journeyList.appendChild(card);
});


/* =========================================================
   JOURNEY ACCORDION
========================================================= */

document.querySelectorAll(".journey-header").forEach(header => {

    header.addEventListener("click", () => {

        const card = header.parentElement;

        document.querySelectorAll(".journey-card").forEach(otherCard => {

            if (otherCard !== card) {
                otherCard.classList.remove("open");
            }

        });

        card.classList.toggle("open");

    });

});


/* =========================================================
   RENDER HOME PROJECT PREVIEW
========================================================= */

const homeProjects = document.getElementById("homeProjects");

projects.forEach(project => {

    const card = document.createElement("article");

    card.className = "project-preview-card";

    card.innerHTML = `

        <div class="project-preview-image">
            <span>${project.imageLabel}</span>

            <div class="image-placeholder-icon">
                <i class="fa-regular fa-image"></i>
            </div>
        </div>

        <div class="project-preview-content">

            <span class="project-category">
                ${project.categoryLabel}
            </span>

            <h3>${project.title}</h3>

            <p>${project.shortDescription}</p>

        </div>

    `;

    card.addEventListener("click", () => {
        openProject(project.id);
    });

    homeProjects.appendChild(card);

});


/* =========================================================
   RENDER ALL PROJECTS
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(filter = "all") {

    projectsGrid.innerHTML = "";

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {

        const card = document.createElement("article");

        card.className = "project-card";

        card.innerHTML = `

            <div class="project-image">

                <div class="image-placeholder-icon">
                    <i class="fa-regular fa-image"></i>
                </div>

                <span>PROJECT IMAGE</span>

            </div>

            <div class="project-content">

                <span class="project-category">
                    ${project.categoryLabel}
                </span>

                <h3>${project.title}</h3>

                <p>
                    ${project.shortDescription}
                </p>

                <button class="view-project">
                    View Project
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>
        `;

        card.querySelector(".view-project")
            .addEventListener("click", () => {
                openProject(project.id);
            });

        projectsGrid.appendChild(card);

    });
}

renderProjects();


/* =========================================================
   PROJECT FILTER
========================================================= */

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderProjects(button.dataset.filter);

    });

});


/* =========================================================
   PROJECT DETAIL
========================================================= */

const projectDetail = document.getElementById("projectDetail");
const projectDetailContent = document.getElementById("projectDetailContent");
const projectsSection = document.getElementById("projects");

let currentProjectIndex = 0;


function openProject(id) {

    const project = projects.find(item => item.id === id);

    if (!project) return;

    currentProjectIndex =
        projects.findIndex(item => item.id === id);

    projectDetailContent.innerHTML = `

        <div class="detail-header">

            <span class="project-category">
                ${project.categoryLabel}
            </span>

            <h1>${project.title}</h1>

            <p class="detail-subtitle">
                ${project.shortDescription}
            </p>

        </div>


        <div class="detail-hero-image">

            <div class="image-placeholder-icon">
                <i class="fa-regular fa-image"></i>
            </div>

            <span>
                MAIN PROJECT IMAGE — ADD LATER
            </span>

        </div>


        <div class="detail-section">

            <h2>Overview</h2>

            <p>
                ${project.overview}
            </p>

        </div>


        <div class="detail-two-column">

            <div class="detail-section">

                <h2>Challenge</h2>

                <p>
                    ${project.challenge}
                </p>

            </div>

            <div class="detail-section">

                <h2>Approach</h2>

                <p>
                    ${project.approach}
                </p>

            </div>

        </div>


        <div class="detail-section">

            <h2>Process</h2>

            <p>
                ${project.process}
            </p>

        </div>


        <div class="detail-gallery">

            ${project.gallery.map((image, index) => `

                <div class="gallery-placeholder">

                    <div class="image-placeholder-icon">
                        <i class="fa-regular fa-image"></i>
                    </div>

                    <span>${image}</span>

                </div>

            `).join("")}

        </div>


        <div class="detail-two-column">

            <div class="detail-section">

                <h2>Result</h2>

                <p>
                    ${project.result}
                </p>

            </div>

            <div class="detail-section">

                <h2>Learning</h2>

                <p>
                    ${project.learning}
                </p>

            </div>

        </div>
    `;


    projectsSection.style.display = "none";
    projectDetail.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.pushState(
        { project: id },
        "",
        `#project/${id}`
    );

}


function closeProject() {

    projectDetail.classList.remove("active");
    projectsSection.style.display = "";

    history.pushState(
        {},
        "",
        "#projects"
    );

    setTimeout(() => {

        projectsSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


document
    .getElementById("backProjects")
    .addEventListener("click", closeProject);


/* =========================================================
   PREVIOUS / NEXT PROJECT
========================================================= */

function navigateProject(direction) {

    currentProjectIndex += direction;

    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    }

    if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }

    openProject(projects[currentProjectIndex].id);

}


document
    .getElementById("previousProject")
    .addEventListener("click", () => {
        navigateProject(-1);
    });


document
    .getElementById("nextProject")
    .addEventListener("click", () => {
        navigateProject(1);
    });


/* =========================================================
   HANDLE BROWSER BACK / HASH
========================================================= */

window.addEventListener("popstate", () => {

    const hash = window.location.hash;

    if (hash.startsWith("#project/")) {

        const id = hash.replace("#project/", "");

        openProjectWithoutHistory(id);

    } else {

        projectDetail.classList.remove("active");
        projectsSection.style.display = "";

    }

});


function openProjectWithoutHistory(id) {

    const project = projects.find(item => item.id === id);

    if (!project) return;

    currentProjectIndex =
        projects.findIndex(item => item.id === id);

    projectDetailContent.innerHTML = `
        <div class="detail-header">

            <span class="project-category">
                ${project.categoryLabel}
            </span>

            <h1>${project.title}</h1>

            <p class="detail-subtitle">
                ${project.shortDescription}
            </p>

        </div>

        <div class="detail-hero-image">
            <div class="image-placeholder-icon">
                <i class="fa-regular fa-image"></i>
            </div>

            <span>
                MAIN PROJECT IMAGE — ADD LATER
            </span>
        </div>

        <div class="detail-section">
            <h2>Overview</h2>
            <p>${project.overview}</p>
        </div>

        <div class="detail-two-column">

            <div class="detail-section">
                <h2>Challenge</h2>
                <p>${project.challenge}</p>
            </div>

            <div class="detail-section">
                <h2>Approach</h2>
                <p>${project.approach}</p>
            </div>

        </div>

        <div class="detail-section">
            <h2>Process</h2>
            <p>${project.process}</p>
        </div>

        <div class="detail-gallery">

            ${project.gallery.map(image => `

                <div class="gallery-placeholder">

                    <div class="image-placeholder-icon">
                        <i class="fa-regular fa-image"></i>
                    </div>

                    <span>${image}</span>

                </div>

            `).join("")}

        </div>

        <div class="detail-two-column">

            <div class="detail-section">
                <h2>Result</h2>
                <p>${project.result}</p>
            </div>

            <div class="detail-section">
                <h2>Learning</h2>
                <p>${project.learning}</p>
            </div>

        </div>
    `;

    projectsSection.style.display = "none";
    projectDetail.classList.add("active");

}


/* =========================================================
   NAVIGATION
========================================================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        const target = link.getAttribute("href");

        if (target === "#projects") {

            projectDetail.classList.remove("active");
            projectsSection.style.display = "";

        }

        document
            .querySelectorAll(".nav-link")
            .forEach(nav => nav.classList.remove("active"));

        link.classList.add("active");

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-header, .about-text, .about-highlight, .skill-card, .project-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================================================
   INITIAL HASH
========================================================= */

if (window.location.hash.startsWith("#project/")) {

    const id =
        window.location.hash.replace("#project/", "");

    openProjectWithoutHistory(id);

}
