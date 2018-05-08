/**
 *  append(element)：向列表尾部添加一个新的项。
 insert(position, element)：向列表的特定位置插入一个新的项。
 remove(element)：从列表中移除一项。
 indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
 removeAt(position)：从列表的特定位置移除一项。
 isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
 size()：返回链表包含的元素个数。与数组的length属性类似。
 toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的
toString方法，让其只输出元素的值。
 */ 
function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;
    this.getHead = function(){
        return head;
    }
    this.append = function(element){//向列表尾部添加一个新的项
        let current,node = new Node(element);
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.insert = function(position,element){//向列表的特定位置插入一个新的项
        if(position>=0 && position<=length){
            let node = new Node(element),
            current = head,//当前链表
            previous,//之前的链表
            index = 0;
            //如果是添加到第一个
            if(position===0){
                node.next = current;
                head = node;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    }
    this.removeAt = function(position){//从列表的特定位置移除一项
        if(position>-1 && position<length){
            let current = head,//取出当前链表
                previous,//用来储存之前的链表
                index=0;
            //移出第一项
            if(position===0){
                head = current.next;
            }else{
                //移出其他项
                while(index++<position){//循环链表到传入的position位置
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else{
            //如果没有找到需要删除的位置（position），就返回null
            return null;
        }
    }
    this.remove = function(element){//从列表中移除一项
        let index = this.indexOf(element);
        if(index){
            return this.removeAt(index);
        }else{
            console.log('element is not defind');
            return false;
        }
    }
    this.indexOf = function(element){//返回元素在列表中的索引。如果列表中没有该元素则返回-1。
        let current = head,index=-1;
        while(current){
            if(element===current.element){
                return index;
            }
            index++;
            current = current.next();
        }
        return -1;
    }
    this.isEmpty = function(){//如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
        return length===0;
    }
    this.size = function(){//返回链表包含的元素个数。与数组的length属性类似。
        return length;
    }
    this.toString = function(){//由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
        let current = head,string = "";
        while(current){
            string+=current.element;
            current = current.next;
        }
        return string;
    }
}

// let listnode = new LinkedList();
// listnode.append(1)
// listnode.append(2)
// listnode.append(3)
// listnode.append(4)
// listnode.append(5)
// listnode.append(6)
// console.log(listnode.toString());
// listnode.removeAt(1);
// console.log(listnode.toString());
// console.log(listnode.isEmpty(),listnode.size())
module.exports = LinkedList;
