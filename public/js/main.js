document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("[data-scroll]");
  const scrollPosition = window.innerHeight + window.scrollY;

  elements.forEach((el) => {
    if (scrollPosition > el.offsetTop) {
      el.classList.remove("opacity-0", "translate-y-10");
    }
  });
});

// TODO: sayfanin neresindeysen header kismindaki o tag port-blue olsun.
// TODO: yapabiliyosanda mobil modda navbar kismini ortala.
