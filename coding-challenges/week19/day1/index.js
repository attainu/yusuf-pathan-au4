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

        if(!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            newnode.next = this.head;
            this.head = newnode;
        }
    }

    delete(valuetodelete) {
        if(!this.head) {
            return null;
        }

        if(this.head.value === valuetodelete) {
            this.head = this.head.next;
        }

        let currentnode = this.head;
        while(currentnode.next) {
            if(currentnode.next.value === valuetodelete) {
                currentnode.next = currentnode.next.next;
                break
            }

            currentnode = currentnode.next;
        }

        if(this.tail.value === valuetodelete) {
            this.tail = currentnode;
        }
    }
}

let link = new LinkedList;
link.prepend(3);
link.prepend(6);
link.prepend(7);
link.prepend(2);
link.prepend(9);
link.delete(9);
console.log(link);