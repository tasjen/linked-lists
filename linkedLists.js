class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    this.insertAt(value, this.size());
  }

  prepend(value) {
    this.insertAt(value, 0);
  }

  size() {
    let p = this.head;
    if (p === null) return 0;
    for (let i = 1; ; i++) {
      if (p.nextNode === null) return i;
      p = p.nextNode;
    }
  }

  tail() {
    return this.at(this.size() - 1);
  }

  at(index) {
    if (index > this.size() - 1) return;
    let p = this.head;
    for (let i = 0; i < index; i++) {
      p = p.nextNode;
    }
    return p;
  }

  pop() {
    this.removeAt(this.size() - 1);
  }

  contains(value) {
    return this.find(value) === null ? false : true;
  }

  find(value) {
    let p = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (p.value === value) return i;
      p = p.nextNode;
    }
    return null;
  }

  toString() {
    let output = '';
    for (let i = 0; i < this.size(); i++) {
      output += `( ${this.at(i).value} ) -> `;
    }
    return output + 'null';
  }

  insertAt(value, index) {
    if (index > this.size()) return;
    if (index === 0) {
      this.head = new Node(value, this.head);
    } else {
      let p = this.at(index - 1);
      p.nextNode = new Node(value, p.nextNode);
    }
  }

  removeAt(index) {
    if (index > this.size() - 1) return;
    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let p = this.at(index - 1);
      p.nextNode = p.nextNode.nextNode;
    }
  }
}

//test
const a = new LinkedList();
console.log(a.toString());
console.log(a.size());

a.append(1);
console.log(a.toString());

a.prepend(2);
console.log(a.toString());

a.append(0);
console.log(a.toString());

a.insertAt(3, 1);
console.log(a.toString());

a.insertAt(4, 0);
console.log(a.toString());

console.log(a.contains(5));
console.log(a.contains(4));
