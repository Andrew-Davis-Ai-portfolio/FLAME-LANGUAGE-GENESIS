document.addEventListener("DOMContentLoaded", () => {
  const chant = document.getElementById("halo-chant");
  const btn = document.getElementById("pulse-btn");

  if (!chant || !btn) return;

  btn.addEventListener("click", () => {
    chant.classList.remove("pulse");
    // force reflow so animation can restart
    void chant.offsetWidth;
    chant.classList.add("pulse");
  });
});
