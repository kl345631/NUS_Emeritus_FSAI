# terminate loop
# break

# i = 1
# while i<=10:
#     if i==5:
#         break
#     print(i)
#     i+=1

for i in range(1,11):
    if i == 6:
        break
    print(i)

# continue
# skip
for i in range(1,11):
    if i == 6:
        continue
    print(i)


# i = 0
# while i<10:
#     i+=1
#     if i%2!=0:
#         continue
#     print(i)