/*Prompt-sync is used to enable synchronous user input in a Node.js environment — similar to how input() works in Python.
*/
const prompt = require('prompt-sync')();
var chicken = 0;
var rice = 0;
var chili = 0;
var diners = 0;

chicken = Number(prompt('Enter amount(kg) of chicken per diner: '))
rice = Number(prompt('Enter amount(kg) of rice per diner: '))
chili = Number(prompt('Enter amount(kg) of chili per diner: '))
diners = Number(prompt('Enter no. of diner(s): '))

var total_chicken = chicken * diners
var total_rice = rice * diners
var total_chili = chili * diners

console.log("total amount(kg) of chicken is: ", total_chicken)
console.log("total amount(kg) of rice is: ", total_rice)
console.log("total amount(kg) of chili is: ", total)


