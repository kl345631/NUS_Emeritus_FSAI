const prompt = require("prompt-sync")();
let num = Number(prompt("number: "));
let n = Number(prompt("index: "));

function findDigit(number=Number, n=Number) {
    str_number = String(number);
    try {
        return Number(str_number[n-1]);
    }
    catch (Error) {
        if (n > length(str_number)) {
            return ("Error: Digit position is more than the number of digits. ")
        }
        else if (n == 0) {
            return ("Error: Digit position must be greater than 0 ")
        }
    }
}

console.log(findDigit(num, n))