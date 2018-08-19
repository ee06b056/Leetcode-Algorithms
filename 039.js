/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    function _find(candidates, i, target, subAns) {
        if (i >= candidates.length) {
            return;
        }
        _find(candidates, i + 1, target, subAns.slice());
        let res = target - candidates[i];
        if (res == 0) {
            subAns.push(candidates[i]);
            ans.push(subAns);
            return;
        } else if (res > 0) {
            subAns.push(candidates[i]);
            _find(candidates, i, res, subAns.slice());
        } else {
            return;
        }
    }
    _find(candidates, 0, target, []);
    return ans;
};

let candidates = [2, 5,6, 7], target = 8;

console.log(combinationSum(candidates, target));