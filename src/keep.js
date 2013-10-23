/**
 * Keep.js
 * Written By Andrew Mead
 */

/**
 * Object.keep
 *
 */
Object.prototype.keep = function (toKeep) {
    // object that will be returned
    var keeping = {};

    /**
     * match
     *
     * @param orig - the object that keep was called on
     * @param toKeep - the only parameter of keep
     * @param keeping - the object to modify and return
     */
    function match (orig, toKeep, keeping) {
        var key;

        for (key in orig) {
            // if it has the property and its set to be kept
            if(orig.hasOwnProperty(key) && toKeep[key] === true) {
                keeping[key] = orig[key]
            // if it's an object, go deeper
            } else if (Array.isArray(orig[key])) {
                keeping[key] = [];
                matchArray.call(undefined, orig[key], toKeep[key], keeping[key])
            } else if (typeof toKeep[key] === 'object') {

                // added an empty object if its undefined
                if (typeof keeping[key] === 'undefined') {
                    keeping[key] = {};
                }

                // call the same function, but with the current key
                match.call(undefined, orig[key], toKeep[key], keeping[key]);
            }
        }
    }

    /**
     * matchArray
     *
     * is the object if an array, run method to filter all the arrays objects*/
    function matchArray (orig, toKeep, keeping) {
        // navigate though arrays and shit
        var i;
        for (i = 0; i < orig.length; i++) {
            keeping[i] = {};
            match.call(undefined, orig[i], toKeep[0], keeping[i])
        }
    }

    match.call(undefined, this, toKeep, keeping);

    return keeping;
};