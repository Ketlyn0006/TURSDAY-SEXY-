const playButton = document.getElementById("playButton");
const orientationWarning = document.getElementById("orientation-warning");

// Efeito de clique
playButton.addEventListener("click", () => {
  playButton.classList.add("shrink");
  setTimeout(() => {
    playButton.classList.remove("shrink");
    alert("Iniciar Jogo!");
  }, 100);
});

// Verifica se está na orientação horizontal
function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;
  orientationWarning.style.display = isLandscape ? "none" : "flex";
}

// Detecta mudança de orientação
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

// Checa na inicialização
checkOrientation();