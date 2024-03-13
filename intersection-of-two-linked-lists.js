class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

…// Example 3
const listE = createLinkedListFromArray([2, 6, 4]);
const listF = createLinkedListFromArray([1, 5]);
const result3 = getIntersectionNode(listE, listF);
console.log(result3 ? `Intersected at '${result3.val}'` : 'No intersection'); // Output: No intersection
                                                                                                                                                                        
