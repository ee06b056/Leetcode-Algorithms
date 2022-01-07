package linkedlist;

import java.util.HashSet;
import java.util.Set;

public class LinkedListCycleII {
    public ListNode detectCycle(ListNode head) {
        ListNode slowP = head, fastP = head;
        while (fastP != null && fastP.next != null) {
            slowP = slowP.next;
            fastP = fastP.next.next;
            if (slowP == fastP) break;
        }
        if (fastP == null || fastP.next == null) return null;
        ListNode cp = head;
        while (cp != slowP) {
            cp = cp.next;
            slowP = slowP.next;
        }
        return cp;
    }

    public ListNode detectCycle2 (ListNode head) {
        Set<ListNode> lnset = new HashSet<>();
        ListNode p = head;
        while (p != null) {
            if (lnset.contains(p)) return p;
            lnset.add(p);
            p = p.next;
        }
        return null;
    }
    
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}
