'''
set:
set is a seqence
set can not have duplicate values.
No Indexing
No Slicing
Sets are mutable
No order preserved
'''

s = {10,20,30}
print(type(s))

s = set()
print(type(s))

s = {10,True,'Hello',89.5}
print(s)

s = {10,20,30,40,10,20,50} #duplicates not allowed
print(s)

l = [10,20,30,40]
s = set(l)
print(type(s))


'''s = {1,2,3}
s.add(4)
print(s)

s.add('hi')
print(s)

s = {1,2,3}
l = [1,3,5,7]
s.update(l)
print(s) #{1,2,3,5,7}
'''
'''
s={1,2,3}
s.update([9,11],[13,15])
print(s)

s.update((17,19),[21,23])
print(s)

s.discard(19) # no error if element not availble
print(s)

s.remove(19) #error if element not available
print(s)

s = {10,20,30,40,50,60,70}
print(s)
print(s.pop()) #randomly deletes
print(s)

#s = {1,2,[3,4,'Hi']} # cannot provide list directly
s = {1,2,(3,4,'Hi')}
print(s)'''

'''
#INTERSECTION (COMMON)
s1 = {1,2,3,4,5}
s2 = {2,4,5,8}
print(s1.intersection(s2)) #In s1 set what all are the common elements available
print(s2.intersection(s1))
print(s1&s2)

#UNION
print(s1.union(s2))
print(s2.union(s1))
print(s1|s2)

#issubset
s1 = {1,2,3,4}
s2 = {2,3}
print(s2.issubset(s1))
print(s1.issubset(s2))


#issuperset
s1 = {1,2,3,4}
s2 = {2,3}
print(s2.issuperset(s1))
print(s1.issuperset(s2))


s1 = {1,2,3,4}
s1.clear()
print(s1)

#copy
s1 = {1,2,3,4}
s2 = s1.copy()
print(s2)
print(id(s1),id(s2))
print(len(s1))

help(set)'''

# Find common elements between two lists.
a = [1,2,3,4]
b = [3,4,5,6]
common = set(a) & set(b)
print(common)

#Find elements that are present in list A but not in list B
difference = set(a) - set(b)
print(difference)

#isdisjoint
a = {1,2,3}
b = {4,5,6}
print(a.isdisjoint(b))
print(b.isdisjoint(a))

#Find symmetric difference
x = {1,2,3}
y = {3,4,5}
print(x^y)

# Count unique words in a sentence
sentence = "I like python"
d=sentence.split()
f=set(d)
print(f)
print(len(f))

#unique characters in a string
# find all vowels in a sentence
vowels = {'a','e','i','o','u'}

present=set(sentence)&vowels
print(present)

#find repeated elements in a set

data = [1,2,3,2,4,1,5]
# Count unique words in a sentence



data=[1,2,3,2,4,1,5]
d=set()
duplicates=set()
for i in data:
    if i in d:
        duplicates.add(i)
    else:
        d.add(i)
print(duplicates)

#Student Course Registration System
1) Student will choose courses to register
2) Show all Unique courses.
3) Store student data into list
4) Show Individual Student record.

students= []
all_courses = set()








































































