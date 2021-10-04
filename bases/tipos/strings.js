"use strict";
(function () {
    var _a;
    //hay 3 formas de definir strings
    var batman = 'Batman';
    var linternaVerde = "Linterna's Verde";
    var volcanNegro = "Heroe: Volcan Negro";
    var abc = 123;
    console.log(batman.toUpperCase() + ", " + abc.toString());
    console.log("" + (((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente'));
})();
