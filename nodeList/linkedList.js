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
    this.remove = function(){//从列表中移除一项

    }
    this.indexOf = function(){//返回元素在列表中的索引。如果列表中没有该元素则返回-1。

    }
    this.isEmpty = function(){//如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。

    }
    this.size = function(){//返回链表包含的元素个数。与数组的length属性类似。

    }
    this.toString = function(){//由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
        console.log(head,length);
    }
}

let listnode = new LinkedList();
listnode.append(1)
listnode.append(2)
listnode.append(3)
listnode.append(4)
listnode.append(5)
listnode.append(6)
listnode.toString();
listnode.removeAt(1);
listnode.toString();

