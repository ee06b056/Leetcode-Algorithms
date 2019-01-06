/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1 DP
// var findNumberOfLTS = function (nums) {

// };

// solution 2 tree
var findNumberOfLIS = function(nums) {
    class Node {
        constructor (value, count) {
            this.v = value;
            this.count = count;
            this.left = this.right = null;
        }

        insert (value) {
            if (value <= this.v) {
                this.left == null ? this.left = new Node(value, this.count) : this.left.insert(value);
            } else {
                this.right == null ? this.right = new Node(value, this.count + 1) : this.right.insert(value);
                if (this.left != null) {
                    this.left.insert(value);
                }
            } 
        }

        findAns (ans) {
            if (this.right == null) {
                if (this.count == ans[0]) {
                    ans[1]++;
                } else if (this.count > ans[0]) {
                    ans[0] = this.count;
                    ans[1] = 1;
                }

            } else {
                this.right.findAns(ans);
            }
            if (this.left != null) {
                this.left.findAns(ans);
            }
        }

        
    };
    if (nums.length <= 1) return nums.length;
    const root = new Node(nums[0], 1);
    for (let i = 1; i < nums.length; i++) {
        root.insert(nums[i]);
    }
    const ans = [1, 0];
    root.findAns(ans);
    return ans[1];
};

let nums = [45,-55,74,28,16,20,62,14,88,15,36,29,-94,63,91,-88,15,-89,-9,-56,47,91,76,-9,-97,97,10,8,73,-46,3,-14,-31,31,78,93,100,-24,24,-19,88,64,91,61,40,73,-29,87,47,24,-79,66,63,67,75,37,87,59,-74,74,28,79,14,62,72,-33,45,0,10,31,-51,32,61,73,90,70,54,96,-54,59,76,21,52,96,-86,19,-64,-13,68,-100,26,31,84,4,-75,11,64,36,40,-20,48,18,-34,72,51,-8,10,-66,42,64,67,94,70,77,0,47,12,25,14,-95,32,-98,15,73,80,19,66,-81,40,-38,88,-55,-76,19,67,-57,74,41,82,26,31,68,67,70,-30,-78,-25,82,-63,89,4,-86,46,0,-60,-33,-60,-72,47,97,4,39,37,76,70,58,-70,59,63,87,55,-96,28,66,35,75];

console.log(findNumberOfLIS(nums));