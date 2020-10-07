function BinarySearchTree() {
    this.root = null;
}
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;


    BinarySearchTree.prototype.push = function (val) {
        let currentNode = this.root;

        if (!currentNode) {
            this.root = new Node(val);
            return;
        }
    };

    let newNode = new Node(val);

    while (currentNode) {
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}
let tree = new BinarySearchTree();

tree.push(5);
tree.push(3);
tree.push(4);
tree.push(2);
tree.push(7);
tree.push(8);
tree.push(9);
