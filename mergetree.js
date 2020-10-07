var mergeTrees = function (t1, t2) {
    //runtime 140ms and memory 44.1 mb
    if (!t1) return t2;
    if (!t2) return t1;

    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;

    //
    // if (t1 === null || t2 === null) {
    //     return t1 ? t1 : t2;
    // }
    // const quene1 = [];
    // const quene2 = [];

    // const transverse = (root1, root2) => {
    //     if (root1 === null && root2 === null) return;

    //     quene1.push(root1);
    //     quene2.push(root2);

    //     while (quene1.length !== 0 || quene2.length !== 0) {
    //         const tempRoot = quene1.shift();
    //         const tempRoot2 = quene2.shift();

    //         if (tempRoot2) {
    //             quene2.push(tempRoot2.left);
    //             quene2.push(tempRoot2.right);
    //             if (!tempRoot) {
    //                 quene1.push(null);
    //                 quene1.push(null);
    //             }
    //         }
    //         if (tempRoot) {
    //             tempRoot.val += tempRoot2 ? tempRoot2.val : 0;
    //             quene1.push(tempRoot.left);
    //             quene1.push(tempRoot.right);
    //             if (!tempRoot2) {
    //                 quene2.push(null);
    //                 quene2.push(null);
    //             }
    //             if (!tempRoot.left && tempRoot2 && tempRoot2.left) {
    //                 tempRoot.left = tempRoot2.left;
    //             }
    //             if (!tempRoot.right && tempRoot2 && tempRoot2.right) {
    //                 tempRoot.right = tempRoot2.right;
    //             }
    //         }
    //     }
    // };
    // transverse(t1, t2);
    // return t1;

    //conditional
//     if (!t2 && !t1) {
//         return null;
//     }
//     let sum = (t1 ? t1.val : 0) + (t2 ? t2.val : 0);
//     let f = new TreeNode(sum);
//     f.left = mergeTrees(t1 ? t1.left : t1, t2 ? t2.left : t2);
//     f.right = mergeTrees(t1 ? t1.right : t1, t2 ? t2.right : t2);
//     return f;
// };
// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }
//     //2 lines
//     if(!t1 || !t2) return t1||t2
//     return new TreeNode(t1.val+t2.val,mergeTrees(t1.left,t2.left),mergeTrees(t1.right,t2.right))
}
console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]));
