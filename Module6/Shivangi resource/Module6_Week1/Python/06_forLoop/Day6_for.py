''' for loop
syntax
for element in sequence:
    #statements'''
'''
for e in "John":
    print(e)

for e in "John":
    print("John")

name = "Jack"
for e in name:
    print(name)
for e in name:
    print(e)'''


# range(start(default is 0, optional),stop(size-1,mandatory, exculded),step(optional,default is 1))
for e in range(5):
    print('Harry')

for e in range(0,5):
    print('Sam')

for e in range(1,5):
    print('Rich')

for e in range(2,9):
    print('Xavier')

# odd number
for odd in range(1,20,2):
    print(odd)

#even
for even in range(2,20,2):
    print(even,end=' ')
    
# odd and even
for i in range(1,21):
    if i%2==1:
        print(i,'- Odd')
    else:
        print(i,'- Even')

'''
#count characetrs in a string
name = input("Enter your name: ")
count = 0
for i in name:
    count+=1
print(count)'''
'''
# count a's in string
name = input("Enter name: ")
count = 0
for i in name:
    if "a" in i:
        count+=1
print(count)

print(name.count('a'))'''
'''
# pascal * triangle using for loop
# right angled
rows = 5
for i in range(1, rows+1):
    print('*'*i)

#left angled
rows = 5
for i in range(1, rows+1):
    print(' '*(rows-i)+'*'*i)

#centerd angled
rows = 5
for i in range(1, rows+1):
    print(' '*(rows-i)+'*'*(2*i-1))'''


# print sum of first 5 natural numbers(1+2+3+4+5)
# print table of any number
# Factorial of a number(3!--> 3x2x1)
# reverse a string --> 
# count number of vowel in string(a,e,i,o,u)
# print Fibonacci series(0 1 1 2 3 5 8 13)
# check whether inputed number is prime or not
# check whether inputed number is prime or not in a given range








































    
        







