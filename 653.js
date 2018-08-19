// construct BST
class Node{
    constructor (val) {
        this.val = val;
        this.left = this.right=null;
    }
}

let root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(7);

var findTarget = function(root, k) {
    let arr = [];
    // function midorder(node) {
    //     if (!node) return;
    //     midorder(node.left);
    //     arr.push(node.val);
    //     midorder(node.right);
    // }
    midorder(root,arr);
    console.log(arr);
    let left = 0, right = arr.length - 1, sum;

    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === k) return true;
        if (sum > k) {
            right--;
            continue;
        } else if (sum < k) {
            left++;
            continue;
        }
    }
    return false;
};
function midorder (node, arr) {
    if (!node) return;
    midorder(node.left, arr);
    arr.push(node.val);
    midorder(node.right, arr);
}

let answer = findTarget(root, 9);
console.log(answer);