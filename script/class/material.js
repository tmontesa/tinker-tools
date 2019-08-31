class Material {

    //
    // Fields
    //

    name;   
    mods = [];  // Which mod the material comes from. 
    addon;      // Which mod the matrial is implemented for TC.
    stats;      // Stats for head, handle, and extra pieces.

    constructor(name, mods, addon, stats) {
        this.setName(name);
        this.setMods(mods);
        this.setAddon(addon);
        this.setStats(stats);
    }




    //
    // Getters
    //

    get name()  { return this.name; }
    get mods()  { return this.mods; }
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

    setMods(mods) {
        for (var i = 0; i < mods.length; i++) {
            if (!(mods[i] instanceof Mod)) {
                console.error(`Mod for Material is invalid.`);
                return;
            }
        }
        
        this.mods = mods;
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

function material(name, mods, addon, stats) {
    return new Material(name, mods, addon, stats);
}