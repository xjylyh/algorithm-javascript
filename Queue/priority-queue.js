
function Queue(){
    this.item = [];
    this.enqueue = (element,priority)=>{
        var queueElement = new QueueElement(element,priority);
        console.log(queueElement);
        if(this.isEmpty()){
            this.item.push(queueElement);
        }else{
            let addad = false;//根据判断在什么地方
            for(let i=0;i<this.item.length;i++){
                if(queueElement.priority<this.item[i].priority){
                    this.item.splice(i,0,queueElement);
                    addad = true;
                    break;
                }
            }
            if(!addad){
                this.item.push(queueElement);
            }
        }
    }
    this.dequeue = ()=>{
        return this.item.shift();
    }
    this.front = ()=>{
        return this.item[0];
    }
    this.isEmpty = ()=>{
        return !this.item.length>0
    }
    this.size = ()=>{
        return this.item.length;
    }
    this.clear = ()=>{
        this.item = [];
    }
    this.clear = ()=>{
        console.log(this.item.toString());
    }
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }
}
let que = new Queue();
que.enqueue('jy',1);
que.enqueue('xjy',1);
que.enqueue('xiejiyao',0);
que.enqueue('lyh',0.5);
console.log(que);