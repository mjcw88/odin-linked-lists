import { LinkedList } from "./linkedlist";
import { Node } from "./node";

describe ("LinkedList (append)", () => {
    test("appends a new node to an empty list", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        expect(list._head).toEqual(new Node(value));
        expect(list._head.next).toBeNull();
    })
    test("appends a new node to a list with one node", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        list.append(value1);
        list.append(value2);
        expect(list._head.next).toEqual(new Node(value2));
        expect(list._head.next.next).toBeNull();
    })
    test("appends a new node to a list with two nodes", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.append(value1);
        list.append(value2);
        list.append(value3);
        expect(list._head.next.next).toEqual(new Node(value3));
        expect(list._head.next.next.next).toBeNull();
    })
})

describe("LinkedList (prepend)", () => {
    test("adds a new node to the start of an empty list", () => {
        const list = new LinkedList();
        const value = 5;
        list.prepend(value);
        expect(list._head.value).toBe(value);
        expect(list._head.next).toBeNull();
    })
    test("adds a new node to the start of list with one node", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        list.prepend(value1);
        list.prepend(value2);
        expect(list._head.value).toBe(value2);
        expect(list._head.next.value).toBe(value1);
    })
    test("adds a new node to the start of list with two nodes", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.prepend(value1);
        list.prepend(value2);
        list.prepend(value3);
        expect(list._head.value).toBe(value3);
        expect(list._head.next.value).toBe(value2);
        expect(list._head.next.next.value).toBe(value1);
    })
})

describe("LinkedList (count)", () => {
    test("counts an empty list", () => {
        const list = new LinkedList();
        const size = list.size();
        expect(size).toBe(0);
    })
    test("counts a list with 5 nodes", () => {
        const list = new LinkedList();
        const count = 5;
        for(let i = 0; i < count; i++) {
            list.append(i);
        }
        const size = list.size();
        expect(size).toBe(count);
    })
    test("counts a list with 10 nodes", () => {
        const list = new LinkedList();
        const count = 10;
        for(let i = 0; i < count; i++) {
            list.append(i);
        }
        const size = list.size();
        expect(size).toBe(count);
    })
})

describe("LinkedList (head)", () => {
    test("returns undefined from an empty list", () => {
        const list = new LinkedList();
        const headValue = list.head();
        expect(headValue).toBe(undefined);
    })
    test("returns the value of the head of a single node list", () => {
        const list = new LinkedList();
        const value = 5;
        list.prepend(value);
        const headValue = list.head();
        expect(headValue).toBe(value);
    })
    test("returns the value of the head of a multi node list", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.prepend(value1);
        list.prepend(value2);
        list.prepend(value3);
        const headValue = list.head();
        expect(headValue).toBe(value3);
    })
})

describe("LinkedList (tail)", () => {
    test("returns undefined from an empty list", () => {
        const list = new LinkedList();
        const tailValue = list.tail();
        expect(tailValue).toBe(undefined);
    })
    test("returns the value of the tail of a single node list", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        const tailValue = list.tail();
        expect(tailValue).toBe(value);
    })
    test("returns the value of the tail of a multi node list", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.append(value1);
        list.append(value2);
        list.append(value3);
        const tailValue = list.tail();
        expect(tailValue).toBe(value3);
    })
})

describe("LinkedList (at)", () => {
    test("returns undefined from invalid input", () => {
        const list = new LinkedList();
        const value = list.at("Hello, World!")
        expect(value).toBe(undefined);
    })
    test("returns undefined from an index less than 0", () => {
        const list = new LinkedList();
        const value = list.at(-1)
        expect(value).toBe(undefined);
    })
    test("returns undefined from an invalid index", () => {
        const list = new LinkedList();
        list.append(5);
        list.append(3);
        list.append(8);
        const value = list.at(10);
        expect(value).toBe(undefined);
    })
    test("returns undefined from an empty list", () => {
        const list = new LinkedList();
        const value = list.at(0);
        expect(value).toBe(undefined);
    })
    test("returns value from a single node list", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        const returnedValue = list.at(0);
        expect(returnedValue).toBe(value);
    })
    test("returns value from a multi node list", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.append(value1);
        list.append(value2);
        list.append(value3);
        const returnedValue = list.at(2);
        expect(returnedValue).toBe(value3);
    })
})

describe("LinkedList (pop)", () => {
    test("returns undefined from an empty list", () => {
        const list = new LinkedList();
        const head = list.pop();
        expect(head).toBe(undefined);
    })
    test("returns value from a single node list", () => {
        const list = new LinkedList();
        const value = 5;
        list.prepend(value);
        const head = list.pop();
        expect(head).toBe(value);
        expect(list._head).toBeNull();
    })
    test("returns value from a multi node list", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.prepend(value1);
        list.prepend(value2);
        list.prepend(value3);
        const head = list.pop();
        expect(head).toBe(value3);
        expect(list._head.value).toBe(value2);
    })
})

describe("LinkedList (contains)", () => {
    test("returns false from an empty list", () => {
        const list = new LinkedList();
        const value = 5;
        expect(list.contains(value)).toBe(false);
    })
    test("returns false from passed in value not in list", () => {
        const list = new LinkedList();
        const value = 5;
        const value2 = 3;
        list.append(value);
        expect(list.contains(value2)).toBe(false);
    })
    test("returns true from passed in value in a single node list", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        expect(list.contains(value)).toBe(true);
    })
    test("returns true from passed in value in a multi node list", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.append(value1);
        list.append(value2);
        list.append(value3);
        expect(list.contains(value3)).toBe(true);
    })
})