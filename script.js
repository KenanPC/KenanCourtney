const projects = [
  {
    name: "HeartBEAT",
    description:
      "Heart-rate driven audio that adapts a Spotify listening experience using real-time Whoop metrics.",
    language: "TypeScript",
    year: "2026",
    href: "https://github.com/KenanPC/HeartBEAT",
    tags: ["Wearables", "Spotify", "Realtime"],
  },
  {
    name: "PokeVault",
    description:
      "A card-selling platform concept focused on clean inventory discovery and collector-friendly commerce.",
    language: "TypeScript",
    year: "2026",
    href: "https://github.com/KenanPC/PokeVault",
    tags: ["Marketplace", "Inventory", "Commerce"],
  },
];

const brandRoles = [
  "Product Manager",
  "AI-Native",
  "Product Manager",
  "Creator",
  "Product Manager",
  "Tinkerer",
  "Product Manager",
  "Father",
];

const professionalItems = [
  {
    name: "In Development",
    company: "Evinova",
    description:
      "An app that enables digital endpoint data collection with connected devices in clinical study clinics.",
    tags: ["Clinical trials", "Respiratory", "Connected devices", "Android"],
    role: "Product Director",
    contributions: [
      "Led product development for clinical-trial workflows that collect digital biomarkers across respiratory devices and sensors.",
      "Defined evaluation rigor and architecture requirements for AI-enabled medical device quality assurance.",
      "Built a multi-year device integration strategy by mapping market opportunities, investment tradeoffs, and platform expansion paths.",
    ],
    icon: {
      svg: "evinova-mark",
      alt: "Evinova logo",
    },
    images: [
      {
        src: "assets/in-development/tablet-sneak-peek.png",
        alt: "Tablet screenshot preview of respiratory endpoint data collection graphs",
        frameClass: "professional-preview-frame-top-left",
      },
    ],
  },
  {
    name: "Unify Trials",
    company: "Evinova",
    description:
      "Unify Trials supports clinical trial participants with reminders, study information, questionnaires, and data collection throughout a trial.",
    href: "https://play.google.com/store/apps/details?id=com.astrazeneca.unify.gen1&hl=en_US",
    developerHref: "https://play.google.com/store/apps/developer?id=Evinova&hl=en_US",
    tags: ["Clinical trials", "eCOA", "Connected devices", "Telehealth", "iOS", "Android"],
    role: "Product Director",
    contributions: [
      "Led remote spirometry capture workflows that help clinical trial teams collect respiratory endpoint data outside traditional site visits.",
      "Enabled telehealth experiences that connect participants, study teams, and care guidance within a clinical trial journey.",
      "Shaped remote pulse oximetry capture capabilities for connected-device monitoring and respiratory study data collection.",
    ],
    icon: {
      src: "assets/unify-trials/logo.png",
      alt: "Unify Trials app icon",
    },
    images: [
      {
        src: "assets/unify-trials/screenshot-welcome.png",
        alt: "Unify Trials welcome screen screenshot",
      },
      {
        src: "assets/unify-trials/screenshot-home.png",
        alt: "Unify Trials home activities screenshot",
      },
      {
        src: "assets/unify-trials/screenshot-tracker.png",
        alt: "Unify Trials symptom tracker screenshot",
      },
      {
        src: "assets/unify-trials/screenshot-symptoms.png",
        alt: "Unify Trials symptom education screenshot",
      },
      {
        src: "assets/unify-trials/screenshot-response.png",
        alt: "Unify Trials response confirmation screenshot",
      },
    ],
  },
  {
    name: "myVisionTrack",
    company: "F. Hoffmann-La Roche",
    description:
      "myVisionTrack is a prescribed app for people with macular diseases to test their vision at home between clinic visits.",
    href: "https://play.google.com/store/apps/details?id=com.roche.myvisiontrack&hl=en_US",
    developerHref: "https://play.google.com/store/apps/developer?id=F.+Hoffmann-La+Roche&hl=en_US",
    tags: [
      "Healthcare",
      "Ophthalmology",
      "Remote Patient Monitoring",
      "SaMD",
      "FDA Registered",
      "iOS",
      "Android",
    ],
    role: "Product Manager",
    contributions: [
      "Orchestrated FDA registration work for a commercial Software as a Medical Device, balancing safety, compliance, and product usability.",
      "Led roadmap and prioritization decisions for at-home vision monitoring through complex regulatory and clinical constraints.",
      "Planned legacy-to-new product transition work, including user migration strategy and continuity of patient experience.",
    ],
    icon: {
      src: "assets/myvisiontrack/icon.webp",
      alt: "myVisionTrack app icon",
    },
    images: [
      {
        src: "assets/myvisiontrack/screenshot-5.webp",
        alt: "myVisionTrack progress screenshot",
      },
      {
        src: "assets/myvisiontrack/screenshot-4.webp",
        alt: "myVisionTrack onboarding screenshot",
      },
      {
        src: "assets/myvisiontrack/screenshot-3.webp",
        alt: "myVisionTrack results screenshot",
      },
      {
        src: "assets/myvisiontrack/screenshot-2.webp",
        alt: "myVisionTrack vision test screenshot",
      },
      {
        src: "assets/myvisiontrack/screenshot-1.webp",
        alt: "myVisionTrack app listing screenshot",
      },
    ],
  },
  {
    name: "mVTx",
    company: "F. Hoffmann-La Roche",
    description:
      "mVTx supports study participants and their eyecare professionals with customized app features for people living with eye conditions.",
    href: "https://play.google.com/store/apps/details?id=com.genentech.mvtx&hl=en_US",
    developerHref: "https://play.google.com/store/apps/developer?id=F.+Hoffmann-La+Roche&hl=en_US",
    tags: ["Clinical trials", "eCOA", "Ophthalmology", "Image capture", "Mobile", "iOS", "Android"],
    role: "Product Manager",
    contributions: [
      "Managed product strategy, roadmap, and delivery tradeoffs for a global ophthalmology clinical trial platform.",
      "Led launch planning across multiple digital health apps used by patients and providers in 15+ countries.",
      "Coordinated a 65+ person cross-functional program across internal teams, vendors, trial operations, clinical, regulatory, and design.",
    ],
    icon: {
      src: "assets/mvtx/icon.webp",
      alt: "mVTx app icon",
    },
    companionApp: {
      name: "mVTx Clinic",
      company: "F. Hoffmann-La Roche",
      icon: {
        src: "assets/mvtx/clinic-icon.png",
        alt: "mVTx Clinic app icon",
      },
    },
    images: [
      {
        src: "assets/mvtx/register.webp",
        alt: "mVTx registration screen",
      },
      {
        src: "assets/mvtx/cover.webp",
        alt: "mVTx overview screen",
      },
      {
        src: "assets/mvtx/shapes.webp",
        alt: "mVTx shape activity illustration",
      },
      {
        src: "assets/mvtx/glasses.webp",
        alt: "mVTx glasses activity illustration",
      },
      {
        src: "assets/mvtx/camera.webp",
        alt: "mVTx camera activity illustration",
      },
    ],
  },
];

