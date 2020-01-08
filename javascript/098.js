/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let min = undefined, max = undefined;
    function isValidSubBst(root, leftB, rightB) {
        if (!root) {
            return true
        } else if (leftB == undefined && rightB == undefined) {
            return isValidSubBst(root.left, leftB, root.val) && isValidSubBst(root.right, root.val, rightB);
        } else if (rightB == undefined) {
            return root.val > leftB && isValidSubBst(root.left, leftB, root.val) && isValidSubBst(root.right, root.val, rightB);
        } else if (leftB == undefined) {
            return root.val < rightB && isValidSubBst(root.left, leftB, root.val) && isValidSubBst(root.right, root.val, rightB);
        } else {
            return root.val > leftB && root.val < rightB && isValidSubBst(root.left, leftB, root.val) && isValidSubBst(root.right, root.val, rightB);
        }
    }
    return isValidSubBst(root, min, max);
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a = new TreeNode(-Infinity);
let b = new TreeNode(-Infinity);

// // // let b = new TreeNode(1);
// let c = new TreeNode(5);
// a.left = b;
a.right = b;
// // a.right = c;

let answer = isValidBST(a);
console.log(answer);

// console.log(Infinity > Infinity);
