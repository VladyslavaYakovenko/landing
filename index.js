// window.onload = () => {
//   const canvasCircle = document.getElementById("strangeCircle");
//   const ctx = canvasCircle.getContext("2d");
//   const circle = document.getElementById("circle");
//   ctx.drawImage(circle, 0, 0);

//   document.body.removeChild(circle);
// };

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
ELs_inViewport.forEach((EL) => {
  Obs.observe(EL, obsOptions);
});
