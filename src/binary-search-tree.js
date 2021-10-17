const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor (){
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let isDataPlaced = false;
    let tree = this.tree;
    if (tree === null){
      this.tree = new Node(data);
    } else {
      while (!isDataPlaced) {
        if (tree.data > data) {
          if (tree.left === null){
            tree.left = new Node(data);
            isDataPlaced = true;
          } else {
            tree = tree.left;
          }
        } else {
          if (tree.right === null){
            tree.right = new Node(data);
            isDataPlaced = true;
          } else {
            tree = tree.right;
          }
        }
      }
    }
  }

  has(data) {
    let tree = this.tree;
    while (true) {
      if (tree === null){
        return false;
      } else if (tree.data === data){
        return true;
      } else if (tree.data > data) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
  }

  find(data) {
    let tree = this.tree;
    while (true){
      if(tree === null){
        return null;
      } else if (tree.data === data){
        return tree;
      } else if (tree.data > data){
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
  }

  remove(data) {
    if (!this.has(data)){
      return null;
    }
  }

  min() {
    let tree = this.tree;
    if (tree === null) return null;
    let result = tree.data;
    while (true){
      tree = tree.left;
      if (tree === null){
        return result;
      } else {
        result = tree.data;
      }
    }
  }

  max() {
    let tree = this.tree;
    if (tree === null) return null;
    let result = tree.data;
    while (true) {
      tree = tree.right;
      if (tree === null) {
        return result;
      } else {
        result = tree.data;
      }
    }
  }

}