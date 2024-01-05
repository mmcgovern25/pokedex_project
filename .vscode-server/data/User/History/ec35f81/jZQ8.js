const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  let greenButton = document.querySelector('.btn.btn-lg.btn-success');
  // TODO: Bind the `click` event to the button
  addEventListener('click', (event) => {
    greenButton.textContent = 'Thank you!';
  // TODO: On click, display `Thank you!` in a JavaScript alert!
  });
};

displayAlertOnButtonClick(); // Do not remove!
