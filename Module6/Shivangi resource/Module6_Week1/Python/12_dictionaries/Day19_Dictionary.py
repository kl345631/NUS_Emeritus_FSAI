'''
1) Dictionary is a sequence.
2) Have key and Value pairs
3) No Indexing
4) No Slicing
5) With the help of keys , can find values
6) Keys can not be repeated, Values can ve repeated
'''

'''
d = {} #empty dictionary
print(type(d))

d = dict()
print(type(d))

#Method 1
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
print(students)


students = {'one': 'John','two': 'Harry','three': 'Sam','four': 'Rich'}
print(students)


# Method 2
one = 101
two = 102
three = 103
four = 104

students = {one: 'John',two: 'Harry',three: 'Sam',four: 'Rich'}
print(students)

# Method 3
students1 = dict(one= 'John',two= 'Harry',three= 'Sam',four= 'Rich')
print(students1)
'''



students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
print(students[102]) #Harry

#get()
print(students.get(102))

#ADD
students[105] = 'Jack'
print(students)


#EDIT
students[105] = 'Xavier'
print(students)

# TO ACCESS KEY
for key in students:
    print(key)

# TO ACCESS VALUE
for key in students:
    print(students[key])

for key,value in students.items():
    print(key,value)
    
# TO GET KEY AND VALUE KEY
for key in students:
    print("Key= ",key, "Value= ",students[key])
'''

#TAKE DICTIONARY FROM USER
keys = ['a','b','c','d']
words = {}
for key in keys:
    print('Enter word for letter ',key)
    words[key] = input()
print(words)

# Delete pairs from dictionary
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
del(students[103])
print(students)

#pop()
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
deleted = students.pop(102)
print(students)

#popitem() -> removes last elements
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
deleted = students.popitem()
print(deleted,students)


#clear
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
students.clear()
print(students)

#copy
students = {101: 'John',102: 'Harry',103: 'Sam',104: 'Rich'}
d = students.copy()
print(d)
print(students is d)

# fromkeys() - create a new dictionary with specific set of key
l = [1,2,3]
d1 = {}
print(d1.fromkeys(l,'ABC'))

#concatenate 3 dictionaries
d1 = {'name':'john','age':30}
d2 = {'color':'red','city':'pune'}
d3 = {'a':'apple','b':'beg'}
d4 = {}
for d in (d1,d2,d3): # tuple of dictionaries
    d4.update(d)
print(d4)'''
    

# remove all duplicate values in a dictionary
data = {'a':'apple','b':'banana','c':'carrot','d':'Dizzy','de':'Dizzy'}
no_duplicate = {}
value_set = set()

for key,value in data.items():
    if value not in value_set:
        no_duplicate[key] = value
        value_set.add(value)

print(no_duplicate)
print(value_set)
        
help(dict)


































