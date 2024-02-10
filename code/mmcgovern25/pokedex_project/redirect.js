document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
  // Check if the flag is set in local storage
  const isFirstVisit = localStorage.getItem('hasVisited') === null;

  // If it's the first visit, set the flag and perform the redirection
  if (isFirstVisit) {
    localStorage.setItem('hasVisited', 'true');
    window.location.href = 'intro.html';
  }
});
=======
    // Check if the flag is set in local storage
    const isFirstVisit = localStorage.getItem('hasVisited') === null;
  
    // If it's the first visit, set the flag and perform the redirection
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      window.location.href = 'intro.html';
    }
  });
  

>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
