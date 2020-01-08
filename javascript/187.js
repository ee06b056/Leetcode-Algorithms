/*
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const ans = [];
    if (s.length <= 10) return ans;
    const subMap = new Map();
    for (let i = 0; i < s.length - 9; i++) {
        let subS = s.substring(i, i + 10);
        if (!subMap.has(subS)) {
            subMap.set(subS, 1);
        } else if (subMap.get(subS) == 1){
            ans.push(subS);
            subMap.set(subS, 2);
        }
    }
    return ans;
};