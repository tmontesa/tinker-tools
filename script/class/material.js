class Material {

    //
    // Fields
    //

    name;   
    mod;    // Which mod the material comes from. 
    addon;  // Which mod the matrial is implemented for TC.
    stats;  // Stats for head, handle, and extra pieces.

    constuctor(name, mod, addon, stats) {
        this.setName(name);
        this.setMod(mod);
        this.setAddon(addon);
        this.setStats(stats);
    }




    //
    // Getters
    //

    get name()  { return this.name; }
    get mod()   { return this.mod; }
    get addon() { return this.addon; }
    get stats() { return this.stats; }




    //
    // Setters
    //

    setName(name) {
        if (typeof(name) != `string`) {
            console.error(`Name for Material is invalid.`);
            return;
        }

        this.name = name;
    }

    setMod(mod) {
        if (!(mod instanceof Mod)) {
            console.error(`Mod for Material is invalid.`);
            return;
        }

        this.mod = mod;
    }

    setAddon(addon) {
        if(!(addon instanceof Addon)) {
            console.error(`Addon for Material is invalid.`);
            return;
        }

        this.addon = addon;
    }

    setStats(stats) {
        if(!(stats instanceof Stats)) {
            console.error(`Stats for Material is invalid.`);
            return;
        }

        this.stats = stats;
    }

}

function material(name, mod, addon, stats) {
    return new Material(name, mod, addon, stats);
}