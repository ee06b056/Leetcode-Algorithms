package linkedlist;

public class FlattenaMultilevelDoublyLinkedList {
    public Node flatten(Node head) {
        if (head == null) return null;
        Node p = head;
        helper(p);
        return head;
    }
    
    private Node helper(Node n) {
        Node p = n;
        while (p.next != null) {
            if (p.child != null) {
                Node nextP = p.next;
                Node childP = p.child;
                p.next = childP;
                childP.prev = p;
                p.child = null;
                p = helper(childP);
                p.next = nextP;
                nextP.prev = p;
            }
            p = p.next;
        }
        if (p.child != null) {
            p.next = p.child;
            p.child.prev = p;
            p.child = null;
            p = helper(p);
        }
        return p;
    }
}

class Node {
    int val;
    Node next;
    Node prev;
    Node child;
    public Node (int val) {
        this.val = val;
    }
}
