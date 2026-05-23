import { Node } from "./node";

describe("ListNode", () => {
    test("creates a node with given data", () => {
        const value = 5;
        const node = new Node(value);
        expect(node.value).toBe(value);
    });
    test("next is null by default", () => {
        const value = 5;
        const node = new Node(value);
        expect(node.next).toBeNull();
    });
    test("data defaults to null when no argument given", () => {
        const node = new Node();
        expect(node.value).toBeNull();
    });
    test("next can be set to another node", () => {
        const value1 = 5;
        const value2 = 3;
        const node1 = new Node(value1);
        const node2 = new Node(value2);
        node1.next = node2;
        expect(node1.next).toBe(node2);
        expect(node1.next.value).toBe(value2);
    });
});