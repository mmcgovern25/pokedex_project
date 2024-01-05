import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "input"];

  static values = {
    feedbackText: String
  }

  connect() {
    console.log(this.buttonTarget);
  }

  copy() {
    this.buttonTarget.setAttribute("disabled", "");
    this.buttonTarget.innerText = "Copied!";
    console.log('LOOK AT ME IM COPY');
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(this.inputTarget.value);

    // writeText()]
  // data target input
  // data value called feedback-text
  // when, disabled will display whatever text is assigned to the feedback-text data value.
  }
}
// writeText()
// What do you need to do to copy the text in the input to the clipboard?
// Input.innerText.value
// this.element.innerText = "Copied!";
// change text to
