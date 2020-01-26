class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    let newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
  }

  reverse() {
    let current = this.head;
    if (!current) {
      return current;
    }
    let curPre = this.head.next;
    current.next = null;
    while (curPre) {
      // save the next node
      let tmp = curPre.next;
      curPre.next = current;
      current = curPre;
      curPre = tmp;
    }
    return current;
  }
}

let link = new LinkedList();
link.prepend(3);
link.prepend(6);
link.prepend(7);
link.prepend(2);
link.prepend(9);
console.log(link.reverse());
