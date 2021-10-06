(() => {
	type Avenger = {
		name: string;
		weapon: string;
	};

	const ironman: Avenger = {
		name: 'Ironman',
		weapon: 'Armorsuit',
	};

	const captainAmerica: Avenger = {
		name: 'Capitan America',
		weapon: 'Escudo',
	};

	const thor: Avenger = {
		name: 'Thor',
		weapon: 'Mjolnir',
	};

	const avengers: Avenger[] = [ironman, thor, captainAmerica];

	for (let index = 0; index < avengers.length; index++) {
		const element = avengers[index];
		console.log(element);
	}

	for (const avenger of avengers) {
		console.log(avenger);
		console.log(avenger.name);
	}
})();
