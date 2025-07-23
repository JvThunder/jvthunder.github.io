const header = document.querySelector(".header"),
  sections = document.querySelectorAll("section[id]"),
  skillsContainer = document.querySelector(".skills__items"),
  eduContainer = document.querySelector("#edu.timeline__items"),
  expContainer = document.querySelector("#exp.timeline__items"),
  services = document.querySelectorAll(".service"),
  formInputs = document.querySelectorAll(".form__input"),
  scrollUpBtn = document.querySelector(".scroll-up"),
  colorThemeBtn = document.querySelector(".color-theme"),
  mobileLinksContainer = document.querySelector(".header__links-mobile"),
  mobileLinks = document.querySelectorAll(".header__link-mobile a"),
  contactForm = document.getElementById("contact-form"),
  statusBox = document.querySelector(".form__status-box p");

/* ============== Header ============== */
function changeHeaderBg() {
  const scrollY = window.scrollY;
  header.style.transition = "all var(--default-duration) ease";
  if (scrollY > 50) {
    header.style.background = "var(--body-bg)";
    header.style.height = "calc( var(--header-height) - 15px )";
    header.style.boxShadow = "0 0 5px var(--black-100-alpha-20)";
  } else {
    header.style.background = "transparent";
    header.style.height = "var(--header-height)";
    header.style.boxShadow = "";
  }
}

let lastScrollY;
function hideMobNavBar() {
  const scrollY = window.scrollY;
  if (scrollY > lastScrollY) {
    mobileLinksContainer.classList.add("hide");
  } else if (scrollY < lastScrollY) {
    mobileLinksContainer.classList.remove("hide");
  }
  lastScrollY = scrollY;
}

/* ============== Skills Section ============== */
// Skills & Tools
let skills = [
  {
    skillTitle: "Machine Learning & AI Research",
    skillText: "More than 3 years",
    icon: "ri-brain-fill",
    notes: [
      "Co-authored 'Otter', a vision-language model inspired by Flamingo, accepted in IEEE TPAMI.",
      "Contributed to LMMS-Eval, a distributed LLM evaluation framework, accepted at NAACL 2025.",
      "Built multimodal image retrieval models using BLIP and Vision Transformers; tested on FashionIQ and CIRR.",
      "Created a Gymnasium-compatible Offline RL environment and evaluation pipeline for medical datasets.",
      "Trained and deployed saliency-based models for IC hardware segmentation using U-Net, ViT, and Swin Transformer.",
      "Developed diffusion planners for motion planning in MuJoCo and deployed on real robots using ROS.",
    ],
  },
  {
    skillTitle: "Robotics",
    skillText: "2 years",
    icon: "ri-robot-2-fill",
    notes: [
      "Developed MPC-based local path planner for BARN Challenge @ ICRA 2024; 2nd place globally.",
      "Created and deployed robot motion planning algorithms using ROS and MuJoCo.",
      "Led robotics projects under MLDA Robotics, with experience in autonomous systems and planning under constraints.",
    ],
  },
  {
    skillTitle: "Software Engineering",
    skillText: "More than 3 years",
    icon: "ri-code-s-slash-fill",
    notes: [
      "Led backend development at NTU Student Union; launched NTUMods and NTUSU Ufacility for 1000+ users.",
      "Fullstack developer for PYPHub: a CS exam forum with scraping, OCR, and AI-generated answers using RAG.",
      "Created cross-platform mobile apps for GenerationS Conference; deployed to Play Store.",
      "Tech stack: Python, Django, SQL, React, Nest.js, Next.js, Node.js, Express, Ionic, Strapi, Retool.",
      "Migrated legacy systems from Django templates to modern React-based SPAs.",
    ],
  },
  {
    skillTitle: "Natural Language Processing",
    skillText: "2 years",
    icon: "ri-translate-2",
    notes: [
      "Implemented text-to-SQL agents for natural language interfaces using SQL parsing.",
      "Integrated LangChain and RAG pipelines for question answering in CS education apps.",
      "Contributed to large-scale LLM evaluations and prompt-based query handling.",
    ],
  },
  {
    skillTitle: "Cloud, DevOps & Tools",
    skillText: "2 years",
    icon: "ri-cloud-fill",
    notes: [
      "Experienced with Docker, Git, Retool, and cloud deployments.",
      "Used LangChain and HuggingFace for integrating and deploying ML agents.",
      "Worked on scalable pipelines for model training and evaluation.",
    ],
  },
  {
    skillTitle: "Programming & Algorithmic Problem Solving",
    skillText: "More than 5 years",
    icon: "ri-terminal-box-fill",
    notes: [
      "Silver Medalist at IZhO 2022 and OSN National Olympiad 2020 in Informatics.",
      "Top 40 global ranking and Top 10 national placement; Codeforces and ICPC participant.",
      "Strong problem-solving background in data structures, dynamic programming, and graph algorithms.",
    ],
  },
];

