const MAX_POKEMON = 649;
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number");
const nameFilter = document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");

let allPokemons = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  .then((response) => response.json())
  .then((data) => {
    allPokemons = data.results;
    displayPokemons(allPokemons);
  });

  listWrapper.addEventListener("scroll", () => {
    localStorage.setItem('scrollPosition', listWrapper.scrollTop);

    console.log('Scroll position set to:', scrollPosition);
  });


async function fetchPokemonDataBeforeRedirect(id) {
  try {

    const [pokemon, pokemonSpecies] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
        res.json()
      ),
    ]);

    return true;
  } catch (error) {
    console.error("Failed to fetch Pokemon data before redirect");
  }
}

function displayPokemons(pokemon) {
  listWrapper.innerHTML = "";

  pokemon.forEach((pokemon) => {
    const pokemonID = pokemon.url.split("/")[6];
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    listItem.innerHTML = `
        <div class="number-wrap">
            <p class="caption-fonts">${pokemonID}</p>
        </div>
        <div class="img-wrap">
            <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}" />
        </div>
        <div class="name-wrap">
            <p class="body3-fonts">${pokemon.name}</p>
        </div>
    `;

    listItem.addEventListener("click", async () => {
      const success = await fetchPokemonDataBeforeRedirect(pokemonID);
      if (success) {
        window.location.href = `./detail.html?id=${pokemonID}`;
      }
    });

    listWrapper.appendChild(listItem);
  });
}

searchInput.addEventListener("keyup", handleSearch);

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  let filteredPokemons;

  if (numberFilter.checked) {
    filteredPokemons = allPokemons.filter((pokemon) => {
      const pokemonID = pokemon.url.split("/")[6];
      return pokemonID.startsWith(searchTerm);
    });
  } else if (nameFilter.checked) {
    filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm)
    );
  } else {
    filteredPokemons = allPokemons;
  }

  displayPokemons(filteredPokemons);

  if (filteredPokemons.length === 0) {
    notFoundMessage.style.display = "block";
  } else {
    notFoundMessage.style.display = "none";
  }
}

const closeButton = document.querySelector(".search-close-icon");
closeButton.addEventListener("click", clearSearch);

function clearSearch() {
  searchInput.value = "";
  displayPokemons(allPokemons);
  notFoundMessage.style.display = "none";
}

const triggers = document.querySelectorAll(".cool > li")
const background = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

const pokemonListItems = document.querySelectorAll('.list-item');

const viewParty = document.querySelector('.view-party-link');
const viewPartyText = document.querySelector('.view-party'); 

viewParty.addEventListener('click', navigateToParty);
viewPartyText.addEventListener('click', navigateToParty);

function navigateToParty() {
    window.location.href = 'party.html';
}

const viewDreamTeam = document.querySelector('.dream-team-link');
const viewDreamTeamText = document.querySelector('.dream-team');

viewDreamTeam.addEventListener('click', navigateToDreamTeam);
viewDreamTeamText.addEventListener('click', navigateToDreamTeam);

function navigateToDreamTeam() {
    window.location.href = 'dream-team.html';
}


const viewBoxOne = document.querySelector('.box-1-link');
const viewBoxOneText = document.querySelector('.box-1'); 

viewBoxOne.addEventListener('click', navigateToBoxOne);
viewBoxOneText.addEventListener('click', navigateToBoxOne);

function navigateToBoxOne() {
    window.location.href = 'box-one.html';
}


const viewMtBattle = document.querySelector('.mt-battle-link');
const viewMtBattleText = document.querySelector('.mt-battle'); 

viewMtBattle.addEventListener('click', navigateToMtBattle);
viewMtBattleText.addEventListener('click', navigateToMtBattle);

function navigateToMtBattle() {
    window.location.href = 'mt-battle.html';
}

const indexPokeballBackBtn = document.querySelector('.index-pokeball-back-btn');

indexPokeballBackBtn.addEventListener('click', () => {
  window.location.href = 'intro.html';
});

// ... (Previous code)

// ... (existing JavaScript code) ...
// ... (existing JavaScript code) ...
