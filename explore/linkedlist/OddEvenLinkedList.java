package linkedlist;

public class OddEvenLinkedList {
    public ListNode oddEvenList(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) return head;
        ListNode odd = head, even = head.next, evenHead = head.next;
        while (even.next != null && even.next.next != null) {
            ListNode nextOdd = odd.next.next, nextEven = even.next.next;
            odd.next = nextOdd;
            even.next = nextEven;
            odd = odd.next;
            even = even.next;
        }
        if (even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = null;
        }
        odd.next = evenHead;
        return head;
    }
}
