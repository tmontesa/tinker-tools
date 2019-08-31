function importFile(filename) {
    var xhr = new XMLHttpRequest();
    var status = document.location.protocol === "file:" 
        ? 0 : 200;

    xhr.open('GET', filename, false);
    xhr.send(null);

    return xhr.status == status 
        ? xhr.responseText : null;
};

function importJSON(filename) {
    return JSON.parse(importFile(filename));
}

function importImage(filename) {
    var img = new Image();
    img.src = filename;
    return img;
}