class Stats {
    
    //
    // Fields
    //

    head;
    handle;
    extra;

    constructor(head, handle, extra) {
        this.setHead(head);
        this.setHandle(handle);
        this.setExtra(extra);
    }




    //
    // Getters
    //

    get head()   { return this.head; }
    get handle() { return this.handle; }
    get extra()  { return this.extra; }




    //
    // Setters
    //

    setHead(head) {
        if (!(head instanceof Head)) { 
            console.error(`Head is invalid.`);
            return;
        }

        this.head = head;
    }

    setHandle(handle) {
        if (!(handle instanceof Handle)) { 
            console.error(`Handle is invalid.`);
            return;
        }

        this.handle = handle;
    }

    setExtra(extra) {
        if (!(extra instanceof Extra)) { 
            console.error(`Extra is invalid.`);
            return;
        }

        this.extra = extra;
    }
    
}

function stats(head, handle, extra) {
    return new Stats(head, handle, extra);
}