document.addEventListener('DOMContentLoaded', () => {
  const imagenPrincipal = document.getElementById('imagen-principal');
  const modal = document.getElementById('modal-imagen');
  const imagenModal = document.getElementById('imagen-modal');
  const miniaturas = Array.from(document.querySelectorAll('.miniatura'));
  const btn = document.querySelector('.btn-volver');

  if (!imagenPrincipal || !modal || !imagenModal || miniaturas.length === 0) return;

  function marcarActiva(thumbActiva) {
    miniaturas.forEach(t => {
      t.classList.toggle('activa', t === thumbActiva);
      t.classList.toggle('inactiva', t !== thumbActiva);
    });
  }

  miniaturas.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src || thumb.src;
      imagenPrincipal.src = src;
      marcarActiva(thumb);
    });

    thumb.setAttribute('tabindex', '0');
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        thumb.click();
      }
    });
  });

  const primeraActiva = miniaturas.find(t => t.classList.contains('activa')) || miniaturas[0];
  if (primeraActiva) {
    imagenPrincipal.src = primeraActiva.dataset.src || primeraActiva.src;
    marcarActiva(primeraActiva);
  }

  document.querySelectorAll('[data-modal="true"]').forEach(img => {
    img.addEventListener('click', () => {
      if (window.edg_openImageModal) {
        window.edg_openImageModal(img.src);
      }
    });
  });
 
});
