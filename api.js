// Stores path to RESTful API in variable
let pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Returns a promise containing resource parsed in JSON format
const getPokeApi = async (path = pokeApiUrl) => {
	try {
		const response = await fetch(path);
		const pokeApi = await response.json();
		// console.log(path);
		return pokeApi;
		// Handles potential errors
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};
