document.addEventListener("DOMContentLoaded", function () {
  // Halo text pulse
  var chant = document.getElementById("halo-chant");
  var pulseBtn = document.getElementById("pulse-btn");

  if (chant && pulseBtn) {
    pulseBtn.addEventListener("click", function () {
      chant.classList.remove("pulse");
      // force reflow so animation restarts
      void chant.offsetWidth;
      chant.classList.add("pulse");
    });
  }

  // Mobile nav
  var navToggle = document.getElementById("navToggle");
  var navDrawer = document.getElementById("navDrawer");

  if (navToggle && navDrawer) {
    navToggle.addEventListener("click", function () {
      var isOpen = navDrawer.style.display === "flex";
      navDrawer.style.display = isOpen ? "none" : "flex";
    });
  }
});
