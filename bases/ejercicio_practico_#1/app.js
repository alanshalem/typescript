"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaAcuaman = Fuerza.fuerzaAcuaman;
    var fuerzaBatman = Fuerza.fuerzaBatman;
    var fuerzaFlash = Fuerza.fuerzaFlash;
    var fuerzaSuperman = Fuerza.fuerzaSuperman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
