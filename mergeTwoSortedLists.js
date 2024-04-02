class linkedListNode1 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const sortedLinkedListA = new linkedListNode1(1);
const sortedLinkedListB = new linkedListNode1(2);
const sortedLinkedListC = new linkedListNode1(3);

sortedLinkedListA.next = sortedLinkedListB;
sortedLinkedListB.next = sortedLinkedListC;

class linkedListNode2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const sortedLinkedListW = new linkedListNode2(1);
const sortedLinkedListX = new linkedListNode2(4);
const sortedLinkedListY = new linkedListNode2(5);
const sortedLinkedListZ = new linkedListNode2(6);

sortedLinkedListW.next = sortedLinkedListX;
sortedLinkedListX.next = sortedLinkedListY;
sortedLinkedListY.next = sortedLinkedListZ;

const mergeTwoLinkedSortedLists = (headA, headW) => {
    let dummy = new linkedListNode1(-1);
    let prevNode = dummy;
    let currNodeA = headA;
    let currNodeW = headW;
    let arr = [];

    while (currNodeA !== null && currNodeW !== null) {
        if (currNodeA.value <= currNodeW.value) {
            prevNode.next = currNodeA;
            prevNode = currNodeA;
            currNodeA = currNodeA.next;
        } else {
            prevNode.next = currNodeW;
            prevNode = currNodeW
            currNodeW = currNodeW.next
        }
    }

    if (currNodeA !== null) {
        prevNode.next = currNodeA;
    }

    if (currNodeW !== null) {
        prevNode.next = currNodeW
    }

    return prevNode;
}

console.log(mergeTwoLinkedSortedLists(sortedLinkedListA, sortedLinkedListW))