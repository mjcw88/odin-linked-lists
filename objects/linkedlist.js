export class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    append(value) {
        return "append test";
    }
    prepend(value) {
        return "prepend test";
    }
    size() {
        return "count test";
    }
    head() {
        return "head test";
    }
    tail() {
        return "tail test";
    }
    at(index) {
        return "at test";
    }
    pop() {
        return "pop test";
    }
    contains(value) {
        return "contains test";
    }
    findIndex(value) {
        return "findIndex test";
    }
    toString() {
        return "toString test";
    }
    insertAt(index, ...values) {
        return "insertAt test";
    }
    removeAt(index) {
        return "removeAt test";
    }
}