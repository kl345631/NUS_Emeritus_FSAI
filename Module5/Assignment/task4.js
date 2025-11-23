const prompt = require('prompt-sync')();

var length=0, width=0;

length = Number(prompt('Please enter the length: '))
width = Number(prompt('Please enter the breadth: '))

if (length>=0 && width >=0) {
    area = length*width ;
    console.log ('Area of rectangle is: ' + area);
}
else
    console.log ('Error: Invalid number!');