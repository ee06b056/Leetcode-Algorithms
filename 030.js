/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s == '' || words.length === 0) {
        return [];
    }
    let map = words_to_map(words);
    let ans = [], step = words[0].length, subs_length = step * words.length;
    console.log(map);
    for (let i = 0; i < s.length - subs_length + 1; i++) {
        if (checksubstring(s.slice(i, i+subs_length),map, step)) {
            ans.push(i);
        }
    }
    return ans;
};
function words_to_map (words) {
    let map = new Map();
    for (word of words) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    return map;
}
function checksubstring (subs, map, step) {
    let mapClone = new Map(map);
    for (let i = 0; i < subs.length; i += step) {
        let word = subs.slice(i, i+step);
        if (!mapClone.has(word) || mapClone.get(word) == 0) {
            return false;
        } else {
            mapClone.set(word, mapClone.get(word) - 1);
        }
    }
    return true;
}

let s = 'wordgoodgoodgoodbestword', words = ['word', 'good', 'best', 'word'];
console.log(findSubstring(s, words));