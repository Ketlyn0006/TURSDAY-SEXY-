const playButton = document.getElementById("playButton");
const orientationWarning = document.getElementById("orientation-warning");

playButton.addEventListener("click", () => {
  playButton.classList.add("shrink");

  setTimeout(() => {
    playButton.classList.remove("shrink");
    alert("Iniciar Jogo!");
  }, 100);
});

// Força o aviso se a tela estiver na vertical
function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;
  orientationWarning.style.display = isLandscape ? "none" : "flex";
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
checkOrientation();