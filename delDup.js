function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    // slow
    // if(head == null || head.next == null) return head
    // head.next = deleteDuplicates(head.next)
    // return head.val == head.next.val ?  head.next : head
    let pointer = head
    while(pointer){
        if(pointer.next && pointer.next.val == pointer.val){
            pointer.next = pointer.next.next
        }
        else{
            pointer = pointer.next
        }
    }
    return head
};

console.log(deleteDuplicates([1,1,2]))
