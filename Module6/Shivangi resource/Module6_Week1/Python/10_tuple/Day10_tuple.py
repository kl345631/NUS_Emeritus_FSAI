'''
t = (1,2,3)
immutable(no change)
tuple is a sequence
,(comma) or (,)
'''

t = 1,2,3,4,5
print(t)
print(type(t))

t = (1,2,3,4,5)
print(t)
print(type(t))

t = 1,  #tuple having 1 element
print(type(t))

t = (1,)
print(type(t))

t = () # empty tuple
t = tuple()
l = []
l = list()

#  convert list to tuple
l = [1,2,3,4,5]
print(type(l))
t = tuple(l)
print(t)
print(l)
'''
'''
#t = tuple(10,20,30,40,50) # error
t = tuple((10,20,30,40,50))
t = tuple([10,20,30,40,50])

t = (10,'john',87.5,True)
print(t)

for i in t:
    print(i)

i = 0
while i<len(t):
    print(t[i])
    i+=1
'''
#SLICING
t = (10,'john',87.5,True)
print(t[0:3])
print(t[0::])

#square all numbers inside tuple
t = (2,3,4,5)
for i in t:
    print(i**2)
    print(i*i)'''

'''
t = (10,'john',87.5,True)
t = t+('hello')  #ERROR
print(t)

t = (10,'john',87.5,True)
t = t+('hello',)  
print(t)

t = (10,'john',87.5,True)
t = t+[10,20]  
print(t)


t = (10,'john',87.5,True)
t = t+tuple([10,20])
print(t)

#t = t+(67) #ERROR
t = t+(67,)
print(t)'''

'''
#Packing and Unpacking
a = 1
b = 2
c = 3
t = (a,b,c) #packing

a,b,c = t #unpacking
print(a,b,c)
print(t)

#concatenation
a = 1,2,3
b = 4,5,6
print(a+b)
print(a)
print(b)

c= [1,2,3]
print(a+c) #ERROR'''
'''

#REPITITION
t = 1,2,3
print(t*3)
print(t)
t*=3
print(t)

#COMPARISION
t1 = 1,2,3
t2 = 1,2,3
print(t1 == t2)
t3 = 4,5,6
print(t1 == t3)
print(t1>t2)
print(t1>t3)
print(t3>t2)
t4 = 2,7,8
print(t3>t4)
print(t4>t3)'''
'''
#input tuple from user
x= tuple(input("Enter tuple: "))
print(type(x))

#Functions in tuple
t = (10,20,30,40,50,60,10)
print(len(t))
print(t.count(10))
print(t.index(30))
#print(t.index(90)) #ERROR'''
'''
t = (10,20,30)
#t[0] = 46  #ERROR'''


'''
A tuple contains ages of 5 people , we need to print their previous year age'''

'''ages= (23,12,54,22,76)
for i in ages:
    print('Previous year age: ',i-1)'''

'''
t1 = (10,'hello',True,76.9)
search =  input('enter element to search')
if search in t1:
    print('Available')
else:
    print('Not Available')
'''

t1 = (10, 'hello', True, 76.9)

search = input('Enter element to search: ')

try:
    search_val = eval(search)
except:
    search_val = search  

if search_val in t1:
    print('Available')
else:
    print('Not Available')











































































































