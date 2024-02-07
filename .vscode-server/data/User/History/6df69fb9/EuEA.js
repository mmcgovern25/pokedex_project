import { Application } from "@hotwired/stimulus";

import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("copy-to-clipboard", CopyToClipboardController);