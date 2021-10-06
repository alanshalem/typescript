(() => {
	interface Client {
		name: string;
		age?: number;
		address: Address; //interfaz anidada
		getFullAddress?(id: string): string; //Una interface no implementa los metodos, solo le dice que debe contener la funcion
	}

	interface Address {
		id: number;
		zip: string;
		city: string;
	}

	const client: Client = {
		name: 'Alan',
		age: 22,
		address: {
			id: 125,
			zip: 'KY2 SUD',
			city: 'Ottawa',
		},
		getFullAddress(id: string) {
			return this.address.city;
		},
	};

	const client2: Client = {
		name: 'Melisa',
		age: 25,
		address: {
			city: 'Toronto',
			id: 120,
			zip: 'KS2 U2A',
		},
	};
})();
