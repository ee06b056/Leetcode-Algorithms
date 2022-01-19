package linkedlist;

public class CopyListwithRandomPointer {
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        Node p = head;
        while (p != null) {
            Node n = new Node (p.val);
            n.next = p.next;
            p.next = n;
            p = p.next.next;
        }
        p = head;
        while (p != null) {
            if (p.random != null) {
                p.next.random = p.random.next;
            }
            p = p.next.next;
        }
        Node q = head;
        Node newHead = head.next;
        p = newHead;
        while (p.next != null) {
            q.next = p.next;
            p.next = p.next.next;
            q = q.next;
            p = p.next;
        }
        q.next = null;
        return newHead;
    }
}

class Node {
    int val;
    Node prev;
    Node next;
    Node random;
    public Node (int val) {
        this.val = val;
    }
}
