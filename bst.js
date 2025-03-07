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
      
  if(this.findBooleanValueForOtherMethods(value) === true) {
    throw new Error("The value already exists in the tree")
    
  }
  else if (this.findBooleanValueForOtherMethods(value) === false )
{
  console.log(`Inserting the value ${value} with insert method in the tree`);
  
}   
// Proceed with insertion


  
    //fix this asap
    
    if(tempVariable === null) {
      this.root = new Node(value);
      return;
    }
    //fix this above code  asap ------------------- AAAAAAAAAAAA

    if (tempVariable.rightChild === null && tempVariable.leftChild === null) {
      if (value > tempVariable.data) {
        tempVariable.rightChild = new Node(value);
      } else if (value < tempVariable.data) {
        tempVariable.leftChild = new Node(value);
      }
      return;
    }

    if(value > tempVariable.data && tempVariable.rightChild === null) {
        tempVariable.rightChild = new Node(value);
    }
    else if (value < tempVariable.data && tempVariable.leftChild === null) {
      tempVariable.leftChild = new Node(value);
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
//checking if the element exists or not 
    if(this.findBooleanValueForOtherMethods(value) === true) {
      console.log(`deleting the value ${value} with delete method in the tree`);
      
      
    }
    else if (this.findBooleanValueForOtherMethods(value) === false )
  {
    throw new Error("The value doesnt exists in the tree")
    
  }   
//


    let isElementFound = false;

    // inorder successor for root node 
    
    if(tempVariable.rightChild !== null && tempVariable.leftChild !== null && tempVariable.data === value
    ) {
      if (
        value === tempVariable.data &&
        tempVariable.leftChild !== null &&
        tempVariable.rightChild !== null
      ) {
        let inOrderSuccessor;
        let tempVariableForInorderSuccessor = tempVariable.rightChild;
        let isInOrderSuccessorFound = false;

        while (!isInOrderSuccessorFound) {
          // Find the leftmost node in the right subtree (in-order successor)
          if (tempVariableForInorderSuccessor.leftChild === null) {
            this.root.data= tempVariableForInorderSuccessor.data;

            // If in-order successor has a right child, adjust the reference
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

          // Continue searching for the in-order successor
          if (tempVariableForInorderSuccessor.leftChild !== null) {
            tempVariableForInorderSuccessor =
              tempVariableForInorderSuccessor.leftChild;
          }
        }
      }


    }
      
    
    // it ends here

    while (!isElementFound) {
    
    
    

    if(tempVariable.rightChild === null && tempVariable.leftChild === null && tempVariable.data === value
    ) {
      this.root = null;
      
      return;
    }
     
      // If reached a leaf node and the element is not found, throw an error
      if (
        tempVariable.leftChild === null &&
        tempVariable.rightChild === null &&
        isElementFound === false 
      ) {
        throw new Error("Element not found");
      }

      if(tempVariable === null) {
        throw new Error("The tree is empty!")
      }
      

      // Check if left child exists
      if (tempVariable.leftChild !== null) {
        // Case 1: Single child deletion (left child exists, right child does not)
        if (
          value === tempVariable.leftChild.data &&
          tempVariable.leftChild.leftChild === null &&
          tempVariable.leftChild.rightChild !== null
        ) {
          tempVariable.leftChild = tempVariable.leftChild.rightChild;
          isElementFound = true;
          return;
        }

        // Case 2: Single child deletion (right child exists, left child does not)
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

      // Check if right child exists
      if (tempVariable.rightChild !== null) {
        // Case 3: Node with two children (in-order successor replacement)
        if (
          value === tempVariable.data &&
          tempVariable.leftChild !== null &&
          tempVariable.rightChild !== null
        ) {
          let inOrderSuccessor;
          let tempVariableForInorderSuccessor = tempVariable.rightChild;
          let isInOrderSuccessorFound = false;

          while (!isInOrderSuccessorFound) {
            // Find the leftmost node in the right subtree (in-order successor)
            if (tempVariableForInorderSuccessor.leftChild === null) {
              tempVariable.data = tempVariableForInorderSuccessor.data;

              // If in-order successor has a right child, adjust the reference
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

            // Continue searching for the in-order successor
            if (tempVariableForInorderSuccessor.leftChild !== null) {
              tempVariableForInorderSuccessor =
                tempVariableForInorderSuccessor.leftChild;
            }
          }
        }

        // Case 4: Single child deletion (left child exists, right child does not)
        if (
          value === tempVariable.rightChild.data &&
          tempVariable.rightChild.leftChild !== null &&
          tempVariable.rightChild.rightChild === null
        ) {
          tempVariable.rightChild = tempVariable.rightChild.leftChild;
          isElementFound = true;
          return;
        }

        // Case 5: Single child deletion (right child exists, left child does not)
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

      // Case 6: Leaf node deletion (no children)
      if(tempVariable.rightChild !== null) {
        if (
          value === tempVariable.rightChild.data &&
          tempVariable.rightChild.rightChild === null &&
          tempVariable.rightChild.leftChild === null
        ) {
          tempVariable.rightChild = null;
          isElementFound = true;
          return;
        }
      }
      
      if(tempVariable.leftChild !== null) {
        if (
          value === tempVariable.leftChild.data &&
          tempVariable.leftChild.rightChild === null &&
          tempVariable.leftChild.leftChild === null
        ) {
          tempVariable.leftChild = null;
          isElementFound = true;
          return;
        }
  
        // Traverse the tree based on value comparison
        if (value > tempVariable.data) {
          tempVariable = tempVariable.rightChild;
        } else if (value < tempVariable.data) {
          tempVariable = tempVariable.leftChild;
        }
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

  findBooleanValueForOtherMethods(value, tempVariable = this.root) {
    while (tempVariable !== null) {
      if (value === tempVariable.data) {
        return true;
      }
      if (value > tempVariable.data) {
        tempVariable = tempVariable.rightChild;
      } else {
        tempVariable = tempVariable.leftChild;
      }
    }
   return false;
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

  height(node) {
    if (node === null) {
      return -1;
    }
    return (
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1
    );
  }

  depth(node) {
    let isDepthFound = false;
    let depthCount = 0;
    let tempVariable = this.root;
    while (!isDepthFound) {
      console.log(node);

      if (node === this.root) {
        isDepthFound = true;
        return depthCount;
      }
      if (node === tempVariable.rightChild) {
        isDepthFound = true;
        return depthCount + 1;
      }
      if (node === tempVariable.leftChild) {
        isDepthFound = true;
        return depthCount + 1;
      }

      if (node.data > tempVariable.data) {
        tempVariable = tempVariable.rightChild;
        depthCount = depthCount + 1;
      } else if (node.data < tempVariable.data) {
        tempVariable = tempVariable.leftChild;
        depthCount = depthCount + 1;
      }
    }
  }

  isBalanced() {
    let leftSubTreeHeight = this.height(this.root.leftChild);
    let rightSubTreeHeight = this.height(this.root.rightChild);

    let differenceOfHeight = Math.abs(leftSubTreeHeight - rightSubTreeHeight);
    if (differenceOfHeight > 1) {
      return false;
    } else {
      return true;
    }
  }

  rebalance() {
    if (this.isBalanced()) {
      return "This tree is already balanced";
    } else {
      let arr = preOrderForRebalanceMethod(this.root);

      this.arr = arr;
      this.root = buildTree(arr);
    }
  }
}

function preOrderForRebalanceMethod(node, arr = []) {
  if (node === null) {
  }

  arr.push(node.data);
  if (node.leftChild !== null) {
    preOrderForRebalanceMethod(node.leftChild, arr);
  }
  if (node.rightChild !== null) {
    preOrderForRebalanceMethod(node.rightChild, arr);
  }

  return arr;
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

function callbackForRebalance(node, arr) {
  arr.push(node.data);
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

let newTree = new Tree([4,5,1,5,66,33,74,43,75,346,7,18.7,466,3343,6530,1,30,34,62,29,2]);

prettyPrint(newTree.root);

// console.log(newTree.root);

console.log("-----------------");

newTree.deleteItem(34)

newTree.deleteItem(43);

console.log(newTree.isBalanced())
prettyPrint(newTree.root);

