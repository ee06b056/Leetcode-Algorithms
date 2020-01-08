/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let ans = 0;
    function dfs (node) {
        // console.log(node);
        if (!node) return 0;
        else {
            let left_count = dfs(node.left), right_count = dfs(node.right);
            ans += Math.abs(left_count + right_count + node.val - 1);
            return left_count + right_count + node.val - 1;
        }
    }
    dfs(root);
    return ans;
};
