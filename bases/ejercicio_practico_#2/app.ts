//Funciones basicas
function sumar(a: number, b: number): number {
	return a + b;
}

const contar = (heroes: string[]): number => {
	return heroes.length;
};

const superheroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superheroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = true): void => {
	if (llamar) {
		console.log('Batiseñal Activada');
	}
};

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
	return personas.join(', ');
};

//Tipo Funcion
const noHaceNada = (
	numero: number,
	texto: string,
	booleano: boolean,
	arreglo: any[]
) => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: any[]) => void;

noHaceNadaTampoco = noHaceNada;
