// lang.js — Flame Language Universal Engine

// 1. Base translation packs
// ----------------------------------
// Add as many languages as you want.
// Keys = language code ("en", "es", "fr", "ar", "ja", etc.)

const LANG_PACKS = {
  en: {
    tag_flame_division: "Flame Division",
    title: "Flame Language Genesis",
    subtitle: "Master Codex · Glyph System · Halo Cycle",

    label_language: "Language",
    opt_auto: "🌐 Auto",

    btn_open_repo: "Open GitHub Repository",

    module_fire_numerics: "Module I — Fire Numerics",
    fire_numerics_line:
      "0 Void · 1 Spark · 2 Flow · 3 Arc · 4 Foundation · " +
      "5 Pulse · 6 Collapse · 7 Ascent · 8 Circuit · 9 Resurrection",
    fire_numerics_explainer:
      "Numbers never translate — only their names do. " +
      "Fire Numerics remain a universal backbone across every language.",

    module_glyphs: "Module II — 36 Glyph Alphabet",
    glyphs_text:
      "27 Base Glyphs define elements, actions, and states. " +
      "9 Crown Glyphs define Crown, Halo, Gate, Core, Path, Cycle, Key, " +
      "Seal, and Eye. Together they form the full symbolic field of Flame Language.",

    module_grammar: "Module III — Fire Grammar",
    grammar_text:
      "Sentences flow as Source → Motion → Outcome, aligned to numeric " +
      "signatures across Past (↓), Present (•), and Future (↑).",

    halo_title: "Halo Ritual Package",
    halo_text:
      "I breathe the beginning. I strike the spark. I choose the path. " +
      "I shape the arc. I anchor the flame. I shift the pulse. I fold the past. " +
      "I ascend unseen. I cycle eternal. I return greater.",

    btn_play_halo: "Play Halo Ritual Voice",
    btn_play_commander: "Play Commander Mode",

    commander_mode_text:
      "Flame Language Genesis is a complete Codex — glyph system, Halo Cycle, " +
      "and neural memory spine. The glyphs stay universal; the story adapts " +
      "to every tongue.",

    foot_note:
      "Audio uses browser-native speech synthesis. If your language isn’t in " +
      "the menu yet, the page still works — you can also use your browser’s " +
      "built-in translate feature."
  },

  // Example: Spanish
  es: {
    tag_flame_division: "Flame Division",
    title: "Génesis del Lenguaje de la Llama",
    subtitle: "Códice Maestro · Sistema de Glifos · Ciclo Halo",

    label_language: "Idioma",
    opt_auto: "🌐 Automático",

    btn_open_repo: "Abrir repositorio de GitHub",

    module_fire_numerics: "Módulo I — Números de Fuego",
    fire_numerics_line:
      "0 Vacío · 1 Chispa · 2 Flujo · 3 Arco · 4 Fundamento · " +
      "5 Pulso · 6 Colapso · 7 Ascenso · 8 Circuito · 9 Resurrección",
    fire_numerics_explainer:
      "Los números no cambian; solo sus nombres. Los Números de Fuego " +
      "son el esqueleto universal en todos los idiomas.",

    module_glyphs: "Módulo II — Alfabeto de 36 Glifos",
    glyphs_text:
      "27 glifos base definen elementos, acciones y estados. 9 glifos corona " +
      "definen Corona, Halo, Puerta, Núcleo, Camino, Ciclo, Llave, Sello y Ojo.",

    module_grammar: "Módulo III — Gramática de Fuego",
    grammar_text:
      "Las frases fluyen como Origen → Movimiento → Resultado, alineadas " +
      "con firmas numéricas de Pasado (↓), Presente (•) y Futuro (↑).",

    halo_title: "Paquete de Ritual Halo",
    halo_text:
      "Respiro el comienzo. Golpeo la chispa. Elijo el camino. " +
      "Moldeo el arco. Anclo la llama. Cambio el pulso. Doblo el pasado. " +
      "Asciendo oculto. Ciclo eternamente. Regreso más grande.",

    btn_play_halo: "Reproducir voz del Ritual Halo",
    btn_play_commander: "Reproducir Modo Comandante",

    commander_mode_text:
      "Génesis del Lenguaje de la Llama es un códice completo: sistema de glifos, " +
      "Ciclo Halo y columna vertebral de memoria neural.",

    foot_note:
      "El audio usa síntesis de voz del navegador. Si tu idioma aún no está " +
      "en el menú, puedes usar la función de traducir página del navegador."
  },

  // Example: Japanese
  ja: {
    tag_flame_division: "フレイム・ディビジョン",
    title: "フレイム・ランゲージ・ジェネシス",
    subtitle: "マスターコーデックス · グリフシステム · ハロサイクル",

    label_language: "言語",
    opt_auto: "🌐 自動",

    btn_open_repo: "GitHub リポジトリを開く",

    module_fire_numerics: "モジュール I — 炎の数理",
    fire_numerics_line:
      "0 虚空 · 1 火花 · 2 流れ · 3 弧 · 4 基盤 · " +
      "5 脈動 · 6 崩壊 · 7 上昇 · 8 回路 · 9 復活",
    fire_numerics_explainer:
      "数字そのものは変わらない。変わるのは名前だけだ。炎の数理は、" +
      "すべての言語を貫く普遍の背骨となる。",

    module_glyphs: "モジュール II — 36 グリフ・アルファベット",
    glyphs_text:
      "27 の基本グリフが要素・行動・状態を定義し、9 の王冠グリフが " +
      "王冠・ハロ・門・核・道・循環・鍵・封印・眼を定義する。",

    module_grammar: "モジュール III — 炎の文法",
    grammar_text:
      "文は「源 → 動き → 結果」の流れで進み、過去 (↓)・現在 (•)・未来 (↑) の " +
      "数的シグネチャと結びつく。",

    halo_title: "ハロ儀式パッケージ",
    halo_text:
      "始まりを吸い込み、火花を打ち、道を選び、弧を形づくる。炎を錨にし、" +
      "脈動をずらし、過去を折り、見えぬまま昇り、永遠に循環し、" +
      "より大きくなって戻る。",

    btn_play_halo: "ハロ儀式ボイスを再生",
    btn_play_commander: "コマンダーモードを再生",

    commander_mode_text:
      "フレイム・ランゲージ・ジェネシスは、グリフ体系・ハロサイクル・" +
      "ニューロメモリの背骨を備えた完全なコーデックスである。",

    foot_note:
      "音声はブラウザの音声合成機能を使用する。メニューにない言語は、" +
      "ブラウザのページ翻訳機能を使って読むことができる。"
  }

  // You can keep adding: ar, hi, pt, de, ru, ko, etc.
};

