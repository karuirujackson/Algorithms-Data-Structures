//Size of the queue is fixed and cannot be changed after creation of the queue.
//The queue is implemented using an array.
//Also referred as the circular buffer or ring buffer that follows the principle of First In First Out(FIFO).
//A circular queue will reuse the empty block created during the dequeue operation.
//A circular queue is a better choice when working with a fixed size queue.
// Usage: Clocks, Streaming data, Traffic lights, Printer Queue, Browser Event Queue 
// It supports 2 main operations:
//--------enqueue(): Adds an element to the rear/tail of the collection.--------
//--------dequeue(): Removes the first element from the front/head of the collection and returns it.------


class CircularQueue {
    constructor (capacity) {
        this.items = new Array(capacity); // Array to store queue elements
        this.capacity = capacity;        // Maximum size of the queue
        this.currentLength = 0;          // Current number of elements in the queue
        this.rear = -1;                  // Index of the rear element (last element) ===> indicates an empty queue
        this.front = -1;                 // Index of the front element (first element)
    }

    isFull () {
        return this.currentLength === this.capacity;
    }

    isEmpty () {
        return this.currentLength === 0;
    }

    enqueue (element) {
        if (!this.isFull()) {                     // Check if the queue is not full
            this.rear = (this.rear + 1) % this.capacity; // Move rear circularly. The rear pointer is updated circularly using modulo (%) to reuse empty spaces.
            this.items[this.rear] = element;     // Add the element to the rear
            this.currentLength += 1;             // Increment the current length
            if (this.front === -1) {             // If the queue was empty, set front to rear
                this.front = this.rear;
            }
        }
    }

    dequeue () {
        if (this.isEmpty()) {                   // Check if the queue is empty
            return null;
        }
        const item = this.items[this.front];    // Get the front element
        this.items[this.front] = null;          // Remove the element from the queue
        this.front = (this.front + 1) % this.capacity; // Move front circularly
        this.currentLength -= 1;                // Decrement the current length
        if (this.isEmpty()) {                   // If the queue becomes empty, reset pointers. If the queue becomes empty after dequeueing, both front and rear are reset to -1.
            this.front = -1;
            this.rear = -1;
        }
        return item;                            // Return the dequeued element
    }
    peek () {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
    }

    print () {
        if (this.isEmpty()) {                    // Check if the queue is empty
            console.log('Queue is empty');
        } else {
            let str = '';
            let i;
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';     // Append elements to the string
            }
            str += this.items[i];                // Append the last element
            console.log(str);                    // Print the queue elements
        }
    }
}

const queue = new CircularQueue(5); // Create a circular queue with capacity 5

queue.enqueue(10);   // Add 10 to the queue
queue.enqueue(20);   // Add 20 to the queue
queue.enqueue(30);   // Add 30 to the queue
queue.enqueue(40);   // Add 40 to the queue
queue.enqueue(50);   // Add 50 to the queue
queue.print();       // Output: 10 20 30 40 50

console.log(queue.dequeue()); // Remove and return 10 (front element)
console.log(queue.peek());    // Return 20 (new front element)
console.log(queue.isEmpty()); // Check if the queue is empty (false)

queue.enqueue(60); // Add 60 to the queue (reuses the space freed by dequeue)

queue.print();       // Output: 20 30 40 50 60


// -----------Time Complexity:------------
// enqueue(), dequeue() and peek(): Big-O ===> O(1)
// print(): Big-0 ===> O(n), where n is the number of elements in the queue.