# Little Light

A beginner-friendly desk lamp model for the theme **Data, Variables, State, and Control Flow**. Uses plain HTML, CSS, and JavaScript without libraries or installation.

## Run

Download all three source files into the same folder, then open `index.html` in a browser. Keep `style.css` and `script.js` beside it.

## Interact

Switch the lamp on/off, adjust brightness (10–100%), select warm/neutral/cool light, or reset. Moving the brightness slider while OFF switches the lamp ON at the selected brightness. Changing temperature alone does not switch it on. Page reload restores defaults.

## Files

- `index.html`: structure, form controls, live state display.
- `style.css`: layout and CSS lamp illustration.
- `script.js`: state variables, event handlers, conditionals, rendering.

## Verification

The original version passed 20 JavaScript checks with a minimal simulated DOM. The revised brightness-to-power transition was separately checked after the change. Browser rendering and keyboard behavior still need manual verification. See the accompanying Google Doc draft for a test checklist.
