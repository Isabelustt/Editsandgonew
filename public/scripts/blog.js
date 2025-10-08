document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card a');

  if (cards.length > 0) {
    // Permitir tabulación
    cards.forEach(card => card.setAttribute('tabindex', '0'));

    // Navegación con flechas
    cards.forEach((card, i) => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && cards[i + 1]) {
          e.preventDefault();
          cards[i + 1].focus();
        }
        if (e.key === 'ArrowLeft' && cards[i - 1]) {
          e.preventDefault();
          cards[i - 1].focus();
        }
      });
    });
  }

  // Botón volver (para las entradas individuales)
  const backBtn = document.querySelector('.btn-volver');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.back(); // vuelve a la página anterior
    });
  }
});
