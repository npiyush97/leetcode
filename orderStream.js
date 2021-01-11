var OrderedStream = function (n) {
  this.ar = new Array(n);
  this.i = 0;
};

OrderedStream.prototype.insert = function (id, value) {
  let ar = this.ar;
  ar[id - 1] = value;

  let res = [];

  if (id - 1 === this.i) {
    while (ar[this.i]) {
      res.push(ar[this.i++]);
    }
  }
  return res;
};
OrderedStream(["OrderedStream", "insert", "insert", "insert", "insert", "insert"][([5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"])]);
