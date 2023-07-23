export function scrollEvent() {
  window.addEventListener("scroll", (e) => {
    const scrollHeight = e.scrollY;
    const scrollPosition = Math.round(scrollHeight);
    const sections = document.querySelectorAll("main section");
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      if (scrollPosition !== 0) {
        section.classList.add("before-scroll");
        if (sectionTop < windowHeight - elementVisible) {
          section.classList.add("scroll-active");
        } else {
          section.classList.remove("scroll-active");
        }
      }
    });
  });
}
