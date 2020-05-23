// Node constructor
class Node {
  constructor(element, next=null) {
    this.element = element;
    this.next = next;
  }
}
// LinkedList constructor
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Add a node to the end of the linked list
  push(element) {
    var node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  // Reverse a single node in the linked list
  reverseNode(node, prev) {
    var newNode = new Node(node.element, prev);
    if (node.next) {
      return this.reverseNode(node.next, newNode);
    } else {
      return newNode;
    }
  }
  // returns the reversed Linked List (i.e. Ⓒ->Ⓑ->Ⓐ->null)
  reversedList() {
    return this.reverseNode(this.head, null);
  }
}
var list = new LinkedList();
list.push('3');
list.push('6');
list.push('7');
list.push('2');
list.push('9');
console.log(list.reversedList());