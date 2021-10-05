"use strict";
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
//# sourceMappingURL=args-optional.js.map