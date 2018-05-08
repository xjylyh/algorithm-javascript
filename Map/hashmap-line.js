const ValuePair = require('./hashmap-set');

class line extends ValuePair{
    constructor(){
        super();
    }
    put(key,value){
        let position = this.loseloseHashCode(key);
        if(this.map[position]==undefined){
            this.map[position] = new ValuePair(key,value);
        }else{
            let index = ++position;
            while(this.map[index]!=undefined){
                index++;
            }
            this.map[index] = new ValuePair(key,value);
        }
    }
    get(key){
        let position = this.loseloseHashCode(key);
        if(this.map[position]!=undefined){
            if(this.map[position].key==key){
                return this.map[position].value
            }else{
                let index = ++position;
                while(this.map[index]==undefined||this.map[index].key!=key){
                    index++;
                }
                if(this.map[index].key==key){
                     return this.map[index].value;
                }
            }
        }
        return undefined;
    }
    remove(key){
        let position = this.loseloseHashCode(key);
        if(this.map[position]!=undefined){
            if(this.map[position].key==key){
                this.map[position] = undefined;
                return true;
            }else{
                let index = ++position;
                while(this.map[index]==undefined||this.map[index].key!=key){
                    index++;
                }
                if(this.map[index].key==key){
                    this.map[position] = undefined;
                    return true;
                }
            }
        }
        return undefined;
    }
}

/**
 * 更好的loseloseHashCode实现    //规定->比较好的实现的魔数  5381  33  1013 
 * function djb2HashCode(key){
 *  let hash = 5381;
 *  for(let i=0;i<key.length;i++){
 *    hash = hash*33 + key.charCodeAt(i);
 *  }
 *   return hash % 1013;
 * }
 */ 