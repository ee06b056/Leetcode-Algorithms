package linkedlist;

public class InsertintoaCyclicSortedList {
    public Node insert(Node head, int insertVal) {
        Node n = new Node(insertVal);
        if (head == null) {
            n.next = n;
            return n;
        }
        if (head == head.next) {
            head.next = n;
            n.next = head;
            return head;
        }
        Node p = head, q = head.next;
        boolean inserted = false;
        while (true) {
            if (insertVal >= p.val && insertVal <= q.val) {
                p.next = n;
                n.next = q;
                inserted = true;
                break;
            } else if (q.val < p.val && (insertVal >= p.val || insertVal <= q.val)) {
                p.next = n;
                n.next = q;
                inserted = true;
                break;
            }
            p = p.next;
            q = q.next;
            if (p == head) break;
        }
        if (!inserted) {
            p.next = n;
            n.next = q;
        }
        return head;
    }
}
