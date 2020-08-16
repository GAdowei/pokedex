// Stores path to RESTful API in variable
let pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Returns a promise containing resource in JSON format
// Default argument = pokeApiUrl
const getPokeApi = async (url=pokeApiUrl) => {
	try {
		const response = await fetch(url);
		const pokeApi = await response.json();
		return pokeApi;
		// Handles errors
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

// Returns a promise containing array of names
const getPokeNames = async () => {
	try {
		const api = await getPokeApi();
		// Iterates over results key and pushes name to array
		let pokeNames = [];
		api.results.forEach(pokemon => pokeNames.push(pokemon.name));
		return pokeNames;
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

// Returns a promise containing array of urls
const getPokeSprites = async () => {
	const api = await getPokeApi();
	//
	const pokeUrls = [];
	api.results.forEach(pokemon => pokeUrls.push(pokemon.url))
	const pokeSprites = [];
	pokeUrls.forEach(async (url) => {
		const pokeObject = await getPokeApi(url)
		const sprite = await pokeObject.sprites.front_default
		pokeSprites.push(sprite)
	})
	return pokeSprites
};

console.log(getPokeApi())
console.log(getPokeNames())
console.log(getPokeSprites())
