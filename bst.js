var rangeSumBST = function (root, low, high) {
    if (root == null) {
        return 0;
      }
      if (root.val > high) {
      return rangeSumBST(root.left, low, high);
      }
      if (root.val < low) {
      return rangeSumBST(root.right, low, high);
      }
      else{
      return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
      }
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
