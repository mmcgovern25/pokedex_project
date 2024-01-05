// TODO: React to a click on the button!
const blueButton = document.querySelector("#clickme");

blueButton.addEventListener('click', (event) => {
  blueButton.textContent = ('Obrigado!');
  blueButton.classList.add('disabled');
});

function play() {
  const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}
