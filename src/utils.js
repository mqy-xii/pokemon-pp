export const calculateAverageHP = (pokemonList) => {
  if (pokemonList.length === 0) return 0;
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);
  return totalHP / pokemonList.length;
};

export const filterByType = (pokemonList, type) => {
  return pokemonList.filter((pokemon) => pokemon.type === type);
};

export const getPokemonNames = (pokemonList) => {
  return pokemonList.map((pokemon) => pokemon.name);
};

export const getStrongestPokemon = (pokemonList) => {
  let strongest = pokemonList[0];

  for (let i = 1; i < pokemonList.length; i++) {
    if (pokemonList[i].attack > strongest.attack) {
      strongest = pokemonList[i];
    }
  }

  return strongest;
};

// TDD - Test Driven Development
// Write failing tests, watch them fail, and write the fix.

export const sortByName = (pokemonList) => {
  // NOTES: Spread operator to make a copy of the list (sort will mutate the original data)
  // .sort() compares a versus b
  // name of a localeCompare name of b
  return [...pokemonList].sort((a, b) => a.name.localeCompare(b.name));
};
