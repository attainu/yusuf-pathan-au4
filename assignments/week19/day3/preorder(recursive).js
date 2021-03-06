class Node{

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
            if(this.left) {
                return this.left.insert(value);
            } 
            else {
                let leftNode = new Node(value);
                this.left = leftNode;
                leftNode.parent = this;
                console.log(this);

            }
        }
        else {
            if(this.right){
                return this.right.insert(value);
            } 
            else {
                let rightNode = new Node(value);
                this.right = rightNode;
                rightNode.parent = this;
                console.log(this);
            }
        }
    }

    preorder() {
        console.log(this.value);

        if(this.left) {
            this.left.preorder();
        }

        if(this.right) {
            this.right.preorder();
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

    preorder(value) {
        this.root.preorder(value);
    }
}

let b = new BST();
b.insert(100);
b.insert(50);
b.insert(150);
b.insert(80);
b.insert(200);
b.insert(70);
b.preorder();

// b;