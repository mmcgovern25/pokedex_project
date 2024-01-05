const agifyApiUrl = "https://api.agify.io/"

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;

  const form = document.querySelector('#fetch-age');
  const name = document.querySelector('#firstName');

  fetch('https://api.agify.io?name=THE_FIRST_NAME');
    .then((response) => response.json());// Wait for the response and parse it as JSON
    .then((data) => {
      `You're ${your-age} years old.`
    });
  };
    // As soon as the response is received, we can interact with the response

  // TODO: Display your age with an AJAX call instead of the console.log()

  console.log(firstName);
}

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
