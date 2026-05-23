import { LinkedList } from "./linkedlist";
import { Node } from "./node";

describe ("LinkedList (append)", () => {
    test("appends a new node to an empty list", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        expect(list.head).toEqual(new Node(value));
        expect(list.head.next).toBeNull();
    })
    test("appends a new node to a list with one node", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        list.append(value1);
        list.append(value2);
        expect(list.head.next).toEqual(new Node(value2));
        expect(list.head.next.next).toBeNull();
    })
    test("appends a new node to a list with two nodes", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.append(value1);
        list.append(value2);
        list.append(value3);
        expect(list.head.next.next).toEqual(new Node(value3));
        expect(list.head.next.next.next).toBeNull();
    })
})

describe("LinkedList (prepend)", () => {
    test("adds a new node to the start of an empty list", () => {
        const list = new LinkedList();
        const value = 5;
        list.prepend(value);
        expect(list.head.value).toBe(value);
        expect(list.head.next).toBeNull();
    })
    test("adds a new node to the start of list with one node", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        list.prepend(value1);
        list.prepend(value2);
        expect(list.head.value).toBe(value2);
        expect(list.head.next.value).toBe(value1);
    })
    test("adds a new node to the start of list with two nodes", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        const value3 = 8;
        list.prepend(value1);
        list.prepend(value2);
        list.prepend(value3);
        expect(list.head.value).toBe(value3);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next.value).toBe(value1);
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