const button = document.querySelector('button');
const status = document.getElementById('status');

button.addEventListener('click', () => {
  status.textContent = 'Initializing System...';
  status.style.color = '#FFFAFA';
  button.disabled = true;
  button.style.backgroundColor = '#5c0000';
  button.style.boxShadow = '0 0 20px #8B0000';

  // Simulate AI boot sound + glow effect
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_0b7fa3e7f3.mp3?filename=startup-tone.mp3');
  audio.play();

  // Breathing red background during boot
  document.body.style.transition = 'background 3s ease';
  document.body.style.background = 'radial-gradient(circle at center, #8B0000 0%, #000 90%)';

  setTimeout(() => {
    status.textContent = 'AI System Online';
    status.style.color = '#00FF7F';
    button.style.backgroundColor = '#8B0000';
    button.style.boxShadow = '0 0 25px #00FF7F';
  }, 4000);
});