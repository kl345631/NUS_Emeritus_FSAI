# !/usr/bin/env python3
# si = (p*t*r)/100

# principal = 100000
# time_in_months = 36
# rate = 0.06

# principal = int(input('Please enter the principal amount: '))
# rate = float(input('Enter the rate of interest in percentage: '))
# time_in_months = int(input('Enter the time in months: '))

# def cal_si(principal) :
#     if principal <= 25000:
#         rate = 0.05
#     elif principal > 25000 and principal <= 50000:
#         rate = 0.07
#     else:
#         rate = 0.02
#     simple_interest =  (principal * time_in_months * rate)/100
#     return simple_interest

def cal_si_mth(principal, time_in_months) :
    if time_in_months <= 6:
        rate = 0.05
    elif time_in_months > 6 and time_in_months <=24:
        rate = 0.07
    else:
        rate = 0.02
    simple_interest2 =  (principal * time_in_months * rate)/100
    return simple_interest2

times = [6,18,36]
for i in range(3):
    principal = int(input('Enter principal amount: '))
    print (f'simple interest is {cal_si_mth(principal, times[i]): .2f}')
