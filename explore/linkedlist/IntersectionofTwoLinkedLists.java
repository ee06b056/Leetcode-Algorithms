package linkedlist;

import java.util.HashSet;
import java.util.Set;

public class IntersectionofTwoLinkedLists {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        Set<ListNode> set = new HashSet<>();
        ListNode ap = headA;
        while (ap != null) {
            set.add(ap);
            ap = ap.next;
        }
        ListNode bp = headB;
        while (bp != null) {
            if (set.contains(bp)) return bp;
            bp = bp.next;
        }
        return null;
    }

    public ListNode getIntersectionNode2 (ListNode headA, ListNode headB) {
        ListNode ap = headA, bp = headB;
        while (ap != null && bp != null) {
            ap = ap.next;
            bp = bp.next;
        }
        if (ap == null) {
            ListNode cp = headB;
            while (bp != null) {
                bp = bp.next;
                cp = cp.next;
            }
            ap = headA;
            while (ap != null && cp != null) {
                if (ap == cp) return ap;
                ap = ap.next;
                cp = cp.next;
            }
            return null;
        } else {
            ListNode cp = headA;
            while (ap != null) {
                ap = ap.next;
                cp = cp.next;
            }
            bp = headB;
            while (bp != null && cp != null) {
                if (bp == cp) return bp;
                bp = bp.next;
                cp = cp.next;
            }
            return null;
        }
    }
}
