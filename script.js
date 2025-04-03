
const projects = [
    {
        id: 1,
        title: "University Website",
        description: "A fully responsive University website design.",
        image: "edu.png",
        tags: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://nishtha-09-gupta.github.io/html-css-project/",
        codeLink: "https://github.com/nishtha-09-gupta/html-css-project"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "A weather application that provides current weather and forecasts for any location.",
        image: "weather.png",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        liveLink: "https://nishtha-09-gupta.github.io/weather-app-project/",
        codeLink: "https://github.com/nishtha-09-gupta/weather-app-project"
    },
    {
        id: 3,
        title: "Image Slider",
        description: "An interactive image slider showcasing pilgrim sites with smooth transitions for an immersive experience.",
        image: "p.png",
        tags: ["HTML", "CSS", "Javascript"],
        liveLink: "https://nishtha-09-gupta.github.io/Image-slider/",
        codeLink: "https://github.com/nishtha-09-gupta/Image-slider"
    }
];

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


function loadProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> Source Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}


if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
    
        console.log({
            name,
            email,
            message
        });
        

        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

function init() {
    loadProjects();
    
    document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}

document.addEventListener('DOMContentLoaded', init);