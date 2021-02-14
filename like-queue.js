"use strict";

class LikeQueue {
  #idx;
  #queue;

  constructor() {
    this.length = 0;
    this.#idx = 0;
    this.#queue = [];
  }

  getElements() {
    return this.#queue.slice(this.#idx);
  }

  enqueue(el) {
    this.#queue.push(el);
    this.length++;
  }

  dequeue() {
    const firstElement = this.#queue[this.#idx];
    this.length--;
    this.#idx++;
    return firstElement;
  }

  pop() {
    this.length--;
    return this.#queue.pop();
  }
}

module.exports = LikeQueue;
