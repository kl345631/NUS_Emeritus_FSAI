const prompt = require('prompt-sync') ();

var num1 = 0, num2 = 0, num3 =0;

num1 = prompt('Please enter number 1: ');
num2 = prompt('Please enter number 2: ');
num3 = prompt('Please enter number 3: ');

if (num1 >= num2 && num1 >= num3 ) {
    largest_num = num1;
}
else if (num2 >= num1 && num2 >= num3 ) {
    largest_num = num2;
}
else if (num3 >= num1 && num3 >= num2 ) {
    largest_num = num3;
}
console.log ('Largest number is ' + largest_num)