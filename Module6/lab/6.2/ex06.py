# Compounf interest and future value
# future_p = p * (1 + rate/years) yearstime
# future_value = principal * ((1.0 + (annual_interest_rate / 100.0) / compound_frequency) ** (time_in_years * compound_frequency))
# compound_interest = future_value - principal
        

p = float(input("Please enter your initial investment amount: "))
interest_rate = float(input('Enter Annual Interest Rate (%) = '))
y = float(input("No. of Years invested: "))
compound_frequency = float(input("Frequency of Compound interest (annual:1, semi-annual:2, monthly:12, weekly:52): "))


#roi = p * (1+(interest_rate/100)/compound_frequency) ** (y * compound_frequency)
roi = p * (1 + interest_rate / compound_frequency)**(compound_frequency * y)

compound_interest = roi - p 

print (f'Compound interest is: ${compound_interest:.2f}')
print (f'Future return of investment is: ${roi:.2f}')