const carousel = document.querySelector("#project-carousel");
const projectDots = document.querySelector("#project-dots");
const professionalCarousel = document.querySelector("#professional-carousel");
const professionalDots = document.querySelector("#professional-dots");
const professionalModal = document.querySelector("#professional-modal");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector(".modal-close");
const roleRotator = document.querySelector("[data-role-rotator]");
const roleWord = roleRotator?.querySelector(".brand-role-word");
const brandLink = document.querySelector(".brand");
const tabButtons = [...document.querySelectorAll("[data-tab]:not([hidden])")];
const tabPanels = [...document.querySelectorAll("[role='tabpanel']")];
let activeProject = 0;
let activeProfessional = 0;
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const autoScrollers = [];
const loopCopies = 3;
const primaryLoopCopy = 1;
const professionalLoopCopies = 2;
const professionalCarouselMeta = {
  cardSelector: ".professional-card",
  dotSelector: "[data-professional-dot]",
};
const professionalImageSizes = {
  "assets/in-development/tablet-sneak-peek.png": {
    width: 926,
    height: 666,
    displayWidth: 252,
    displayHeight: 181,
    frameWidthVw: 30,
  },
  "assets/unify-trials/screenshot-home.png": { width: 856, height: 1860, displayWidth: 460, displayHeight: 997 },
  "assets/unify-trials/screenshot-tracker.png": { width: 849, height: 1764, displayWidth: 460, displayHeight: 997 },
  "assets/unify-trials/screenshot-symptoms.png": { width: 844, height: 1836, displayWidth: 460, displayHeight: 997 },
  "assets/unify-trials/screenshot-response.png": { width: 848, height: 1840, displayWidth: 460, displayHeight: 997 },
  "assets/unify-trials/screenshot-welcome.png": { width: 460, height: 997 },
  "assets/myvisiontrack/screenshot-1.webp": { width: 136, height: 296 },
  "assets/myvisiontrack/screenshot-2.webp": { width: 136, height: 296 },
  "assets/myvisiontrack/screenshot-3.webp": { width: 136, height: 296 },
  "assets/myvisiontrack/screenshot-4.webp": { width: 136, height: 296 },
  "assets/myvisiontrack/screenshot-5.webp": { width: 136, height: 296 },
  "assets/mvtx/register.webp": { width: 137, height: 296 },
  "assets/mvtx/cover.webp": { width: 137, height: 296 },
  "assets/mvtx/shapes.webp": { width: 137, height: 296 },
  "assets/mvtx/glasses.webp": { width: 137, height: 296 },
  "assets/mvtx/camera.webp": { width: 137, height: 296 },
};
const professionalPhoneScreenshotHeight = 181;

