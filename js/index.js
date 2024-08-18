const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".section-hero");
const bodyEl = document.body;

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);
obs.observe(sectionHeroEl);
