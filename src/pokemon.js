//Stores all Pokemon objects
let pokemonTeam = [];

//Contains all Pokemon information
class Pokemon {
    constructor(pokemonSpecies, nameField, pokemonMoves1, pokemonMoves2, pokemonMoves3, pokemonMoves4, pokemonAbilities, pokemonNatures){
        this.pokemonSpecies = pokemonSpecies;
        this.nameField = nameField;
        this.pokemonMoves1 = pokemonMoves1;
        this.pokemonMoves2 = pokemonMoves2;
        this.pokemonMoves3 = pokemonMoves3;
        this.pokemonMoves4 = pokemonMoves4;
        this.pokemonAbilities = pokemonAbilities;
        this.pokemonNatures = pokemonNatures;
    }
}

//Add new Pokemon
const addPokemon = (pokemonSpecies, nameField, pokemonMoves1, pokemonMoves2, pokemonMoves3, pokemonMoves4, pokemonAbilities, pokemonNatures) => {
    const newPokemon = new Pokemon(pokemonSpecies, nameField, pokemonMoves1, pokemonMoves2, pokemonMoves3, pokemonMoves4, pokemonAbilities, pokemonNatures);
    pokemonTeam.push(newPokemon);
}

//Remove a Pokemon from the list
const removePokemon = (nameField) => {
    for (let i = 0; i < pokemonTeam.length; i ++)
    {
        if (pokemonTeam[i].nameField === nameField && pokemonTeam.length === 1)
        {
            pokemonTeam = [];
            return;
        }
        if (pokemonTeam[i].nameField === nameField)
        {
            pokemonTeam.slice(i, 1);
            return;
        }
    }
};

//Get the team length
const getTeamLength = () => pokemonTeam.length;

const getTeam = () => {
    return pokemonTeam;
}

module.exports = {
    addPokemon,
    removePokemon,
    getTeamLength,
    getTeam,
};

