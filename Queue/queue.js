//队列的实现 
/*
 enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
 dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
 front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
 isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
 size()：返回队列包含的元素个数，与数组的length属性类似。
*/ 
class Queue{
    constructor(){
        this.item = [];
    }
    enqueue(){
        return this.item.push(...arguments);
    }
    dequeue(){
        return this.item.shift();
    }
    front(){
        return this.item[0];
    }
}