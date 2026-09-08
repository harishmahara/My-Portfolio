/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" },
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Full Stack Developer",
    "Web Designer",
    "Motion/Graphics Designer",
    "Content Creator",
  ],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 1000,
  loop: true,
});

/*==================== show more / show less toggle ====================*/
const readMoreBtn = document.querySelector(".read-more-btn");
const moreContentBlocks = document.querySelectorAll(".more-content");

readMoreBtn.onclick = (e) => {
  e.preventDefault();
  let isShowing = false;

  moreContentBlocks.forEach((block) => {
    block.classList.toggle("show");
    isShowing = block.classList.contains("show");
  });

  readMoreBtn.textContent = isShowing ? "Show Less" : "Show More";
};

/*==================== services overlays ====================*/
const servicesData = {
  "web-dev": {
    icon: "bx bx-code-alt",
    title: "Web Devlopment",
    text: "Web development services encompass everything required to build, launch, and maintain a website or web application that operates smoothly over the internet. Professional web development blends design, coding, database management, and server optimization to create functional digital spaces for businesses and individuals.",
    skills: [
      { name: "System Design", icon: "bx bx-sitemap" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "REST API", icon: "bx bx-transfer" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Redux", icon: "devicon-redux-original colored" },
      { name: "GraphQL", icon: "devicon-graphql-plain colored" },
    ],
  },

  graphic: {
    icon: "bx bxs-paint",
    title: "Graphic Designer",
    text: "Graphic design services involve creating visual content to communicate messages, build brand identities, and engage audiences across digital and print platforms. Professional graphic design combines artistic skill, layout principles, and strategic branding to translate abstract concepts into compelling visual assets.",
    skills: [
      { name: "Photoshop", icon: "devicon-photoshop-plain colored" },
      { name: "Illustrator", icon: "devicon-illustrator-plain colored" },
      { name: "InDesign", icon: "devicon-indesign-plain colored" },
      { name: "Freehand", icon: "bx bx-pen" },
      { name: "Pinterest", icon: "devicon-pinterest-plain colored" },
      { name: "Adobe Suite", icon: "bx bxl-adobe" },
      { name: "Typography", icon: "bx bx-font" },
      { name: "Branding", icon: "bx bx-diamond" },
      { name: "Color Theory", icon: "bx bx-palette" },
      { name: "Print Design", icon: "bx bx-printer" },
    ],
  },

  marketing: {
    icon: "bx bx-bar-chart-alt",
    title: "Digital Marketing",
    text: "Digital marketing services encompass all online strategies and promotional activities used to connect businesses with their target audiences, generate leads, and drive sales across digital channels. Professional digital marketing combines data analytics, consumer psychology, creative content, and technical optimization to maximize return on investment (ROI).",
    skills: [
      { name: "SEO", icon: "bx bx-search-alt" },
      { name: "Google Ads", icon: "devicon-google-plain colored" },
      { name: "Facebook Ads", icon: "bx bxl-facebook-square" },
      { name: "Instagram", icon: "bx bxl-instagram" },
      { name: "Social Media", icon: "bx bx-share-alt" },
      { name: "Content Strategy", icon: "bx bx-edit-alt" },
      { name: "Email Marketing", icon: "bx bx-envelope" },
      { name: "Analytics", icon: "bx bx-line-chart" },
    ],
  },

  motion: {
    icon: "bx bx-video",
    title: "Motion Designing",
    text: "Motion design services bring static visuals to life through animation, transitions, and dynamic effects that enhance storytelling. From animated logos to explainer videos and social media content, professional motion design combines timing, movement, and visual rhythm to create engaging, attention-grabbing media.",
    skills: [
      { name: "Adobe Suite", icon: "bx bxl-adobe" },
      { name: "After Effects", icon: "devicon-aftereffects-plain colored" },
      { name: "Premiere Pro", icon: "devicon-premierepro-plain colored" },
      { name: "CapCut", icon: "bx bx-movie-play" },
      { name: "Filmora", icon: "bx bx-film" },
      { name: "Keyframing", icon: "bx bx-slider" },
      { name: "2D Animation", icon: "bx bx-shapes" },
      { name: "Sound Design", icon: "bx bx-music" },
    ],
  },

  script: {
    icon: "bx bx-pencil",
    title: "Script Writing",
    text: "Script writing services craft compelling narratives for videos, advertisements, and digital content that resonate with target audiences. Professional scriptwriting blends storytelling structure, tone, and pacing to deliver clear messaging that drives engagement and effectively communicates a brand's voice across platforms.",
    skills: [
      { name: "Storytelling", icon: "bx bx-book-open" },
      { name: "Dialogue Writing", icon: "bx bx-chat" },
      { name: "Copywriting", icon: "bx bx-edit" },
      { name: "Story Structure", icon: "bx bx-list-ol" },
      { name: "Voiceover Scripts", icon: "bx bx-microphone" },
      { name: "Brand Tone", icon: "bx bx-message-square-detail" },
      { name: "Research", icon: "bx bx-search" },
      { name: "Editing", icon: "bx bx-highlight" },
    ],
  },

  "machine-ops": {
    icon: "bx bx-desktop",
    title: "Digital Machine Operating",
    text: "Digital machine operating services involve managing and optimizing computer systems, printing hardware, and technical workflows to ensure smooth digital and physical output operations. This includes system configuration, printer/device operation, troubleshooting, and maintaining hardware compatibility for reliable, efficient performance across projects.",
    skills: [
      { name: "Kyocera", icon: "bx bx-printer" },
      { name: "Xerox", icon: "bx bx-printer" },
      { name: "Epson", icon: "bx bx-printer" },
      { name: "Canon", icon: "bx bx-camera" },
      { name: "Flex Printer", icon: "bx bx-layer" },
      { name: "Video Camera", icon: "bx bx-video-recording" },
      { name: "Drone", icon: "bx bx-send" },
      { name: "System Config", icon: "bx bx-cog" },
      { name: "Trouble Shooting", icon: "bx bx-wrench" },
      { name: "Maintenance", icon: "bx bx-shield-quarter" },
    ],
  },
};

const viewMoreBtns = document.querySelectorAll(".view-more-btn");
const serviceModal = document.getElementById("serviceModal");
const modalClose = document.getElementById("modalClose");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSkills = document.getElementById("modalSkills");

viewMoreBtns.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const key = btn.getAttribute("data-service");
    const data = servicesData[key];

    modalIcon.className = "service-modal-icon " + data.icon;
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;

    modalSkills.innerHTML = "";
    if (data.skills && data.skills.length > 0) {
      data.skills.forEach((skill) => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
        modalSkills.appendChild(card);
      });
    }

    serviceModal.classList.add("active");
  };
});

modalClose.onclick = () => {
  serviceModal.classList.remove("active");
};

serviceModal.onclick = (e) => {
  if (e.target === serviceModal) {
    serviceModal.classList.remove("active");
  }
};

/*==================== animated loading dots ====================*/
const loadingDots = document.getElementById('loadingDots');
if (loadingDots) {
  let dotCount = 1;
  setInterval(() => {
    dotCount = (dotCount % 3) + 1;
    loadingDots.textContent = '.'.repeat(dotCount);
  }, 500);
}

/*==================== light/dark theme toggle ====================*/
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// apply saved preference on load (falls back to dark if nothing saved)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.onclick = () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.classList.replace('bx-moon', 'bx-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.replace('bx-sun', 'bx-moon');
    localStorage.setItem('theme', 'dark');
  }
};