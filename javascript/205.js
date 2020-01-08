/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] == undefined) {
            if (hash['1'+t[i]]) {
                return false;
            } else {
                hash[s[i]] = t[i];
                hash['1'+t[i]] = 1;
            }
        } else if (hash[s[i]] != t[i]) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('ab','ca'));