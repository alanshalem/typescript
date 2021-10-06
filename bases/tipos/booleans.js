"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman });
    isSuperman = true || false;
    isSuperman = isBatman ? true : false;
})();
//# sourceMappingURL=booleans.js.map