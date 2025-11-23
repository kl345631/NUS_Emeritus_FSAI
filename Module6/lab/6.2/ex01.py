# lab6.2 ex1, convert USD to SGD and vice versa

usd_rate = 1.3100
# usd = float(input('Please enter USD: '))
# sgd = usd * usd_rate
# print ('{} USD to converted to: {} SGD' .format(usd, sgd))

sgd = float(input('Please enter SGD: '))
usd = sgd / usd_rate
print ('{} SGD to converted to: {} USD' .format(sgd, usd))
