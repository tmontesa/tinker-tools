class Extra {

    //
    // Fields
    //

    durability;
    abilities = [];

    constructor(durability, abilities) {
        this.setDurability(durability);
        this.setAbilities(abilities);
    }




    //
    // Getters
    //

    get durability()  { return this.durability; }
    get abilities()   { return this.abilities; }




    //
    // Setters
    //

    setDurability(durability) {
        if (isNaN(durability)) {
            console.error(`Durability is invalid.`);
            return;
        }

        this.durability = parseNumber(durability);
    }

    setAbilities(abilities) {
        if (isNaN(abilities)) {
            console.error(`Abilities is invalid.`);
            return;
        }

        this.abilities = abilities;
    }

}

function extra(durability, abilities) {
    return new Extra(durability, abilities);
}