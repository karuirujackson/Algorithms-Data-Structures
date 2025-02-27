//Queue is a data structure that follows the principle of First In First Out(FIFO).
//The first element added to the queue is the first one to be removed.
//Supports 2 main operations:
//--------enqueue(): Adds an element to the end of the queue.--------
//--------dequeue(): Removes the first element from the queue and returns it.------
//--------peek(): Returns the first element of the queue without removing it.-------
//--------isEmpty(): Returns true if the queue is empty, false otherwise.-------
//--------size(): Returns the number of elements in the queue.-------
//--------print(): Prints the elements of the queue.-------
//--------clear(): Removes all elements from the queue.-------
//The queue is implemented using an array or a linked list data structure.
//Usage: The queue is often used in algorithms like printers,CPU task scheduling, callback queue in JS runtime and browser event queue.

class Queue {
    constructor () {
        this.items = [];
    }

    enqueue (element) {
        this.items.push(element);
    }

    dequeue () {
        return this.items.shift();
    }

    isEmpty () {
        return this.items.length === 0;
    }

    peek () {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }

    size () {
        if (!this.isEmpty()) {
            return this.items.length;
        }
    }

    print () {
        if (!this.isEmpty()) {
            console.log(this.items.toString());
        }
    }
}

const queue = new Queue();
queue.enqueue(10);   
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());