"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return firstName + " " + lastName;
    };
    var name = fullName('Tony', 'Stark');
    var noName;
    var name2 = fullName(noName, 'Perez');
    console.log(name);
})();
