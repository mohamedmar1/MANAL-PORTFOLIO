// ============================================
// MANAL — BEYOND THE FRAME
// Creative Portfolio
// ============================================

// All project images are inside the img folder.
const projects = [
  { title: "Cardlu", image: "cardlu.jpeg", category: "advertising", type: "Advertising Design", arType: "تصميم إعلاني" },
  { title: "Casamorati", image: "casamorati.jpeg", category: "advertising", type: "Fragrance Campaign", arType: "حملة عطور" },
  { title: "CeraVe — Outdoor", image: "cerave_.jpeg", category: "social", type: "Social Media Design", arType: "تصميم سوشيال ميديا" },
  { title: "CeraVe", image: "cerave.jpeg", category: "advertising", type: "Skincare Campaign", arType: "حملة عناية بالبشرة" },
  { title: "Cetaphil", image: "cetaphil.jpeg", category: "advertising", type: "Beauty Campaign", arType: "حملة تجميل" },
  { title: "Coco Chanel", image: "coco.jpeg", category: "advertising", type: "Luxury Fragrance", arType: "إعلان عطر فاخر" },
  { title: "Coco Chanel — Visual", image: "coco1.jpeg", category: "advertising", type: "Fragrance Advertising", arType: "إعلان عطور" },
  { title: "Content Writer", image: "content writer.jpeg", category: "identity", type: "Personal Branding", arType: "هوية شخصية" },
  { title: "Dior", image: "dior.jpeg", category: "advertising", type: "Luxury Campaign", arType: "حملة فاخرة" },
  { title: "Erbapura", image: "erbapura.jpeg", category: "advertising", type: "Beauty Campaign", arType: "حملة تجميل" },
  { title: "Giorgio Armani — 01", image: "giorgio 2.jpeg", category: "advertising", type: "Fashion Campaign", arType: "حملة أزياء" },
  { title: "Giorgio Armani — 02", image: "giorgio 3.jpeg", category: "identity", type: "Brand Identity", arType: "هوية بصرية" },
  { title: "Giorgio Armani — 03", image: "giorgio armani.jpeg", category: "advertising", type: "Luxury Fashion", arType: "أزياء فاخرة" },
  { title: "Giorgio Mockup", image: "giorgio mocap.jpeg", category: "creative", type: "3D Mockup", arType: "موك أب ثلاثي الأبعاد" },
  { title: "Giorgio Mockup 02", image: "giorgio mocap2.jpeg", category: "creative", type: "3D Mockup", arType: "موك أب ثلاثي الأبعاد" },
  { title: "Layn", image: "layn.jpeg", category: "identity", type: "Brand Identity", arType: "هوية بصرية" },
  { title: "Lira", image: "lira.jpeg", category: "identity", type: "Brand Identity", arType: "هوية بصرية" },
  { title: "LN", image: "ln.jpeg", category: "identity", type: "Visual Identity", arType: "هوية بصرية" },
  { title: "LN — Brand System", image: "ln1.jpeg", category: "identity", type: "Brand Applications", arType: "تطبيقات الهوية" },
  { title: "LN — Packaging", image: "ln2.jpeg", category: "identity", type: "Packaging Design", arType: "تصميم تغليف" },
  { title: "Logo Design", image: "logo.jpeg", category: "identity", type: "Logo Design", arType: "تصميم شعار" },
  { title: "Luma", image: "luma.jpeg", category: "identity", type: "Brand Identity", arType: "هوية بصرية" },
  { title: "Luma — Stationery", image: "luma1.jpeg", category: "identity", type: "Brand Applications", arType: "تطبيقات الهوية" },
  { title: "Luma — Branding", image: "luma2.jpeg", category: "identity", type: "Brand Applications", arType: "تطبيقات الهوية" },
  { title: "Luma — Store", image: "luma3.jpeg", category: "identity", type: "Brand Environment", arType: "تصميم بيئة العلامة" },
  { title: "Luma — Guidelines", image: "luma4.jpeg", category: "identity", type: "Brand Presentation", arType: "عرض الهوية" },
  { title: "Creative Mockup", image: "mocap.jpeg", category: "creative", type: "3D Mockup", arType: "موك أب ثلاثي الأبعاد" },
  { title: "Naxos X", image: "naxos x.jpeg", category: "advertising", type: "Fragrance Campaign", arType: "حملة عطور" },
  { title: "Naxos", image: "naxos.jpeg", category: "advertising", type: "Fragrance Campaign", arType: "حملة عطور" },
  { title: "Pure by Nature", image: "PURE BY NATURE.jpeg", category: "identity", type: "Brand Identity", arType: "هوية بصرية" },
  { title: "Vaseline — Mockup", image: "vaseline mocap.jpeg", category: "creative", type: "Product Mockup", arType: "موك أب منتج" },
  { title: "Vaseline", image: "vaseline.jpeg", category: "social", type: "Social Media Design", arType: "تصميم سوشيال ميديا" },
  { title: "Vaseline — 02", image: "vaselinee.jpeg", category: "social", type: "Social Media Design", arType: "تصميم سوشيال ميديا" }
];

