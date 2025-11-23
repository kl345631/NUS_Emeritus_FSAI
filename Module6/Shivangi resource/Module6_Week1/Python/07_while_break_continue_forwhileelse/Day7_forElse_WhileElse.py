#for else: else runs when for completes all Iterations

# # find 5's multiples
# for num in range(1,21):
#     if num%5 == 0:
#         print(f"Multiple of 5 : {num}")
    
    
#find first multiple of 7 between 10 and 13
for num in range(6,14):
    if num%7 == 0:
        print(f"Multiple of 7 : {num}")
        break
else:
    print('No multiple of 7')
    


# PASSWORD  ATTEMPTS SYSTEM
attempts = 3
while attempts>0:
    password = input("Enter Password")
    if password == "admin123":
        print("Access Granted!!")
        break
    else:
        print("Invalid Password!!")
    attempts -=1
else:
    print("Too Many attempts. Access Denied!!")

