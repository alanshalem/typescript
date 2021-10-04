(() => {
	const hero: string = 'Flash';

	function returnName(): string {
		return hero;
	}

	const activateBatiSignal = (): string => {
		return 'Batiseñal Activada!';
	};

	console.log(typeof activateBatiSignal);

	const heroName = returnName();
})();
