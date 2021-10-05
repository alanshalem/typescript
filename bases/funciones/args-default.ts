(() => {
	const fullName = (
		firstName: string,
		upper: boolean,
		lastName?: string | boolean
	): string => {
		if (upper) {
			return `${firstName} ${lastName || '----'}`.toUpperCase();
		} else {
			return `${firstName} ${lastName || '----'}`;
		}
	};

	const name_lower = fullName('Tony', false);
	const name_upper = fullName('Tony', true);

	console.log(name_lower);
	console.log(name_upper);
})();
