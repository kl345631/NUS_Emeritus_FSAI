const prompt = require('prompt-sync')();

USD_to_SGD = 1.31;
USD_input = 0;
SGD_input = 0;
USD = 0;
SGD = 0;

USD_input = parseFloat(prompt('Enter USD Amount: '));
SGD = USD_to_SGD * USD_input

SGD_input = parseFloat(prompt('Enter SGD Amount: '));
USD = SGD_input / USD_to_SGD

console.log ("USD $:" + USD_input + " to SGD$:" + SGD)
console.log ("SGD $:"+ SGD_input + " to USD$:" + USD)
