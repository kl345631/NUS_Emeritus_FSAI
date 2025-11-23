# !/usr/bin/env python3
# si = (p*t*r)/100

# principal = 100000
# time_in_months = 36
# rate = 0.06

principal = int(input('Please enter the principal amount: '))
rate = float(input('Enter the rate of interest in percentage: '))
time_in_months = int(input('Enter the time in months: '))

# simple_interest =  (principal * time_in_months * rate)
# print ('simple interest is: ',  simple_interest)

simple_interest =  (principal * time_in_months * rate)
print (f'simple interest is {simple_interest: .2f}')
