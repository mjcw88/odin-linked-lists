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
        if (!Number.isInteger(index) || index < 0) return;

        let count = 0;
        let current = this._head;

        while (current) {
            if (count === index) return current.value;
            current = current.next;
            count++;
        }
    }

    pop() {
        if (!this._head) {
            return;
        }

        const value = this._head.value;
        this._head = this._head.next;
        
        return value;
    }

    contains(value) {
        let current = this._head;
        while (current) {
            if (value === current.value) return true;
            current = current.next;
        }
        return false;
    }

    findIndex(value) {
        let current = this._head;
        let index = 0;
        while (current) {
            if (value === current.value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    toString() {
        if (!this._head) {
            return "";
        }

        let string = "";
        let current = this._head;
        while (current) {
            string += `( ${current.value} ) -> `
            current = current.next;
        }
        return string += "null";    
    }

    insertAt(index, ...values) {
        return "should insert new nodes with the given values at the given index. If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a RangeError.";
    }

    removeAt(index) {
        return "removeAt(index) that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError.";
    }
}

// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.