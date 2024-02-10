let currentPokemonId = null;

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


document.addEventListener("DOMContentLoaded", () => {
  const MAX_POKEMONS = 649;
  const backButton = document.getElementById("back-btn");
  const pokemonID = new URLSearchParams(window.location.search).get("id");
  const id = parseInt(pokemonID, 10);

  if (backButton) {
    backButton.addEventListener("click", () => {
      const storedScrollPosition = localStorage.getItem('scrollPosition');

      console.log('Stored scroll position:', storedScrollPosition);

      if (storedScrollPosition) {
          window.scrollTo(0, parseInt(storedScrollPosition));
<<<<<<< HEAD
          console.log('Restored scroll position:', storedScrollPosition);
=======
          console.log('Restored scroll position:', storedScrollPosition); 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      }

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

    if (storedScrollPosition) {

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


const addToPartyButton = document.querySelector('.party-btn');
addToPartyButton.addEventListener('click', () => addPokemonToParty(currentPokemonId));

async function addPokemonToParty(pokemonId) {
<<<<<<< HEAD

=======
 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
  const partyData = new Set(JSON.parse(localStorage.getItem('party')) || []);

  console.log('Current party data before checking length:', partyData);
  console.log('Party length:', partyData.size);
  console.log('Pokemon ID:', pokemonId);


  if (!partyData.has(pokemonId)) {
    if (partyData.size < 6) {
<<<<<<< HEAD

=======
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      partyData.add(pokemonId);
      localStorage.setItem('party', JSON.stringify(Array.from(partyData)));
      console.log(`Pokemon with ID ${pokemonId} added to the party!`);

      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message1 = `${capitalizedPokemonName} has been added to your party!`;

      Swal.fire({
        title: 'Success!',
        text: message1,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
<<<<<<< HEAD
          popup: 'custom-swal-popup',
=======
          popup: 'custom-swal-popup', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
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
<<<<<<< HEAD
          popup: 'custom-swal-popup-error',
=======
          popup: 'custom-swal-popup-error', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
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

addToDreamTeamButton.addEventListener('click', () => addPokemonToDreamTeam(currentPokemonId));

async function addPokemonToDreamTeam(pokemonId) {

  const dreamTeamData = JSON.parse(localStorage.getItem('dream-team')) || [];

  console.log('Current dream team data before checking length:', dreamTeamData);
  console.log('Dream Team length:', dreamTeamData.length);
  console.log('Pokemon ID:', pokemonId);

  if (dreamTeamData.length < 15) {
    if (!dreamTeamData.includes(pokemonId)) {
      dreamTeamData.push(pokemonId);
      localStorage.setItem('dream-team', JSON.stringify(dreamTeamData));

      console.log(`Pokemon with ID ${pokemonId} added to the dream team!`);

      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to your dream team!`;
<<<<<<< HEAD

=======
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
<<<<<<< HEAD
          popup: 'custom-swal-popup',
=======
          popup: 'custom-swal-popup', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
        },
      });
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      const message = 'This Pokemon is already in your dream team!';
<<<<<<< HEAD

=======
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup-error',
        },
      });

      console.log(`Pokemon with ID ${pokemonId} is already in the dream team.`);
    }
  } else {
    const message = 'Dream Team is already full! Cannot add more Pokemon.';
<<<<<<< HEAD

=======
    
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
<<<<<<< HEAD
        popup: 'custom-swal-popup-error',
=======
        popup: 'custom-swal-popup-error', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      },
    });

    console.log('Dream Team is already full! Cannot add more Pokemon.');
    console.log('Current dream team data:', dreamTeamData);
    console.log('Dream Team length:', dreamTeamData.length);
    console.log('Pokemon ID:', pokemonId);
  }
}


const addToBoxOneButton = document.querySelector('.box-one-btn');


addToBoxOneButton.addEventListener('click', () => addPokemonToBoxOne(currentPokemonId));

async function addPokemonToBoxOne(pokemonId) {
  const boxOneData = JSON.parse(localStorage.getItem('box-one')) || [];

  console.log('Current Box 1 data before checking length:', boxOneData);
  console.log('Box 1 length:', boxOneData.length);
  console.log('Pokemon ID:', pokemonId);

  if (boxOneData.length < 30) {
    if (!boxOneData.includes(pokemonId)) {
      boxOneData.push(pokemonId);

      localStorage.setItem('box-one', JSON.stringify(boxOneData));

      console.log(`Pokemon with ID ${pokemonId} added to Box 1!`);
<<<<<<< HEAD

      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Box 1!`;

=======
      
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Box 1!`;
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
<<<<<<< HEAD
          popup: 'custom-swal-popup',
=======
          popup: 'custom-swal-popup', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
        },
      });
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      const message = 'This Pokemon is already in Box 1!';
<<<<<<< HEAD

=======
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
<<<<<<< HEAD
          popup: 'custom-swal-popup-error',
=======
          popup: 'custom-swal-popup-error', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
        },
      });

      console.log(`Pokemon with ID ${pokemonId} is already in Box 1.`);
    }
  } else {
    const message = 'Box 1 is already full! Cannot add more Pokemon.';
<<<<<<< HEAD

=======
    
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
<<<<<<< HEAD
        popup: 'custom-swal-popup-error',
=======
        popup: 'custom-swal-popup-error', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      },
    });

    console.log('Box 1 is already full! Cannot add more Pokemon.');
    console.log('Current Box 1 data:', boxOneData);
    console.log('Box 1 length:', boxOneData.length);
    console.log('Pokemon ID:', pokemonId);
  }
}


const addToMtBattleButton = document.querySelector('.mt-battle-btn');


addToMtBattleButton.addEventListener('click', () => addPokemonToMtBattle(currentPokemonId));

async function addPokemonToMtBattle(pokemonId) {
  const mtBattleData = JSON.parse(localStorage.getItem('mt-battle')) || [];

  console.log('Current Mt. Battle data before checking length:', mtBattleData);
  console.log('Mt. Battle length:', mtBattleData.length);
  console.log('Pokemon ID:', pokemonId);

  if (mtBattleData.length < 100) {
    if (!mtBattleData.includes(pokemonId)) {
      mtBattleData.push(pokemonId);

      localStorage.setItem('mt-battle', JSON.stringify(mtBattleData));

      console.log(`Pokemon with ID ${pokemonId} added to Mt. Battle!`);
<<<<<<< HEAD

      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Mt. Battle!`;

=======
      
      const pokemonDetails = await fetchPokemonDetails(pokemonId);
      const capitalizedPokemonName = capitalizeFirstLetter(pokemonDetails.name);
      const message = `${capitalizedPokemonName} has been added to Mt. Battle!`;
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup',
        },
      });
      console.log(`Pokemon details for ID ${pokemonId}:`, pokemonDetails);
    } else {
      const message = 'This Pokemon is already in Mt. Battle!';
<<<<<<< HEAD

=======
      
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup-error',
        },
      });

      console.log(`Pokemon with ID ${pokemonId} is already in Mt. Battle.`);
    }
  } else {
    const message = 'Mt. Battle is already full! Cannot add more Pokemon.';
<<<<<<< HEAD

=======
    
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
<<<<<<< HEAD
        popup: 'custom-swal-popup-error',
=======
        popup: 'custom-swal-popup-error', 
>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
      },
    });

    console.log('Mt. Battle is already full! Cannot add more Pokemon.');
    console.log('Current Mt. Battle data:', mtBattleData);
    console.log('Mt. Battle length:', mtBattleData.length);
    console.log('Pokemon ID:', pokemonId);
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


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
<<<<<<< HEAD
=======

>>>>>>> 892fb12bc5c324a5ba8de5ef9924b8978bc48bd9
