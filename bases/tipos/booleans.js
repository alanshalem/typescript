"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman: isBatman });
    isSuperman = true || false;
    isSuperman = isBatman ? true : false;
})();
//# sourceMappingURL=booleans.js.map