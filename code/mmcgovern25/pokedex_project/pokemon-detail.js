let currentPokemonId = null;

document.addEventListener("DOMContentLoaded", () => {
  const MAX_POKEMONS = 649;
  const backButton = document.getElementById("back-btn");
  const pokemonID = new URLSearchParams(window.location.search).get("id");
  const id = parseInt(pokemonID, 10);

  if (backButton) {
    backButton.addEventListener("click", () => {
      // Store the current scroll position
      localStorage.setItem('scrollPosition', window.scrollY);
      window.location.href = './index.html';
    });
  }

  if (id < 1 || id > MAX_POKEMONS) {
    return (window.location.href = "./index.html");
  }

  currentPokemonId = id;
  loadPokemon(id);
});

async function loadPokemon(id) {
  try {

    const storedScrollPosition = localStorage.getItem('scrollPosition');

    // Check if there's a stored scroll position
    if (storedScrollPosition) {
      // Scroll to the stored position
      window.scrollTo(0, parseInt(storedScrollPosition));
    }

    const [pokemon, pokemonSpecies] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
        res.json()
      ),
    ]);

    const abilitiesWrapper = document.querySelector(
      ".pokemon-detail-wrap .pokemon-detail.move"
    );
    abilitiesWrapper.innerHTML = "";

    if (currentPokemonId === id) {
      displayPokemonDetails(pokemon);
      const flavorText = getEnglishFlavorText(pokemonSpecies);
      document.querySelector(".body3-fonts.pokemon-description").textContent =
        flavorText;

      const [leftArrow, rightArrow] = ["#leftArrow", "#rightArrow"].map((sel) =>
        document.querySelector(sel)
      );
      leftArrow.removeEventListener("click", navigatePokemon);
      rightArrow.removeEventListener("click", navigatePokemon);

      if (id !== 1) {
        leftArrow.addEventListener("click", () => {
          navigatePokemon(id - 1);
        });
      }
      if (id !== 649) {
        rightArrow.addEventListener("click", () => {
          navigatePokemon(id + 1);
        });
      }

      window.history.pushState({}, "", `./detail.html?id=${id}`);
    }

    return true;
  } catch (error) {
    console.error("An error occured while fetching Pokemon data:", error);
    return false;
  }
}

async function navigatePokemon(id) {
  currentPokemonId = id;
  await loadPokemon(id);
}

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  fairy: "#FF69B4",
  steel: "#B8B8D0",
  dark: "#111111",
};

function setElementStyles(elements, cssProperty, value) {
  elements.forEach((element) => {
    element.style[cssProperty] = value;
  });
}

function rgbaFromHex(hexColor) {
  return [
    parseInt(hexColor.slice(1, 3), 16),
    parseInt(hexColor.slice(3, 5), 16),
    parseInt(hexColor.slice(5, 7), 16),
  ].join(", ");
}

