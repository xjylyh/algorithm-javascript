class HashMap{
    constructor(){
        this.map = [];
    }
    loseloseHashCode(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash+=key[i].charCodeAt();
        }
        return hash%22;
    }
    put(key,value){
        let position = this.loseloseHashCode(key);
        this.map[position] = value;
    }
    get(key){
        return this.map[this.loseloseHashCode(key)];
    }
    remove(key){
        this.map[this.loseloseHashCode(key)] = undefined;
    }
}

// let hashmap = new HashMap();
// hashmap.put('jiyao','18001300327@163.com');
// hashmap.put('xjy','jiyao1@jiaju.com');
// hashmap.put('jy','xiejiyao@ehousechina.com');
// console.log(hashmap.map);
// hashmap.remove('jy');
// console.log(hashmap.map);
// console.log(hashmap.get('jiyao'));
module.exports = HashMap;