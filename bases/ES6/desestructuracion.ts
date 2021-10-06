(() => {
	type Avengers = {
		nick: string;
		ironman: string;
		vision: string;
		activo: boolean;
		poder: number;
	};
	const avengers = {
		nick: 'Samuel L. Jackson',
		ironman: 'Robert Downey Jr.',
		vision: 'Paul Bettany',
		activo: true,
		poder: 2500,
	};

	const { poder, vision } = avengers;
	console.log(poder.toFixed(2), vision.toUpperCase());

	const printAvenger = (avengers: Avengers) => {
		console.log(avengers.vision);
	};

	const printIronman = ({ ironman, ...resto }: Avengers) => {
		console.log(ironman, resto);
	};

	const avengersArr: [string, boolean, number] = ['Cap. America', true, 123];

	const [capitan, hombreDeAcero, seriaUnNumero] = avengersArr;
	console.log({ hombreDeAcero, capitan });
	printAvenger(avengers);
})();
