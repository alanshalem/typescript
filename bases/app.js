"use strict";
var msg = 'Hola Mundo!!!';
var hero = {
    name: 'Ironman',
    age: 45,
};
console.log(msg);
hero.age = 50;
console.log(hero.age + 1);
var a = 10;
var b = 10;
b = 3.1415;
var c;
c = 'Hola Mundo';
var n1 = 10;
var str1 = 'Hola str1';
function sayHello(msg) {
    console.log(msg + ' ' + 'prueba');
    console.log(msg.length);
}
sayHello(str1);
(function () {
    var a = 10;
    console.log(a);
})();
//# sourceMappingURL=app.js.map