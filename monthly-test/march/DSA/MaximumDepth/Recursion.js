class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

let node5 = new Node(5);
let node2 = new Node(2);
let node3 = new Node(3);
let node1 = new Node(1);
let node4 = new Node(4);
let node6 = new Node(6);
let node8 = new Node(8);

let root = node5;
root.left = node2;
root.right = node3;
node2.left = node1;
node2.right = node4;
node4.left = node6;
node4.right = node8;

const maxdepth = root => {
    return maxdepthhelper(root, 1);
}

const maxdepthhelper = (root, num) => {
    if(root == null) {
        return 0;
    }

    if(root.right == null && root.left == null) {
        return num;
    }

    if(root.left && root.right) {
        return Math.max(maxdepthhelper(root.right, num + 1), maxdepthhelper(root.left, num + 1))
    } else if(root.right != null){
        return maxdepthhelper(root.right, num + 1)         
    } else if(root.left != null) {
        return maxdepthhelper(root.left, num + 1)
    }
}

console.log(maxdepth(root));