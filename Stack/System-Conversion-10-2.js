const Stack = require('./stack');
function divideby2(decNumber){
    let stack = new Stack();
    let item,to2str="";
    while(decNumber>0){
        rem = Math.floor(decNumber%2);
        stack.push(rem);
        decNumber = Math.floor(decNumber/2);
        console.log(rem,decNumber);
    }
    while(!stack.isEmpty()){
        to2str += stack.pop().toString();
    }
    return to2str;
}
console.log(divideby2(47));