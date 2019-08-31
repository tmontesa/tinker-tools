class TabbedContent {

    //
    // Fields
    //

    id = null;
    tabElement = null;
    contentElement = null;

    constructor(id, tabElement, contentElement) {
        this.setId(id);
        this.setTabElement(tabElement);
        this.setContentElement(contentElement);
    }




    //
    // Getters
    //

    get id()             { return this.id; }
    get tabElement()     { return this.tabElement; }
    get contentElement() { return this.contentElement; }




    //
    // Setters 
    //

    setId(id) {
        this.id = id;
    }
    
    setTabElement(tabElement) {
        if (tabElement instanceof HTMLElement) {
            this.tabElement = tabElement;
        } else if (document.getElementById(tabElement) != null) {
            this.tabElement = document.getElementById(tabElement);
        } else {
            console.error(`Given TabElement is invalid.`);
            return;
        }
    }

    setContentElement(contentElement) {
        if (contentElement instanceof HTMLElement) {
            this.contentElement = contentElement;
        } else if (document.getElementById(contentElement) != null) {
            this.contentElement = document.getElementById(contentElement);
        } else {
            console.error(`Given ContentElement is invalid.`);
            return;
        }
    }




    //
    // Functions
    //

    enable() {
        this.tabElement.classList.add(`selected`);
        this.contentElement.classList.add(`selected`);
    }

    disable() {
        this.tabElement.classList.remove(`selected`);
        this.contentElement.classList.remove(`selected`);
    }

}




class TabbedContentGroup {

    //
    // Fields
    //

    tabbedContents = [];

    constructor(tabbedContents) {
        this.setTabbedContents(tabbedContents);
    }




    //
    // Getters
    //

    get tabbedContents() { return this.tabbedContents; }




    //
    // Setters
    //

    setTabbedContents(tabbedContents) {
        for (var i = 0; i < tabbedContents.length; i++) {
            if (!(tabbedContents[i] instanceof TabbedContent)) {
                console.error(`Given TabContent is invalid.`);
                return;
            }
        }

        this.tabbedContents = tabbedContents;
    }




    //
    // Function
    //

    selectTabbedContent(tabbedContentId) {
        for (var i = 0; i < this.tabbedContents.length; i++) {
            if (this.tabbedContents[i].id == tabbedContentId) {
                this.tabbedContents[i].enable();
            } else {
                this.tabbedContents[i].disable();
            }
        }
    }

}


function tabbedContent(id, tabElement, contentElement) {
    return new TabbedContent(id, tabElement, contentElement);
}

function tabbedContentGroup(tabbedContents) {
    return new TabbedContentGroup(tabbedContents);
}