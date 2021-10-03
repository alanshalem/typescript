"use strict";
var msg = 'Hola Mundo!!!';
var hero = {
    name: 'Ironman',
    age: 45,
};
console.log(msg);
hero.age = 50;
console.log(hero.age + 1);
var a = 10; //a no se puede cambiar (es una constante), por lo tanto ts no infiere el tipo
var b = 10; //b es un numero, como esta declarado con let se puede cambiar, ts infiere el tipo
b = 3.1415;
var c; //c es de tipo any, ya que no inferimos el tipo
c = 'Hola Mundo';
// c = 2.7182;
// c = {};
// c = [];
// c = true;
var n1 = 10;
var str1 = 'Hola str1';
function sayHello(msg) {
    console.log(msg + ' ' + 'prueba');
    console.log(msg.length);
}
sayHello(str1);
//Funcion Anonima Autoinvocada
(function () {
    var a = 10;
    console.log(a);
})();
