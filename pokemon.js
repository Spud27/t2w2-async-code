// AJAX Asycnchronous Javascript and XML
// Protocol for making async requests to a server over http
// Misnomer now, because almost all modern api use JSON not XML

// Create a promise
// Within the promise initiate AJAX request
// If request succeeds, resolve the promise with the result 
// otherwise, reject the promise with the error

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    // this .then() handles the promise returned by fetch()
    .then(response => response.json())
    // this .then() handles the promise returned by json()
    .then(data => console.log(data.name))

console.log('Awaiting fetch....')
