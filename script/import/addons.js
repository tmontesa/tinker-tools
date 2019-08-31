function importAddons(addons) {

    if (typeof(addons) == `undefined` || addons == null) {
        console.error(`Addon data given is invalid.`);
        return;
    }

    if (addons.length <= 0) {
        console.error(`Addon data given is zero length.`);
        return;
    }

    for (var i = 0; i < addons.length; i++) {
        ADDON.set(addons[i].id, 
            addon(addons[i].name, addons[i].author, addons[i].url));
    }

}