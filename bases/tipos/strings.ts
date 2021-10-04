(() => {
	//hay 3 formas de definir strings
	const batman: string = 'Batman';
	const linternaVerde: string = "Linterna's Verde";
	const volcanNegro: string = `Heroe: Volcan Negro`;

	const abc = 123;
	console.log(`${batman.toUpperCase()}, ${abc.toString()}`);
	console.log(`${batman[10]?.toUpperCase() || 'No esta presente'}`);
})();
