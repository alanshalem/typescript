"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    let noName;
    console.log(name);
})();
//# sourceMappingURL=args-required.js.map