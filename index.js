window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#000';
    } else {
      navbar.style.backgroundColor = '#222';
    }
  });
  