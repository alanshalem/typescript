"use strict";
(() => {
    var _a;
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    _a = Avenger;
    Avenger.avgAge = 35;
    Avenger.getAvgAge = () => {
        return _a.name;
    };
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=basica.js.map