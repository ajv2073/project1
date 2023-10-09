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
      message: 'Created successfully',
    };
    pokemon.addPokemon(params.name, `https://pokeapi.co/api/v2/pokemon/${params.link}`);

  };