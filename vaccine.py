age = int(input("Please enter your age: "))
if age >12 and age <= 18:
 is_vaccinated = input("are you vaccinated? (yes/no): ")
if is_vaccinated == "yes":
        print("you do not need a vaccine.")  
elif is_vaccinated == "no":
    vaccine = input("which vaccine do you want to take? (covaxin/covishield): ")
    print(f"You took the {vaccine} vaccine.")
elif age > 18 and age <= 60:
    print("You are not eligible for the vaccine.") 
else:
    print("Your age is not within the eligible range.")