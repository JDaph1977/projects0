class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  insert(val) {
    this.len++;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr) {
      if (!curr.next) {
        curr.next = newNode;
        return this;
      }
      curr = curr.next;
    }
  }

  printVal() {
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const rep = new LinkedList();
rep.insert(84);
rep.insert(834);
rep.insert(114);
rep.insert(814);
console.log(rep);
console.log(rep.printVal());
