const Stack = require('./stack');
function dividebyAll(decNumber,system=2){
    let stack = new Stack();
    let rem,
    toAllstr = "",
    digits = '0123456789ABCDEF';//对照表
    while(decNumber>0){
        rem = Math.floor(decNumber%system);
        stack.push(rem);
        decNumber = Math.floor(decNumber/system);
    }
    while(!stack.isEmpty()){
        toAllstr+=digits[stack.pop()];
    }
    return toAllstr;
}

console.log(dividebyAll(47,8));