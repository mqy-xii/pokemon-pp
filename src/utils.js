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
  // 1. Sort list by attack in descending order
  const sortedByAttack = structuredClone(pokemonList).sort(
    (a, b) => b.attack - a.attack
  );
  // 2. Get highest attack value from sorted array
  const highestAttack = sortedByAttack[0].attack;
  // 3. Filter all Pokemon with the sorted highest attack value
  return sortedByAttack.filter((pokemon) => pokemon.attack === highestAttack);
};

// TDD - Test Driven Development
// Write failing tests, watch them fail, and write the fix.

export const sortByName = (pokemonList) => {
  // NOTES: Spread operator to make a copy of the list (sort will mutate the original data)
  // .sort() compares a versus b
  // name of a localeCompare name of b
  return [...pokemonList].sort((a, b) => a.name.localeCompare(b.name));
  // ALTERNATIVE: return structuredClone(pokemonList).sort((a, b) => a.name.localeCompare(b.name))
};
