(() => {
	function callBatman(): void {
		return; //retorna void
		// return 1; error, la funcion retorna void, no 1
	}

	const callSuperman = (): void => {
		return;
	};

	const a = callBatman();

	console.log(a); //a tiene el valor de void
	//undefined != void
})();