const getDuplicateAttrs = (copy) => (copy === primaryLoopCopy ? "" : ' aria-hidden="true"');
const getDuplicateFocusAttr = (copy) => (copy === primaryLoopCopy ? "" : ' tabindex="-1"');

const wrapIndex = (index, length) => (index + length) % length;

const renderLoopedItems = (items, renderItem) =>
  Array.from({ length: loopCopies }, (_, copy) => items.map((item, index) => renderItem(item, index, copy)).join("")).join(
    "",
  );

const getRoleDwellTime = (role) => {
  const baseDelay = role === "Product Manager" ? 3000 : 1000;
  return baseDelay + 1000 + Math.random() * 2000;
};

const roleTransitionDuration = 420;
const roleSlideTransitions = {
  down: {
    incomingClass: "brand-role-word-enter-down",
    outgoingClass: "brand-role-word-exit-down",
  },
  up: {
    incomingClass: "brand-role-word-enter-up",
    outgoingClass: "brand-role-word-exit-up",
  },
};
const getRoleSlideTransition = () =>
  roleSlideTransitions[Math.random() < 0.5 ? "down" : "up"];

const showTab = (tabId, shouldFocus = false) => {
  const selectedButton = tabButtons.find((button) => button.dataset.tab === tabId) || tabButtons[0];
  const selectedTabId = selectedButton?.dataset.tab || "about";

  tabButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== selectedTabId;
  });

  if (selectedTabId === "professional") {
    window.requestAnimationFrame(() => {
      setProfessionalItem(activeProfessional, false);
      normalizeLoopPosition(professionalCarousel, professionalCarouselMeta.cardSelector);
    });
  }

  if (selectedTabId === "projects") {
    window.requestAnimationFrame(() => {
      setProjectItem(activeProject, false);
      normalizeLoopPosition(carousel, ".project-card");
    });
  }

  if (shouldFocus) {
    selectedButton?.focus();
  }
};

const getTabFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  return tabPanels.some((panel) => panel.id === hash) ? hash : "about";
};

const handleTabKeydown = (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    return;
  }

  event.preventDefault();
  const currentIndex = tabButtons.findIndex((button) => button.getAttribute("aria-selected") === "true");
  const lastIndex = tabButtons.length - 1;
  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? lastIndex
        : wrapIndex(currentIndex + (event.key === "ArrowRight" ? 1 : -1), tabButtons.length);

  showTab(tabButtons[nextIndex].dataset.tab, true);
};


