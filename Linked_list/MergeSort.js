const list = require("./singlyLinkedList");

class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function mergeLists(head1, head2) {
  const mergedList = new Node();
    let tail = mergedList;
  
    while (head1 && head2) {
      if (head1.data < head2.data) {
        tail.next = head1;
        head1 = head1.next;
      } else {
        tail.next = head2;
        head2 = head2.next;
      }
      tail = tail.next;
    }
  
    if (head1) {
      tail.next = head1;
    } else if (head2) {
      tail.next = head2;
    }
  
    return mergedList.next;  
}

console.log(mergeLists(list.list1.head, list.list2.head));