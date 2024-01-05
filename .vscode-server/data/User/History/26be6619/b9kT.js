import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('Welcome to challenge one');
  }

  disable() {
    button.classList.add.disable;
    button.innerText = "Bingo!";

  }
}
