
const projects = [
    {
        id: 1,
        title: "Freshkart: E-Commerce Store",
        description: "A full-stack, responsive e-commerce platform offering essential groceries, featuring secure payment integration.",
        image: "freshkart.png", 
        tags: ["MERN", "Tailwind","Stripe","Cloudinary"],
        liveLink: "https://freshkartt-deploy-rryp.vercel.app/",
        codeLink: "https://github.com/nishtha-09-gupta/Freshkartt-deploy"
    },
    {
        id: 2,
        title: "Yapster Chat App",
        description: "A real-time chatting application built with the MERN stack and Socket.io for seamless, instant communication.",
        image: "yapster.png", 
        tags: ["MERN", "Socket.io","Tailwind","Cloudinary"],
        liveLink: "https://chat-app-client-gules-six.vercel.app/login",
        codeLink: "https://github.com/nishtha-09-gupta/chat-app"
      },
    {
      id: 3,
      title: "University Website",
      description: "A fully responsive, multi-page website showcasing a university's essential information and services.",
      image: "edu.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://nishtha-09-gupta.github.io/html-css-project/",
      codeLink: "https://github.com/nishtha-09-gupta/html-css-project"
    },
    {
        id: 4,
        title:"Recipe Finder",
        description:"A vintage themed recipe finder with smooth UI and live API integration, helping users discover recipes effortlessly.",
        image:"grandma.png",
        tags:["HTML","CSS","React"],
        liveLink:"https://nishtha-09-gupta.github.io/grandmas-recipe/",
        codeLink:"https://github.com/nishtha-09-gupta/grandmas-recipe"
    }
];


const timelineData = [
    
    {  title: "AI/ML Volunteer, GDG", text: "Actively volunteered at Google Developer Group (GDG), engaging in community building and technical activities.", image: "gdg.png" },
    {  title: "Hackathon Champion", title: "Hackathon Champion", text: "Secured 1st place at the Visual Vortex Hackathon organized by GDG.", image: "me.jpeg" },
    { title: "Secretary, AI/ML Club", text: "Appointed as the Secretary of the college's AI/ML Club, organizing workshops and events.", image: "aiml.png" },
    {  title: "Open Source Supercontributor", text: "Recognised as a Supercontributor during Hacktoberfest for significant open-source contributions.", image: "hacktober.png" },
    { title: "Co-Founder, Nuvi Brainz", text: "Co-founded Nuvi Brainz, an innovative AI-driven startup initiative.", image: "nuvi.png" }
];



function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => {
        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        return `
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="./${project.image}" alt="${project.title}" loading="lazy" />
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank" class="link-live"><i class="fas fa-external-link-alt"></i> Live Site</a>
                        <a href="${project.codeLink}" target="_blank" class="link-code"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderTimeline() {
    const timelineList = document.getElementById("timelineList");
    if (!timelineList) return;
    

    timelineList.innerHTML = timelineData.slice().reverse().map(item => {
        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    </div>
            </div>
        `;
    }).join('');
}


function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => {
        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        return `
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="./${project.image}" alt="${project.title}" loading="lazy" />
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank" class="link-live"><i class="fas fa-external-link-alt"></i> Live Site</a>
                        <a href="${project.codeLink}" target="_blank" class="link-code"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderTimeline() {
    const timelineList = document.getElementById("timelineList");
    if (!timelineList) return;
    timelineList.innerHTML = timelineData.slice().reverse().map(item => {
        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    </div>
            </div>
        `;
    }).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
    
    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }

    renderProjects();
    renderTimeline();

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const messageText = contactForm.message.value.trim();
            
            const recipient = "nishthagupta209@gmail.com";
            const subject = `Portfolio Inquiry from ${name || "Visitor"}`;
            const body = `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${messageText || "(no message)"}`;
            
            const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;

            alert(`Thanks ${name || "there"}! Please click send in your mail app to deliver the message.`);
            
            contactForm.reset();
        });
    }
});