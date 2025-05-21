// Modal Functions
    function openDonateModal() {
      document.querySelector('.modal').style.display = 'flex';
    }
    function closeDonateModal() {
      document.querySelector('.modal').style.display = 'none';
    }

    // Carousel Functions
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    function showSlide(index) {
      const inner = document.getElementById('carouselInner');
      if (index >= items.length) currentIndex = 0;
      else if (index < 0) currentIndex = items.length - 1;
      else currentIndex = index;
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }
    // Auto-slide (optional)
    setInterval(() => nextSlide(), 5000);