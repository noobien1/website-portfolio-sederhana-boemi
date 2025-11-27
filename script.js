// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      // Save preference to localStorage
      const isDarkMode = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDarkMode);
    });
  }

  // Load dark mode preference on page load
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
  }

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form submission with validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation
      if (!name) {
        alert("Name is required.");
        return;
      }
      if (!email) {
        alert("Email is required.");
        return;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // If valid, show alert with data and clear form
      alert(
        `Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      contactForm.reset();
    });
  }
});
