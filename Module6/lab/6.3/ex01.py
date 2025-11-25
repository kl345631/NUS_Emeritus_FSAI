
temp_type = input('Enter C for Celsius to Fahrenheit | F for Fahrenheit to Celsius: ')

if temp_type == 'C':
    c_temp = float(input('Enter the temperature in Celcius: '))
    if c_temp < 0 or c_temp > 100:
        print('Invalid temperature!')
    else :
        c_to_f = (c_temp *  9 / 5) + 32
        print(f'temperature in {c_temp:.1f} Celcius is {c_to_f:.1f} Farenheit')
elif temp_type == 'F':
    f_temp = float(input('Enter the temperature in Farenheit: '))
    if f_temp < 32 or f_temp > 212:
        print('Invalid temperature!')
    else :
        f_to_c = (f_temp - 32) * 5 / 9
        print(f'temperature in {f_temp:.1f} Farenheit is {f_to_c:.1f} Celcius')
else:
    print ('Invalid Temperature type!')