const startRoleRotator = () => {
  if (!roleRotator || !roleWord || reduceMotionQuery.matches || brandRoles.length <= 1) {
    return;
  }

  let activeRole = 0;
  let rotationTimer = null;
  let cleanupTimer = null;
  roleRotator.style.setProperty("--role-width", `${Math.max(...brandRoles.map((role) => role.length))}ch`);

  const scheduleNextRole = () => {
    window.clearTimeout(rotationTimer);
    rotationTimer = window.setTimeout(showNextRole, getRoleDwellTime(brandRoles[activeRole]));
  };

  const showNextRole = () => {
    window.clearTimeout(cleanupTimer);
    activeRole = (activeRole + 1) % brandRoles.length;
    const currentWord = roleRotator.querySelector(".brand-role-word-current") || roleRotator.querySelector(".brand-role-word");

    roleRotator.querySelectorAll(".brand-role-word").forEach((word) => {
      if (word !== currentWord) {
        word.remove();
      }
    });

    const transition = getRoleSlideTransition();
    const nextWord = document.createElement("span");
    nextWord.className = `brand-role-word brand-role-word-enter ${transition.incomingClass}`;
    nextWord.textContent = brandRoles[activeRole];

    currentWord?.classList.remove("brand-role-word-current");
    currentWord?.classList.add("brand-role-word-exit", transition.outgoingClass);
    roleRotator.append(nextWord);
    roleRotator.setAttribute("aria-label", brandRoles[activeRole]);

    cleanupTimer = window.setTimeout(() => {
      currentWord?.remove();
      nextWord.className = "brand-role-word brand-role-word-current";
      scheduleNextRole();
    }, roleTransitionDuration);
  };

  roleWord.classList.add("brand-role-word-current");
  scheduleNextRole();
};

const getClosestCardIndex = (shelf, cardSelector) => {
  const cards = [...shelf.querySelectorAll(cardSelector)];

  if (cards.length <= 1) {
    return 0;
  }

  const shelfCenter = shelf.scrollLeft + shelf.clientWidth / 2;
  const closestCard = cards.reduce((closest, card) => {
    const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - shelfCenter);
    return !closest || distance < closest.distance ? { card, distance } : closest;
  }, null)?.card;

  return Number(closestCard?.dataset.carouselIndex || 0);
};

const getPrimaryCard = (shelf, cardSelector, index) =>
  shelf.querySelector(`${cardSelector}[data-carousel-copy="${primaryLoopCopy}"][data-carousel-index="${index}"]`);

const getLoopMetrics = (shelf, cardSelector) => {
  const firstCopy = shelf.querySelector(`${cardSelector}[data-carousel-copy="0"][data-carousel-index="0"]`);
  const secondCopy = shelf.querySelector(`${cardSelector}[data-carousel-copy="1"][data-carousel-index="0"]`);

  if (!firstCopy || !secondCopy) {
    return null;
  }

  return {
    cycleWidth: secondCopy.offsetLeft - firstCopy.offsetLeft,
    loopStart: secondCopy.offsetLeft,
  };
};

const placeAtPrimaryLoop = (shelf, cardSelector) => {
  const metrics = getLoopMetrics(shelf, cardSelector);
  if (metrics) {
    shelf.scrollLeft = metrics.loopStart;
  }
};

const normalizeLoopPosition = (shelf, cardSelector) => {
  const metrics = getLoopMetrics(shelf, cardSelector);
  if (!metrics?.cycleWidth) {
    return;
  }

  const edgeBuffer = Math.min(Math.max(shelf.clientWidth * 0.22, 96), metrics.cycleWidth * 0.2);
  const maxScroll = shelf.scrollWidth - shelf.clientWidth;

  if (shelf.scrollLeft <= edgeBuffer) {
    shelf.scrollLeft += metrics.cycleWidth;
    return;
  }

  if (shelf.scrollLeft >= maxScroll - edgeBuffer) {
    shelf.scrollLeft -= metrics.cycleWidth;
    return;
  }
};

const renderProjects = () => {
  carousel.innerHTML = renderLoopedItems(
    projects,
    (project, index, copy) => `
      <article class="project-card" data-carousel-copy="${copy}" data-carousel-index="${index}"${getDuplicateAttrs(copy)}>
        <div class="project-topline">
          <span class="project-icon" aria-hidden="true">${project.name.slice(0, 2).toUpperCase()}</span>
          <span class="project-meta">${project.language} / ${project.year}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <ul class="tag-list" aria-label="${project.name} tags">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <div class="project-links">
          <a href="${project.href}" target="_blank" rel="noreferrer"${getDuplicateFocusAttr(copy)}>Open repo</a>
          <a href="${project.href}#readme" target="_blank" rel="noreferrer"${getDuplicateFocusAttr(copy)}>Learn more</a>
        </div>
      </article>
    `,
  );

  projectDots.innerHTML = projects
    .map(
      (project, index) => `
      <button
        class="dot-button"
        type="button"
        data-project-dot="${index}"
        aria-label="Show ${project.name}"
        aria-current="${index === activeProject ? "true" : "false"}"
      ></button>
    `,
    )
    .join("");
};

