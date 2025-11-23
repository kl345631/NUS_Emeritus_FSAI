"""
# Take input form user
name = input("Enter your name: ")
print(name)
print(type(name))

print(input("Enter your name: "))



# TYPE CONVERSION
#int(), float(), bool(), str(), list(), set(), dict(), tuple()

number1 = int(input("Enter number: "))
print(type(number1))

number2 = int(input("Enter number: "))
print(number1+number2)

# Input 2 float values from user and sum
x = float(input("Enter number: "))
y = float(input("Enter number: "))
print(x+y)
print(type(x),type(y))


a,b,c = int(input()),int(input()),int(input())
a,b,c = int(input('First')),int(input('Second')),int(input('Third'))
print(a,b,c)
"""

'''
() --> parantheses 
[] --> subscripts
{} --> braces
<> --> Angular Brackets
'''

'''
#OPERATORS
2+8 , 2 and 8 are operands and + is operator
'''

#ARITHMETIC OPERATORS(+,-,x,/(float),//(floor),**(exponent),%(modulous))
x = 9
y = 2
print(x+y) 
print(x-y)
print(x*y)
print(x/y)
print(x//y)
print(x**y)
print(x%y) #remainder

'''
PRIORITY:
(
  **,
  /,//,*,%
  +,-
)
'''
'''
#RELATIONAL OPERATOTS/ COMPARISION OPERATORS(>,<,>=,<=,!=,==) --> always returns true or false
print(5>2)
print(4<8)
print(8>=9)
print(8>=8)
print(8<=9)
print(6<=6)
print(2==5)
print(2==2)
print(3!=9)
print(5!=5)'''

'''
difference between =(assignment) amd ==(comparision)
'''
'''
# LOGICAL OPERATORS(and, or, not) 
print(3>1 and 4>2)
print(3>1 and 4<2)
print(3<1 and 4>2)
print(3<1 and 4<2)

print(3>1 or 4>2)
print(3>1 or 4<2)
print(3<1 or 4>2)
print(3<1 or 4<2)'''

'''
print(not(True))
print(not(False))
print(not(3))
print(not(0))
print(not(-6))
print(not('Hello'))
print(not(''))
print(not(' '))
print(not(3>7))
print(not(4>2 and 9<8))
print(not True)
# print(not 4>2 and 9<8) # will not provide correct output
print(not '')'''

'''

user_input =input("Have you logged in? please mention Yes as True and No as False")

user_logged_in = user_input == 'True'

if not user_logged_in:
    print('Please Log in First')
else:
    print('Thanks to log in, You can proceed!')
    '''



# MEMBERSHIP OPERATOR(in, not in) --> always works with sequences
#print(3 in 3,4,5) # ERROR
print(3 in (3,4,5))
print(9 in (3,4,5))
print('h' in 'hello')
print('H' in 'hello')
fruits = ['apple','banana','cherry']
print('banana' in fruits)
print('mango' in fruits)
print('mango' not in fruits)
person = {'name':'john','age':40}
print('john' in person)
print('name' in person)



'''
Student Grade Checker
name, math, science, english, cal average, passed or not, if average
is more than 35 then passed otherwise failed, if passed and average >=90 then A+
and so on, store grades into same variable, top_grades=['A+','A'], is_topper,
show the results(name,total marks, average, pass/fail, grade),
if student is topper then congratulate him/her.

'''



























