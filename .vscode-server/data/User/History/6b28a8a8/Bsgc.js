// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector('#search');
const results = document.querySelector('#results');

input.addEventListener('keyup', (event) => {
  results = ''
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`)
    .then(response => response.json()) // Wait for the response and parse it as JSON
    .then((data) => {
      data.words.forEach((word) => {
        results.insertAdjacentHTML('beforeend', `<li>${word}</li>`);
      });

      // Wait for parsing, allowing us to manipulate the data
    });
});
// yourAge.innerText = `You're ${data.age} years old.`;
