// Stores path to RESTful API in variable
let pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Returns a promise containing resource parsed in JSON format
// Default argument = pokeApiUrl
const getPokeApi = async (path = pokeApiUrl) => {
	try {
		const response = await fetch(path);
		const pokeApi = await response.json();
		return pokeApi;
		// Handles potential errors
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

// Returns a promise containing array of names
const getPokeNames = async () => {
	try {
		//
		const api = await getPokeApi();
		// Iterates over results key and pushes name to array
		const pokeNames = [];
		api.results.forEach((pokemon) => pokeNames.push(pokemon.name));
		return pokeNames;
		// Handles potential errors
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

// Returns a promise containing array of urls
const getPokeSprites = async () => {
	try {
		//
		const api = await getPokeApi();
		// Iterates over results key and pushes each pokemon url to array
		const pokeUrls = [];
		api.results.forEach((pokemon) => pokeUrls.push(pokemon.url));
		// Creates empty arrays to contain sprites
		const frontSpriteArray = [];
		const backSpriteArray = [];
		const pokeSprites = {
			front: "",
			back: "",
		};
		pokeUrls.forEach(async (path) => {
			// Reuses getPokeApi function to fetch and parse pokeUrls in JSON format
			const pokeObject = await getPokeApi(path);
			const frontSprite = await pokeObject.sprites.front_default;
			const backSprite = await pokeObject.sprites.back_default;
			// Pushes sprites to respective arrays
			frontSpriteArray.push(frontSprite);
			backSpriteArray.push(backSprite);
			// Sorts arrays in ascending numerical order
			const sortedFrontSpriteArray = frontSpriteArray.sort((a, b) => a - b)
			const sortedBackSpriteArray = backSpriteArray.sort((a, b) => a - b)
			// Assigns sorted arrays as values to pokeSprites object keys
			pokeSprites.front = sortedFrontSpriteArray;
			pokeSprites.back = sortedBackSpriteArray;
		});
		return pokeSprites;
		// Handles potential errors
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};
console.log(getPokeApi())
console.log(getPokeNames())
console.log(getPokeSprites())
