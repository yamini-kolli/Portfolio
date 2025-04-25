// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  observer.observe(section);
});


