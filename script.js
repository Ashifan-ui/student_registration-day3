// Show thank-you message on contact form submit
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      document.getElementById("thankYouMsg").classList.remove("hidden");
      contactForm.reset();
    } else {
      alert("Please fill all fields before submitting.");
    }
  });
}

// Change background color on button click
const colorBtn = document.getElementById("colorChanger");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const colors = ["#fce4ec", "#e3f2fd", "#fff3e0", "#e8f5e9"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = random;
  });
}
