var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 75) {
        nav.classList.add('scrolled-nav', 'shadow');
      } else {
        nav.classList.remove('scrolled-nav', 'shadow');
      }
    });