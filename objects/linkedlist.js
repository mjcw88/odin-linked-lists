import { Node } from "./node";

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    
    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        } 
        
        const temp = this.head;
        this.head = node;
        this.head.next = temp;
    }

    size() {
        return "returns the total number of nodes in the list.";
    }

    head() {
        return "should return the value of the first node in the list. If the list is empty, it should return undefined.";
    }

    tail() {
        return "should return the value of the final node in the list. If the list is empty, it should return undefined.";
    }

    at(index) {
        return "should return the value of the node at the given index. If there’s no node at the given index, it should return undefined."
    }

    pop() {
        return "should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.";
    }

    contains(value) {
        return "returns true if the passed in value is in the list and otherwise returns false.";
    }

    findIndex(value) {
        return "returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the index of the first node with the matching value.";
    }

    toString() {
        return "represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.";
    }

    insertAt(index, ...values) {
        return "should insert new nodes with the given values at the given index. If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a RangeError.";
    }

    removeAt(index) {
        return "removeAt(index) that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError.";
    }
}

// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.