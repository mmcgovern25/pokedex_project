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

pokemonListItems.forEach((pokemon) => {
  pokemon.addEventListener('mouseover', () => {
    const pokemonType = pokemon.dataset.pokemonType;
    const typeColor = getTypeColor(pokemonType);
    document.documentElement.style.setProperty('--hover-background-color', typeColor);
  });

  pokemon.addEventListener('mouseout', () => {
    document.documentElement.style.setProperty('--hover-background-color', '');
  });
});


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


async function fetchPokemonDetails(pokemonId) {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => res.json());

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.sprites.front_default;
        pokemonCard.appendChild(pokemonImage);
        listWrapper.appendChild(pokemonCard);
        console.log(`Pokemon details for ID ${pokemonId}:`, pokemon);
    } catch (error) {
        console.error(`An error occurred while fetching Pokemon details for ID ${pokemonId}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const mtBattleData = JSON.parse(localStorage.getItem('mt-battle')) || [];

    const listWrapper = document.querySelector('.mt-battle-pokemon-list');

    if (mtBattleData.length > 0) {
        mtBattleData.forEach((pokemonId) => {
            fetchPokemonDetails(pokemonId, listWrapper);
        });
    } else {

        console.log('mt battle is empty.');
    }

    const clearMtBattleButton = document.querySelector('.clear-button');
    clearMtBattleButton.addEventListener('click', clearMtBattle);
});


function clearMtBattle() {
    console.log('Clearing mt battle data');
    localStorage.removeItem('mt-battle');
    localStorage.setItem('isMtBattleCleared', 'true');

    console.log('Mt Battle Data Cleared!');
    const mtBattlePokemonList = document.querySelector('.mt-battle-pokemon-list');
    mtBattlePokemonList.innerHTML = '';

    console.log('Box One Data Cleared!');
}

const pokeballBackBtn = document.querySelector('.pokeball-back-btn');

pokeballBackBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
