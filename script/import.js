var ABILITY     = new Map();
var MOD         = new Map();
var ADDON       = new Map();
var MATERIAL    = new Map();

function importData() {
    var data = importJSON(`/assets/data/data.json`);
    
    importAbilities(data.Ability);
    importMods(data.Mod);
    importAddons(data.Addon);
    importMaterials(data.Material, data.Head, data.Handle, data.Extra);
}