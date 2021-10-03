(() => {
	let isSuperman: boolean = true;
	let isBatman: boolean = false;
	console.log(isSuperman); //si lo imprimo asi solo imprimo su valor
	console.log({ isBatman }); //si lo imprimo asi imprimo su valor y el nombre de la variable

	isSuperman = true || false;
	// isBatman = 'ABC' || 'XYZ'; //no se puede asignar un string a un booleano

	// isSuperman = isBatman ? true : 'false';
	isSuperman = isBatman ? true : false;
})();
