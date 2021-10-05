"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return firstName + " " + (lastName || '---');
    };
    var name = fullName('Tony');
    // let noName: any;
    // const name2 = fullName(noName, 'Perez');
    console.log(name);
    // console.log(name2);
})();
