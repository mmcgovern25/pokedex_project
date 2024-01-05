// app/javascript/controllers/map_controller.js
import { Controller } from "@hotwired/stimulus"
import mapboxgl from 'mapbox-gl' // Don't forget this!

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v11",
    });
    this.#addMarkersToMap()
  }

  #addMarkersToMap() {
    new mapboxgl.Marker()
    .setLngLat({-65.017, 16.457})
    .addTo(this.map)
  }
}
