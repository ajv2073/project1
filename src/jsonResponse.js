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