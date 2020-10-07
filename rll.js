var reverseList = function (head) {
    // if (head === null) return null;
    // let previous = null
    // let next = null;

    // while (head) {
    //     next = head.next
    //     head.next = previous;
    //     previous = head;
    //     head = next;
    // }
    // return previous;
    //faster
    let prev = null
    while(head){
        let next = head.next
        head.next = prev
        prev = head
        if(next) head = next
        else break
    }
    return head
};
reverseList([1, 2, 3, 4, 5]);
