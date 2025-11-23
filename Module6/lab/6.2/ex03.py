# lab 6.2 ex3 temp conversion and vice versa

c_temp = float(input('Please enter temp in celcius: '))
f_temp =  (c_temp * 9 /5) +32;
print ('{} celcius to {} farenheit' .format(c_temp, f_temp))

f_temp = float(input('Please enter temp in celcius: '))
c_temp =  (f_temp - 32 ) * 5/9  #(temp_f - 32) * 5 / 9
print ('{} Farenheit to {} Celcius' .format(f_temp, c_temp))
