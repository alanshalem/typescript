(() => {
	class Avenger {
		constructor(public name: string, public realName: string) {
			console.log('Constructor Avenger llamado!');
		}

		protected getFullName() {
			return `${this.getFullName} ${this.realName}`;
		}
	}

	class Xmen extends Avenger {
		constructor(
			public name: string,
			public realName: string,
			public isMutant: boolean
		) {
			super(name, realName);
		}

		get fullName() {
			return `${this.name} - ${this.realName}`;
		}

		set fullName(name: string) {
			if (name.length < 3) {
				throw new Error('El nombre debe ser mayor de 3 letras');
			}
			this.name = name;
		}
		getFullNameDesdeXmen() {
			console.log(super.getFullName());
		}
	}

	const wolverine = new Xmen('Wolverine', 'Logan', true);

	console.log(wolverine);
	wolverine.getFullNameDesdeXmen();
	wolverine.fullName = 'Logan';
	console.log(wolverine.fullName);
})();
