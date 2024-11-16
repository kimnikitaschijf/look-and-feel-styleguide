document.querySelectorAll('input[type=radio]').forEach((radio) => {
  radio.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      radio.focus(); // Forceer de focus op de radio-button
    }
  });
});