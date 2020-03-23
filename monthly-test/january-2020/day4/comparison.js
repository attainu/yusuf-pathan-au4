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

    comparetrees(b1, b2) {
      if (b1.this.root == null && b2.this.root == null) 
            return true; 
              
        /* 2. both non-empty -> compare them */
        if (b1.this.root != null && b2.this.root != null)  
            return (b1.this.root == b2.this.root 
                    && this.comparetrees(b1.this.left, b2.this.left) 
                    && this.comparetrees(b1.this.right, b2.this.right)); 
   
        
        return false; 
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
    comparetrees(b1, b2) {
      this.root.comparetrees();
    }
}
  
 console.log("first bst");
 let b1 = new BST();
 b1.insert(100);
 b1.insert(50);
 b1.insert(150);
 b1.insert(80);
 b1.insert(200);
 b1.insert(70);
 b1.insert(85)
 b1.printInOrder();

 console.log("second bst");
 let b2 = new BST();
 b2.insert(100);
 b2.insert(50);
 b2.insert(150);
 b2.insert(80);
 b2.insert(200);
 b2.insert(70);
 b2.insert(85)
 b2.printInOrder();
 console.log(b1.comparetrees(b1,b2));

 //Time complexity is O(m);
 //Space complexity is O(1);