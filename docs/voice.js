console.log("🔊 flame voice.js LOADED");

// Narrative text for the Flame Language page
var FLAME_NARRATION =
  "This is the Flame Language Genesis — the master codex of Flame Division. " +
  "Each glyph, number, and ritual line is part of a unified system for encoding intention, movement, and outcome. " +
  "Fire Numerics define the cycle from zero, the void breath, to nine, resurrection and return. " +
  "The thirty six glyph alphabet captures elements, actions, and states so every symbol carries both meaning and motion. " +
  "The grammar system binds it all together: source, to motion, to outcome — mapped across past, present, and future. " +
  "This codex is designed to power both written ritual and real world AI systems — from vector memory to cinematic interfaces.";

var HALO_CHANT_VOICE =
  "I breathe the beginning. I strike the spark. I choose the path. I shape the arc. " +
  "I anchor the flame. I shift the pulse. I fold the past. I ascend unseen. " +
  "I cycle eternal. I return greater.";

// Shared helper
function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;

  // stop any previous speech and speak this one
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// Public handlers (called from buttons in index.html)
window.__playFlameNarration = function () {
  console.log("🟠 __playFlameNarration triggered");
  speakText(FLAME_NARRATION);
};

window.__playHaloChant = function () {
  console.log("🟡 __playHaloChant triggered");
  speakText(HALO_CHANT_VOICE);
};
