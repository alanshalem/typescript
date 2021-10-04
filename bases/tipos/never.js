"use strict";
(function () {
    //En pocas palabras, el never significa que la funcion no tiene que terminar exitosamente, debe terminar con un Error
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
    // console.log('No puede ir el console log aca');
})();
