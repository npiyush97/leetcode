function BinarySearchTree() {
  this.root = null;
}
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.push = function (val) {
  let currentNode = this.root;

  if (!currentNode) {
    this.root = new Node(val);
    return;
  }

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
};

let tree = new BinarySearchTree();

// tree.push(5);
// tree.push(3);
// tree.push(4);
// tree.push(2);
// tree.push(7);
// tree.push(8);
// tree.push(9);

// console.log(tree);

BinarySearchTree.prototype.searchNode = function (node) {
  let currentNode = this.root;
  if (currentNode === null) {
    return false;
  }
  while (currentNode) {
    if (currentNode.value === node) {
      return true;
    } else if (currentNode.value > node) {
      currentNode = currentNode.left;
    } else if (currentNode.value < node) {
      currentNode = currentNode.right;
    } else {
      return false;
    }
  }
  return false;
};

// console.log(tree.searchNode(2),tree.searchNode(9),tree.searchNode(1))

BinarySearchTree.prototype.inOrderTraverse = function (node) {
  let currentNode = !node ? this.root : node;
  if (currentNode) {
    currentNode.left && this.inOrderTraverse(currentNode.left);
    console.log(currentNode.value);
    currentNode.right && this.inOrderTraverse(currentNode.right);
  }
};

// tree.inOrderTraverse()

BinarySearchTree.prototype.preorderTraverse = function (node) {
  let currentNode = !node ? this.root : node;
  if (currentNode) {
    currentNode.left && this.preorderTraverse(currentNode.left);
    currentNode.right && this.preorderTraverse(currentNode.right);
    console.log(` ${currentNode.value} `);
  }
};

// tree.preorderTraverse()

// inorder tree traversal without recursion

BinarySearchTree.prototype.inorderWithoutRecursion = function () {
  let currentNode = this.root;
  let arr = [];
  if (currentNode || arr.length) {
    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = arr.pop();
    console.log(currentNode);
    currentNode = currentNode.right;
  }
};

// tree.inorderWithoutRecursion()

// n-ary Tree

function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  let node = new Node(data);
  this.root = node;
}

let ntree = new Tree("one");

ntree.root.children.push(new Node("three"));
ntree.root.children[0].parent = ntree;

ntree.root.children.push(new Node("two"));
ntree.root.children[1].parent = ntree;

ntree.root.children.push(new Node("four"));
ntree.root.children[2].parent = ntree;

ntree.root.children[0].children.push(new Node("five"));
ntree.root.children[0].children[0].parent = ntree.root.children[0];

ntree.root.children[0].children.push(new Node("six"));
ntree.root.children[0].children[0].parent = ntree.root.children[0];

Tree.prototype.traversePreorderDF = function (node) {
  let currentNode = !node ? this.root : node;
  if (currentNode) {
    console.log(currentNode.data);
    for (let i = 0; i < currentNode.children.length; i++) {
      currentNode.children.length &&
        this.traversePreorderDF(currentNode.children[i]);
    }
  }
};

ntree.traversePreorderDF();

Tree.prototype.traversePreorderDF = function (node) {
  let currentNode = !node ? this.root : node;
  if (currentNode) {
    console.log(currentNode.data);
    for (let i = 0; i < currentNode.children.length; i++) {
      currentNode.children.length &&
        this.traversePreorderDF(currentNode.children[i]);
    }
    console.log(currentNode.data);
  }
};

ntree.traversePreorderDF();

function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}

Queue.prototype.enqueue = function (data) {
  this.storage[this.newestIndex] = data;
  this.newestIndex++;
};

Queue.prototype.dequeue = function () {
  let deleteData;
  if (this.oldestIndex != this.newestIndex) {
    deleteData = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;
    return deleteData;
  }
};

Queue.prototype.printQ = function () {
  let size = this.size();
  for (let i = this.oldestIndex; i < this.newestIndex; i++) {
    console.log(this.storage[i]);
  }
  return size;
};

Queue.prototype.size = function () {
  return this.newestIndex - this.oldestIndex;
};

Tree.prototype.traversePreorderBF = function () {
  let currentNode = this.root;
  let queue = new Queue();
  while (currentNode) {
    console.log(currentNode.data);
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.enqueue(currentNode.children[i]);
    }
    currentNode = queue.dequeue();
  }
};

ntree.traversePreorderBF();
