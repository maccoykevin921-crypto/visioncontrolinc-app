document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("initBtn");
  const status = document.getElementById("status");

  button.addEventListener("click", () => {
    status.textContent = "AI System Online";
    status.style.color = "#00FF7F";
    button.disabled = true;
    button.style.backgroundColor = "#5C0000";
    button.style.boxShadow = "0 0 20px #8B0000";
  });
});