function skillComponent({ skillTitle, skillText, icon, notes }) {
  return `
        <div class="skill accordion collapsed">
            <div class="skill__header accordion__header d-flex align-center justify-between">
                <div class="group d-flex align-center c-gap-1">
                    <i class="${icon} subtitle-lg"></i>
                    <div class="group">
                        <p class="skill__title body-md">${skillTitle}</p>
                        <p class="skill__text body-es">${skillText}</p>
                    </div>
                </div>
                <i class="ri-arrow-down-s-line subtitle-es arrow"></i>
            </div>
            <div class="skill__body accordion__content">
            <ul class="skill__notes d-flex f-column r-gap-1">

            ${notes
      .map((tool) => {
        return `
                  <li>${tool}</li>
              `;
      })
      .join("")}
        </ul>
            </div>
        </div>
    `;
}

function renderSkills() {
  skills.map((skill) => {
    skillsContainer.innerHTML += skillComponent(skill);
  });

  const accordions = document.querySelectorAll(".accordion");

  const toggleAccordion = (accordion) => {
    const accordionContent = accordion.querySelector(".accordion__content");
    let accordionContentHeight = accordionContent.scrollHeight;
    if (accordion.classList.contains("extended")) {
      accordion.classList.replace("extended", "collapsed");
      accordionContent.style.height = "0px";
    } else if (accordion.classList.contains("collapsed")) {
      accordion.classList.replace("collapsed", "extended");
      accordionContent.style.height = `${accordionContentHeight}px`;
    }
  };

  accordions.forEach((accordion) => {
    const accordionBtn = accordion.querySelector(".accordion__header");
    accordionBtn.addEventListener("click", () => {
      const extendedAccordion = document.querySelector(".accordion.extended");
      toggleAccordion(accordion);
      if (
        extendedAccordion &&
        !extendedAccordion.classList.contains("collapsed")
      ) {
        toggleAccordion(extendedAccordion);
      }
    });
  });
}

let educations = [
  {
    type: "education",
    title: "Bachelor of Science (Data Science and Artificial Intelligence)",
    position: "Nanyang Technological University, Singapore",
    date: {
      startDate: "Aug 2022",
      endDate: "May 2026",
    },
    desc: "ASEAN Scholar. Expected Honours (Distinction), current cGPA: 4.7/5.0.",
  },
  {
    type: "education",
    title: "URECA Research Programme",
    position: "NTU S-Lab, Nanyang Technological University",
    date: {
      startDate: "Aug 2023",
      endDate: "May 2024",
    },
    desc: "Researched multimodal vision-language models and large-scale benchmarking systems. Co-authored Otter (TPAMI) and LMMS-Eval (NAACL 2025).",
  },
  {
    type: "education",
    title: "Information Technology Executive",
    position: "NTU Students’ Computing and Data Science Club (NTU SCDS Club)",
    date: {
      startDate: "Sept 2024",
      endDate: "present",
    },
    desc: "Elected as IT Executive of the official SCSE Club, leading PYPHub and managing a team of 20+ across ML, software, and UI/UX divisions.",
  },
  {
    type: "education",
    title: "President & Research Member, MLDA Robotics",
    position: "Machine Learning and Data Analytics Lab, NTU EEE",
    date: {
      startDate: "Sept 2022",
      endDate: "present",
    },
    desc: "Led multiple robotics projects and teams; placed 2nd globally in the BARN Challenge @ ICRA 2024.",
  },
  {
    type: "education",
    title: "Backend Lead, Vice Chair (IT Committee)",
    position: "NTU Student Union (NTUSU)",
    date: {
      startDate: "Aug 2022",
      endDate: "Sept 2024",
    },
    desc: "Led backend development for NTUMods and internal union platforms. Managed a team of 3 and served over 1,000 students.",
  },
];

