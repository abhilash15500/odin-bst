// constructor classes for node and tree
class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.data = data;
  }
}

class Tree {
  constructor(arr, root) {
    this.arr = arr;
    this.root = buildTree(arr);
  }

  insert(value, tempVariable = this.root) {
    if (tempVariable.rightChild === null && tempVariable.leftChild === null) {
      if (value > tempVariable.data) {
        tempVariable.rightChild = new Node(value);
      } else if (value < tempVariable.data) {
        tempVariable.leftChild = new Node(value);
      }
      return;
    }

    if (value > tempVariable.data) {
      tempVariable = tempVariable.rightChild;
      this.insert(value, tempVariable);
    } else {
      tempVariable = tempVariable.leftChild;
      this.insert(value, tempVariable);
    }
  }

  delete(value, tempVariable = this.root) {
        
  };
}

function buildTree(array) {
  // sorting the array as well as removing the duplicates for creating a bst later
  array.sort((x, y) => x - y);
  let sortedArray = [];

  array.forEach((number) => {
    if (sortedArray.includes(number) === true) {
      console.log("already there");
    } else {
      sortedArray.push(number);
    }
  });

  //start and end variables
  const start = 0;
  const end = sortedArray.length - 1;
  let mid;
  let midValue;
  let root;

  // bst implementation using recursion
  if (start > end) {
    return null;
  } else {
    mid = Math.floor((start + end) / 2);
    midValue = sortedArray[mid];

    root = new Node(midValue);

    root.leftChild = buildTree(sortedArray.slice(start, mid));
    root.rightChild = buildTree(sortedArray.slice(mid + 1, end + 1));
  }
  return root;
}

// pretty print function to visualize the tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// utility functions

newTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

console.log(prettyPrint(newTree.root));

newTree.delete(3);

console.log(prettyPrint(newTree.root));
