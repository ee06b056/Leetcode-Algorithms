/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let cur = [root,], ans = [];
    if (!root) return ans;
    while (cur.length != 0) {
        let sub_ans = [], next = [];
        for (let i = 0; i < cur.length; i++) {
            sub_ans.push(cur[i].val);
            if (cur[i].left) {
                next.push(cur[i].left);
            }
            if (cur[i].right) {
                next.push(cur[i].right);
            }
        }
        cur = next;
        ans.push(sub_ans);
    }
    return ans;
};