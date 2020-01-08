// Solution 1

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dictionary = dictionary;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let wordLenth = word.length;
    for (let element of this.dictionary) {
        elementLength = element.length;
        if (element == word || elementLength != wordLenth || element[0] != word[0] || element[elementLength - 1] != word[wordLenth - 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

//  Solution 2

/**
 * @param {string[]} dictionary
 */
function toAbbr (word) {
    let l = word.length;
    if (l <= 2) {
        return word;
    } else {
        return word[0]+String(l-2)+word[l-1];
    }
}

var ValidWordAbbr = function(dictionary) {
    this.dicMap = {};
    for (let i of dictionary) {
        let wordAbbr = toAbbr(i);
        if (!this.dicMap[wordAbbr]) {
            this.dicMap[wordAbbr] = [i];
        } else {
            this.dicMap[wordAbbr].push(i);
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let wordAbbr = toAbbr(word);
    if (!this.dicMap[wordAbbr]) {
        return true;
    } else {
        for (let i of this.dicMap[wordAbbr]) {
            if (i != word) {
                return false;
            }
        }
        return true;
    }
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */