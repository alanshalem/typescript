(() => {
	class Mutante {
		constructor(public name: string, public realName: string) {}
	}

	class Xmen extends Mutante {
		salvarMundo() {
			return 'Mundo Salvado';
		}
	}

	class Villian extends Mutante {
		conquistarMundo() {
			return 'Mundo Conquistado';
		}
	}

	const wolverine = new Xmen('Wolverine', 'Logan');
	const magneto = new Villian('Magneto', 'Magnus');
	console.log(wolverine.salvarMundo());
	console.log(magneto.conquistarMundo());

	const printName = (character: Mutante) => {
		console.log(character.realName);
	};

	printName(wolverine);
})();
