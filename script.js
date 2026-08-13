// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var links = document.querySelector('.navlinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Price sort on catalog pages
  var sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      var value = sortSelect.value;
      document.querySelectorAll('[data-cat-group]').forEach(function (group) {
        var cards = Array.from(group.querySelectorAll('.card'));
        cards.sort(function (a, b) {
          var pa = parseInt(a.getAttribute('data-price'), 10);
          var pb = parseInt(b.getAttribute('data-price'), 10);
          if (value === 'low') return pa - pb;
          if (value === 'high') return pb - pa;
          return 0; // featured / default order
        });
        cards.forEach(function (c) { group.appendChild(c); });
      });
    });
  }

  // Footer year
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});