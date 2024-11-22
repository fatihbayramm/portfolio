document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("[data-scroll]");
  const scrollPosition = window.innerHeight + window.scrollY;

  elements.forEach((el) => {
    if (scrollPosition > el.offsetTop) {
      el.classList.remove("opacity-0", "translate-y-10");
    }
  });
});
