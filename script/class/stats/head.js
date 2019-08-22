class Head {

    //
    // Fields
    //

    miningLevel;
    durability;
    speed;
    attack;
    abilities = [];

    constructor(miningLevel, durability, speed, attack, abilities) {
        this.setMiningLevel(miningLevel);
        this.setDurability(durability);
        this.setSpeed(speed);
        this.setAttack(attack);
        this.setAbilities(abilities);
    }




    //
    // Getters
    //

    get miningLevel() { return this.miningLevel; }
    get durability()  { return this.durability; }
    get speed()       { return this.speed; }
    get attack()      { return this.attack; }
    get abilities()   { return this.abilities; }




    //
    // Setters
    //

    setMiningLevel(miningLevel) {
        if (isNaN(miningLevel)) {
            console.error(`Mining Level is invalid.`);
            return;
        }

        this.miningLevel = parseNumber(miningLevel);
    }

    setDurability(durability) {
        if (isNaN(durability)) {
            console.error(`Durability is invalid.`);
            return;
        }

        this.durability = parseNumber(durability);
    }

    setSpeed(speed) {
        if (isNaN(speed)) {
            console.error(`Speed is invalid.`);
            return;
        }

        this.speed = parseNumber(speed);
    }

    setAttack(attack) {
        if (isNaN(attack)) {
            console.error(`Attack is invalid.`);
            return;
        }

        this.attack = parseNumber(attack);
    }

    setAbilities(abilities) {
        if (isNaN(abilities)) {
            console.error(`Abilities is invalid.`);
            return;
        }

        this.abilities = abilities;
    }

}

function head(durability, modifier, abilities) {
    return new Head(durability, modifier, abilities);
}