const updateProjectDots = () => {
  projectDots.querySelectorAll(".dot-button").forEach((dot, index) => {
    dot.setAttribute("aria-current", String(index === activeProject));
  });
};

const setProjectItem = (index, shouldScroll = true) => {
  activeProject = (index + projects.length) % projects.length;
  updateProjectDots();

  if (!shouldScroll) {
    return;
  }

  const card = getPrimaryCard(carousel, ".project-card", activeProject);
  if (card) {
    carousel.scrollTo({ left: card.offsetLeft - carousel.offsetLeft, behavior: "smooth" });
  }
};

const syncProjectDotsToScroll = () => {
  const closestIndex = getClosestCardIndex(carousel, ".project-card");
  if (closestIndex !== activeProject) {
    activeProject = closestIndex;
    updateProjectDots();
  }
};

const getProfessionalCopyAttrs = (copy) => (copy === 0 ? "" : ' aria-hidden="true"');
const getProfessionalCopyFocusAttr = (copy) => (copy === 0 ? "" : ' tabindex="-1"');
const getProfessionalImageSize = (image) => {
  const size = professionalImageSizes[image.src] || { width: 137, height: 296 };
  const displayWidth = size.displayWidth || size.width;
  const displayHeight = size.displayHeight || size.height;
  const isTabletPreview = image.src === "assets/in-development/tablet-sneak-peek.png";

  if (!isTabletPreview) {
    const scale = professionalPhoneScreenshotHeight / displayHeight;

    return {
      ...size,
      displayWidth: displayWidth * scale,
      displayHeight: professionalPhoneScreenshotHeight,
    };
  }

  return { ...size, displayWidth, displayHeight };
};
const getProfessionalImageStyle = (image) => {
  const size = getProfessionalImageSize(image);

  return `--image-width: ${size.width}; --image-height: ${size.height}; --display-width: ${size.displayWidth}; --display-height: ${size.displayHeight}; --frame-width-vw: ${size.frameWidthVw || 10}vw;`;
};
const getProfessionalImageAttrs = (image) => {
  const size = getProfessionalImageSize(image);

  return `width="${size.width}" height="${size.height}" style="${getProfessionalImageStyle(image)}"`;
};

const renderEvinovaMark = (suffix) => `
  <span class="app-icon app-icon-svg" role="img" aria-label="Evinova logo">
    <svg viewBox="0 0 66 51" fill="none" aria-hidden="true" focusable="false">
      <path fill="url(#evinova-a-${suffix})" d="M19.77 0C14.129 0 9.553 4.575 9.553 10.217c0 5.644 4.576 10.219 10.219 10.219h32c5.645 0 10.219-4.575 10.219-10.219C61.99 4.575 57.416 0 51.772 0H19.77Z"></path>
      <path fill="url(#evinova-b-${suffix})" d="M10.219 14.987C4.575 14.987 0 19.561 0 25.205c0 5.643 4.575 10.218 10.219 10.218h32c5.643 0 10.218-4.575 10.218-10.218 0-5.644-4.575-10.218-10.218-10.218h-32Z"></path>
      <path fill="url(#evinova-c-${suffix})" d="M10.733 14.987a10.215 10.215 0 0 0 9.038 5.45h31.486a10.215 10.215 0 0 0-9.038-5.45H10.733Z"></path>
      <path fill="url(#evinova-d-${suffix})" d="M23.28 29.974c-5.644 0-10.219 4.575-10.219 10.217 0 5.644 4.575 10.219 10.218 10.219H55.28c5.643 0 10.22-4.575 10.22-10.22 0-5.641-4.577-10.216-10.22-10.216h-32Z"></path>
      <path fill="url(#evinova-e-${suffix})" d="M23.28 29.974c-3.921 0-7.325 2.209-9.038 5.45H42.22c3.921 0 7.324-2.21 9.038-5.45H23.28Z"></path>
      <defs>
        <linearGradient x1="9.552" x2="61.99" y1="10.218" y2="10.218" gradientUnits="userSpaceOnUse" id="evinova-a-${suffix}"><stop stop-color="#FF8FC2"></stop><stop offset="1" stop-color="#EB4A73"></stop></linearGradient>
        <linearGradient x1="0" x2="52.437" y1="25.205" y2="25.205" gradientUnits="userSpaceOnUse" id="evinova-b-${suffix}"><stop stop-color="#32EB9C"></stop><stop offset="1" stop-color="#4F9EB0"></stop></linearGradient>
        <linearGradient x1="51.256" x2="10.733" y1="17.712" y2="17.712" gradientUnits="userSpaceOnUse" id="evinova-c-${suffix}"><stop stop-color="#FF8FC2"></stop><stop offset="1" stop-color="#32EB9C"></stop></linearGradient>
        <linearGradient x1="13.061" x2="65.499" y1="40.192" y2="40.192" gradientUnits="userSpaceOnUse" id="evinova-d-${suffix}"><stop stop-color="#FFCD00"></stop><stop offset="1" stop-color="#F16D07"></stop></linearGradient>
        <linearGradient x1="0" x2="52.437" y1="32.698" y2="32.698" gradientUnits="userSpaceOnUse" id="evinova-e-${suffix}"><stop stop-color="#32EB9C"></stop><stop offset="1" stop-color="#FFCD00"></stop></linearGradient>
      </defs>
    </svg>
  </span>
`;

