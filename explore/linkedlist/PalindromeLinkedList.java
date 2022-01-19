package linkedlist;

public class PalindromeLinkedList {
    public boolean isPalindrome(ListNode head) {
        int count = 0;
        ListNode p = head;
        while (p != null) {
            count++;
            p = p.next;
        }
        p = head;
        for (int i = 0; i < count / 2; i++) {
            p = p.next;
        }
        ListNode t = reverseLinkedList (p);
        p = head;
        
        while (p != t && p != null && t != null) {
            
            if (p.val != t.val) return false;
            p = p.next;
            t = t.next;
        }
        return true;
    }
    
    private ListNode reverseLinkedList (ListNode head) {
        ListNode pre = null, cp = head, np = cp.next;
        while (np != null) {
            cp.next = pre;
            pre = cp;
            cp = np;
            np = np.next;
        }
        cp.next = pre;
        return cp;
    }
}