// Complete campaigns: each campaign opens all its related images.
const campaigns = [
  {
    title: "Giorgio Armani",
    arTitle: "جورجيو أرماني",
    subtitle: "A world of timeless elegance",
    arSubtitle: "عالم من الأناقة الخالدة",
    cover: "giorgio 2.jpeg",
    images: ["giorgio 2.jpeg", "giorgio 3.jpeg", "giorgio armani.jpeg", "giorgio mocap.jpeg", "giorgio mocap2.jpeg"]
  },
  {
    title: "Luma",
    arTitle: "لوما",
    subtitle: "A complete brand identity",
    arSubtitle: "هوية بصرية متكاملة",
    cover: "luma.jpeg",
    images: ["luma.jpeg", "luma1.jpeg", "luma2.jpeg", "luma3.jpeg", "luma4.jpeg"]
  },
  {
    title: "CeraVe",
    arTitle: "سيرافي",
    subtitle: "Skincare visual direction",
    arSubtitle: "اتجاه بصري للعناية بالبشرة",
    cover: "cerave.jpeg",
    images: ["cerave_.jpeg", "cerave.jpeg"]
  },
  {
    title: "LN Identity",
    arTitle: "هوية LN",
    subtitle: "Minimal identity & packaging",
    arSubtitle: "هوية بسيطة وتصميم تغليف",
    cover: "ln.jpeg",
    images: ["layn.jpeg", "ln.jpeg", "ln1.jpeg", "ln2.jpeg"]
  },
  {
    title: "Naxos",
    arTitle: "ناكسوس",
    subtitle: "Luxury fragrance visuals",
    arSubtitle: "تصميمات عطور فاخرة",
    cover: "naxos x.jpeg",
    images: ["naxos x.jpeg", "naxos.jpeg"]
  },
  {
    title: "Vaseline",
    arTitle: "فازلين",
    subtitle: "Product campaign & mockup",
    arSubtitle: "حملة منتج وموك أب",
    cover: "vaseline.jpeg",
    images: ["vaseline mocap.jpeg", "vaseline.jpeg", "vaselinee.jpeg"]
  },
  {
    title: "Coco Chanel",
    arTitle: "كوكو شانيل",
    subtitle: "Fragrance campaign",
    arSubtitle: "حملة عطور",
    cover: "coco.jpeg",
    images: ["coco.jpeg", "coco1.jpeg"]
  }
];

// ============================================
// LANGUAGE
// ============================================

let currentLanguage = "en";

const langToggle = document.getElementById("langToggle");

function updateLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("arabic", language === "ar");

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    const value = element.dataset[language];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  langToggle.textContent = language === "en" ? "عربي" : "English";

  renderProjects(activeFilter);
  renderCampaigns();

  const activeProject = document.getElementById("projectModal");
  if (activeProject.classList.contains("open")) {
    const index = Number(activeProject.dataset.projectIndex);
    if (!Number.isNaN(index)) openProject(index);
  }

  const activeCampaign = document.getElementById("campaignModal");
  if (activeCampaign.classList.contains("open")) {
    const index = Number(activeCampaign.dataset.campaignIndex);
    if (!Number.isNaN(index)) openCampaign(index);
  }
}

langToggle.addEventListener("click", () => {
  updateLanguage(currentLanguage === "en" ? "ar" : "en");
});

// ============================================
// PROJECT GALLERY
// ============================================

const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter");
let activeFilter = "all";

