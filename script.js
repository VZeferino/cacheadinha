let count = 0;
const question = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const messages = [
    "Larissa, quer namorar comigo?",
    "Vou te dar mais uma chance, quer?",
    "Quer sim! Eu sei! 🥰",
];

noButton.addEventListener("click", () => {
    if (count < messages.length - 1) {
        count++;
    }
    question.innerText = messages[count];
    if (count === messages.length - 1) {
        noButton.style.display = "none";
        yesButton.innerText = "Confirmar";
    }
});

yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Eu sabia! 💖</h1>
            <img src="sua-foto.png" alt="Larissa" style="width:200px;border-radius:10px;">
            <p>Te amo, cacheadinha! Você é incrível! 💕</p>
        </div>
    `;
});
