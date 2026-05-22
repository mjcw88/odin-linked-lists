import { LinkedList } from "./linkedlist";
import { Node } from "./node";

describe ("LinkedList (append)", () => {
    test("appends a single a node to the linkedlist", () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);
        expect(list.head).toEqual(new Node(value));
        expect(list.head.next).toBeNull();
    })
    test("appends two nodes to the linkedList", () => {
        const list = new LinkedList();
        const value1 = 5;
        const value2 = 3;
        list.append(value1);
        list.append(value2);
        expect(list.head.next).toEqual(new Node(value2));
        expect(list.head.next.next).toBeNull();
    })
    test("appends three nodes to the linkedList", () => {
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