"use strict";
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatiSignal);
    var heroName = returnName();
})();
