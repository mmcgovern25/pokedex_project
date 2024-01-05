import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import CharacterCountController from "./controllers/character_count_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("character-count-controller", CharacterCountController);
// TODO: Register your Stimulus Controller below
