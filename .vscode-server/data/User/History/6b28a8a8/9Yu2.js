// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector('#search');

input.addEventListener('keyup', (event) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/:${input.value}`)
    .then(response => response.json()) // Wait for the response and parse it as JSON
    .then((data) => {
      console.log(data); // Wait for parsing, allowing us to manipulate the data
    });
});
// yourAge.innerText = `You're ${data.age} years old.`;
