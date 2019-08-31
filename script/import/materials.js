function importMaterials(materials, heads, handles, extras) {

    //
    // Check for validitiy of data.
    //

    if (typeof(materials) == `undefined` || materials == null) {
        console.error(`Material data given is invalid.`);
        return;
    }

    if (materials.length <= 0) {
        console.error(`Material data given is zero length.`);
        return;
    }

    if (typeof(heads) == `undefined` || heads == null) {
        console.error(`Head data given is invalid.`);
        return;
    }

    if (heads.length <= 0) {
        console.error(`Head data given is zero length.`);
        return;
    }

    if (typeof(handles) == `undefined` || handles == null) {
        console.error(`Handle data given is invalid.`);
        return;
    }

    if (handles.length <= 0) {
        console.error(`Handle data given is zero length.`);
        return;
    }

    if (typeof(extras) == `undefined` || extras == null) {
        console.error(`Extra data given is invalid.`);
        return;
    }

    if (extras.length <= 0) {
        console.error(`Extra data given is zero length.`);
        return;
    }

    if (materials.length != heads.length || heads.length != handles.length || handles.length != extras.length) {
        console.error(`Given material lengths and stat lengths are not equal`);
    }




    //
    // Create temporary maps.
    //

    var HEAD = new Map();
    var HANDLE = new Map();
    var EXTRA = new Map();

    var headAbilityKeys, headAbilities;
    for (var i = 0; i < heads.length; i++) {

        headAbilityKeys = heads[i].abilities.split(`\n`);

        headAbilities = [];
        for (var j = 0; j < headAbilityKeys.length; j++) {
            headAbilities.push(ABILITY.get(headAbilityKeys[j]));
        }

        HEAD.set(heads[i].id,
            head(heads[i].miningLevel, heads[i].durability, heads[i].speed, heads[i].attack, headAbilities));
    }

    var handleAbilityKeys, handleAbilities;
    for (var i = 0; i < handles.length; i++) {

        handleAbilityKeys = handles[i].abilities.split(`\n`);

        handleAbilities = [];
        for (var j = 0; j < handleAbilityKeys.length; j++) {
            handleAbilities.push(ABILITY.get(handleAbilityKeys[j]));
        }

        HANDLE.set(handles[i].id,
            handle(handles[i].durability, handles[i].modifier, handleAbilities));
    }
    
    var extraAbilityKeys, extraAbilities;
    for (var i = 0; i < extras.length; i++) {

        extraAbilityKeys = extras[i].abilities.split(`\n`);

        extraAbilities = [];
        for (var j = 0; j < extraAbilityKeys.length; j++) {
            extraAbilities.push(ABILITY.get(extraAbilityKeys[j]));
        }

        EXTRA.set(extras[i].id,
            extra(extras[i].durability, extraAbilities));
    }



    //
    // Populate the material map using the temp maps.
    //

    var addon;
    for (var i = 0; i < materials.length; i++) {
        
        addon = ADDON.get(materials[i].addon);

        modKeys = materials[i].mods.split(`\n`);
        mods = [];
        for (var m = 0; m < modKeys.length; m++) {
            mods.push(MOD.get(modKeys[m]));
        }

        MATERIAL.set(materials[i].id,
            material(materials[i].name, mods, addon, stats(
                HEAD.get(materials[i].id),
                HANDLE.get(materials[i].id),
                EXTRA.get(materials[i].id)
        )));

    }
}