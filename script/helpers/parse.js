function parseNumber(s) {
    
    // If it's a number, and not a string, return it.
    // If it's a string as a number...
        // If it has a '.', parse as float.
        // Otherwise, parse as integer.
    // Otherwise, if it's a string that's not a number, return NaN.

    if (typeof(s) == `number`) {
        return s;
    }

    if (typeof(s) == `string` && !isNaN(s)) {
        if (s.includes(`.`)) {
            return parseFloat(s);
        } else {
            return parseInt(s);
        }
    }

    return NaN;
}