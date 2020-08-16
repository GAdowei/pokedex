const container = document.querySelector("#container")
const pokedex = document.querySelector("#pokedex-display")

// Creates parent div containing sprite and name elements
const displayPokedex = () => {
	for (i = 0; i < 20; i++) {
		// Creates parent div
		const pokeDiv = document.createElement("div");
		pokeDiv.setAttribute("class", "poke-div");

		// Creates child div to contain sprite
		const createImgDivs = () => {
			const imgDiv = document.createElement("div");
			imgDiv.setAttribute("class", "img-div");
			imgDiv.setAttribute("id", `img-div-${i + 1}`);
			pokeDiv.appendChild(imgDiv);
		};

		// Creates child div to contain name
		const createNameDivs = () => {
			const nameDiv = document.createElement("div");
			nameDiv.setAttribute("class", "name-div");
			nameDiv.setAttribute("id", `name-div-${i + 1}`);
			pokeDiv.appendChild(nameDiv);
		};

        // Calls functions
		createImgDivs();
		createNameDivs();
		pokedex.appendChild(pokeDiv);
    }
    container.appendChild(pokedex)
};

displayPokedex()
