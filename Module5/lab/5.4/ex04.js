const prompt = require('prompt-sync')();

n=0 , count =0;

n = Number(prompt ('Please enter number: '));

while (n>0) {
    n = Math.floor(n/10);
    count ++;

}
console.log(count)