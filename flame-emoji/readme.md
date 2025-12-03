# 🔥 Flame Emoji Language Pack (Genesis v1)

This folder contains the official emoji implementation of **Flame Language Genesis** —  
Fire Numerics, Base Glyphs, Crown Glyphs, Halo Ritual Glyphs, and Codex Seals.

## Structure

- `png/`  — primary assets for chat apps, keyboards, and web
- `svg/`  — vector masters for scaling and design edits
- `webp/` — optimized assets for messaging platforms

- `manifest.json` — machine-readable description of all emojis
- `Flame-emoji-index.md` — Codex index of F-codes
- `flame-emoji.css` — simple CSS helpers for web use

## Naming Convention

All assets follow:

`F###_<shortname>_<style>.(png|svg|webp)`

- `F###`   — Flame Emoji Codepoint (see `Flame-emoji-index.md`)
- `shortname` — semantic name (e.g., `num_1`, `crown_halo`)
- `style` — `gold`, `holo`, `red`, `white`

Example:

- `F001_num_1_gold.png`
- `F041_crown_halo_white.svg`

## Usage (Web)

```html
<link rel="stylesheet" href="flame-emoji/flame-emoji.css" />
<span class="flame-emoji fe-F001-gold"></span>
