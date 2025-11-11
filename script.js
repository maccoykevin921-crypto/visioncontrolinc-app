document.getElementById("initialize").addEventListener("click", () => {
  const status = document.getElementById("status");
  status.textContent = "System Initializing...";
  status.style.color = "#FFD700";

  setTimeout(() => {
    status.textContent = "AI System Online ✅";
    status.style.color = "#00FF7F";
  }, 2500);
});