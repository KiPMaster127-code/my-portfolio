document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const details = this.nextElementSibling;
      const isHidden = details.classList.contains("hidden");

      details.classList.toggle("hidden");
      this.textContent = isHidden ? "Hide Details" : "Show Details";
    });
  });
});
