document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.tarjeta');
    let index = 0;
  
    function getItemWidth() {
      return items[0].offsetWidth + 16; // Incluye margen
    }
  
    function getVisibleItems() {
      return Math.floor(container.parentElement.clientWidth / getItemWidth());
    }
  
    function updateCarousel() {
      const itemWidth = getItemWidth();
      container.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  
    window.move = function(direction) {
      const visibleItems = getVisibleItems();
      const maxIndex = Math.max(0, items.length - visibleItems);
      index = Math.max(0, Math.min(index + direction, maxIndex));
      updateCarousel();
    }
  
    // Escucha cambios de tamaño
    window.addEventListener('resize', updateCarousel);
  
    updateCarousel();
  });

  