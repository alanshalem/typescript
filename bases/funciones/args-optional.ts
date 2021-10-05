(() => {
	const fullName = (
		firstName: string,
		lastName?: string | boolean
	): string => {
		if (!firstName) {
			throw new Error('Nombre requerido');
		}
		return `${firstName} ${lastName || '---'}`;
	};

	const name = fullName('Tony');

	// let noName: any;

	// const name2 = fullName(noName, 'Perez');

	console.log(name);
	// console.log(name2);
})();
