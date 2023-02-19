class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToHead(val) {
    const node = new Node(val);

    node.next = this.head;
    this.head = node;
    this.size++;
  }

  addToTail(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node; 
    }

    this.size++;
  }

  insertAtNthPosition(val, position) {
    if (position < 0 || position > this.size) return;

    const node = new Node(val);
    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.addToHead(val);
      return;
    }

    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  deleteAtPosition(position) {
    if (position < 0 || position >= this.size) return;

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    while (index < position) {
      previous = current
      current = current.next;
      index++;
    }

    previous.next = current.next;
    this.size--;
    return current;
  }

  printItems() {
    let current = this.head;   
  
    while (current) {      
      console.log(current.value)
      current = current.next;
    }    
  }

  getSize() {
    return this.size;
  }
}


const list = new SinglyLinkedList();
list.addToHead([1,2,3]);
list.addToTail([11,22,33]);
list.addToTail([111,222,333]);
list.insertAtNthPosition([89,56], 3);
list.insertAtNthPosition([933,890], 3);
list.printItems();
console.log(list.deleteAtPosition(3));
list.printItems();
console.log(list);