const agifyApiUrl = "https://api.agify.io/";

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const yourAge = document.querySelector('#your-age');

  const name = document.querySelector('#firstName');

  fetch(`https://api.agify.io?name=${firstName}`)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);

      yourAge.innerText = `You're ${data.age} years old.`;
    });
};
  // As soon as the response is received, we can interact with the response

// TODO: Display your age with an AJAX call instead of the console.log()

// console.log(firstName);


const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
