class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}

function createLinkedListFromArray(arr) {
    let head = null;
    let tail = null;

    for (const val of arr) {
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}
