let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
showSlides();

function toggleMusic() {
    var audio = document.getElementById("background-music");
    var playIcon = document.getElementById("play-icon");
    var pauseIcon = document.getElementById("pause-icon");
    var btnText = document.getElementById("btn-text");

    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";  // Esconder o ícone de play
        pauseIcon.style.display = "inline"; // Mostrar o ícone de pause
        btnText.textContent = "Pause";  // Alterar o texto para Pause
    } else {
        audio.pause();
        playIcon.style.display = "inline"; // Mostrar o ícone de play
        pauseIcon.style.display = "none";  // Esconder o ícone de pause
        btnText.textContent = "Play";  // Alterar o texto para Play
    }
}

const startDate = new Date("2022-09-20T22:46:00"); // Altere para a data desejada

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    let seconds = Math.floor(diff / 1000);

    // Atualiza as unidades do contador
    document.getElementById("years").textContent = `${years} anos`;
    document.getElementById("months").textContent = `${months} meses`;
    document.getElementById("days").textContent = `${days} dias`;

    document.getElementById("hours").textContent = `${hours} horas`;
    document.getElementById("minutes").textContent = `${minutes} minutos`;
    document.getElementById("seconds").textContent = `${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();
