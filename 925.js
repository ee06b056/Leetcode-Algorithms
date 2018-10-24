/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name.length == 0) {
        return true;
    } else if (typed.length < name.length) {
        return false;
    }
    let i =  0;
    for (let j= 0; j < typed.length; j++) {
        if (i < name.length && typed[j] == name[i]) {
            i++;
            continue;
        } else if (i > 0 && typed[j] == name[i - 1]) {
            continue;
        }
        return false;
    }
    return i == name.length;
};

let name = 'laiden', typed = 'laiden';

console.log(isLongPressedName(name, typed));