/**
 * 传说中的击鼓传花
 */ 
/**
 * @param nameList {Array} 
 * @param num {Number}
 */ 
const Queue = require('./queue');
 function hotpptato(nameList,num){
     let que = new Queue();
     nameList.forEach((item)=>{
         que.enqueue(item);
     })
     let outpople = "";
     while(que.size()>1){
         for(let i=0;i<num;i++){
             que.enqueue(que.dequeue());
             console.log(que);
         }
         outpople = que.dequeue();
         console.log(outpople+' is out from hotpotato game');
     }
     return que.front();
 }
 var names = ['John','Jack','Camila','Ingrid','Carl'];
 let winner = hotpptato(names,40);
 console.log(winner);