import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('Welcome to challenge one');
  }

  disable() {
    console.log("disable activated");
    // button.classList.add.disable;
    // button.innerText = "Bingo!";
  }
}
