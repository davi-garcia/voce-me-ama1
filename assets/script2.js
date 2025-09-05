document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    const favoriteButton = document.querySelector('.favorite-button');
    const audio = new Audio('assets/musica.mp3');
    audio.volume = 0.1;
    audio.loop = true; 
    audio.play().catch(err => {
        console.log("Autoplay bloqueado até interação do usuário:", err);
    });

    // Libera o som no primeiro clique do usuário
    document.body.addEventListener('click', () => {
        audio.muted = false;
    }, { once: true }); // só precisa executar uma vez

    // Botão play
    playButton.addEventListener('click', () => {
        audio.play();
        alert('Reproduzindo...');
    });

    // Botão favorito
    favoriteButton.addEventListener('click', () => {
        alert('Adicionado aos favoritos!');
        audio.play();
    });
});

// Função dos corações
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
