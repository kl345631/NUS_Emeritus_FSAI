#functions
'''
Functions -> two types
1) Pre defined(Already developed / only need to call them to use)
2) User defined(we will develop)
    a) Passing Nothing, Returns Nothing
    b) Passing Something, Returns Nothing
    c) Passing Nothing, Returns Something
    d) Passing Something, Returns Something
'''

'''
# a) Passing Nothing, Returns Nothing
def add():
    a,b = 2,5
    print(a+b)

add()


#b) Passing Something, Returns Nothing
def add(a,b):
    print(a+b)

add(2,3)


#c) Passing Nothing, Returns Something
def add():
    a,b = 4,6
    return a+b

#Method 1
result = add()
print(result)

#Method 2
print(add())



# d) Passing Something, Returns Something
def add(a,b):
    return a+b

print(add(5,7))'''


def add(a,b):  # Formal arguments
    print(a+b)

x = 2
y = 5
add(x,y)  # Actual arguments





def operations():
    a,b = 2,5
    return [a+b,a-b,a*b,a/b]

print(operations())






    
