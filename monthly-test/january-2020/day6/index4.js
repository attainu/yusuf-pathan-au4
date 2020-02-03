class Node {
    constructor(data) {
      this.data = data;
      this.left = undefined;
      this.right = undefined;
    }
  
  }
  
  class BST {
    constructor() {
      this.root = undefined;
    }
  
    insert(data) {
      var n = new Node(data);
      if (!this.root) {
        this.root = n;
        return
      }
      
      var curr = this.root;
      
      while (data !== curr.data) {
        if (data < curr.data) {
          if (!curr.left) {
            curr.left = n;
            break;
          }
          curr = curr.left;
        } else if (data > curr.data) {
          if (!curr.right) {
            curr.right = n;
            break;
          }
          curr = curr.right;
        }
      }
    }
  
    
    invert(root) {
      var curr = root;
  
      if (curr.left) {
        if (curr.right) {
          this.invert(curr.left);
          this.invert(curr.right);
        }
      } 
      
      var temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
      return curr;
    }

    printInorder(root) {
        var curr = root;

    if (curr) {
      this.printInorder(curr.left);
      console.log(curr.data);
      this.printInorder(curr.right);
      }
  }  
} 

  var bst = new BST();

  for (var num of [4,2,1,3,7,6,9]) {
    bst.insert(num);
  }
  
  console.log(bst);
  

bst.invert(bst.root);
bst.printInorder(bst.root);

//Time complexity is O(1)
//Space complexity is O(1)