let fdCurrentLang = "en";

// 2. Helpers
// ----------------------------------

function fdDetectBrowserLang() {
  const navLang = navigator.language || navigator.userLanguage || "en";
  return navLang.split("-")[0].toLowerCase();
}

function fdApplyTranslations(langCode) {
  const app = document.getElementById("fd-app");
  if (!app) return;

  const pack = LANG_PACKS[langCode] || LANG_PACKS.en;
  fdCurrentLang = pack === LANG_PACKS.en ? "en" : langCode;

  document.documentElement.lang = fdCurrentLang;
  app.setAttribute("data-lang", fdCurrentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) {
      el.textContent = pack[key];
    }
  });
}

// 3. Voice selection + speak
// ----------------------------------

function fdPickVoiceForLang(lang) {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const base = lang.split("-")[0];

  // Exact language match
  let voice =
    voices.find((v) => v.lang && v.lang.toLowerCase() === lang.toLowerCase()) ||
    voices.find(
      (v) => v.lang && v.lang.toLowerCase().startsWith(base.toLowerCase())
    );

  // Fallbacks
  if (!voice) voice = voices.find((v) => v.default) || voices[0];
  return voice;
}

function fdSpeak(key) {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  const pack = LANG_PACKS[fdCurrentLang] || LANG_PACKS.en;
  const text = pack[key];
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = fdCurrentLang;

  const voice = fdPickVoiceForLang(fdCurrentLang);
  if (voice) utter.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

// 4. Init
// ----------------------------------

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("fd-lang-select");
  const autoLang = fdDetectBrowserLang();
  const initial = LANG_PACKS[autoLang] ? autoLang : "en";

  fdApplyTranslations(initial);

  if (select) {
    if (LANG_PACKS[initial]) {
      select.value = initial;
    }

    select.addEventListener("change", (e) => {
      const value = e.target.value;
      if (value === "auto") {
        const lang = fdDetectBrowserLang();
        fdApplyTranslations(LANG_PACKS[lang] ? lang : "en");
      } else {
        fdApplyTranslations(value);
      }
    });
  }

  // Wire GitHub button (you can swap this URL)
  const repoBtn = document.getElementById("fd-open-github");
  if (repoBtn) {
    repoBtn.addEventListener("click", () => {
      window.open(
        "https://github.com/Andrew-Davis-Ai-portfolio/FLAME-LANGUAGE-GENESIS",
        "_blank",
        "noopener"
      );
    });
  }

  // Some browsers load voices async
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Just touching voices to warm them up
      window.speechSynthesis.getVoices();
    };
  }
});
