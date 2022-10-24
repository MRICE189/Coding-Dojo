class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }
        else {
            console.log('Target is not a unit')
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === 'power') {
                target.power += this.magnitude
            }
            else if (this.stat === 'resilience') {
                target.res += this.magnitude
            }
        }
        else {
            console.log('Target is not a unit')
        }
    }
}

const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect("Hard Algorith", 2, "Increase the target's resilience by 3", "resilience", 3);
hardAlgo.play(redBelt);
console.log(redBelt);

const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
unhandledPromise.play(redBelt);
console.log(redBelt);

const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);
pairProgramming.play(redBelt);
console.log(redBelt);

redBelt.attack(blackBelt)
console.log(blackBelt)