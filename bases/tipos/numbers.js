"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20; //si no declaro el tipo typescript me lo infiere, pero me da error
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = 123;
    console.log({ avengers: avengers });
    avengers = Number('55');
    console.log({ avengers: avengers });
    avengers = Number('55A'); //NaN es considerado un numero en JS
})();
