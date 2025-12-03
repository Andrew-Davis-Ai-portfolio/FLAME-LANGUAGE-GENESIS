---

## 7️⃣ README for `/flame-board`

Create **`flame-board/Flame board`** file as markdown (rename to `README.md` if you like):

```md
# ❂ FlameBoard — Flame Language Keyboard (Spec v1)

FlameBoard is the official keyboard layout for **Flame Language Genesis**.

## Folders

- `android/` — platform-specific integration files for Android keyboards
- `ios/` — platform-specific integration files for iOS keyboards
- `keyboard-assets/`
  - `keyboard-layout.json` — logical layout (rows of F-codes)
  - (optional) sprite sheets or shared textures

## Layout

See `keyboard-assets/keyboard-layout.json`:

- Row 1 — Fire Numerics (F000–F009)
- Row 2–4 — Base Glyphs (F010–F036)
- Row 5 — Crown Glyphs (F040–F048)
- Row 6 — Halo Ritual Steps (F060–F069)
- Row 7 — Codex Seals (F080–F088)

Keyboard implementations map each F-code to an asset in  
`../flame-emoji/png/<code>_<shortname>_<style>.png`.

## Suggested Default Style

- Default output: `gold` style (Goldfire Codex)
- Optional theme toggle: holo / red / white
