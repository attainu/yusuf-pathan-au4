class Node {
 
    constructor(value=null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
  
    insert(value) {
  
        if(!this.value) {
            this.value = value;
            return;
        }
  
        // Inserting to the left for values less than the current value
        if(value <= this.value) {
  
            if(this.left) {
                return this.left.insert(value);
            } else {
                this.left = new Node(value);
                this.left.parent = this;
            }
  
        // Insert to the right for the values greater than the current value
        } else {
            if(this.right) {
                return this.right.insert(value);
            } else {
                this.right = new Node(value);
                this.right.parent = this;
            }
        }
  
    }
  
    find(value) {
  
        if(this.value === value) {
            return this;
        }
  
        if(value < this.value && this.left) {
            return this.left.find(value);
        }
  
        if(value > this.value && this.right) {
            return this.right.find(value);
        }
  
        return null;
    }
  
    findMin(value) {
        if(!this.left) {
            return this;
        } else {
            return this.left.findMin();
        }
    }
  
    printInOrder(value) {
        if(this.left) {
            this.left.printInOrder();
        }
  
        console.log(this.value);
  
        if(this.right) {
            this.right.printInOrder();
        }
    }

    diameter() {
      if(!this.value) {
        return 0;
      }

      let leftheight = this.height(this.left);
      let rightheight = this.height(this.right);

      let leftdiameter = this.diameter(this.left);
      let rightdiameter = this.diameter(this.right);

      return Math.max(leftheight + rightheight + 1,
                        Math.max(leftdiameter, rightdiameter));
    }
  
    height() {
      if(!this.value) {
        return 0;
      }

      return (1 + Math.max(this.height, ))
    }
}
  
  
class BST {
    constructor() {
        this.root = new Node();
    }
  
    insert(value) {
        this.root.insert(value);
    }
  
    find(value) {
        return this.root.find(value);
    }
  
    findMin(value) {
        return this.root.findMin();
    }
  
    printInOrder(value) {
        this.root.printInOrder();
    }
}
  
let b1 = new BST();
b1.insert(100);
b1.insert(50);
b1.insert(150);
b1.insert(80);
b1.insert(200);
b1.insert(70);
b1.insert(85)
b1.printInOrder();
console.log(b1.diameter());
class Solution{
  constructor() {
  }
  
  calcDiameter(bst){
    console.log(bst);
  }
}
  
let solution = new Solution();
solution.calcDiameter(b1);

//Time complexity is O(n^2);
//Space complexity is O(n);