import { Node } from "./node";

export class LinkedList {
    constructor(head = null) {
        this._head = head;
    }

    append(value) {
        const node = new Node(value);
        if (!this._head) {
            this._head = node;
            return;
        }

        let current = this._head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    
    prepend(value) {
        const node = new Node(value);
        if (!this._head) {
            this._head = node;
            return;
        } 
        
        const temp = this._head;
        this._head = node;
        this._head.next = temp;
    }

    size() {
        let count = 0;
        let current = this._head;

        while (current) {
            current = current.next;
            count++;
        }
        return count;
    }

    head() {
        if (!this._head) {
            return;
        } 
        return this._head.value;
    }

    tail() {
        if (!this._head) {
            return;
        }

        let current = this._head;
        while (current.next) {
            current = current.next;
        }
        return current.value;
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