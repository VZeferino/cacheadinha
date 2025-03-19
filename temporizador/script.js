document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("March 15, 2025 00:00:00").getTime();
    const mainCounterElement = document.getElementById("main-counter");
    const realTimeCounterElement = document.getElementById("real-time-counter");
    const secretButton = document.getElementById("secret-button");
    const modal = document.getElementById("love-modal");
    const closeButton = document.querySelector(".close-button");

    modal.style.display = "none";

    // Quando clicar no botão secreto, mostra o modal
    secretButton.addEventListener("click", function () {
        modal.style.display = "flex"; // Mostra o modal
        secretButton.style.display = "none"; // Esconde o botão
    });

    // Quando clicar no X, fecha o modal
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Se clicar fora do modal, também fecha
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function updateTimeCounter() {
        const now = new Date().getTime();
        const difference = now - startDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Atualiza o contador principal
        mainCounterElement.innerText = `15 de março de 2025, estamos juntos há ${days} dias! 💖`;

        const messages = [
            `⏳ Já vivemos <strong>${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos</strong> de amor, e cada segundo é um novo capítulo da nossa história. 📖❤️`,
            `🕰️ Nosso amor já durou <strong>${days} dias, ${hours} horas, ${minutes} minutos</strong> e continua crescendo a cada batida do coração! 💓`,
            `💑 Desde aquele dia especial, já compartilhamos <strong>${minutes} abraços, ${hours*2} beijos e incontáveis sorrisos!</strong> 🥰`,
            `💞 A cada segundo ao seu lado, meu amor só aumenta... Já são <strong>${days} dias</strong> de felicidade eterna! ✨`,
            `🌟 Em <strong>${days} dias, ${hours} horas e ${minutes} minutos</strong>, construímos um amor mais forte do que qualquer coisa. 💖`,
            `💕 Cada segundo que passa é uma prova de que nosso amor é para sempre!😍`
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        realTimeCounterElement.innerHTML = randomMessage;
    }

    updateTimeCounter();
    setInterval(updateTimeCounter, 15000);

    // Criar corações flutuantes aleatórios
    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");
        document.querySelector(".hearts-container").appendChild(heart);

        heart.style.left = `${Math.random() * 100}vw`;
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = `${size}px`;
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = `${duration}s`;

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    setInterval(createFloatingHeart, 300);

    // Função para posicionar o botão em local aleatório
    function moveSecretButton() {
        const screenWidth = window.innerWidth - 160; // Para não sair da tela
        const screenHeight = window.innerHeight - 60;

        const randomX = Math.random() * screenWidth;
        const randomY = Math.random() * screenHeight;

        secretButton.style.left = `${randomX}px`;
        secretButton.style.top = `${randomY}px`;

        // Exibir o botão com animação suave
        secretButton.classList.add("show");
        secretButton.style.display = "block"; // Garante que está visível

        // Ocultar e mover para outro local se não for clicado
        setTimeout(() => {
            secretButton.classList.remove("show");
            secretButton.style.display = "none";
            setTimeout(moveSecretButton, 8000); // Reaparece em outro local
        }, 3000);
    }

    // Primeira aparição do botão após 10 segundos
    setTimeout(moveSecretButton, 10000);

    // Exibir mensagem secreta ao clicar no botão
    secretButton.addEventListener("click", function () {
        hiddenMessage.style.display = "block";
        secretButton.style.display = "none";
    });
});
