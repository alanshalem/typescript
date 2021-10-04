(() => {
	const hero: [string, number] = ['Dr Strange', 100];
	const trio: [string, number, boolean] = ['String', 10, true];
	// hero[0] = 50; //error, la posicion 0 espera string
	// hero[1] = 'Ironman'; //error, la posicion 1 espera number

	console.log(hero);
	console.log(trio);
})();
