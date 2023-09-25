// Navigationsmenü einfügen
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('nav').innerHTML = data;
  })
  .catch(error => console.error('Fehler beim Laden des Navigationsmenüs:', error));
