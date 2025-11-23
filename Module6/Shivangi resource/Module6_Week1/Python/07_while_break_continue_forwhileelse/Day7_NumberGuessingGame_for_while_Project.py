import random
print("WELCOME TO NUMBER GUESSING GAME!!")
chosen_number = random.randint(1,10)
print(chosen_number)
flag = False
attempts = 3

while attempts>0:
    print("Guess the number between 1 and 5 , You have", attempts, "attempts: ")
    guessedno = int(input())
    attempts-=1
    if guessedno == chosen_number:
        flag = True
        break



if flag:
    print('===============================================')
    print("CONGRATULATIONS..! YOU GUESSED CORRECT")
    print('===============================================')
else:
    print("TRY NEXT TIME!!")

