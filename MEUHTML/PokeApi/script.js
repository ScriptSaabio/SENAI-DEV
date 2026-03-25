const container = document.getElementById("pokemonContainer");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const detail = document.getElementById("pokemonDetail");
const search = document.getElementById("search");

let pokemonList = [];

async function loadPokemon() {
  // pergunta quantos pokemon existem
  const resCount = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
  const dataCount = await resCount.json();

  const totalPokemon = dataCount.count;

  // busca todos os pokemon
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`,
  );
  const data = await res.json();

  pokemonList = data.results;

  renderList(pokemonList);
}

function renderList(list) {
  container.innerHTML = "";

  list.forEach((pokemon) => {
    const id = pokemon.url.split("/")[6];

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
<h3>#${id} ${pokemon.name}</h3>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
`;

    card.onclick = () => loadPokemonDetail(id);

    container.appendChild(card);
  });
}

async function loadPokemonDetail(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  showDetail(pokemon);
}

function showDetail(pokemon) {
  modal.style.display = "block";

  const types = pokemon.types
    .map((t) => `<span class="type">${t.type.name}</span>`)
    .join("");

  const abilities = pokemon.abilities
    .map((a) => `<p>${a.ability.name}</p>`)
    .join("");

  const stats = pokemon.stats
    .map(
      (stat) => `
<p>${stat.stat.name}</p>
<div class="stat">
<div class="bar" style="width:${stat.base_stat}%"></div>
</div>
`,
    )
    .join("");

  // conversão de altura
  const heightCm = pokemon.height * 10;
  const heightM = (pokemon.height / 10).toFixed(2);

  // conversão de peso
  const weightG = pokemon.weight * 100;
  const weightKg = (pokemon.weight / 10).toFixed(2);

  detail.innerHTML = `

<h2>#${pokemon.id} ${pokemon.name}</h2>

<img width="200" src="${pokemon.sprites.other["official-artwork"].front_default}">

<h3>Tipos</h3>
<div>${types}</div>

<p><b>Altura:</b> ${heightCm} cm (${heightM} m)</p>
<p><b>Peso:</b> ${weightG} g (${weightKg} kg)</p>

<h3>Habilidades</h3>
${abilities}

<h3>Stats</h3>
${stats}

`;
}

// busca
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = pokemonList.filter(
    (p) => p.name.includes(value) || p.url.split("/")[6].includes(value),
  );

  renderList(filtered);
});

// fechar modal
close.onclick = () => (modal.style.display = "none");

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

loadPokemon();
