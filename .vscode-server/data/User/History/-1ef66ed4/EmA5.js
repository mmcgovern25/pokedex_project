import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Oi! ta bom?");
  }

  copy() {
    this.element.setAttribute("copy", "");
    this.element.innerText = "Copied!";
    console.log('LOOK AT ME IM COPY');
  }
}
// What do you need to do to copy the text in the input to the clipboard?
// Input.innerText.value
// this.element.innerText = "Copied!";
// change text to
