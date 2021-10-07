function printToConsole(constructor: Function) {
	console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
	if (print) {
		return printToConsole;
	}
	return () => {
		return () => {};
	};
};

const bloquearPrototipo = function (constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		console.log({ target, propertyKey, descriptor });

		const originalMethod = descriptor.value;

		descriptor.value = (id: number) => {
			console.log(`Hola mundo`);
			if (id < 1 || id > 800) {
				return console.error(
					`EL ID DEL POKEMON DEBE ESTAR ENTRE 1 Y 800`
				);
			} else {
				return originalMethod(id);
			}
		};
	};
}

function readonly(isWritable: boolean = true): Function {
	return function (
		target: any,
		propertyKey: string
		// descriptor: PropertyDescriptor
	) {
		console.log({ target, propertyKey });
		const descriptor: PropertyDescriptor = {
			get() {
				console.log(this);
				return 'Alan';
			},
			set(this, val) {
				console.log(this, val);
				Object.defineProperty(this, propertyKey, {
					value: val,
					writable: !isWritable,
					enumerable: false,
				});
			},
		};
	};
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
	public publicApi: string = 'https://pokeapi.co';
	constructor(public name: string) {}

	@CheckValidPokemonId()
	savePokemonToDB(id: number) {
		console.log(`Pokemon guardado en DB ${id}`);
	}
}
