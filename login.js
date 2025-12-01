const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!savedUser) {
    message.textContent = "No user found. Please register first.";
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    message.style.color = "green";
    message.textContent = "Login Successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
});
