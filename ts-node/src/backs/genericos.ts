// import { Hero as Superhero, Hero2 } from './classes/Hero';
import { Villian, Hero } from '../interfaces';

import {
	printObject,
	genericFunction,
	genericFunctionArrow,
} from '../generics/generic';

console.log('Hola Mundo!!!!');
// import powers, { Power } from './data/powers';
// import * as HeroClasses from './classes/Hero';
// const Hero = 123;

// const ironman = new Hero('Tony Stark', 1, 30);

// console.log(ironman);

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject('Hola Mundo');

console.log(genericFunction(3.141618).toFixed(2));
// console.log(genericFunction('Hola Mundo').toFixed(2));
// console.log(genericFunction(new Date()).toFixed(2));

const deadpool = {
	name: 'Deadpool',
	realName: 'Wade Winston Wilson',
	dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
