// TODO: write your code here!
// toggle active css class on and off when user clicks


const buttons = document.querySelectorAll('#clickable');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.addClassList.toggle('#clickale');
  });
});

// should be able to select multiple sports
