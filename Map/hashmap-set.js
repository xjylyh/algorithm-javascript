const HashMap = require('./hashmap');
const LinkedList = require('../LinkedList/linkedList');
class ValuePair extends HashMap{
    constructor(key,value){
        super();
        this.key = key;
        this.value = value;
    }
    toString(){
        return `[${this.key}-${this.value}]`;
    }
    put(key,value){
        let position = this.loseloseHashCode(key);
        if(this.map[position]==undefined){
            this.map[position] = new LinkedList();//新建链表储存数据
        }
        this.map[position].append(new ValuePair(key,value));//使用当前类来存放数据
    }
    get(key){
        let position = this.loseloseHashCode(key);//查找位置
        if(this.map[position]!==undefined){//看看这个位置上的东西是不是undefined
            let current = this.map[position].getHead();//拿到链表
            while(current.next){//查找链表的中间项
                if(current.element.key == key){
                    return current.element.value;
                }
                current = current.next;
            }
            if(current.element.key == key){//查找链表的第一项或者最后一项->两种状态的next都是null
                return current.element.value;
            }
        }
        return undefined;//如果找到了undefined就返回
    }
    remove(key){//原理同get（↑）
        let position = this.loseloseHashCode(key);
        if(this.map[position]!==undefined){
            let current = this.map[position].getHead();
            while(current.next){
                if(current.element.key == key){
                    this.map[position].remove(current.element);
                    if(this.map[position].isEmpty()){
                        this.map[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if(current.element.key == key){
                this.map[position].remove(current.element);
                if(this.map[position].isEmpty()){
                    this.map[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }
}

// let valuepair = new ValuePair();
// valuepair.put('Gandalf', 'gandalf@email.com');
// valuepair.put('John', 'johnsnow@email.com');
// valuepair.put('Tyrion', 'tyrion@email.com');
// valuepair.put('Aaron', 'aaron@email.com');
// valuepair.put('Donnie', 'donnie@email.com');
// valuepair.put('Ana', 'ana@email.com');
// valuepair.put('Jonathan', 'jonathan@email.com');
// valuepair.put('Jamie', 'jamie@email.com');
// valuepair.put('Sue', 'sue@email.com');
// valuepair.put('Mindy', 'mindy@email.com');
// valuepair.put('Paul', 'paul@email.com');
// valuepair.put('Nathan', 'nathan@email.com');
// console.log(valuepair.map);
// console.log(valuepair.get('Tyrion'));

module.exports = ValuePair;