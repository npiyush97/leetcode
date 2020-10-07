var getDecimalValue = function (head) {
    var binaryNum = '';
    var node = head;

    while(node) {
       binaryNum += node.val;
       node = node.next;
    }

    return parseInt(binaryNum, 2);;
};
console.log(getDecimalValue([0]));
