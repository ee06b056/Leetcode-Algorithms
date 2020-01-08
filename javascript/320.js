/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    let l = word.length;
    let tempstr;
    let results = [];
    for (let i = 0; i < 2**l; i++) {
        tempstr = '';
        for (let j = 0; j < l; j++) {
            if ((i >> j)%2 == 0) {
                tempstr += word[j];
            } else {
                tempstr += '1';
            }
        }
        results.push(tempstr);
    }

    for (let i = 0; i < results.length; i++) {
        results[i] = parseLetter(results[i]);
    }
    return results;
};
function parseLetter (letter) {
    let result = '';
    let tempNum = 0;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] != '1' && tempNum == 0) {
            result += letter[i];
        } else if (letter[i] != '1' && tempNum != 0) {
            result += tempNum.toString();
            result += letter[i];
            tempNum = 0;
        } else {
            tempNum++;
        }
    }
    if (tempNum != 0) {
        result += tempNum.toString();
    }
    return result;
}
let ans = generateAbbreviations('word');
console.log(ans);