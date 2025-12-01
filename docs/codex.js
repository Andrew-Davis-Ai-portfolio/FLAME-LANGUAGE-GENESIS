document.addEventListener("DOMContentLoaded", () => {
  // Halo text pulse
  const chant = document.getElementById("halo-chant");
  const pulseBtn = document.getElementById("pulse-btn");

  if (chant && pulseBtn) {
    pulseBtn.addEventListener("click", () => {
      chant.classList.remove("pulse");
      // force reflow so animation restarts
      void chant.offsetWidth;
      chant.classList.add("pulse");
    });
  }

  // Audio layer
  const ambience = document.getElementById("audio-ambience");
  const ping = document.getElementById("audio-ping");
  const btnAmbience = document.getElementById("btn-ambience");
  const btnPing = document.getElementById("btn-ping");

  if (ambience && btnAmbience) {
    btnAmbience.addEventListener("click", async () => {
      try {
        if (ambience.paused) {
          await ambience.play();
          btnAmbience.textContent = "Disable Ambient Field";
        } else {
          ambience.pause();
          btnAmbience.textContent = "Enable Ambient Field";
        }
      } catch (err) {
        console.warn("Audio play blocked by browser:", err);
      }
    });
  }

  if (ping && btnPing) {
    btnPing.addEventListener("click", async () => {
      try {
        // rewind to start for rapid retrigger
        ping.currentTime = 0;
        await ping.play();
      } catch (err) {
        console.warn("Ping audio blocked by browser:", err);
      }
    });
  }
});
