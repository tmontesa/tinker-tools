class Addon {

    //
    // Fields
    //

    name;
    author;
    url;

    constructor(name, author, url) {
        this.setName(name);
        this.setAuthor(author);
        this.setUrl(url);
    }




    //
    // Getters
    //

    get name()   { return this.name; }
    get author() { return this.author; }
    get url()    { return this.url; }



    //
    // Setters
    //

    setName(name) {
        if (typeof(name) != `string`) {
            console.error(`Name for Addon is invalid.`);
            return;
        }

        this.name = name;
    }

    setAuthor(author) {
        if (typeof(author) != `string`) {
            console.error(`Author for Addon is invalid.`);
            return;
        }

        this.author = author;
    }

    setUrl(url) {
        if (typeof(url) != `string`) {
            console.error(`Url for Addon is invalid.`);
            return;
        }

        this.url = url;
    }
}

function addon(name, author, url) {
    return new Addon(name, author, url);
}