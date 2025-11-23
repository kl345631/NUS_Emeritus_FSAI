const prompt = require('prompt-sync')();

C_temp = 0; F_temp =0;
C_temp2 = 0; F_temp2 =0;
temp_type = '';

temp_type = prompt('Please enter temperature in Celcius (c) or Farenheit (f): ')

if (temp_type == 'c') {
    C_temp = parseFloat(prompt('Please enter temperature in Celcius: '));

    if (C_temp >= 0 && C_temp <= 100 ) {
        F_temp = (C_temp * 9 /5) +32;
        F_temp = Math.round(F_temp * 10) / 10 ;
        console.log(C_temp + ' Celcius to Farenheit: ' + F_temp);
    }
    else {
        console.log('Error, temperature in Celcius should be between 0 to 100');
    }
}
else if (temp_type == 'f') {
    F_temp2 = parseFloat(prompt('Please enter temperature in Farenheit: '));
    if (F_temp2 >= 32 && F_temp2 <= 212) {
        C_temp2 = (F_temp2 - 32) * 5 / 9 ;
        C_temp2 = Math.round(C_temp2 * 10) / 10 ;
        console.log(F_temp2 + ' Farenheit to Celcius: ' + C_temp2);
    }
    else {
        console.log('Error, temperature in Farenheit should be between 32 to 212');
    }
}
else {
    console.log('Invalid temperature type!')
}



