import { Node } from "./node.js";

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
        if (!this._head) return;
        return this._head.value;
    }

    tail() {
        if (!this._head) return;

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
        if (!this._head) return;

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
        let string = "";
        if (!this._head) return string;

        let current = this._head;
        while (current) {
            string += `( ${current.value} ) -> `
            current = current.next;
        }
        return string += "null";    
    }

    insertAt(index, ...values) {
        if (!Number.isInteger(index)) throw new TypeError("Index must be an integer");
        if (index < 0 || !this._head) throw new RangeError("Index out of bounds");

        let count = 0;
        let current = this._head;
        let previous = null;

        while (current) {
            if (count === index) {
                let temp = current;
                for (let i = values.length - 1; i >= 0; i--) {
                    const node = new Node(values[i]);
                    node.next = temp;
                    temp = node;
                }
                if (previous) {
                    previous.next = temp;
                } else {
                    this._head = temp;
                }
                break;
            }
            previous = current;
            current = current.next;
            count++;
        }
        
        if (index > count) throw new RangeError("Index out of bounds");
    }

    removeAt(index) {
        return "removeAt(index) that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError.";
    }
}

const list = new LinkedList();
const value1 = 5;
const value2 = 3;
const value3 = 8;
const value4 = 2;
const value5 = 4;
list.append(value1);
list.append(value2);
list.append(value3);
list.insertAt(1, value4, value5);

// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.