const renderProfessionalIcon = (item, suffix, lazy = true) => {
  if (item.icon?.svg === "evinova-mark") {
    return renderEvinovaMark(suffix);
  }

  if (item.icon) {
    return `<img class="app-icon" src="${item.icon.src}" alt="${item.icon.alt}"${lazy ? ' loading="lazy"' : ""} />`;
  }

  return `<span class="app-icon app-icon-fallback" aria-hidden="true">${item.iconText}</span>`;
};

const renderAppIdentity = ({ name, company, icon }, suffix, focusAttr = "", lazy = true) => `
  <div class="app-heading">
    ${renderProfessionalIcon({ name, company, icon }, suffix, lazy)}
    <div>
      <h3>${name}</h3>
      <div class="professional-meta">
        <span${focusAttr}>${company}</span>
      </div>
    </div>
  </div>
`;

const renderProfessionalMedia = (item) => {
  if (item.placeholder?.type === "tablet") {
    return `
      <div class="professional-media professional-media-placeholder" aria-label="${item.placeholder.label}">
        <div class="tablet-placeholder" aria-hidden="true">
          <div class="tablet-placeholder-screen">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
  }

  return item.images
    ? `<div class="professional-media" style="--media-count: ${item.images.length}; --media-layout-count: ${item.mediaLayoutCount || item.images.length};" aria-label="${item.name} screenshots">
        ${item.images
          .map(
            (image) =>
              `<span class="professional-preview-frame ${image.frameClass || ""}" style="${getProfessionalImageStyle(image)}">
                <img class="professional-preview-image ${image.imageClass || ""}" src="${image.src}" alt="${image.alt}" loading="lazy" ${getProfessionalImageAttrs(image)} />
              </span>`,
          )
          .join("")}
      </div>`
    : `<div class="professional-media professional-media-empty" aria-hidden="true"></div>`;
};

const renderProfessionalCompany = (item, focusAttr = "") =>
  item.developerHref
    ? `<a href="${item.developerHref}" target="_blank" rel="noreferrer"${focusAttr}>${item.company}</a>`
    : `<span>${item.company}</span>`;

const renderProfessionalCard = (item, index, copy) => `
  <article
    class="professional-card"
    data-carousel-copy="${copy}"
    data-carousel-index="${index}"
    ${getProfessionalCopyAttrs(copy)}
  >
    <div class="professional-card-header">
      <div class="app-heading-group${item.companionApp ? " app-heading-group-paired" : ""}">
        <div class="app-heading">
          ${renderProfessionalIcon(item, `card-${copy}-${index}`)}
          <div>
            <h3>${item.name}</h3>
            <div class="professional-meta">
              ${renderProfessionalCompany(item, getProfessionalCopyFocusAttr(copy))}
            </div>
          </div>
        </div>
        ${
          item.companionApp
            ? `<span class="app-heading-divider" aria-hidden="true"></span>${renderAppIdentity(
                item.companionApp,
                `card-${copy}-${index}-companion`,
                getProfessionalCopyFocusAttr(copy),
              )}`
            : ""
        }
      </div>
    </div>
    <div class="professional-body">
      <div class="professional-product">
        ${renderProfessionalMedia(item)}
        <div class="professional-copy">
          <p class="professional-description">${item.description}</p>
        </div>
      </div>
      <aside class="professional-contributions" aria-label="${item.name} contributions">
        <p class="panel-label">My Contributions</p>
        <h4>${item.role}</h4>
        <ul class="professional-contribution-list">
          ${item.contributions.map((contribution) => `<li>${contribution}</li>`).join("")}
        </ul>
      </aside>
    </div>
    <ul class="tag-list professional-focus-cards" aria-label="${item.name} tags">
      ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
  </article>
`;

const renderProfessionalDots = () => {
  professionalDots.innerHTML = professionalItems
    .map(
      (item, index) => `
      <button
        class="dot-button"
        type="button"
        data-professional-dot="${index}"
        aria-label="Show ${item.name}"
        aria-current="${index === activeProfessional ? "true" : "false"}"
      ></button>
    `,
    )
    .join("");
};

const renderProfessionalItems = () => {
  professionalCarousel.innerHTML = Array.from({ length: professionalLoopCopies }, (_, copy) =>
    professionalItems.map((item, index) => renderProfessionalCard(item, index, copy)).join(""),
  ).join("");
  updateProfessionalDots();
};

const renderModalImages = (item) =>
  item.images
    ? `<div class="modal-media" aria-label="${item.name} screenshots">
        ${item.images.map((image) => `<img src="${image.src}" alt="${image.alt}" />`).join("")}
      </div>`
    : "";

const openProfessionalModal = (index) => {
  const item = professionalItems[index];
  if (!item) {
    return;
  }

  modalContent.innerHTML = `
    <div class="modal-contribution-copy">
      <p class="eyebrow">My Role</p>
      <h2 id="modal-title">${item.role}</h2>
      <p id="modal-description">
        ${item.name} is part of my professional product work. This section captures the work behind the product,
        separate from the public app listing.
      </p>
      <p class="eyebrow">My Contributions</p>
      <ul class="contribution-list">
        ${item.contributions.map((contribution) => `<li>${contribution}</li>`).join("")}
      </ul>
    </div>
    <aside class="modal-product-summary">
      <div class="app-heading">
        ${renderProfessionalIcon(item, `modal-${index}`, false)}
        <div>
          <h3>${item.name}</h3>
          <div class="professional-meta">
            ${renderProfessionalCompany(item)}
          </div>
        </div>
      </div>
      <p>${item.description}</p>
      <ul class="tag-list modal-tags" aria-label="${item.name} tags">
        ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      ${renderModalImages(item)}
      ${
        item.href || item.developerHref
          ? `<div class="modal-links">
              ${item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">View product</a>` : ""}
              ${
                item.developerHref
                  ? `<a href="${item.developerHref}" target="_blank" rel="noreferrer">${item.company} on Google Play</a>`
                  : ""
              }
            </div>`
          : ""
      }
    </aside>
  `;

  professionalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
};

const closeProfessionalModal = () => {
  professionalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

window.openProfessionalModal = openProfessionalModal;

const updateProfessionalDots = () => {
  professionalDots.querySelectorAll(".dot-button").forEach((dot, index) => {
    dot.setAttribute("aria-current", String(index === activeProfessional));
  });
};

const setProfessionalItem = (index, shouldScroll = true) => {
  activeProfessional = (index + professionalItems.length) % professionalItems.length;
  updateProfessionalDots();

  if (!shouldScroll) {
    return;
  }

  const card = professionalCarousel.querySelector(
    `${professionalCarouselMeta.cardSelector}[data-carousel-copy="0"][data-carousel-index="${activeProfessional}"]`,
  );

  if (card) {
    professionalCarousel.scrollTo({ left: card.offsetLeft - professionalCarousel.offsetLeft, behavior: "smooth" });
  }
};

const syncProfessionalDotsToScroll = () => {
  normalizeLoopPosition(professionalCarousel, professionalCarouselMeta.cardSelector);

  const closestIndex = getClosestCardIndex(professionalCarousel, professionalCarouselMeta.cardSelector);
  if (closestIndex !== activeProfessional) {
    activeProfessional = closestIndex;
    updateProfessionalDots();
  }
};

const createAutoScroller = (shelf, { cardSelector, direction = 1, speed = 0.18, startAtEnd = false } = {}) => {
  let frameId = null;
  let lastTick = 0;
  let pauseUntil = 0;
  let isHovering = false;

  const pause = () => {
    pauseUntil = performance.now() + 2200;
  };

  const stop = () => {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    shelf.classList.remove("is-auto-scrolling");
  };

  const tick = (time) => {
    if (!lastTick) {
      lastTick = time;
    }

    const elapsed = Math.min(time - lastTick, 48);
    lastTick = time;

    const maxScroll = shelf.scrollWidth - shelf.clientWidth;
    if (
      maxScroll > 0 &&
      !isHovering &&
      !shelf.matches(":hover") &&
      time >= pauseUntil &&
      professionalModal.getAttribute("aria-hidden") === "true"
    ) {
      const nextLeft = shelf.scrollLeft + direction * speed * elapsed;
      shelf.scrollLeft = nextLeft;
      normalizeLoopPosition(shelf, cardSelector);
    }

    frameId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (reduceMotionQuery.matches || frameId) {
      return;
    }

    placeAtPrimaryLoop(shelf, cardSelector);
    if (startAtEnd) {
      const metrics = getLoopMetrics(shelf, cardSelector);
      shelf.scrollLeft = metrics ? metrics.loopStart + metrics.cycleWidth - shelf.clientWidth : shelf.scrollLeft;
    }

    lastTick = 0;
    shelf.classList.add("is-auto-scrolling");
    frameId = requestAnimationFrame(tick);
  };

  shelf.addEventListener("pointerdown", pause);
  shelf.addEventListener(
    "wheel",
    () => {
      pause();
      window.requestAnimationFrame(() => normalizeLoopPosition(shelf, cardSelector));
    },
    { passive: true },
  );
  shelf.addEventListener("touchstart", pause, { passive: true });
  shelf.addEventListener("focusin", pause);
  shelf.addEventListener("pointerenter", () => {
    isHovering = true;
  });
  shelf.addEventListener("pointerleave", () => {
    isHovering = false;
    pause();
  });
  shelf.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  shelf.addEventListener("mouseleave", () => {
    isHovering = false;
    pause();
  });

  const scroller = { start, stop };
  autoScrollers.push(scroller);
  return scroller;
};

const updateAutoScrollPreference = () => {
  autoScrollers.forEach((scroller) => {
    if (reduceMotionQuery.matches) {
      scroller.stop();
    } else {
      scroller.start();
    }
  });
};

renderProfessionalDots();
renderProfessionalItems();
renderProjects();
showTab(getTabFromHash());
startRoleRotator();
createAutoScroller(professionalCarousel, {
  cardSelector: professionalCarouselMeta.cardSelector,
  direction: -1,
  speed: 0.035,
});
createAutoScroller(carousel, { cardSelector: ".project-card", direction: 1, speed: 0.035 });
updateAutoScrollPreference();

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
  });
  button.addEventListener("keydown", handleTabKeydown);
});
brandLink?.addEventListener("click", () => {
  showTab("about");
});
projectDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-project-dot]");
  if (dot) {
    setProjectItem(Number(dot.dataset.projectDot));
  }
});
professionalDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-professional-dot]");
  if (dot) {
    setProfessionalItem(Number(dot.dataset.professionalDot));
  }
});
modalClose.addEventListener("click", closeProfessionalModal);
professionalModal.addEventListener("click", (event) => {
  if (event.target === professionalModal) {
    closeProfessionalModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && professionalModal.getAttribute("aria-hidden") === "false") {
    closeProfessionalModal();
  }
});
carousel.addEventListener("scroll", syncProjectDotsToScroll);
professionalCarousel.addEventListener("scroll", syncProfessionalDotsToScroll);
reduceMotionQuery.addEventListener("change", updateAutoScrollPreference);
