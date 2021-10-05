"use strict";
(function () {
    var fullName = function (firstName, upper, lastName) {
        if (upper) {
            return (firstName + " " + (lastName || '----')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '----');
        }
    };
    var name_lower = fullName('Tony', false);
    var name_upper = fullName('Tony', true);
    console.log(name_lower);
    console.log(name_upper);
})();
