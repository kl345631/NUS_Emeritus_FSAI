
a,b,c=int(input("Enter number")), int(input("Enter 2nd digit")), int(input("Enter 3rd digit"))
if a>b and a>c:
  print(a)
elif b>a and b>c:
  print(b)
else:
  print(c)
  

'''
# nested if else
a,b,c=int(input("Enter number")), int(input("Enter 2nd digit")), int(input("Enter 3rd digit"))
if a>b:
    if a>c:
        print(a)
    else:
        print(c)
elif b>c:
    print(b)
else:
    print(c)'''



# Ternary Operator
minimum = '5 is smaller' if 5<9 else '9 is smaller'
print(minimum)

a,b=int(input("Enter number")), int(input("Enter 2nd digit"))
greater = print(a, ' is greater') if a>b else print(b, ' is greater')

equal_smaller_greater = print(a,' is Equals to ',b) if a==b else print(a, ' is greater') if a>b else print(b, ' is greater')


# match for

num = int(input("Enter number: "))
match num:
    case 1:
        print('one')
    case 2:
        print('two')
    case 3:
        print('three')
    case 4:
        print('four')
    case _:
        print('Please enter number between 1 to 4 only')'''


color = 'g'
match color:
    case 'g':
        print('green')
    case 'b':
        print('blue')
    case 'r':
        print('red')
    case _:
        print('please enter g,b,r only')'''

'''
color = 'G'
match color:
    case 'g'|'G':
        print('green')
    case 'b'|'B':
        print('blue')
    case 'r'|'R':
        print('red')
    case _:
        print('please enter g,b,r only')'''


num = int(input('Enter number: '))
match num:
    case num if num>0:
        print('Positive')
    case num if num<0:
        print('Negative')
    case _:
        print('Zero')
























  


