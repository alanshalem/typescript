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
(function () {
    var a = 'Alan';
    console.log(a);
    var NOMBRE = 'Alan';
    var getName = function () { };
    var heroe = {
        a: 1,
        b: 2,
    };
    heroe.b = 100;
})();
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
(function () {
    var batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log('Disparando');
        },
    };
    var villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, upper, lastName) {
        if (upper) {
            return (firstName + " " + (lastName || '----')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '----');
        }
    };
    var name_lower = fullName('Tony', false);
    var name_upper = fullName('Tony', true);
    console.log(name_lower);
    console.log(name_upper);
})();
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return firstName + " " + (lastName || '---');
    };
    var name = fullName('Tony');
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return firstName + " " + lastName;
    };
    var name = fullName('Tony', 'Stark');
    var noName;
    console.log(name);
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Fuerza'],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = 'Alan';
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = { name: 'Bruce', age: 43, powers: [1] };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [
        1,
        2,
        3,
        4,
        5,
        '6',
        7,
        8,
        9,
        10,
        false,
    ];
    var villian = ['Omega Rojo', 'Dorammu', 'Duende Verde'];
    villian.forEach(function (v) {
        console.log(v.toUpperCase());
    });
    numbers.push(11);
    numbers.push(true);
    numbers.push('13');
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman: isBatman });
    isSuperman = true || false;
    isSuperman = isBatman ? true : false;
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
})();
(function () {
    var isActive = undefined;
    console.log(isActive);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = 123;
    console.log({ avengers: avengers });
    avengers = Number('55');
    console.log({ avengers: avengers });
    avengers = Number('55A');
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna's Verde";
    var volcanNegro = "Heroe: Volcan Negro";
    var abc = 123;
    console.log(batman.toUpperCase() + ", " + abc.toString());
    console.log("" + (((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente'));
})();
(function () {
    var hero = ['Dr Strange', 100];
    var trio = ['String', 10, true];
    console.log(hero);
    console.log(trio);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map