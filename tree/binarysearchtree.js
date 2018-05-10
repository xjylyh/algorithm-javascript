/**
 *   insert(key)：向树中插入一个新的键。
     search(key)：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
     inOrderTraverse：通过中序遍历方式遍历所有节点。
     preOrderTraverse：通过先序遍历方式遍历所有节点。
     postOrderTraverse：通过后序遍历方式遍历所有节点。
     min：返回树中最小的值/键。
     max：返回树中最大的值/键。
     remove(key)：从树中移除某个键。
 */ 

 //辅助方法开始
 
 //向树中插入一个新的键
let insertNode = function(node,newNode){
    if(newNode.key<node.key){
        if(node.left == null){
            node.left = newNode;
        }else{
            insertNode(node.left,newNode);
        }
    }else{
        if(node.right == null){
            node.right = newNode;
        }else{
            insertNode(node.right,newNode);
        }
    }
}
//通过中序遍历方式遍历所有节点
let inOrderTraverseNode = function(node,cb){
    if(node!=null){
        inOrderTraverseNode(node.left,cb);
        cb(node.key);
        inOrderTraverseNode(node.right,cb);
    }
}
//通过先序遍历方式遍历所有节点
let preOrderTraverseNode = function(node,cb){
    if(node!=null){
        cb(node.key);
        preOrderTraverseNode(node.left,cb);
        preOrderTraverseNode(node.right,cb);
    }
}
//通过后序遍历方式遍历所有节点
let postOrderTraverseNode = function(node,cb){
    if(node!=null){
        postOrderTraverseNode(node.left,cb);
        postOrderTraverseNode(node.right,cb);
        cb(node.key);
    }
}
//辅助方法结束


//二叉搜索树类
function BinarySearchTree(){
    let Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null;


    this.insert = (key)=>{
        let newNode = new Node(key);
        if(this.root == null){
            this.root = newNode;
        }else{
            insertNode(this.root,newNode)
        }
    }

    this.search = (key)=>{

    }

    //树的中序遍历
    this.inOrderTraverse = (callback)=>{
        inOrderTraverseNode(this.root,callback);
    }
    //树的前序遍历
    this.preOrderTraverse = (callback)=>{
        preOrderTraverseNode(this.root,callback);
    }
    //树的后序遍历
    this.postOrderTraverse = (callback)=>{
        postOrderTraverseNode(this.root,callback);
    }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25); 
console.log(tree.root);
tree.postOrderTraverse(function(item){
    console.log(item);
})
