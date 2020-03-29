class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

let parent = node1
parent.left = node2;
parent.right = node3;
node3.left = node4;
node3.right = node5;

const Depth = parent => {
    if (!parent) return 0;
    let arr = [parent];
    let temparr = [];
    let count = 0;

    while(arr.length) {
        let temp = arr.pop();

        if (temp.left) temparr.push(temp.left);
        if (temp.right) temparr.push(temp.right);
        if (arr.length === 0){
            count ++
            arr = temparr
            temparr = [];
        } 
    }
    return count;
};

console.log(Depth(parent));
