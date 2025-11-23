const prompt = require('prompt-sync') ();

num = Number(prompt('Please enter a number: '));

for (i=0 ; i<=10; i++) {
    results = num * i
    console.log(num + ' x '+ i + ' = ' + results);

}
