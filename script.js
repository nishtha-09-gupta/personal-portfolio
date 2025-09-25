const projects = [
    {
        id: 1,
        title: "Yapster Chat App",
        description: "A real-time chatting application built with modern web technologies for seamless communication.",
        image: "yapster.png", // Make sure you have an image file for this project
        tags: ["React", "JavaScript", "Socket.io", "Node.js", "MongoDB"],
        liveLink: "https://chat-app-client-nine-iota.vercel.app/login",
        codeLink: "https://github.com/nishtha-09-gupta/chat-app"
      },
    {
      id: 2,
      title: "University Website",
      description: "A fully responsive University website design.",
      image: "edu.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://nishtha-09-gupta.github.io/html-css-project/",
      codeLink: "https://github.com/nishtha-09-gupta/html-css-project"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides current weather and forecasts for any location.",
      image: "weather.png",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "https://nishtha-09-gupta.github.io/weather-app-project/",
      codeLink: "https://github.com/nishtha-09-gupta/weather-app-project"
    },
    {
      id: 4,
      title: "Image Slider",
      description: "An interactive image slider showcasing pilgrim sites with smooth transitions for an immersive experience.",
      image: "p.png",
      tags: ["HTML", "CSS", "Javascript"],
      liveLink: "https://nishtha-09-gupta.github.io/Image-slider/",
      codeLink: "https://github.com/nishtha-09-gupta/Image-slider"
    },
    
];

const timelineData = [
    { year: "2022 - 2024", title: "Head Prefect & Speaker", text: "Led as Head Prefect and speaker at events, Cambridge Court World School.", image: "hpg.jpeg" },
    { year: "October 2024", title: "Open Source Contributor", text: "Contributed in Hacktoberfest.", image: "hacktober.png" },
    { year: "2024 - 2025", title: "AI/ML Volunteer", text: "Volunteered at Google Developer Group, engaging in tech and community activities.", image: "gdg.png" },
    { year: "November 2024", title: "Hackathon Winner", text: "Won 1st place at Visual Vortex Hackathon by GDG.", image: "me.jpeg" },
    { year: "January 2025", title: "Secretary", text: "Became Secretary of AI/ML Club.", image: "aiml.png" },
    { year: "September 2025", title: "Co-Founder", text: "Co-founded Nuvi Brainz, an AI-driven startup initiative.", image: "nuvi.png" }
];

function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    projectsGrid.innerHTML = "";

    for (const project of projects) {
        let tagsHtml = "";
        for (const tag of project.tags) {
            tagsHtml += `<span class="project-tag">${tag}</span>`;
        }

        const cardHtml = `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" />
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
                        <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </div>
        `;
        
        projectsGrid.innerHTML += cardHtml;
    }
}

function renderTimeline() {
    const timelineList = document.getElementById("timelineList");
    timelineList.innerHTML = "";

    for (const item of timelineData.slice().reverse()) {
        const itemHtml = `
            <div class="timeline-item">
                <div class="timeline-media">
                    ${item.image ? `<img src="./${item.image}" alt="${item.title}" />` : ""}
                </div>
                <div class="timeline-body">
                    <span class="year">${item.year}</span>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `;

        timelineList.innerHTML += itemHtml;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
    navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => navLinks.classList.remove("active"));
    });

    renderProjects();
    renderTimeline();

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const messageText = contactForm.message.value.trim();
        
        const recipient = "nishthagupta209@gmail.com";
        const subject = `New portfolio contact from ${name || "Visitor"}`;
        const body = `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${messageText || "(no message)"}`;
        
        const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;

        alert(`Thanks ${name || "there"}! Click send in your mail app to deliver the message.`);
        
        contactForm.reset();
    });
});