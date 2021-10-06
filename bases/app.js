"use strict";
const msg = 'Hola Mundo!!!';
const hero = {
    name: 'Ironman',
    age: 45,
};
console.log(msg);
hero.age = 50;
console.log(hero.age + 1);
const a = 10;
let b = 10;
b = 3.1415;
let c;
c = 'Hola Mundo';
const n1 = 10;
let str1 = 'Hola str1';
function sayHello(msg) {
    console.log(msg + ' ' + 'prueba');
    console.log(msg.length);
}
sayHello(str1);
(() => {
    const a = 10;
    console.log(a);
})();
//# sourceMappingURL=app.js.map