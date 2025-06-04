 const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    yesBtn.addEventListener('click', () => {
      // Redirect to home.html on click
      window.location.href = 'home.html';
    });
    // Random movement for "No" button on mouseover
    noBtn.addEventListener('mouseover', () => {
      const vw = window.innerWidth - noBtn.offsetWidth;
      const vh = window.innerHeight - noBtn.offsetHeight;
      const top = Math.random() * vh;
      const left = Math.random() * vw;
      noBtn.style.position = 'absolute';
      noBtn.style.top = `${top}px`;
      noBtn.style.left = `${left}px`;
    });

 window.onload = function() {
  const audio = document.getElementById('audio');
  
  // Tenta reproduzir o áudio automaticamente
  audio.play().then(() => {
    console.log("Áudio iniciado mutado!");
  }).catch((error) => {
    console.log("Erro no autoplay: ", error.message);
  });
  // Desmuta após interação do usuário
  document.body.addEventListener('click', () => {
    audio.muted = false;
    console.log("Áudio desmutado após interação!");
  }, { once: true });
};