document.getElementById('initBtn').addEventListener('click', () => {
  const status = document.getElementById('status');
  const sound = document.getElementById('bootSound');
  const btn = document.getElementById('initBtn');

  status.textContent = 'Initializing System...';
  btn.disabled = true;
  btn.style.opacity = '0.6';

  sound.play();

  setTimeout(() => {
    status.textContent = 'AI System Online';
    status.style.color = '#00FF7F';
    btn.style.boxShadow = '0 0 25px #00FF7F';
  }, 4000);
});