let experiences = [
  {
    type: "experience",
    title: "Machine Learning Research Engineer Intern",
    position: "Temasek Laboratories @ NTU",
    date: {
      startDate: "Jan 2025",
      endDate: "present",
    },
    desc: "Built interpretability pipelines using saliency maps and attention rollout for IC hardware image segmentation. Developed custom models using U-Net and ViT.",
  },
  {
    type: "experience",
    title: "Machine Learning & Robotics Engineer Intern",
    position: "Continental-NTU Corporate Lab",
    date: {
      startDate: "May 2024",
      endDate: "Dec 2024",
    },
    desc: "Developed diffusion planners for motion planning in MuJoCo and deployed to real robots using ROS. Compared transformer and CNN-based planners.",
  },
  {
    type: "experience",
    title: "Machine Learning Research Assistant Intern",
    position: "A*STAR Institute for Infocomm Research (I2R)",
    date: {
      startDate: "Jul 2023",
      endDate: "Mar 2024",
    },
    desc: "Created an Offline Reinforcement Learning framework for medical datasets. Applied RL to optimize diabetes treatment using MIMIC-III and SDR.",
  },
  {
    type: "experience",
    title: "Full Stack Software Developer (Volunteer)",
    position: "Heart of God Church",
    date: {
      startDate: "Sept 2023",
      endDate: "present",
    },
    desc: "Led the development of web and mobile apps for the GenerationS Pastors Conference. Built agentic text-to-SQL and deployed cross-platform mobile apps using Ionic.",
  },
];

educations.push(...experiences);

function timelineComponent({ title, position, date, desc }) {
  return `
    <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content d-flex f-column">
            <p class="timeline__date body-es">${date.startDate} - ${date.endDate}</p>
            <p class="timeline__major body-md">
                ${title}
                <span class="body-es">- ${position}</span>
            </p>
            <p class="timeline__desc body-es">${desc}</p>
        </div>
    </div>
  `;
}

function renderEducations() {
  educations.map((edu) => {
    if (edu.type === "education") {
      eduContainer.innerHTML += timelineComponent(edu);
    } else if (edu.type === "experience") {
      expContainer.innerHTML += timelineComponent(edu);
    }
  });
  sr.reveal(".timeline__item", { interval: 50, distance: "40px" });
}

/* ============== Services Section ============== */

services.forEach((service) => {
  const moreBtn = service.querySelector(".service__more"),
    bottomSheet = service.querySelector(".service__btmsheet"),
    dragIcon = service.querySelector(".service__btmsheet-dragicon");

  let isDragging = false,
    startY,
    startTranslateY;

  function showBottomSheet() {
    bottomSheet.style.transition = "transform 300ms ease";
    updateTranslateY(-bottomSheet.offsetHeight);
  }

  function hideBottomSheet() {
    updateTranslateY(0);
  }

  function updateTranslateY(value) {
    bottomSheet.style.transform = `translateY(${value}px)`;
  }

  function dragStart(e) {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startTranslateY = parseFloat(
      getComputedStyle(bottomSheet).transform.split(", ")[5]
    );
  }

  function dragging(e) {
    if (!isDragging) return;

    const deltaY = (e.pageY || e.touches?.[0].pageY) - startY;
    const newTranslateY = Math.max(
      -bottomSheet.offsetHeight,
      startTranslateY + deltaY
    );

    if (navigator.maxTouchPoints > 0) {
      document.body.style.overflow = "hidden";
    }

    bottomSheet.style.transition = "";
    updateTranslateY(newTranslateY);
  }

  function dragStop() {
    if (!isDragging) return;
    isDragging = false;
    let endTranslateY = -parseFloat(
      getComputedStyle(bottomSheet).transform.split(", ")[5]
    );

    if (navigator.maxTouchPoints > 0) {
      document.body.style.overflow = "visible";
    }

    bottomSheet.style.transition = "transform 300ms ease";
    endTranslateY >= bottomSheet.offsetHeight * 0.75
      ? updateTranslateY(-bottomSheet.offsetHeight)
      : endTranslateY <= bottomSheet.offsetHeight * 0.25
        ? hideBottomSheet()
        : updateTranslateY(-bottomSheet.offsetHeight / 2);
  }

  moreBtn.addEventListener("click", showBottomSheet);
  dragIcon.addEventListener("mousedown", dragStart);
  service.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  dragIcon.addEventListener("touchstart", dragStart);
  service.addEventListener("touchmove", dragging);
  document.addEventListener("touchend", dragStop);
});

