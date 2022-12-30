class linkedList {


    constructor(head = null) {
        this.head = head
    }


    //checks size of the linkedList

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++
            node = node.next;  
        }
        return count
    }

    //empties the list
    clear() {
        this.head = null
    }

    //grabs the last node of the linked list 

    getLast() {
        let lastNode = this.head

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }

        return lastNode

    }

    getFirst() {
        return this.head;
    }

    Insert(data) {
        
    }

}

class linkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    
}

let newNode = new linkedListNode(4)
newNode.next = new linkedListNode(5)

const newList = new linkedList(newNode)

console.log(newList.getFirst())