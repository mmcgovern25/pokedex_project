// TODO: React to a click on the button!
const blueButton = document.querySelector("#clickme");

blueButton.addEventListener('click', (event) => {
  blueButton.textContent = 'Bingo!';
  blueButton.classList.add('disabled');
});
