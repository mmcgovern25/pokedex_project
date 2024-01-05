// TODO: React to a click on the button!
const blueButton = document.querySelector("#clickme");

blueButton.addEventListener('click', (event) => {
  blueButton.textContent = ('Obrigado!');
  blueButton.classList.add('disabled');
});

const audio = new Audio('audio_file.mp3');
audio.play();
