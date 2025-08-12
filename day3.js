// ✅ Show welcome alert on page load
window.addEventListener("load", () => {
    alert("Welcome to the Student Registration Page!");
});

// ✅ Reusable function for validation
function validateForm(fields) {
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value.trim() === "") {
            input.style.borderColor = "red";
            isValid = false;
        } else {
            input.style.borderColor = "#ccc";
        }
    });

    return isValid;
}

// ✅ Form submission handling
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual submission

    const requiredFields = ["name", "email", "department", "year", "projectTitle"];

    // validate form fields
    const formIsValid = validateForm(requiredFields);

    if (formIsValid) {
        alert("Form submitted successfully!");
        // Here you could also reset the form or send data to server
    } else {
        alert("Please fill in all required fields.");
    }
});

// ✅ Click Me button functionality
const clickBtn = document.getElementById("clickMeBtn");
const funSection = document.getElementById("funSection");

clickBtn.addEventListener("click", () => {
    // Toggle colors using classList and DOM manipulation
    const colors = ["#ffe0b2", "#d1c4e9", "#c8e6c9", "#b3e5fc"];
    const texts = ["You clicked me!", "Nice one!", "Color changed!", "Feeling fresh!"];

    // Pick random index
    const i = Math.floor(Math.random() * colors.length);

    funSection.style.backgroundColor = colors[i];
    funSection.textContent = texts[i];
});
