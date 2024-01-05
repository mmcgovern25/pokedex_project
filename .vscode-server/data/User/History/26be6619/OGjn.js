import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('Welcome to challenge one');
  }

  disable() {
    // console.log("disable activated");
    this.element.setAttribute("disabled", "");
    this.element.innerText = "Bingo!";
    let audio = new Audio('sound.mp3');
    audio.play();
  }
}
