// Scroll-triggered fade-in
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2});

sections.forEach(section => observer.observe(section));

// Typing animation
const tagline = document.getElementById('tagline');
const phrases = [
  "B.Tech 3rd Year Student",
  "Aspiring Web Developer",
  "Tech Enthusiast & Learner"
];
let index = 0, charIndex = 0;

function type() {
  if (charIndex < phrases[index].length) {
    tagline.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      tagline.textContent = "";
      charIndex = 0;
      index = (index + 1) % phrases.length;
      type();
    }, 1500);
  }
}
type();

// Dark mode toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
const form = document.getElementById("contact-form");
const statusText = document.querySelector(".form-status");
const btnText = document.querySelector(".btn-text");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (e) => {
  let valid = true;

  document.querySelectorAll(".input-group").forEach(group => {
    const input = group.querySelector("input, textarea");
    const error = group.querySelector(".error-text");

    if (!input.value.trim()) {
      valid = false;
      input.classList.add("error");
      error.textContent = "This field is required";
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      error.textContent = "";
    }
  });

  if (!valid) {
    e.preventDefault();
    return;
  }

  
  btnText.style.display = "none";
  loader.style.display = "block";

  statusText.textContent = "⏳ Sending message...";
  statusText.style.color = "gray";

  
});




