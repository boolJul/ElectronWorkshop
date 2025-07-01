const openBtn = document.getElementById('openFile');
const aboutBtn = document.getElementById('about');
const editor = document.getElementById('editor');

openBtn.addEventListener('click', () => {
  // Ruft die im Preload bereitgestellte Funktion auf
  window.api.openFile();
});

aboutBtn.addEventListener('click', () => {
  window.api.openAbout();
});

// Reagiert auf den vom Main-Prozess gesendeten Dateiinhalt
window.api.onFileContent((text) => {
  editor.value = text;
});
