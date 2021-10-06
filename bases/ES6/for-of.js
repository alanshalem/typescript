"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, captainAmerica];
    for (let index = 0; index < avengers.length; index++) {
        const element = avengers[index];
        console.log(element);
    }
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name);
    }
})();
//# sourceMappingURL=for-of.js.map