// Show donation modal
document.getElementById('donateBtn').addEventListener('click', function () {
    document.getElementById('donateModal').style.display = 'flex';
  });
  
  // Close donation modal
  document.getElementById('closeDonate').addEventListener('click', function () {
    document.getElementById('donateModal').style.display = 'none';
  });
  
  // Swiper carousel
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    effect: 'fade'
  });
  