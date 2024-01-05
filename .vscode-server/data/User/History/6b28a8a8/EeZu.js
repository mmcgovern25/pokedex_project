const input = document.querySelector('#search');
const results = document.querySelector('#results');

input.addEventListener('keyup', (event) => {
  results.innerHTML = '';
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`)
    .then(response => response.json())
    .then((data) => {
      data.words.forEach((word) => {
        results.insertAdjacentHTML('beforeend', `<li>${word}</li>`);
      });
    });
});
