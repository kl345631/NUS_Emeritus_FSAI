const prompt = require('prompt-sync')();

C_temp = 0; F_temp =0;
C_temp2 = 0; F_temp2 =0;

C_temp = parseFloat(prompt('Please enter temperature in Celcius: '));
F_temp = (C_temp * 9 /5) +32;
F_temp = Math.round(F_temp * 10) / 10 ;
console.log(C_temp + ' Celcius to Farenheit: ' + F_temp);

F_temp2 = parseFloat(prompt('Please enter temperature in Farenheit: '));
C_temp2 = (F_temp2 - 32) * 5 / 9 ;
C_temp2 = Math.round(C_temp2 * 10) / 10 ;
console.log(F_temp2 + ' Farenheit to Celcius: ' + C_temp2);
