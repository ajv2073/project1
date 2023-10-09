//Stores all Pokemon objects
let pokemonTeam = [];

//Contains all Pokemon information
class Pokemon {
    constructor(name, link){
        this.name = name;
        this.type = "Placeholder type";
        this.ability = "Placeholder ability";
        this.link = link;
    }
}

//Add new Pokemon
const addPokemon = (name, link) => {
    const newPokemon = new Pokemon(name, link);
    pokemonTeam.push(newPokemon);
}

const getTeamLength = () => pokemonTeam.length;

module.exports = {
    addPokemon,
    getTeamLength,
};

addPokemon("Pikachu",`https://pokeapi.co/api/v2/pokemon/pikachu`);