function renderProjects(filter = "all") {
  activeFilter = filter;

  const filteredProjects = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  projectsGrid.innerHTML = filteredProjects.map(project => {
    const originalIndex = projects.indexOf(project);

    return `
      <article class="project-card" data-project-index="${originalIndex}" tabindex="0" role="button" aria-label="Open ${project.title}">
        <div class="project-image">
          <img src="img/${encodeURIComponent(project.image)}" alt="${project.title}" loading="lazy"
               onerror="this.style.opacity='.15'; this.alt='Image not found: ${project.image}'">
          <span class="project-open">↗</span>
        </div>
        <div class="project-info">
          <div>
            <h3>${project.title}</h3>
            <p>${currentLanguage === "ar" ? project.arType : project.type}</p>
          </div>
          <span class="project-number">${String(originalIndex + 1).padStart(2, "0")}</span>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".project-card").forEach(card => {
    const open = () => openProject(Number(card.dataset.projectIndex));

    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

// ============================================
// PROJECT MODAL
// ============================================

const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalCount = document.getElementById("modalCount");
const modalGallery = document.getElementById("modalGallery");

function openProject(index) {
  const project = projects[index];
  if (!project) return;

  projectModal.dataset.projectIndex = index;

  modalTitle.textContent = project.title;
  modalType.textContent = currentLanguage === "ar" ? project.arType : project.type;

  modalDescription.textContent = currentLanguage === "ar"
    ? "مجموعة من الأعمال والتفاصيل البصرية لهذا المشروع."
    : "A closer look at this visual project and its creative details.";

  modalCount.textContent = "01 / 01";

  modalGallery.innerHTML = `
    <img src="img/${encodeURIComponent(project.image)}" alt="${project.title}">
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProjectModal);
});

// ============================================
// CAMPAIGNS
// ============================================

const campaignGrid = document.getElementById("campaignGrid");
const campaignModal = document.getElementById("campaignModal");
const campaignTitle = document.getElementById("campaignTitle");
const campaignDescription = document.getElementById("campaignDescription");
const campaignCount = document.getElementById("campaignCount");
const campaignGallery = document.getElementById("campaignGallery");

function renderCampaigns() {
  campaignGrid.innerHTML = campaigns.map((campaign, index) => {
    const title = currentLanguage === "ar" ? campaign.arTitle : campaign.title;
    const subtitle = currentLanguage === "ar" ? campaign.arSubtitle : campaign.subtitle;

    return `
      <article class="campaign-card" data-campaign-index="${index}" tabindex="0" role="button">
        <img src="img/${encodeURIComponent(campaign.cover)}" alt="${title}" loading="lazy">
        <div class="campaign-overlay">
          <span>${String(index + 1).padStart(2, "0")} — COMPLETE PROJECT</span>
          <h3>${title}</h3>
          <p>${subtitle}</p>
          <span class="campaign-arrow">↗</span>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".campaign-card").forEach(card => {
    const open = () => openCampaign(Number(card.dataset.campaignIndex));

    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function openCampaign(index) {
  const campaign = campaigns[index];
  if (!campaign) return;

  campaignModal.dataset.campaignIndex = index;

  campaignTitle.textContent = currentLanguage === "ar"
    ? campaign.arTitle
    : campaign.title;

  campaignDescription.textContent = currentLanguage === "ar"
    ? campaign.arSubtitle
    : campaign.subtitle;

  campaignCount.textContent = `${campaign.images.length} DESIGNS`;

  campaignGallery.innerHTML = campaign.images.map((image, imageIndex) => `
    <img
      src="img/${encodeURIComponent(image)}"
      alt="${campaign.title} design ${imageIndex + 1}"
      loading="lazy"
      onerror="this.style.opacity='.15'; this.alt='Image not found: ${image}'"
    >
  `).join("");

  campaignModal.classList.add("open");
  campaignModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCampaignModal() {
  campaignModal.classList.remove("open");
  campaignModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-campaign]").forEach(element => {
  element.addEventListener("click", closeCampaignModal);
});

// ============================================
// NAVIGATION
// ============================================

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// ============================================
// 3D HERO MOUSE INTERACTION
// ============================================

const heroVisual = document.getElementById("heroVisual");
const floatCards = document.querySelectorAll(".float-card");
const cursorGlow = document.getElementById("cursorGlow");

if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", event => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  heroVisual.addEventListener("mousemove", event => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    floatCards.forEach(card => {
      const depth = Number(card.dataset.depth) || 20;
      const moveX = x * depth;
      const moveY = y * depth;

      card.style.marginLeft = `${moveX}px`;
      card.style.marginTop = `${moveY}px`;
    });
  });

  heroVisual.addEventListener("mouseleave", () => {
    floatCards.forEach(card => {
      card.style.marginLeft = "0px";
      card.style.marginTop = "0px";
    });
  });
}

// ============================================
// REVEAL ON SCROLL
// ============================================

const revealElements = document.querySelectorAll(
  ".section-kicker, .about-heading, .about-text, .about-stats, .section-heading, .identity-banner, .service-card"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(22px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";
  revealObserver.observe(element);
});

// ============================================
// KEYBOARD & GENERAL
// ============================================

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProjectModal();
    closeCampaignModal();
    nav.classList.remove("open");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// INITIALIZE
// ============================================

renderProjects();
renderCampaigns();

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("done");
  }, 500);
});