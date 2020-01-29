  
class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
  
    toString() {
        return `${this.value} -> ${this.data}`;
    }
}
  
  
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
  
    append(value) {
        // Create a new node
        let newNode = new Node(value);
  
        // If the tail is None, make the head and tail as new node as our list
        // is empty.
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            // If tail is not None, put the current tail's next node as the new
            // node. And also update the current tail as the new node.
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
  
    // prepend(value) {
    //     // Create the new Node
    //     let newNode = new Node(value);
  
    //     // If the head is None, it means that the list is empty.
    //     // So set both head and tail as the new node.
    //     if(!this.head) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         // If the head is not None, set the new node's next node as the current
    //         // head. Also point the current head to the new node.
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
    // }
  
    // search(value) {
    //     // Starting from the head, go down till the last node
    //     let currentNode = this.head;
    //     while(currentNode) {
    //         if(currentNode.value === value) { return currentNode; }
    //         // Move to the next node
    //         currentNode = currentNode.next;
    //     }
    //     return null;
    // }
  
    // delete(valueToDelete) {
    //     // If the list is empty, return immediately as there is nothing to
    //     // look up and delete.
    //     if(!this.head) { return null; }
  
    //     // If head is the value that needs to be deleted, simply point the current head to the next value and return.
    //     if(this.head.value === valueToDelete) {
    //         this.head = this.head.next;
    //         return;
    //     }
  
    //     // For other values, start from the second value and go till the end.
    //     let currentNode = this.head;
    //     while(currentNode.next) {
  
    //         // If the value to delete is the next value of the current, set the
    //         // current node's next node as its next node's next. And return.
  
    //         if(currentNode.next.value === valueToDelete) {
    //             currentNode.next = currentNode.next.next;
    //             break;
    //         }
  
    //         currentNode = currentNode.next;
    //     }
  
    //     // Check if tail has to be updated.
    //     // If the value that needs to be deleted is the value at the tail,
    //     // we have to update tail as well
    //     if(this.tail.value === valueToDelete) {
    //         this.tail = currentNode;
    //     }
    // }
  
  print() {
        let currentNode = this.head,
            values = [];
        while(currentNode) {
            values.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        console.log(values);
    }
    
}
  
  
class Solution {
   constructor() {
   }

   mergeTwoLists(ll1, ll2){

     let ll3 = new Node(null, null);
     let prev = ll3;
  

  while (ll1 !== null && ll2 !== null) {
    if (ll1.value <= ll2.value) { 
      prev.next = ll1;
      ll1 = ll1.next;
    } else {
      prev.next = ll2;
      ll2 = ll2.next;
    }
    prev = prev.next;
  }
  
  
  if (ll1 === null) { prev.next = ll2; }
  if (ll2 === null) { prev.next = ll1; }
  
  return ll3.next;
    //  console.log(ll1);
    //  console.log(ll2);
   }

   
}

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();
console.log("first sorted linkedlist")
let length1 = Number(prompt("Please enter length of first linked list"))
for(let i = 1; i <= length1; i++) {
    let input =  Number(prompt("Please enter your number"))
    linkedList1.append(input);
}
console.log("second sorted linkedlist")
let length2 = Number(prompt("Please enter length of second linked list"))
for(let i = 1; i <= length2; i++) {
    let input =  Number(prompt("Please enter your number"))
    linkedList2.append(input);
}
let ll1 = linkedList1.head;
let ll2 = linkedList2.head;
let solution = new Solution().mergeTwoLists(ll1, ll2);
console.log(solution);
linkedList1.print();

// let finallist = solution
// let printList = () =>  
// { 
//     var curr = this.head; 
//     var str = ""; 
//     while (curr) { 
//         str += curr.element + " "; 
//         curr = curr.next; 
//     } 
//     console.log(str); 
// } 
// finallist.printList();

// time complexity = O(n + m)
// space complexity = O(n)