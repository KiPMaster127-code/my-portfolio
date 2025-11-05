document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    alert("Your message has been saved locally!");
    form.reset();
  });
});
