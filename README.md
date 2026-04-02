# 🎨 Color Scheme Generator

A simple, interactive web app that generates harmonious color palettes from a seed color using the [The Color API](https://www.thecolorapi.com/). Built as a solo portfolio project from the Scrimba curriculum.

## 🚀 Demo

Pick a color, choose a color mode, and hit **Get color scheme** — the app fetches 5 matching colors and displays them as a full visual palette with their hex codes.

## ✨ Features

- 🎨 **Color Picker** — choose any seed color as the starting point
- 🔄 **7 Color Modes** — Monochrome, Monochrome-dark, Monochrome-light, Analogic, Complement, Analogic-complement, Triad
- 📡 **Live API Fetch** — pulls real-time color data from [thecolorapi.com](https://www.thecolorapi.com/)
- 🟩 **Visual Palette** — displays 5 color swatches with their hex codes

## 🗂️ Project Structure

```
Color Scheme Generator/
├── index.html   # App markup — controls, color swatches, hex code display
├── index.css    # Layout and styling
└── index.js     # Fetches color scheme from API and updates the DOM
```

## 🛠️ How It Works

1. User selects a **seed color** via the color picker input.
2. User selects a **color mode** from the dropdown.
3. On clicking **"Get color scheme"**, the app sends a request to:
   ```
   https://www.thecolorapi.com/scheme?hex={seedHex}&mode={mode}
   ```
4. The API returns 5 colors; the app updates the background of each color swatch and its corresponding hex code label.

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure & markup |
| CSS3 | Layout & styling |
| Vanilla JavaScript | DOM manipulation & API calls |
| [The Color API](https://www.thecolorapi.com/) | Color scheme generation |

## 🏃 Running Locally

No build tools or dependencies required. Just open `index.html` in your browser:

```bash
# Clone the repo
git clone <your-repo-url>

# Open in browser
open index.html
```

Or use a local server such as the VS Code **Live Server** extension.

## 📚 About

This project was built as part of the **Scrimba Frontend Developer Career Path** — Solo Projects section. It demonstrates working with third-party REST APIs, the Fetch API, and dynamic DOM updates using plain JavaScript.
