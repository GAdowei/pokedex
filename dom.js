// Hoisted function calls
displayPokedex();

document.addEventListener("DOMContentLoaded", () => {
	setPokeContent();
	viewHandler();
});

// FUNCTIONS
// Generates HTML to contain Pokemon sprites and names
function displayPokedex() {
	const main = document.querySelector("main");
	const pokedex = document.querySelector("#pokedex-display");
	main.appendChild(pokedex);

	// Runs 20 times (from i = 0 to 19)
	for (i = 0; i < 20; i++) {
		// Creates parent to contain all children
		const pokeDiv = document.createElement("div");
		pokeDiv.setAttribute("class", "poke-div");

		// Hoisted function calls
		htmlGenerator("img");
		htmlGenerator("p");

		// Creates children div to contain Pokemon sprites and names
		function htmlGenerator(tag) {
			element = document.createElement(tag);
			const elementDiv = document.createElement("div");
			elementDiv.setAttribute("class", `${tag}-div`);
			elementDiv.setAttribute("id", `${tag}-div-${i + 1}`);
			elementDiv.appendChild(element);
			pokeDiv.appendChild(elementDiv);
		}

		// Calls functions
		pokedex.appendChild(pokeDiv);
	}
}

// Fetch resources from API and display content
async function setPokeContent() {
	try {
		for (i = 0; i < 20; i++) {
			// Fetch resource
			const pokeUrl = await getPokeApi(`${pokeApiUrl}${i + 1}`);
			// Grabs HTML elements
			const img = document.querySelector(`#img-div-${i + 1}`).firstChild;
			const p = document.querySelector(`#p-div-${i + 1}`).firstChild;
			// Set contents
			img.src = pokeUrl.sprites.front_default;
			// Click functionality
			img.addEventListener("mouseenter", () => {
					img.src = pokeUrl.sprites.back_default;
			});
			img.addEventListener("mouseleave", () => {
				img.src = pokeUrl.sprites.front_default;
			});	
			p.innerHTML = pokeUrl.name;
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
}
