# Electron Workshop

Dies ist ein Starter-Projekt für einen didaktischen Workshop zum Thema Electron.

Die folgenden Dateien bilden eine minimale Electron-Anwendung im Ordner `starter/`.
Sie enthält absichtlich Lücken, die im Rahmen des Workshops ausgefüllt werden
sollen. In jedem Schritt sind TODO-Kommentare im Code hinterlegt, die auf die zu
implementierenden Stellen hinweisen.

## Struktur

- `starter/package.json` – Enthält die Abhängigkeiten und Startskripte.
- `starter/main.js` – Main-Prozess mit Fenstererstellung und IPC-Logik (mit TODOs).
- `starter/preload.js` – Stellt ausgewählte API-Aufrufe für den Renderer bereit.
- `starter/index.html` – Oberfläche mit Buttons für die Übungen.
- `starter/renderer.js` – Verbindet die UI mit der Electron-API (mit TODOs).
- `starter/about.html` – Einfaches „Über“-Fenster.

## Übungen

1. **Datei öffnen**
   - Implementiere in `main.js` die Funktion zum Anzeigen eines Datei-Auswahldialogs
     (Verwendung von `dialog.showOpenDialog`).
   - Sende den eingelesenen Dateiinhalt per IPC an den Renderer und zeige ihn im
     Textfeld an.

2. **About-Fenster**
   - Erweitere `main.js` um eine Funktion zum Öffnen eines zweiten
     `BrowserWindow`, in dem `about.html` geladen wird.
   - Verbinde den Button in `index.html` mit dieser Funktion über IPC.

3. **System-Integration (Tray oder Notification)**
   - Optional: Erzeuge ein Tray-Icon mit Kontextmenü oder sende eine Desktop-
     Benachrichtigung. Die notwendigen Stellen sind im Code markiert.

4. **Bonus: Packaging**
   - Installiere `electron-forge` oder `electron-builder` und erstelle ein
     Installationspaket. (Wird im Workshop nur kurz angerissen.)

Zum Starten der Anwendung (nachdem die TODOs bearbeitet sind):

```bash
cd starter
npm install
npm start
```

