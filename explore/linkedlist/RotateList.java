package linkedlist;

public class RotateList {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) return null;
        ListNode p = head;
        ListNode tail = null;
        int length = 0;
        while (p != null) {
            length++;
            if (p.next == null) tail = p;
            p = p.next;
        }
        k = k % length;
        p = head;
        if (k == 0) return head;
        for (int i = 0; i < length - k - 1; i++) {
            p = p.next;
        }
        ListNode newHead = p.next;
        p.next = null;
        tail.next = head;
        return newHead;
    }
}
