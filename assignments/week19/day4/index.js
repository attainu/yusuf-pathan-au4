class Node {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }

    if (value <= this.value) {
      if (this.left) {
        return this.left.insert(value);
      } else {
        this.left = new Node(value);
        this.left.parent = this;
      }
    } else {
      if (this.right) {
        return this.right.insert(value);
      } else {
        this.right = new Node(value);
        this.right.parent = this;
        console.log(this.right.value);
      }
    }
  }
}

class BST {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        this.root.insert(value);
    }
}

let b = new BST();
b.insert(100);
b.insert(50);
b.insert(150);
b.insert(200);
b.insert(40);
