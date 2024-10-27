const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.target.classList.contains("is-inViewport")) {
      entry.target.classList.add("is-inViewport", entry.isIntersecting);
    }
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
ELs_inViewport.forEach((EL) => {
  Obs.observe(EL, obsOptions);
});
