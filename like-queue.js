"use strict";

class LikeQueue {
  #idx;
  #queue;

  constructor() {
    this.length = 0;
    this.#idx = 0;
    this.#queue = [];
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
}

module.exports = LikeQueue;
