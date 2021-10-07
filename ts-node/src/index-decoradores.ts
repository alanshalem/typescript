//Los decoradores son simplemente funciones que se ejecutan al momento de la transpilacion
import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');
const charmander2 = new Pokemon('Charmander');
const charmander3 = new Pokemon('Charmander');

console.log(charmander);
console.log(charmander2);
console.log(charmander3);

// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander.savePokemonToDB(5));
