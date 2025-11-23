
'''
IDENTITIFERS:
   variables, data type,function, classes, objects, list, tuple, dictionary, sets,
   operators, keywords
'''
# Identifiers Rules:
'''
1) Name can be combination of alphanumeric and underscore(_).
2) Name should not start with digit.
3) Keywords can not be used as Identitifers.
4) Are Case Sensitive.
'''

# variables
'''
variables are the name of the memory location where data is stored.
'''

myvalue = 9 # initialization
print("myvalue")
print(myvalue)
print(id(myvalue))
myvalue2 = 9
print(id(myvalue2))
print(id(9))
print(id("John"))

# #identifiers rules practice
num = 20
num_1 = 30
#3num = 40 # ERROR
_num = 60
#num$1 = 50 #ERROR

num = 20
NUM = 10
NuM = 30
Num = 80
print(id(num))
print(id(NUM))
print(id(NuM))
print(id(Num))


# # Keywords
# '''
# Predefined/ Reserved words
# '''
import keyword
print(keyword.kwlist)

# x = True
# print(x)
# # x = in # ERROR
# # for = 10 # ERROR

x = True

# x = 10
# print(x/5)
# x = 20

# '''
# """

# '''
# Data Type:
# Data: Information
# 10 --> Numeric
# John --> name --> string --> combination of characters
# 45.2 --> floating value
# True --> Boolean

# 1) How much memory will be occupied.
# 2) What all are the operations can be performed.

# Data Type: short, byte, int, long, float, double, complex, string,
# bool, bytearray, list, tuple, dict, set, frozenset, NoneType and more
# '''

# '''
# # print('Hello' + 7) #ERROR
# print('Hello'+'John')
# print(3+7)
print(2*'Hello')

print(type(10))
print(type('John'))
num = 10
print(type(num))
num = 2+7j
print(num.real)
print(num.imag)















































