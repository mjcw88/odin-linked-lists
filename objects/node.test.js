import { Node } from "./node";

describe("ListNode", () => {
    test("creates a node with given data", () => {
        const node = new Node(5);
        expect(node.data).toBe(5);
    });
    test("next is null by default", () => {
        const node = new Node(5);
        expect(node.next).toBeNull();
    });
    test("data defaults to null when no argument given", () => {
        const node = new Node();
        expect(node.data).toBeNull();
    });
    test("next can be set to another node", () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        node1.next = node2;
        expect(node1.next).toBe(node2);
        expect(node1.next.data).toBe(2);
    });
});