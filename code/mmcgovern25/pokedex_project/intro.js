document.addEventListener('DOMContentLoaded', function() {
  const zoomContainer = document.querySelector('.zoom-container');

  document.querySelector('.pokeball__button').addEventListener('click', function() {
    // Add the 'zoomed' class to trigger the zoom effect
    zoomContainer.classList.add('zoomed');

    // Wait for the animation to complete, then redirect
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 500); // Adjust the timeout to match the transition duration
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Add a click event listener to the pokeball button
  document.querySelector('.pokeball__button').onclick = function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to index.html
    window.location.href = 'index.html';
  };
});