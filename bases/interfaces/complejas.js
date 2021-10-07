"use strict";
(() => {
    const client = {
        name: 'Alan',
        age: 22,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Melisa',
        age: 25,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KS2 U2A',
        },
    };
})();
//# sourceMappingURL=complejas.js.map