(() => {
	const addNumbers = (a: number, b: number) => a + b;
	const greet = (name: string) => `Hola ${name}`;
	const saveTheWorld = () => `El mundo esta salvado`;

	// let myFunction: Function; //(1)
	// let myFunction: (y: number, z: number) => number; //(2)
	// let myFunction: (y: string) => string; //(3)
	let myFunction: () => string; //(4)

	//* (1)
	//* myFunction = 10;
	//* console.log(myFunction);

	//* (2)
	//* myFunction = addNumbers;
	//* console.log(myFunction(1, 2));

	//* (3)
	//* myFunction = greet;
	//* console.log(myFunction('Alan'));

	//* (4)
	myFunction = saveTheWorld;
	console.log(myFunction());
})();
