function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.prev = null;
        this.next = null;
    }
    let length = 0,
        head = null,//头
        tail = null;//尾巴
    this.insert = (position,element)=> {
        if(position>=0&&position<=length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if(position===0){//第一个位置添加
                if(!head){
                    head = node;
                    tail = node;
                }else{
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }else if(position === length){//最后一个位置添加
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length++;
            console.log(tail);
            return true;
        }else{
            console.error('position is not defined in linkedlist');
            return false;
        }
    }
    this.removeAt = function(position){
        if(position>-1&&position<length){
            let current = head,
                previous,
                index=0;
            
            if(position==0){//移除第一项
                head = current.next;
                if(length==1){
                    tail = null;
                }else{
                    head.prev = null;
                }
            }else if(position===length-1){
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return true;
        }else{
            return false;
        }
    }
}
let listnode = new LinkedList()
listnode.insert(0,1);
listnode.insert(1,2);
listnode.insert(2,3);
listnode.insert(3,4);
listnode.insert(4,5);
listnode.insert(5,6);