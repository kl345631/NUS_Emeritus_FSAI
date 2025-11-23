const prompt = require('prompt-sync')();

score = Number(prompt('Please enter your test score (0-100): '))

switch (true) {
    case (score >= 90):
        grade = 'A';
        break
    case (score >= 80):
        grade = 'B'
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    // case (score < 60):
    //     grade = 'F';
    //     break;
    default :
        grade = 'F'
}
console.log ('Your grade is : ' + grade)