document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("initBtn");
  const status = document.getElementById("status");
  const audio = document.getElementById("bootSound");

  button.addEventListener("click", () => {
    status.textContent = "Initializing System...";
    status.style.color = "#FFFAFA";
    button.disabled = true;
    button.style.backgroundColor = "#5c0000";
    button.style.boxShadow = "0 0 20px #8B0000";

    // Play boot sound
    audio.currentTime = 0;
    audio.play();

    // Breathing background animation
    document.body.style.transition = "background 3s ease";
    document.body.style.background =
      "radial-gradient(circle at center, #8B0000 0%, #000 90%)";

    // Change to online after 4s
    setTimeout(() => {
      status.textContent = "AI System Online";
      status.style.color = "#00FF7F";
      button.disabled = false;
      button.style.backgroundColor = "#8B0000";
      button.style.boxShadow = "0 0 25px #00FF7F";
    }, 4000);
  });
});