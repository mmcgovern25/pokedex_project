// TODO: Create a function to get the coordinates from an address
// and display a map with a marker on it
const showMap = (userInput) => {
// TODO: Construct the URL (with apiKey & userInput) and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=pk.eyJ1IjoiZGVkZW1lbmV6ZXMiLCJhIjoiY2xsYXllMHY2MDI3ODNrcWxsaHQyOG9rYyJ9.qd46foKN7gr966Y09_H6-Q`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // TODO: Insert the info into the DOM
      // - Extract the coordinates from the parsed JSON response (lang, lat)
      // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates
    });
};

// TODO: Select the form element
const formInfo = document.querySelector('form');
// TODO: Add event listener to the form that:
formInfo.addEventListener('submit', (event) => {
  event.preventDefault();
  const newVar = formInfo.querySelector('.form-control').value;
  showMap(newVar);
});
// - Prevents the default form submission behavior
// - Get the user input
// - Calls the showMap function with the user input as an argument
