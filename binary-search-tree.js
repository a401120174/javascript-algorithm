function printNode(value) {
   console.log(value);
}

function BinarySearchTree() {
   var Node = function (key) {
      this.key = key;
      this.left = null;
      this.right = null;
   };

   var root = null;

   var insertNode = function (node, newNode) {
      if (node.key > newNode.key) {
         if (node.left === null) {
            node.left = newNode;
         } else {
            insertNode(node.left, newNode);
         }
      } else {
         if (node.right === null) {
            node.right = newNode;
         } else {
            insertNode(node.right, newNode);
         }
      }
   };

   this.insert = function (key) {
      var newNode = new Node(key);

      if (!root) {
         root = newNode;
      } else {
         insertNode(node, newNode);
      }
   };

   var inOrderTraverseNode = function (node, callback) {
      if (node !== null) {
         inOrderTraverse(node.left, callback);
         callback(node.key);
         inOrderTraverse(node.right, callback);
      }
   };

   this.inOrderTraverse = function (callback) {
      inOrderTraverseNode(root, callback);
   };

   var preOrderTraverseNode = function (node, callback) {
      if (node !== null) {
         callback(node.key);
         preOrderTraverse(node.left, callback);
         preOrderTraverse(node.right, callback);
      }
   };

   this.preOrderTraverse = function (callback) {
      preOrderTraverseNode(root, callback);
   };

   var postOrderTraverseNode = function (node, callback) {
      if (node !== null) {
         postOrderTraverse(node.left, callback);
         postOrderTraverse(node.right, callback);
         callback(node.key);
      }
   };

   this.postOrderTraverse = function (callback) {
      postOrderTraverseNode(root, callback);
   };

   var minNode = function (node) {
      if (node) {
         while (node.left !== null) {
            node = node.left;
         }

         return node.key;
      }
      return false;
   };

   this.min = function () {
      return minNode(root);
   };

   var maxNode = function (node) {
      if (node) {
         while (node.right !== null) {
            node = node.right;
         }

         return node.key;
      }
      return false;
   };

   this.max = function () {
      return maxNode(root);
   };

   var searchNode = function (node, key) {
      if (!node) {
         return false;
      }

      if (node.key === key) {
         return true;
      } else if (node.key < key) {
         searchNode(node.right, key);
      } else {
         searchNode(node.left, key);
      }
   };

   this.search = function (key) {
      searchNode(root, key);
   };

   var removeNode = function (node, key) {
      if (!node) return false;

      if (node.key < key) {
         removeNode(node.right, key);
      } else if (node.key > key) {
         removeNode(node.left, key);
      } else {
         if (!node.left && !node.right) {
            node = null;
            return node;
         }

         if (!node.left) {
            node = node.right;
            return node;
         } else if (!node.right) {
            node = node.left;
            return node;
         }

         var aux = findMinNode(node.right);
         node.ket = aux.key;
         node.right = removeNode(node.right, aux.key);
         return node;
      }
   };

   this.remove = function (key) {
      removeNode(root, key);
   };
}

var tree = new BinarySearchTree();
