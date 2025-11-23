'''
STRINGS -- COMBINATION OF CHARACTERS
j --> character
john -> string
'john',"john", """john"""
'''
'''john'''


s1 = 'Hello'
print(s1)
print(type(s1))

s1 = "Hello"
print(s1)
print(type(s1))

#s1 = 'John's Pen' #ERROR
s1 = "John's Pen"
print(s1)


s1 = "Welcome\
              To\
        Python"
print(s1)




s1 = '''Welcome
              To
        Python'''
print(s1)


s1 = """ '''Teacher's Day''' """
print(s1)


#s1 = ''' """Teacher's Day""" '''
#print(s1)


#LENGTH
s1 = "Hello"
print(len(s1))
"""

s1 = "Hello "
print(len(s1))

s1 = " Hello"
print(len(s1))

s1 = '''Welcome
To
Python'''
print(len(s1))
"""
"""

s1 = "Welcome\
To\
Python"
print(len(s1))

#INDEXING
s1 = "Hello Learner"
print(s1[0])
print(s1[5])
#print(s1[13])  #INDEXERROR
print(s1[-1]) #r


#CHECK INDEX
s1 = "Hello Learner"
print(s1.index('e')) #1
print(s1.index('lo')) #3
# print(s1.index('Lo')) #ValueError

#COUNT
print(s1.count('e'))"""


# SLICING[beginning(included):end(excluded),step()default is 1]
s1 = "Hello Learner"
print(s1[2:6]) # llo 
print(s1[2:])
print(s1[:8])
print(s1[::2])
print(s1[2:10:2])
print(s1[2:-2])
'''

#REVERSE STRING
s1 = "Hello Learner"
#print(min(s1))
print(s1[len(s1)::-1])
print(s1[::-1])

name = input("Enter name: ")
print(name[::-1])


#UPPER/LOWER
s1 = "Hello Learner"
print(s1.upper())
print(s1.lower())'''

#STARTSWITH / ENDSWITH
s1 = 'Hello Learner'
print(s1.startswith('H'))
print(s1.startswith('h'))
print(s1.startswith('He'))
print(s1.startswith('Hl'))

print(s1.endswith('r'))
print(s1.endswith('er'))

#SPLIT
s1 = "Hello,Python,Champ"
print(s1.split(','))

s1 = "Hello Python Champ"
print(s1.split(' '))

s1 = "Hello@Python@Champ"
print(s1.split('@'))

help(str)

s1 = "Hello"
s2 = s1
print(s2)
print(s1 is s2)
print(s1 == s2)

s = "hello"
#s3 = s.copy()
#s3 = s.duplicate()

text = "hello Python"
text2 = text.replace("Python","Learner")
print(text2)









































































































