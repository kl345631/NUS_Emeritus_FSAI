# lab6.2 ex2, convert USD to SGD and vice versa, rounding 2 decimals

usd_rate = 1.3100
usd = float(input('Please enter USD: '))
sgd = round(usd * usd_rate, 3)
print ('{} USD to converted to: {} SGD' .format(usd, sgd))

sgd = float(input('Please enter SGD: '))
usd = round(sgd / usd_rate, 3)
print ('{} SGD to converted to: {} USD' .format(sgd, usd))
