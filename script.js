
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
  
  const timelineData = [
    { year: "2022 - 2024", title: "Head Prefect & Speaker", text: "Led as Head Prefect and speaker at events, Cambridge Court World School.", image: "hpg.jpeg" },
    { year: "October 2024", title: "Open Source Contributor", text: "Contributed in Hacktoberfest & GirlScript Summer of Code.", image: "hacktober.png" },
    { year: "November 2024", title: "AI/ML Volunteer", text: "Volunteered at Google Developer Group, engaging in tech and community activities.", image: "gdg.png" },
    { year: "November 2024", title: "Hackathon Winner", text: "Won 1st place at Visual Vortex Hackathon by GDG.", image: "me.jpeg" },
    { year: "January 2025", title: "Secretary", text: "Became Secretary of AI/ML Club.", image: "aiml.png" },
    { year: "September 2025", title: "Co-Founder", text: "Co-founded Nuvi Brainz, an AI-driven startup initiative.", image: "nuvi.png" }
  ];

  function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    projectsGrid.innerHTML = "";
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${escapeHtml(project.title)}" />
        </div>
        <div class="project-info">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
            <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> Code</a>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }
  
  function renderTimeline() {
    const timeline = document.getElementById("timelineList");
    timeline.innerHTML = "";
    timelineData.slice().reverse().forEach(item => {
      const node = document.createElement("div");
      node.className = "timeline-item";
      node.innerHTML = `
        <div class="timeline-media">
          ${item.image ? `<img src="./${item.image}" alt="${escapeHtml(item.title)}" />` : ""}
        </div>
        <div class="timeline-body">
          <span class="year">${escapeHtml(item.year)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `;
      timeline.appendChild(node);

      const img = node.querySelector(".timeline-media img");
      if (img) {
        img.addEventListener("error", () => {
          const media = img.closest(".timeline-media");
          if (media) media.style.display = "none";
        });
      }
    });
  }
  
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
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

    const heroImg = document.querySelector(".hero-image img");
    if (heroImg) {
      heroImg.addEventListener("error", () => {
        if (!heroImg.dataset.fallback) {
          heroImg.dataset.fallback = "1";
          heroImg.src = "./me.jpeg";
        }
      });
    }
  
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const messageText = contactForm.message.value.trim();

      // Build a mailto link so messages are sent to your inbox without a backend
      const recipient = "nishthagupta209@gmail.com";
      const subject = `New portfolio contact from ${name || "Visitor"}`;
      const bodyLines = [
        `Name: ${name || "N/A"}`,
        `Email: ${email || "N/A"}`,
        "",
        "Message:",
        messageText || "(no message)",
      ];
      const body = bodyLines.join("\n");
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the user's email client with the composed message
      window.location.href = mailtoUrl;

      // Lightweight confirmation for UX
      alert(`Thanks ${name || "there"}! Click send in your mail app to deliver the message.`);
      contactForm.reset();
    });
  
  });
  
