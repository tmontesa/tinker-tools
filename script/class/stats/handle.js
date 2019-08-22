class Handle {

    //
    // Fields
    //

    durability;
    modifier;
    abilities = [];

    constructor(durability, modifier, abilities) {
        this.setDurability(durability);
        this.setModifier(modifier);
        this.setAbilities(abilities);
    }




    //
    // Getters
    //

    get durability()  { return this.durability; }
    get modifier()    { return this.modifier; }
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

    setModifier(modifier) {
        if (isNaN(modifier)) {
            console.error(`Modifier is invalid.`);
            return;
        }

        this.modifier = parseNumber(modifier);
    }

    setAbilities(abilities) {
        if (isNaN(abilities)) {
            console.error(`Abilities is invalid.`);
            return;
        }

        this.abilities = abilities;
    }

}

function handle(durability, modifier, abilities) {
    return new Handle(durability, modifier, abilities);
}