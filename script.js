const button = document.getElementById('initBtn');
const status = document.getElementById('status');

button.addEventListener('click', () => {
  status.textContent = 'Initializing System...';
  status.style.color = '#8B0000';
  button.disabled = true;

  setTimeout(() => {
    status.textContent = 'System Online';
    status.style.color = '#228B22';
    button.disabled = false;
  }, 3000);
});
