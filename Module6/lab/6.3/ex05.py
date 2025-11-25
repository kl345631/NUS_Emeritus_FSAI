command = input("Enter a command to the smart home system: ").strip() #remove white spaces
match command:
    case 'A':
        print('Lights are on')
    case 'B':
        print('Lights are off')
    case 'C':
        print('Alarm has been set')
    case _: #_ is a wild card
        print('Invalid command')


