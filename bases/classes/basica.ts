(() => {
	class Avenger {
		// private name: string = 'Scott Lang';
		// public team: string;
		// public realName?: string;
		static avgAge: number = 35;
		static getAvgAge = () => {
			return this.name;
		};
		constructor(
			private name: string,
			public team: string,
			public realName?: string,
			avgAge: number = 55
		) {}
		public bio() {
			return `${this.name} (${this.team})`;
		}
	}

	const antman: Avenger = new Avenger('Antman', 'Capitan');
	console.log(antman);
	// console.log(Avenger.avgAge); //avgAge es una propiedad estatica, debo acceder a ella haciendo referencia a la clase
	console.log(antman.bio());
	console.log(Avenger.getAvgAge());
})();
