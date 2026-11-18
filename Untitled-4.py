#dict = {"cat": "a small animal",
        #"table": ["a piece of furniture", "list of fact and figure"]}
#print(dict)






#classroom = { "python", "java", "c++" , "python" , "javascript" , "java" , "python" , "java" , "c++" , "c"} 
#print(len(classroom))
#print(" number of classroom needed are: ", len(classroom)) 







#mark = {}

#x = int(input(" enter marks of physics: "))
#mark = {"physics": x}

#x = int(input(" enter marks of chemistry: "))
#mark.update({"chemistry": x})

#x = int(input(" enter marks of maths: "))
#mark.update({"maths": x})

#print(mark)


#i = 1 
#while i == i + 3:
   #print(i)
#i += 1


n = int(input("enter a number: "))

fact = 1
for i in range(1, n + 1):
    fact *= i
print("The factorial of", n, "is:", fact)