//栈的实现
class Stack{
    constructor(){
        this.item = [];
    }
    push(){
        return this.item.push(...arguments);
    }
    pop(){
        return this.item.pop();
    }
    peek(){
        return this.item[this.item.length-1];
    }
    isEmpty(){
        return !this.item.length>0;
    }
    clear(){
        return this.item = [];
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString());
    }
}

// let stack = new Stack();
// stack.push(1,2,3,4,5,6);
// stack.push(7);
// console.log(stack.peek());
// console.log(stack);
// stack.pop();
// console.log(stack);
// console.log(stack.size());
// stack.print();
// console.log(stack.isEmpty());
// stack.clear();
// console.log(stack.isEmpty());
module.exports = Stack;