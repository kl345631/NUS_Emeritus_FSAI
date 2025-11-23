const prompt = require('prompt-sync')();

var num = 0, perfectsquare = false;

num = Number(prompt("Enter number: "))

if (num>0 && num<=100) {
    for (i=0; i<11; i++) {
        num == i * i;
        perfectsquare = true;
    }
    if (perfectsquare = true) {
        console.log(num + ' is a perfect square');
    }
    else {
        console.log(num + ' is NOT a perfect square');
    }
}
else {
    console.log ('Please enter number between 1-100')
}