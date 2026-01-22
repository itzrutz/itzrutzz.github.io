// Scroll spy for navigation
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Experience accordion (expand / collapse cards)
const experienceCards = document.querySelectorAll(".experience-card");

experienceCards.forEach(card => {
  const toggle = card.querySelector(".exp-toggle");

  toggle.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
// Project accordion (expand / collapse cards)
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  const toggle = card.querySelector(".proj-toggle");

  toggle.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
// Skills accordion – full card clickable (like experience cards)
const skillCards = document.querySelectorAll(".skills-bold-card");

skillCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


