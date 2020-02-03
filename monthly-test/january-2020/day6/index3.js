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

  append(value) {
    let newNode = new Node(value);

    if(!this.tail) {
        this.tail = newNode;
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
  }

  rearrange() {
    if(this.head == null ) {
        return 0;
    }

    let odd = this.head;
    let even = this.head.next;

    let evenfirst = even;

    while(1 == 1) {
        if(odd == null || even == null || (even.next) == null) {
            odd.next = evenfirst;
            break;
        }

        odd.next = even.next;  
        odd = even.next;  
    
        if (odd.next == null)  
        {  
            even.next = null;  
            odd.next = evenfirst;  
            break;  
        }  
   
        even.next = odd.next;  
        even = odd.next;  
    }
    return this.head;
  }

  print() {
      let current = this.head;
      while(current) {
          console.log(current.value);
          current = current.next;
      }
  }
}

let linkedlist = new LinkedList();
let arr = [2,1,3,5,6,4,7];
for(let i = 0; i < arr.length; i++) {
    linkedlist.append(arr[i]);
}
console.log(linkedlist.rearrange());
linkedlist.print();

//Time complexity is O(1)
//Space complexity is O(1)