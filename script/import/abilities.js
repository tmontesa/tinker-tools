function importAbilities(abilities) {

    if (typeof(abilities) == `undefined` || abilities == null) {
        console.error(`Ability data given is invalid.`);
        return;
    }

    if (abilities.length <= 0) {
        console.error(`Ability data given is zero length.`);
        return;
    }

    for (var i = 0; i < abilities.length; i++) {
        ABILITY.set(abilities[i].id, 
            ability(abilities[i].name, abilities[i].description, abilities[i].explanation));
    }

}