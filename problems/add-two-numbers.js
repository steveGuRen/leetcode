/**
 * 
 * list defined
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * 
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    var addPoint = 0;
    var root = new ListNode(0);
    root.val = (l1.val + l2.val) % 10;
    addPoint = parseInt((l1.val + l2.val) / 10);
    var currentNode = root;
    while (l1.next || l2.next || addPoint) {
        var val = addPoint + (l1.next != null ? l1.next.val : 0) + (l2.next != null ? l2.next.val : 0);

        addPoint = parseInt(val / 10);
        var nextVal = val % 10;
        var nextNode = new ListNode(nextVal);
        nextNode.next = null;
        currentNode.next = nextNode;
        currentNode = nextNode;
        if (l1.next) {
            l1 = l1.next;
        }
        if (l2.next) {
            l2 = l2.next;
        }
    }
    return root;
}

/**
 * for test;
 */
(function () {
    var lsNode = new ListNode(2);
    var nodeA4 = new ListNode(4);
    var nodeA3 = new ListNode(3);
    lsNode.next = nodeA4;
    nodeA4.next = nodeA3;

    var lsNode2 = new ListNode(5);
    var nodeB5 = new ListNode(6);
    var nodeB4 = new ListNode(4);
    lsNode2.next = nodeB5;
    nodeB5.next = nodeB4;

    var result = addTwoNumbers(lsNode, lsNode2);
    console.log(result);
})()
