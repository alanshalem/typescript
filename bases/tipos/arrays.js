"use strict";
(() => {
    const numbers = [
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
    const villian = ['Omega Rojo', 'Dorammu', 'Duende Verde'];
    villian.forEach((v) => {
        console.log(v.toUpperCase());
    });
    numbers.push(11);
    numbers.push(true);
    numbers.push('13');
    console.log(numbers);
})();
//# sourceMappingURL=arrays.js.map