"use strict";
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superheroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superheroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal Activada');
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=app.js.map