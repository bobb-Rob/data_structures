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

  updateAtPosition(val, position) {
    if (position < 0 || position >= this.size) return;
  
    let current = this.head;
    let index = 0;

    while (index < position) {    
      current = current.next;
      index++;
    }

    current.value = val;    
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

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.addToHead(1);
list1.addToTail(3);
list1.addToTail(7);
list2.addToHead(1);
list2.addToTail(2);

module.exports = { list1, list2 };