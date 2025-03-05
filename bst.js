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

  removeDuplicate(value, tempVariable = this.root) {
    let isDuplicateRemoved = false;

    while (!isDuplicateRemoved) {
      if (
        tempVariable.leftChild.data === value &&
        tempVariable.leftChild.leftChild === null &&
        tempVariable.leftChild.rightChild !== null
      ) {
        tempVariable.leftChild = tempVariable.leftChild.rightChild;

        isDuplicateRemoved = true;
        return;
      } else if (
        tempVariable.leftChild.data === value &&
        tempVariable.leftChild.leftChild === null &&
        tempVariable.leftChild.rightChild === null
      ) {
        tempVariable.leftChild = null;

        isDuplicateRemoved = true;
        return;
      } else if (
        tempVariable.rightChild.data === value &&
        tempVariable.rightChild.leftChild === null &&
        tempVariable.rightChild.rightChild !== null
      ) {
        tempVariable.rightChild = tempVariable.leftChild.rightChild;

        isDuplicateRemoved = true;
        return;
      } else if (
        tempVariable.rightChild.data === value &&
        tempVariable.rightChild.leftChild === null &&
        tempVariable.rightChild.rightChild === null
      ) {
        tempVariable.rightChild = null;

        isDuplicateRemoved = true;
        return;
      }

      if (value >= tempVariable.data) {
        tempVariable = tempVariable.rightChild;
      } else if (value < tempVariable.data) {
        tempVariable = tempVariable.leftChild;
      }
    }
  }

  deleteItem(value, tempVariable = this.root) {
    let isElementFound = false;

    while (!isElementFound) {
      if (
        tempVariable.leftChild === null &&
        tempVariable.rightChild === null &&
        isElementFound === false
      ) {
        throw new Error("Element not found");
      }
      if (tempVariable.leftChild !== null) {
        // for single child deletion

        if (
          value === tempVariable.leftChild.data &&
          tempVariable.leftChild.leftChild === null &&
          tempVariable.leftChild.rightChild !== null
        ) {
          tempVariable.leftChild = tempVariable.leftChild.rightChild;
          isElementFound = true;
          return;
        }

        if (
          value === tempVariable.leftChild.data &&
          tempVariable.leftChild.leftChild !== null &&
          tempVariable.leftChild.rightChild === null
        ) {
          tempVariable.leftChild = tempVariable.leftChild.leftChild;
          isElementFound = true;
          return;
        }
      }

      if (tempVariable.rightChild !== null) {
        //////
        //for inorder successor

        if (
          value === tempVariable.data &&
          tempVariable.leftChild !== null &&
          tempVariable.rightChild !== null
        ) {
          let inOrderSuccessor;
          let tempVariableForInorderSuccessor = tempVariable.rightChild;
          let isInOrderSuccessorFound = false;

          while (!isInOrderSuccessorFound) {
            if (tempVariableForInorderSuccessor.leftChild === null) {
              tempVariable.data = tempVariableForInorderSuccessor.data;

              if (tempVariableForInorderSuccessor.rightChild !== null) {
                tempVariableForInorderSuccessor =
                  tempVariableForInorderSuccessor.rightChild;
              }
              inOrderSuccessor = tempVariableForInorderSuccessor.data;

              console.log(`this is ${inOrderSuccessor} lol`);
              this.removeDuplicate(inOrderSuccessor);

              isInOrderSuccessorFound = true;

              return;
            }
            if (tempVariableForInorderSuccessor.leftChild !== null) {
              tempVariableForInorderSuccessor =
                tempVariableForInorderSuccessor.leftChild;
            }
          }
        }
        //
        if (
          value === tempVariable.rightChild.data &&
          tempVariable.rightChild.leftChild !== null &&
          tempVariable.rightChild.rightChild === null
        ) {
          tempVariable.rightChild = tempVariable.rightChild.leftChild;
          isElementFound = true;
          return;
        }

        if (
          value === tempVariable.rightChild.data &&
          tempVariable.rightChild.leftChild === null &&
          tempVariable.rightChild.rightChild !== null
        ) {
          tempVariable.rightChild = tempVariable.rightChild.rightChild;
          isElementFound = true;
          return;
        }
      }

      //for leaf (no child nodes) deletion
      if (
        value === tempVariable.rightChild.data &&
        tempVariable.rightChild.rightChild === null &&
        tempVariable.rightChild.leftChild === null
      ) {
        tempVariable.rightChild = null;
        isElementFound = true;
        return;
      }

      if (
        value === tempVariable.leftChild.data &&
        tempVariable.leftChild.rightChild === null &&
        tempVariable.leftChild.leftChild === null
      ) {
        tempVariable.leftChild = null;
        isElementFound = true;
        return;
      }
      if (value > tempVariable.data) {
        tempVariable = tempVariable.rightChild;
      } else if (value < tempVariable.data) {
        tempVariable = tempVariable.leftChild;
      }
    }
  }

  find(value, tempVariable = this.root) {
    while (tempVariable !== null) {
      if (value === tempVariable.data) {
        return tempVariable;
      }
      if (value > tempVariable.data) {
        tempVariable = tempVariable.rightChild;
      } else {
        tempVariable = tempVariable.leftChild;
      }
    }
    throw new Error("Element not found!");
  }

  levelOrder(callback) {
    let queue = [];
    let isLevelOrderDone = false;

    if (typeof callback !== "function") {
      throw new Error("Please provide a valid callback function");
    }
    
    if (this.root === null) {
      return;
    }
    if (this.root !== null) {
      queue.push(this.root);
    }

    while (!isLevelOrderDone) {
      if (queue.length === 0) {
        isLevelOrderDone = true;
        return;
      }

      if (queue.length !== 0) {
        let newDiscoveredNode = queue[0];
        callback(newDiscoveredNode);

        if (newDiscoveredNode.leftChild !== null) {
          queue.push(newDiscoveredNode.leftChild);
        }
        if (newDiscoveredNode.rightChild !== null) {
          queue.push(newDiscoveredNode.rightChild);
        }
        console.log(queue);
        queue.shift();
      }
    }
  }
}

