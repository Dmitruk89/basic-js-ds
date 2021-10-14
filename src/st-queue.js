const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.length = 0;
    this.end = null;
  }

  getUnderlyingList() {
    let listItem = this.end;
    let UnderlyingList = { value: listItem.value, next: null};
    while (listItem.next !== null){
      listItem = listItem.next;
      UnderlyingList = {value: listItem.value, next: UnderlyingList}
    }
    return UnderlyingList;
  }

  enqueue(value) {
    let newEl = new ListNode(value);
    this.length += 1;
    if (this.end === null){
      this.end = newEl;
    } else {
      newEl.next = this.end;
      this.end = newEl;
    }
  }

  dequeue() {
   let elem = this.end;
   let nextEl = null;
   while (elem.next !== null){
    nextEl = elem;
    elem = elem.next;
   }
   nextEl.next = null;
   this.length -= 1;
   return elem.value;
  }

}
