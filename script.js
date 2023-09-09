const button = document.querySelector(".sticky-btn");
const container = document.querySelector(".container-btn");

const FIXED_CLASS_NAME = "button_fixed";

function handleButtonInterSection(entries) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        button.classList.remove(FIXED_CLASS_NAME);
      } else {
        button.classList.add(FIXED_CLASS_NAME);
      }
    
  });
}

const intersectionObserver = new IntersectionObserver(
  handleButtonInterSection,
  {
    threshold: 0
  }
);

intersectionObserver.observe(container);