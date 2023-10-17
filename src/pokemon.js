//Stores all Pokemon objects
let pokemonTeam = [];

//Contains all Pokemon information
class Pokemon {
    constructor(name, nickname, move1, move2, move3, move4, ability, nature){
        this.name = name;
        this.nickname = nickname;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.ability = ability;
        this.nature = nature;
    }
}

//Add new Pokemon
const addPokemon = (name, nickname, move1, move2, move3, move4, ability, nature) => {
    const newPokemon = new Pokemon(name, nickname, move1, move2, move3, move4, ability, nature);
    pokemonTeam.push(newPokemon);
}

//Remove a Pokemon from the list
const removePokemon = (nickname) => {
    for (let i = 0; i < pokemonTeam.length; i ++)
    {
        if (pokemonTeam[i].nickname === nickname && pokemonTeam.length === 1)
        {
            pokemonTeam = [];
            return;
        }
        if (pokemonTeam[i].nickname === nickname)
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

