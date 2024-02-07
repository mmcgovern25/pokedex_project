document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.pokeball__button').addEventListener('click', function() {

    setTimeout(function() {
      window.location.href = 'index.html';
    }, 500);
  });
});
