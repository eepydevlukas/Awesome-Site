const warning = document.getElementById("epilepsy-warning");
const button = document.getElementById("continueBtn");
const audio = document.getElementById("bgm");

button.addEventListener("click", () => {
  // Unmute & play audio
  audio.muted = false;
  audio.play().catch(err => console.log("Playback blocked:", err));

  // Remove warning overlay
  warning.style.display = "none";
});