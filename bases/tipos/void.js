"use strict";
(function () {
    function callBatman() {
        return; //retorna void
        // return 1; error, la funcion retorna void, no 1
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a); //a tiene el valor de void
    //undefined != void
})();
