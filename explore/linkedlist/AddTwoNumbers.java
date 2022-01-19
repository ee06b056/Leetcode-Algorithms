package linkedlist;

public class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        ListNode dh = new ListNode();
        ListNode p1 = l1, p2 = l2, p = dh;
        int carry = 0;
        while (p1 != null && p2 != null) {
            int sum = p1.val + p2.val + carry;
            p.next = new ListNode(sum % 10);
            carry = sum / 10;
            p1 = p1.next;
            p2 = p2.next;
            p = p.next;
        }
        if (p2 != null) p1 = p2;
        while (p1 != null) {
            int sum = p1.val + carry;
            p.next = new ListNode(sum % 10);
            carry = sum / 10;
            p1 = p1.next;
            p = p.next;
        }
        if (carry != 0) p.next = new ListNode(carry);
        return dh.next;
    }
}