function preOrder(node, callback) {
  if (typeof callback !== "function") {
    throw new Error("Please provide a valid callback function");
  }
  

  if (node === null) {
    return;
  }

  callback(node);
  if (node.leftChild !== null) {
    preOrder(node.leftChild, callback);
  }
  if (node.rightChild !== null) {
    preOrder(node.rightChild, callback);
  }
}

function postOrder(node, callback) {
  if (typeof callback !== "function") {
    throw new Error("Please provide a valid callback function");
  }
  

  if (node === null) {
    return;
  }

  if (node.leftChild !== null) {
    postOrder(node.leftChild, callback);
  }

  if (node.rightChild !== null) {
    postOrder(node.rightChild, callback);
  }
  callback(node);
}

function inOrder(node, callback) {
  if (typeof callback !== "function") {
    throw new Error("Please provide a valid callback function");
  }
  

  if (node === null) {
    return;
  }

  if (node.leftChild !== null) {
    inOrder(node.leftChild, callback);
  }
  callback(node);

  if (node.rightChild !== null) {
    inOrder(node.rightChild, callback);
  }
}

function callback(newDiscoveredNode) {
  console.log(`printing discovered node ${newDiscoveredNode.data}`);
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

// utility functions

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

// initializing the application!!!!!!!!
//testing

let newTree = new Tree([20, 10, 30, 100, 300, 200, 150]);
// console.log(prettyPrint(newTree.root));

console.log(preOrder(newTree.root, callback));
console.log(postOrder(newTree.root, callback));
console.log(inOrder(newTree.root, callback));

console.log(prettyPrint(newTree.root));
