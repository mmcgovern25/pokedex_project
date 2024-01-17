document.addEventListener('DOMContentLoaded', function() {
  // Add a click event listener to the pokeball button
  document.querySelector('.pokeball__button').onclick = function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to index.html
    window.location.href = 'index.html';
  };
});