/* ============== Testimonials Section ============== */
const testimonialsSwiper = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  allowTouchMove: true,
  navigation: {
    prevEl: ".testimonials__btn-left",
    nextEl: ".testimonials__btn-right",
  },
  pagination: {
    el: ".testimonials__slider-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      allowTouchMove: false,
    },
  },
});
/* ============== Contact Section ============== */
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
    targetLabel.classList.add("focus");
  });
  input.addEventListener("blur", () => {
    let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
    if (input.value.length === 0) targetLabel.classList.remove("focus");
  });
});

/* ============== Active Scroll ============== */

function activeScroll() {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 16,
      sectionHeight = section.offsetHeight,
      link = document.querySelector(`.header__link a[href='#${section.id}'`);
    if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop) {
      link.classList.add("active");
      // indicator.style.left = `${index * 90 + 10}px`; it's up to you, you do not need to add this
    } else {
      link.classList.remove("active");
    }
  });

  mobileLinks.forEach((link) => {
    let hashLink = /#([^#]*)/g.exec(link.href)[1];
    const section = document.querySelector(`section[id='${hashLink}']`);
    const sectionTop = section.offsetTop - 16,
      sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop) {
      link.classList.add("active");
      // indicator.style.left = `${index * 90 + 10}px`; it's up to you, you do not need to add this
    } else {
      link.classList.remove("active");
    }
  });
}

/* ============== ScrollUp Button ============== */
function showScrollUpBtn() {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
}

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
});
/* ============== Dark / Light Theme ============== */

colorThemeBtn.addEventListener("click", () => {
  theme.toggleTheme();
});

function changeThemeBtnIcon() {
  if (theme.currentTheme === "dark") {
    colorThemeBtn
      .querySelector("i")
      .classList.replace("ri-moon-fill", "ri-sun-fill");
  } else if (theme.currentTheme === "light") {
    colorThemeBtn
      .querySelector("i")
      .classList.replace("ri-sun-fill", "ri-moon-fill");
  }
}

theme.onToggle(changeThemeBtnIcon);

/* ============== Send Email By EmailJS ============== */
const serviceID = "service_pcyjapm",
  templateID = "template_s5si2g1",
  templateParams = contactForm,
  publicKey = "SqtxrUUa8ZE_ZYsDM";

contactForm.addEventListener("submit", sendEmail);

// (function () {
//   emailjs.init(publicKey);
// })();

function sendEmail(e) {
  e.preventDefault();
  // Syntax: (serviceID, templateID, templateParams)
  emailjs.sendForm(serviceID, templateID, templateParams, publicKey).then(
    (response) => {
      console.log(response.status, response.text);
      statusBox.textContent = "The message was sent successfully ✅";
      setTimeout(() => {
        statusBox.textContent = "";
      }, 7000);
      contactForm.reset();
    },
    (error) => {
      console.log(error);
      statusBox.textContent = "The message wasn't sent successfully ❌";
    }
  );
}

/* ============== scrollRevealJS ============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  delay: 300,
});
sr.reveal(".home__left-side", { origin: "left" });
sr.reveal(".home__right-side", { origin: "right" });

sr.reveal(".section__title", { origin: "top", distance: "20px" });
sr.reveal(".about__left-side", { origin: "left" });
sr.reveal(".about__right-side", { origin: "right" });

sr.reveal(".skills__subtitle", { origin: "left" });
sr.reveal(".skills__items", { distance: "40px" });

sr.reveal(".timeline__title", { distance: "20px" });
sr.reveal(".timeline__items", { distance: "5px" });

sr.reveal(".project", { interval: 50 });
sr.reveal(".service", { interval: 50 });

sr.reveal(".cta__content");
sr.reveal(".testimonials_content");

sr.reveal(".contact__info-item", { interval: 50, origin: "left" });
sr.reveal(".form", { origin: "right" });

window.addEventListener("scroll", () => {
  changeHeaderBg();
  hideMobNavBar();
  showScrollUpBtn();
  activeScroll();
});

window.addEventListener("load", () => {
  renderSkills();
  renderEducations();
  activeScroll();
});
