
print(''' ********* welcome to *********
type 1 for addition
type 2 for subtraction
type 3 for multiplication
type 4 for division
*********** simple calculator ***********''')

operation = input("Enter your operation: ")
if(operation=="1"):
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        print("The sum is: ", num1 + num2)
elif(operation=="2"):
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        print("The difference is: ", num1 - num2)
elif(operation=="3"):
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        print("The product is: ", num1 * num2)
elif(operation=="4"):
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        print("The quotient is: ", num1 / num2)
else:
    print("Invalid choice")
