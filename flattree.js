var flatten = function(root) {
    // 100ms
    // if(root == null) return;
    // if(root.left){
    //     let last = root.left
    //     while(last.right !== null) last = last.right
    //     let temp = root.right
    //     root.right = root.left
    //     last.right = temp
    //     root.left  = null
    // }
    // flatten(root.right)
    //optimised 96ms
    if(root == null) return;
    let current = root
    while(current !== null){

        if(current.left){
            let last = root.left
            while(last.right !== null) last = last.right
            let temp = current.right
            current.right = current.left
            last.right = temp
            current.left  = null
        }
        current = current.right
    }
    return root
};
console.log(flatten([1,2,5,3,4,null,6]))
