/**
 add(value)：向集合添加一个新的项。
 remove(value)：从集合移除一个值。
 has(value)：如果值在集合中，返回true，否则返回false。
 clear()：移除集合中的所有项。
 size()：返回集合所包含元素的数量。与数组的length属性类似。
 values()：返回一个包含集合中所有值的数组。
 */ 
function Set(){
    let items = {};
    this.add = (value)=>{
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    }
    this.remove = (value)=>{
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }
    this.has = (value)=>{
        return items.hasOwnProperty(value);
    }
    this.clear = ()=>{
        items = {};
    }
    this.size = ()=>{
        return Object.keys(items).length;
    }
    this.values = ()=>{
        let result = [];
        for(let key in items){
            result.push(key);
        }
        return result;
        //更简单的实现  return Object.keys(items);
    }
    /**
     * 并集的数学概念，集合A和B的并集，表示为A∪B，定义如下：
        A∪B = { x | x ∈ A∨x ∈ B }
        意思是x（元素）存在于A中，或x存在于B中
     * @param {Set} otherSet 
     */ 
    this.union = (otherSet)=>{
        let unionSet = new Set();
        let values = this.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    /**
     * 交集的数学概念，集合A和B的交集，表示为A∩B，定义如下：
        A∩B = { x | x ∈ A∧x ∈ B }
        意思是x（元素）存在于A中，且x存在于B中。
     * @param {Set} otherSet 
     */ 
    this.intersection = (otherSet)=>{
        let intersectionSet = new Set();
        let values = this.values();
        for(let i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    /**
     * 差集的数学概念，集合A和B的差集，表示为A-B，定义如下：
        A-B = { x | x ∈ A ∧ x B }
        意思是x（元素）存在于A中，且x不存在于B中。
     * @param {Set} otherSet 
     */ 
    this.difference = (otherSet)=>{
        let differenceSet = new Set();
        let values = this.values();
        for(let i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
        return differenceSet;
    }
    /**
     * 
     * @param {Set} otherSet 
     */ 
    this.subset = (otherSet)=>{

    }
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);
console.log(set.has(2));
console.log(set.has(8));
console.log(set.size());
console.log(set.values())
let otset = new Set();
otset.add(10);
otset.add(3);
otset.add(4);
otset.add(5);
otset.add(9);
console.log(set.union(otset).values());
console.log(set.intersection(otset).values());
console.log(set.difference(otset).values())