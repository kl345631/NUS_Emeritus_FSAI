'''
Python data Structure: List, sets, tuple, dictionaries ..
Data Structure(SUBJECT): stack, queue, Linked List, Maps 
'''

#List
'''
1) List is a sequence
2) List can contain any type of value.
3) [] -> Subscripts
4) List can be Iterate
5) Index will be starting from 0.
6) Lists are mutable(changeable)
'''


l1=[] #empty list
print(type(l1))

# Add elements into list
#Method 1
l1 = [10,20,30,40,50]
print(l1)

l1 = [10,29,4,'Hi',True]
print(l1)

#Method 2
l1.append(89)
print(l1)

#INDEXING
print(l1[0])
#print(l1[6]) #IndexError
print(l1[-2])

#Method 3
l1.insert(2,46)
print(l1)

l1.insert(-2,'Hello')
print(l1)

l1 = [10,29,4,'Hi',True]
for i in l1:
    print(i)

'''
#Appending lists
a = [10,20,30]
b = [40,50,60]
c = a + b
print(c)
print(a)
print(b)

#Editing a List
l1 = [10,29,4,'Hi',True]
l1[0] = 56
print(l1)

# Remove List
r = l1.remove(29)
print(r)
print(l1)

r = l1.pop()# removes last element
print(r)
print(l1)

l1.clear()
print(l1)'''

'''
#Extend lists
a.extend(b)
print(a)
'''
'''
#SORTING LIST
l1 = [10,45,4,12,8]
l1.sort()
print(l1)
l1 = [10,45,4,12,8]
l1.sort(reverse=True) #descending
print(l1)
l1 = [10,45,4,12,8]
l1.reverse()
print(l1)


# TO CHECK INDEX
l1 = [10,45,4,12,8,45]
print(l1.index(45))
#print(l1.index(48))  #ValueError
print(l1.index(45,2))
print(l1.index(45,1))



# To count
l1 = [10,45,4,12,8,45]
print(l1.count(45))

#COPY
l1 = [10,45,4,12,8,45]
l2 = l1.copy()
print(l2)

#SLICING
print(l2[2:5])
print(l2[10:2:-1])
help(list)

a = list('Hello')
print(a)
'''


'''
todo_list = []
'''




























