function setTypeBackgroundColor(pokemon) {
  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType];

  if (!color) {
    console.warn(`Color not defined for type: ${mainType}`);
    return;
  }

  const detailMainElement = document.querySelector(".detail-main");
  setElementStyles([detailMainElement], "backgroundColor", color);
  setElementStyles([detailMainElement], "borderColor", color);


  setElementStyles(
    document.querySelectorAll(".pill-button"),
    "backgroundColor",
    color
  );

  setElementStyles(
    document.querySelectorAll(".power-wrapper > p"),
    "backgroundColor",
    color
  );

  setElementStyles(
    document.querySelectorAll(".stats-wrap p.stats"),
    "color",
    color
  );

  setElementStyles(
    document.querySelectorAll(".stats-wrap .progress-bar"),
    "color",
    color
  );

  const rgbaColor = rgbaFromHex(color);
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    .stats-wrap .progress-bar::-webkit-progress-bar {
        background-color: rgba(${rgbaColor}, 0.5);
    }
    .stats-wrap .progress-bar::-webkit-progress-value {
        background-color: ${color};
    }
  `;
  document.head.appendChild(styleTag);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function createAndAppendElement(parent, tag, options = {}) {
  const element = document.createElement(tag);
  Object.keys(options).forEach((key) => {
    element[key] = options[key];
  });
  parent.appendChild(element);
  return element;
}

function displayPokemonDetails(pokemon) {
  const { name, id, types, weight, height, abilities, stats } = pokemon;
  const capitalizePokemonName = capitalizeFirstLetter(name);

  document.querySelector("title").textContent = capitalizePokemonName;

  const detailMainElement = document.querySelector(".detail-main");
  detailMainElement.classList.add(name.toLowerCase());

  document.querySelector(".name-wrap .name").textContent =
    capitalizePokemonName;

  document.querySelector(
    ".pokemon-id-wrap .body2-fonts"
  ).textContent = `#${String(id).padStart(3, "0")}`;

  const imageElement = document.querySelector(".detail-img-wrapper img");
  imageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  imageElement.alt = name;

  const typeWrapper = document.querySelector(".power-wrapper");
  typeWrapper.innerHTML = "";
  types.forEach(({ type }) => {
    createAndAppendElement(typeWrapper, "p", {
      className: `body3-fonts type ${type.name}`,
      textContent: type.name,
    });
  });

  document.querySelector(
    ".pokemon-detail-wrap .pokemon-detail p.body3-fonts.weight"
  ).textContent = `${weight / 10}kg`;
  document.querySelector(
    ".pokemon-detail-wrap .pokemon-detail p.body3-fonts.height"
  ).textContent = `${height / 10}m`;

  const abilitiesWrapper = document.querySelector(
    ".pokemon-detail-wrap .pokemon-detail.move"
  );
  abilities.forEach(({ ability }) => {
    createAndAppendElement(abilitiesWrapper, "p", {
      className: "body3-fonts",
      textContent: ability.name,
    });
  });

  const statsWrapper = document.querySelector(".stats-wrapper");
  statsWrapper.innerHTML = "";

  const statNameMapping = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

  stats.forEach(({ stat, base_stat }) => {
    const statDiv = document.createElement("div");
    statDiv.className = "stats-wrap";
    statsWrapper.appendChild(statDiv);

    createAndAppendElement(statDiv, "p", {
      className: "body3-fonts stats",
      textContent: statNameMapping[stat.name],
    });

    createAndAppendElement(statDiv, "p", {
      className: "body3-fonts",
      textContent: String(base_stat).padStart(3, "0"),
    });

    createAndAppendElement(statDiv, "progress", {
      className: "progress-bar",
      value: base_stat,
      max: 100,
    });
  });

  setTypeBackgroundColor(pokemon);
}

function getEnglishFlavorText(pokemonSpecies) {
  for (let entry of pokemonSpecies.flavor_text_entries) {
    if (entry.language.name === "en") {
      let flavor = entry.flavor_text.replace(/\f/g, " ");
      return flavor;
    }
  }
  return "";
}


// Assuming you have a reference to the "Add to Party" button
// Add click event listener to the "Add to Party" button
// Assuming you have a reference to the "Add to Party" button
const addToPartyButton = document.querySelector('.party-btn');

// Add click event listener to the "Add to Party" button
addToPartyButton.addEventListener('click', () => addPokemonToParty(currentPokemonId));

async function addPokemonToParty(pokemonId) {
  // Retrieve existing party data or initialize an empty Set
  const partyData = new Set(JSON.parse(localStorage.getItem('party')) || []);

  console.log('Current party data before checking length:', partyData);
  console.log('Party length:', partyData.size);
  console.log('Pokemon ID:', pokemonId);

  // Check if the selected Pokemon is not already in the party
  if (!partyData.has(pokemonId)) {
    // Check if the party has room for more Pokemon
    if (partyData.size < 6) {
      // Add the Pokemon ID to the party data
      partyData.add(pokemonId);

      // Save the updated party data to localStorage
      localStorage.setItem('party', JSON.stringify(Array.from(partyData)));

      // Log success or handle it in your own way
      console.log(`Pokemon with ID ${pokemonId} added to the party!`);

      // Fetch and log the Pokemon details
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message1 = `${capitalizedPokemonName} has been added to your party!`;

      Swal.fire({
        title: 'Success!',
        text: message1,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup', // Add your custom CSS class
        },
      });
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      const message1 = 'Party is already full! Cannot add more Pokemon.';

      Swal.fire({
        title: 'Error!',
        text: message1,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup-error', // Add your custom CSS class for error
        },
      });

      console.log(`Party is already full. Cannot add more Pokemon.`);
    }
  } else {
    const message1 = 'This Pokemon is already in your party!';

    Swal.fire({
      title: 'Error!',
      text: message1,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'custom-swal-popup-error', // Add your custom CSS class for error
      },
    });

    console.log(`Pokemon with ID ${pokemonId} is already in the party.`);
  }
}



