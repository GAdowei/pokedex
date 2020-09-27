const viewHandler = () => {
	const previousRow = document.querySelector("#previousRow");
	const previousPage = document.querySelector("#previousPage");
	const nextRow = document.querySelector("#nextRow");
	const nextPage = document.querySelector("#nextPage");

	// Keeps track of state
	let offset = 0;

	nextRow.addEventListener("click", () => {
		offset += 5;
		getContent();
	});

	previousRow.addEventListener("click", () => {
		if (offset >= 5) {
			offset -= 5;
			getContent();
		} else {
			alert("No previous Pokémon!");
		}
	});

	nextPage.addEventListener("click", () => {
		offset += 20;
		getContent();
	});

	previousPage.addEventListener("click", () => {
		if (offset >= 20) {
			offset -= 20;
			getContent();
		} else if (offset <= 20 && offset >= 5) {
			offset -= offset;
			getContent();
		} else {
			alert("No previous Pokémon!");
		}
	});

	// Handles view logic
	async function getContent() {
		try {
			for (i = 0; i < 20; i++) {
				// Offsets the value of i to modify API endpoint
				const pokeId = i + offset + 1;
				const query = `${pokeApiUrl}${pokeId}`;
				// Fetches resource based on modified endpoint
				const pokeUrl = await getPokeApi(query);
				// Grabs HTMl elements
				const img = document.querySelector(`#img-div-${i + 1}`)
					.firstChild;
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
};