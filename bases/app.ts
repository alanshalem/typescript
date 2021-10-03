const msg: string = 'Hola Mundo!!!';

const hero = {
	name: 'Ironman',
	age: 45,
};

console.log(msg);

hero.age = 50;

console.log(hero.age + 1);

const a: number = 10; //a no se puede cambiar (es una constante), por lo tanto ts no infiere el tipo
let b: number = 10; //b es un numero, como esta declarado con let se puede cambiar, ts infiere el tipo
b = 3.1415;
let c: string; //c es de tipo any, ya que no inferimos el tipo
c = 'Hola Mundo';
// c = 2.7182;
// c = {};
// c = [];
// c = true;

const n1: number = 10;
let str1: string = 'Hola str1';

function sayHello(msg: string) {
	console.log(msg + ' ' + 'prueba');
	console.log(msg.length);
}

sayHello(str1);

//Funcion Anonima Autoinvocada
(() => {
	const a: number = 10;
	console.log(a);
})();