const addToDreamTeamButton = document.querySelector('.dream-team-btn');

// Add click event listener to the "Add to Party" button
addToDreamTeamButton.addEventListener('click', () => addPokemonToDreamTeam(currentPokemonId));

async function addPokemonToDreamTeam(pokemonId) {
  // Retrieve existing party data or initialize an empty array
  const dreamTeamData = JSON.parse(localStorage.getItem('dream-team')) || [];

  if (dreamTeamData.length < 15) {
    // Check if the selected Pokemon is not already in the party
    if (!dreamTeamData.includes(pokemonId)) {
      // Add the Pokemon ID to the party data
      dreamTeamData.push(pokemonId);

      // Save the updated party data to localStorage
      localStorage.setItem('dream-team', JSON.stringify(dreamTeamData));

      // Log success or handle it in your own way
      console.log(`Pokemon with ID ${pokemonId} added to your dream team!`);
      
      // Fetch and log the Pokemon details
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to your dream team!`;
      alert(message);
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      // Log a message if the Pokemon is already in the party
      console.log(`Pokemon with ID ${pokemonId} is already in the party.`);
    }
  } else {
    console.log('Party is full! Cannot add more Pokemon.');
  }
}

const addToBoxOneButton = document.querySelector('.box-one-btn');

// Add click event listener to the "Add to Party" button
addToBoxOneButton.addEventListener('click', () => addPokemonToBoxOne(currentPokemonId));

async function addPokemonToBoxOne(pokemonId) {
  // Retrieve existing party data or initialize an empty array
  const boxOneData = JSON.parse(localStorage.getItem('box-one')) || [];

  if (boxOneData.length < 30) {
    // Check if the selected Pokemon is not already in the party
    if (!boxOneData.includes(pokemonId)) {
      // Add the Pokemon ID to the party data
      boxOneData.push(pokemonId);

      // Save the updated party data to localStorage
      localStorage.setItem('box-one', JSON.stringify(boxOneData));

      // Log success or handle it in your own way
      console.log(`Pokemon with ID ${pokemonId} added to the Box 1!`);
      
      // Fetch and log the Pokemon details
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Box 1!`;
      alert(message);
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      // Log a message if the Pokemon is already in the party
      console.log(`Pokemon with ID ${pokemonId} is already in box 1.`);
    }
  } else {
    console.log('Box 1 is full! Cannot add more Pokemon.');
  }
}

const addToMtBattleButton = document.querySelector('.mt-battle-btn');

// Add click event listener to the "Add to Party" button
addToMtBattleButton.addEventListener('click', () => addPokemonToMtbattle(currentPokemonId));

async function addPokemonToMtbattle(pokemonId) {
  // Retrieve existing party data or initialize an empty array
  const mtBattleData = JSON.parse(localStorage.getItem('mt-battle')) || [];

  if (mtBattleData.length < 100) {
    // Check if the selected Pokemon is not already in the party
    if (!mtBattleData.includes(pokemonId)) {
      // Add the Pokemon ID to the party data
      mtBattleData.push(pokemonId);

      // Save the updated party data to localStorage
      localStorage.setItem('mt-battle', JSON.stringify(mtBattleData));

      // Log success or handle it in your own way
      console.log(`Pokemon with ID ${pokemonId} added to the Box 1!`);
      
      // Fetch and log the Pokemon details
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Mt. Battle!`;
      alert(message);
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      // Log a message if the Pokemon is already in the party
      console.log(`Pokemon with ID ${pokemonId} is already in box 1.`);
    }
  } else {
    console.log('Box 1 is full! Cannot add more Pokemon.');
  }
}




async function fetchPokemonDetails(pokemonId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonDetails = await response.json();
    return pokemonDetails;
  } catch (error) {
    console.error(`An error occurred while fetching Pokemon details for ID ${pokemonId}:`, error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // ... rest of your existing code

  // Retrieve the stored scroll position
  const storedScrollPosition = localStorage.getItem('scrollPosition');

  // Check if there's a stored scroll position
  if (storedScrollPosition) {
    // Scroll to the stored position
    window.scrollTo(0, parseInt(storedScrollPosition));
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}