/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    function nextGenerator (arr) {
        if (arr.length <= 2) return;
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i].next = arr[i + 1];
        }
    }    
    if (!root) return ;
    let arr = [root,];
    while (arr.length != 0) {
        let temp = [];
        nextGenerator(arr);
        for (let i of arr) {
            if (i.left) {
                temp.push(i.left);
            }
            if (i.right) temp.push(i.right);
        }
        arr = temp;
    }
};

var connect = function (root) {
    
};