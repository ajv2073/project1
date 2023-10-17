const pokemon = require('./pokemon.js');

//JSON response
const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(object));
    response.end();
};
  
//JSON head response
const respondJSONMeta = (request, response, status) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.end();
};

const addPokemon = (request, response, params) => {
  const responseJSON = {
    message: 'Created Successfully',
  };

  //Missing paramters
  if (!params.name || !params.nickname || !params.move1 || !params.move2 || !params.move3 || !params.move4 || !params.ability || !params.nature)
  {
    responseJSON.message = 'You are missing some parameters.  Please try again';
    responseJSON.id = 'badRequest';
    return respondJSON(request, response, 400, responseJSON);
  }


  pokemon.addPokemon(params.name, params.nickname, params.move1, params.move2, params.move3, params.move4, params.ability, params.nature);

  //201 Success
  return respondJSON(request, response, 201, responseJSON);
};

const getPokemon = (request, response) => {
  const pokemonToReturn = pokemon.getTeam();
  const responseJSON = {
    pokemonToReturn,
  };
  return respondJSON(request, response, 200, responseJSON);
}

//Get rid of a Pokemon
const removePokemon = (request, response, params) => {
  const responseJSON = {
    message: 'Removed Successfully. Goodbye!',
  };

  //Missing parameters
  if (!params.nickname)
  {
    responseJSON.message = 'Nickname is missing.';
    responseJSON.id = "badRequest";
    return respondJSON(request, response, 400, responseJSON);
  }
  pokemon.removePokemon(params.nickname);

  //204 success
  return respondJSON(request, response, 204, responseJSON);
};

//Successful error code
const getUsersMeta = (request, response) => respondJSONMeta(request, response, 200);

//404 not found code
const notReal = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  return respondJSON(request, response, 404, responseJSON);
};

//404 code with no message and id
const notRealMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  addPokemon,
  removePokemon,
  getPokemon,
  getUsersMeta,
  notReal,
  notRealMeta,
}