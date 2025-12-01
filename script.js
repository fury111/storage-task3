const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  // Save user data in local storage
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
});
