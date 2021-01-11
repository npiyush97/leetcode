let removeNthFromEnd = function (head, n) {
  let start = head,
    curr = head;
  while (n--) {
    start = start.next;
  }
  while (start && start.next) {
    curr = curr.next;
    start = start.next;
  }
  if (!start) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }
  console.log( head);
};

removeNthFromEnd([1,2,3,4,5],2)

removeNthFromEnd([1,2,3,4,5],5)
