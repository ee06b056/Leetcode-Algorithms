/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
- int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
- void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
- void addAtTail(int val) Append a node of value val as the last element of the linked list.
- void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
- void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

package linkedlist;

public class MyLinkedList {

    int val;
    MyLinkedList nextN;
    
    public MyLinkedList() {
        this.val = -1;
        this.nextN = null;
    }
    
    public int get(int index) {
        int i = 0;
        MyLinkedList currentN = this.nextN;
        while (currentN != null && i < index) {
            currentN = currentN.nextN;
            i++;
        }
        if (currentN == null || i <index) return -1;
        else return currentN.val;
    }
    
    public void addAtHead(int val) {
        MyLinkedList newHead = new MyLinkedList();
        newHead.val = val;
        newHead.nextN = this.nextN;
        this.nextN = newHead;
    }
    
    public void addAtTail(int val) {
        MyLinkedList currentN = this;
        while (currentN.nextN != null) {
            currentN = currentN.nextN;
        }
        MyLinkedList newNode = new MyLinkedList();
        newNode.val = val;
        currentN.nextN = newNode;
    }
    
    public void addAtIndex(int index, int val) {
        int i = -1;
        MyLinkedList pn = this;
        MyLinkedList newNode = new MyLinkedList();
        newNode.val = val;
        while (i < index - 1 && pn.nextN != null) {
            pn = pn.nextN;
            i++;
        }
        if (i < index - 1) return;
        newNode.nextN = pn.nextN;
        pn.nextN = newNode;
    }
    
    public void deleteAtIndex(int index) {
        int i = -1;
        MyLinkedList pn = this;
        while (i < index - 1 && pn.nextN != null) {
            pn = pn.nextN;
            i++;
        }
        if (i < index - 1) return;
        MyLinkedList nextN = pn.nextN == null ? null : pn.nextN.nextN;
        pn.nextN = nextN;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
