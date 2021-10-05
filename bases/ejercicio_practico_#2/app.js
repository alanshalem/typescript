"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superheroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superheroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log('Batiseñal Activada');
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(', ');
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=app.js.map