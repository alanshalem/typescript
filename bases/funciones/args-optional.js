"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName || '---'}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map