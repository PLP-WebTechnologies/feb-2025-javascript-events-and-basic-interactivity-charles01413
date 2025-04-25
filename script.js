// Event Handling 🎈
const textButton = document.getElementById("textButton");
const colorButton = document.getElementById("colorButton");
const dynamicText = document.getElementById("dynamicText");
const secretButton = document.getElementById("secretButton");

// Change text dynamically
textButton.addEventListener("click", () => {
  dynamicText.textContent = "Text changed!";
});

// Change CSS styles dynamically
colorButton.addEventListener("click", () => {
  dynamicText.style.color = dynamicText.style.color === "red" ? "blue" : "red";
});

// Hover effect
dynamicText.addEventListener("mouseover", () => {
  dynamicText.textContent = "You hovered over me!";
});

// Secret action (double-click)
secretButton.addEventListener("dblclick", () => {
  alert("Double-click detected! Secret unlocked.");
});

// Tabs 🎮
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabContents.forEach(content => content.classList.remove("active"));
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Form Validation 📋✅
const form = document.getElementById("userForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (username && email.includes("@") && password.length >= 8) {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Please fill out the form correctly.";
    feedback.style.color = "red";
  }
});
