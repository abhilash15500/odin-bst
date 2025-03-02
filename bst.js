console.log("Hi :)");


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

  removeDuplicateItem(value,tempVariable = this.root) {
    let count = 0;
    let isDuplicateRemoved =false;

    while(!isDuplicateRemoved) {
      if(tempVariable.leftChild.data === value && count === 1) {
        tempVariable.leftChild = null;
        isDuplicateRemoved = true;
        return;

      } 

      else if (tempVariable.rightChild.data === value && count === 1) {
        tempVariable.rightChild = null;
        isDuplicateRemoved = true;
        return;
      }

      if(value === tempVariable.data && count === 0) {
        count = count+1;
      } 

      if(value > tempVariable.data) {
        tempVariable = tempVariable.rightChild;
      }
      else if (value < tempVariable.data) {
        tempVariable = tempVariable.leftChild;
      }
    }

  }

  deleteItem(value, tempVariable = this.root) {


    let isElementFound = false;

    while (!isElementFound) {
      if(tempVariable.leftChild !== null) {



    //      //for inorder successor 

    //   if (
    //     value === tempVariable.data &&
    //     tempVariable.leftChild !== null &&
    //     tempVariable.rightChild !== null
    //   ) {
    //         let inOrderSuccessor;
    //         let tempVariableForInorderSuccessor = tempVariable.rightChild;
    //         let isInOrderSuccessorFound = false;

    //         while(!isInOrderSuccessorFound) {
    //           if(tempVariableForInorderSuccessor.leftChild === null) {
    //             tempVariable.data = tempVariableForInorderSuccessor.data;
    //             inOrderSuccessor = tempVariableForInorderSuccessor.data;
    //             isInOrderSuccessorFound = true;
              
    //             return;
    //           }
    //           if(tempVariableForInorderSuccessor.leftChild !== null) {
    //           tempVariableForInorderSuccessor = tempVariableForInorderSuccessor.leftChild;
    //         } };

    //       }
    
    //  if(value === tempVariable.leftChild.data && tempVariable.leftChild.leftChild !== null && tempVariable.leftChild.rightChild !== null) {
    //           let tempVariableForInorderSuccessor = tempVariable.leftChild;
    //           while(!isElementFoundForInorderSuccessor) {
    //             if(tempVariableForInorderSuccessor.leftChild !== null){
    //               tempVariableForInorderSuccessor =tempVariableForInorderSuccessor.leftChild;
    //             }
    //             if(tempVariableForInorderSuccessor.leftChild === null) {
                  
    //             }
    //           }
    //  }
      

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


      if(tempVariable.rightChild !== null) {   //////
      //for inorder successor 

      if (
        value === tempVariable.data &&
        tempVariable.leftChild !== null &&
        tempVariable.rightChild !== null
      ) {
            let inOrderSuccessor;
            let tempVariableForInorderSuccessor = tempVariable.rightChild;
            let isInOrderSuccessorFound = false;

            while(!isInOrderSuccessorFound) {
              if(tempVariableForInorderSuccessor.leftChild === null) {
                tempVariable.data = tempVariableForInorderSuccessor.data;

                if(tempVariableForInorderSuccessor.rightChild !== null) {
                  tempVariableForInorderSuccessor = tempVariableForInorderSuccessor.rightChild;
                }
                inOrderSuccessor = tempVariableForInorderSuccessor.data;
                
                isInOrderSuccessorFound = true;
              
                return;
              }
              if(tempVariableForInorderSuccessor.leftChild !== null) {
              tempVariableForInorderSuccessor = tempVariableForInorderSuccessor.leftChild;
            } };


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

// let newTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
let newTree = new Tree([23, 67, 12, 89, 45, 78, 56, 34, 90, 21, 
  43, 31, 77])
console.log(prettyPrint(newTree.root));
newTree.deleteItem(45);
console.log(prettyPrint(newTree.root));

