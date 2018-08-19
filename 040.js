/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function(candidates, target) {
//     function _find (index, res, subAns) {
//         if (res == 0) {
//             ans.push(subAns);
//             return ;
//         } else if (index >= candidates.length || res < 0) {
//             return ;
//         }
//         console.log(index);
//         subAns.push(candidates[index]);
//         _find(index + 1, res - candidates[index], subAns.slice());
//         subAns.pop();
//         _find(index + 1, res, subAns.slice());
//     }
//     let ans = [];
//     candidates = candidates.sort((a, b) => {
//         return a - b;
//     });
//     console.log(candidates);
//     _find(0, target, []);
//     return ans;
// };

var combinationSum2 = function (candidates, target) {
    function _find(index, res, subAns) {
        console.log('index: ', index);
        if (res == 0) {
            ans.push(subAns);
            return ;
        } else if (index >= candidates.length || res < 0) {
            return ;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            } else {
                subAns.push(candidates[i]);
                _find(i + 1, res - candidates[i], subAns.slice());
                subAns.pop();
            }
        }
    }
    let ans = [];
    candidates = candidates.sort((a, b) => {
        return a - b;
    });
    console.log(candidates);
    _find(0, target, []);
    return ans;
};

let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates, target));

