function importMods(mods) {

    if (typeof(mods) == `undefined` || mods == null) {
        console.error(`Mod data given is invalid.`);
        return;
    }

    if (mods.length <= 0) {
        console.error(`Mod data given is zero length.`);
        return;
    }

    for (var i = 0; i < mods.length; i++) {
        MOD.set(mods[i].id, 
            mod(mods[i].name, mods[i].author, mods[i].url));
    }

}