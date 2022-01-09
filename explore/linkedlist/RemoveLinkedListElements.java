package linkedlist;

public class RemoveLinkedListElements {
    public ListNode removeElements(ListNode head, int val) {
        while (head != null && head.val == val) {
            head = head.next;
        }
        if (head == null || head.next == null) return head;
        ListNode cp = head;
        while (cp.next != null) {
            if (cp.next.val == val) {
                cp.next = cp.next.next;
            } else {
                cp = cp.next;
            }
        }
        return head;
    }
}
