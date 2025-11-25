num = int(input('Please enter a positive number: '))

if num > 0:
    for i in range(1,11):
        results = num * i
        print (f'{num} x {i} = {results} ')
        # print('{} x {} = {}'.format(num, i, num * i))
else:
    print('Invalid integer')