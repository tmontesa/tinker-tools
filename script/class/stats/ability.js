class Ability {

    //
    // Fields
    //

    name;
    description;    // The description that TC gives.
    explanation;    // Explains what the effect does (since description may be ambiguous).

    constructor(name, description, explanation) {
        this.setName(name);
        this.setDescription(description);
        this.setExplanation(explanation);
    }



    
    //
    // Getters
    //

    get name()        { return this.name; }
    get description() { return this.description; }
    get explanation() { return this.explanation; }




    //
    // Setters
    //

    setName(name) {
        if (typeof(name) != `string`) {
            console.error(`Name for Ability is invalid.`);
            return;
        }

        this.name = name;
    }

    setDescription(description) {
        if (typeof(description) != `string`) {
            console.error(`Description for Ability is invalid.`);
            return;
        }

        this.description = description;
    }

    setExplanation(explanation) {
        if (typeof(explanation) != `string`) {
            console.error(`Explanation for Ability is invalid.`);
            return;
        }

        this.explanation = explanation;
    }
    
}

function ability(name, description, explanation) {
    return new Ability(name, description, explanation);
}