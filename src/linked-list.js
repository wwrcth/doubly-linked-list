const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    append(data) {
      var node = new Node(data);

      if (this.length !== 0) {
        this._tail.next = node;
        node.prev = this._tail;
      } else {
        this._head = node;
      }

      this._tail = node;

      this.length++;

      return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      var current = this._head,
          i = 0;

      while (i !== index && current !== null) {
        current = current.next;
        i++;
      }

      if (current !== null) {
        return current.data;
      }

      return null;
    }

    insertAt(index, data) {
      var node = new Node(data),
          current = this._head,
          temp = null,
          i = 0;

      while (current !== null && i !== index) {
          current = current.next;
          i++;
      }

      if (current !== null) {
          temp = current.prev;
          current.prev = node;
          temp.next = node;
          node.next = current;
          node.prev = temp;
      }

      this.length++;

      return this;
    }

    isEmpty() {
      if(this.length === 0) {
        return true;
      }

      return false;
    }

    clear() {
      this._head.data = null;
      this._tail.data = null;
      this.length = 0;

      return this;
    }

    deleteAt(index) {
      var current = this._head;
      // var previous = null;
      var i = 0;

      while (current !== null && i !== index) {
          // previous = current;
          current = current.next;
          i++;
      }

      // node is the last element
      if (current === this.tail) {
        this.tail = current.prev;
      } else {
        current.next.prev = current.prev;
      }

      // node is the first element
      if (current === this.head) {
        this.head = current.next;
      } else {
        current.prev.next = current.next;
      }

      this._length--;

      return this;
    }

    reverse() {
      var current = this._head,
          temp = null;

      if (!current.prev) {
          this._tail = current;
      }

      while (current !== null) {
        temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        current = temp;


        if (temp !== null) {
            this._head = current;
          }
        }

      return this;
    }

    indexOf(data) {
      var current = this._head,
          i = 0;

      while (current !== null) {
        if (current.data === data) {
          return i;
        }

        current = current.next;
        i++;
      }

      return -1;
    }
}

module.exports = LinkedList;
