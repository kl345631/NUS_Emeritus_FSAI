// find the first digit
const prompt = require('prompt-sync') ();

var num = 0, firstdigit = 0;

num = Number(prompt('Please enter a number: '))

if (num>0) {
    firstdigit = num;
    while (firstdigit > 0) {
        firstdigit = firstdigit/10
    }
}