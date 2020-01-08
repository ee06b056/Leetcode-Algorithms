/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let temp = new ListNode(0), current = temp;
    while (true) {
        let min = null;
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) {
                continue;
            } else if (current.next == null || current.next.val > lists[i].val) {
                min = i;
                current.next = lists[i];
            }
        }
        if (min == null) {
            return temp.next;
        } else {
            lists[min] = lists[min].next;
            current = current.next;
            current.next = null;
        }
    }
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a = new ListNode(1), b = new ListNode(1), c = new ListNode(2);
a.next = new ListNode(4);
a.next.next = new ListNode(5);
b.next = new ListNode(3);
b.next.next = new ListNode(4);
c.next = new ListNode(6);
let lists = [a, b ,c];

let ans = mergeKLists(lists);
while (ans) {
    console.log(ans);
    console.log('\n');
    ans = ans.next;
}