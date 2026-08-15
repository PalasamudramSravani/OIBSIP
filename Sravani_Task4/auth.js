async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hash))
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const message = document.getElementById("registerMessage");

    if (!username || !email || !password) {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
      return;
    }

    if (password.length < 8 || !/\d/.test(password)) {
      message.textContent =
        "Password must have 8 characters and at least 1 number.";
      message.style.color = "red";
      return;
    }

    const users = getUsers();

    const existingUser = users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() ||
        user.email === email,
    );

    if (existingUser) {
      message.textContent = "Username or email already exists.";
      message.style.color = "red";
      return;
    }

    const passwordHash = await hashPassword(password);

    users.push({
      username: username,
      email: email,
      password: passwordHash,
    });

    saveUsers(users);

    message.textContent = "Registration successful!";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const identifier = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    if (!identifier || !password) {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
      return;
    }

    const users = getUsers();
    const passwordHash = await hashPassword(password);

    const user = users.find(
      (user) =>
        (user.username.toLowerCase() === identifier.toLowerCase() ||
          user.email === identifier.toLowerCase()) &&
        user.password === passwordHash,
    );

    if (!user) {
      message.textContent = "Invalid username/email or password.";
      message.style.color = "red";
      return;
    }

    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        username: user.username,
        email: user.email,
      }),
    );

    window.location.href = "dashboard.html";
  });
}

if (window.location.pathname.endsWith("dashboard.html")) {
  const session = sessionStorage.getItem("loggedInUser");

  if (!session) {
    window.location.href = "index.html";
  } else {
    const user = JSON.parse(session);
    document.getElementById("user").textContent = user.username;
  }
}

const logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");

    window.location.href = "index.html";
  });
}
