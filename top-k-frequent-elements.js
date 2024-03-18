function topKFrequent(nums, k) {
    const freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    const minHeap = new MinHeap((a, b) => freqMap.get(a) - freqMap.get(b));

    freqMap.forEach((freq, num) => {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.remove();
        }
    });

    return minHeap.toArray();
}

class MinHeap {
    constructor(compare) {
        this.compare = compare;
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);

        return root;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    sinkDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
                smallest = rightChildIndex;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }

    size() {
        return this.heap.length;
    }

    toArray() {
        return this.heap.slice();
    }
}

