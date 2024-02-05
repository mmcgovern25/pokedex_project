document.addEventListener('DOMContentLoaded', function() {
    // Check if the flag is set in local storage
    const isFirstVisit = localStorage.getItem('hasVisited') === null;
  
    // If it's the first visit, set the flag and perform the redirection
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      window.location.href = 'intro.html';
    }
  });
  

