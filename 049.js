/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map(), ans = [];
    for (let word of strs) {
        let key = convertWordToCharString(word);
        if (map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word,]);
        }
    }
    map.forEach((value) => {
        ans.push(value);
    });
    return ans;
};

function convertWordToCharString (word) {
    let alphbts = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        alphbts[word.charCodeAt(i) - 97]++;
    }
    return alphbts.join('');
}