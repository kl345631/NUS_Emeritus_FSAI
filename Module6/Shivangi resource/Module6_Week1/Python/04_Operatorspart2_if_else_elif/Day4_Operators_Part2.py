'''
# Bitwise Operator (&(and),|(or), ^(XOR/Exclusive OR),>>(right shift),<<(left shift))
print(25>>2)
print(12<<3)
print(28>>3)
print(18<<4)
print(6&3)
print(6|3)
print(6^3)
'''
'''

#Assignmen Operators/ Shorthand operators
#(+=,-=,*=,/=,//=,%=,&=,|=,^=,>>=,<<=,=)
x = 5
x+=3 # x=x+3 => x=5+3 = 8
print(x)

x = 4
x/=2
print(x)'''

#IDENTITY OPERATOR(is, is not)
'''
is-> Return True if both variables refer to the same object in memory
is not-> Return True if both variables do not refer to the same object in memory
'''


x = 2
y = 2
print(x == y) # compares values
print(x is y) # object address
y = 2.0
print(x is y)
y = 2.4
print(x is y)
x = 3.4
y = 3.5
print(x is y)

print(x is not y)


'''
CONTROL STATEMENT:
    FLOW STATEMENT:
       Decision/Selection Control statements:
         if
         if else
         if elif else
         nested if elif else
         ternary if
         match for
'''

'''
if True:
    excecute
'''
'''
if True:
    print("Execute It!!")

if 6>3:
    print('correct')
else:
    print('Incorrect!!')
    '''

a = int(input('Enter first number: '))
b = int(input('Enter second number: '))
if a>b:
    print('a is greater than b')
    print(a, ' is greater than ',b)
    print(f"{a} is greater than {b}")
else:
     print(f"{b} is greater than {a}")



    























