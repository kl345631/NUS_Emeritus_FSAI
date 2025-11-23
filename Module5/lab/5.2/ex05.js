const prompt = require('prompt-sync')();

num = 0;
num = Number(prompt("Please enter a number: "));
lastdigit = num % 10;
console.log ('Last digit of your number is ' + lastdigit)