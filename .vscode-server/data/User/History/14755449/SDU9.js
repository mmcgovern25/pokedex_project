import { Application } from "@hotwired/stimulus";


import CharacterCountController from "./controllers/character_count_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("character-count-controller", CharacterCountController);
