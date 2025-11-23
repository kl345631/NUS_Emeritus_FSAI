const prompt = require('prompt-sync') ();

var num=0;

num = Number(prompt('Please enter a positive number: '));

if (num > 0) {
    console.log('Number is positive');
}
else if (num < 0) {
    console.log('Number is negative');
}
else
    console.log ('Number is zero');

