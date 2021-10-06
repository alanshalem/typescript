(() => {
	class Avenger {
		name;
		power;

		constructor(name = 'No name', power = 0) {
			this.name = name;
			this.power = power;
		}
	}

	class FlyingAvenger extends Avenger {
		constructor(name, power) {
			super(name, power);
			this.flying = flying;

			this.otraPropiedad = true; //esto conlleva a errores
		}
	}

	const hulk = new Avenger('Hulk', 9001);
	const falcon = new Avenger('Falcon', 50, true);
	console.log(hulk);
})();
