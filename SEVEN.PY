class student:
    def __init__(self, name, marks1, marks2, marks3):
        self.name = name
        self.marks1 = marks1
        self.marks2 = marks2
        self.marks3 = marks3

    def display(self):
        self.subject = (self.marks1 + self.marks2 + self.marks3) / 3
        print()
        print(f"Name: {self.name}, Subject marks 1: {self.marks1}, Subject marks 2: {self.marks2}, Subject marks 3: {self.marks3}")
        print()  
        print(f"Average marks: {self.subject}")
        print()

s1 = student(input("Enter name: "), int(input("Enter marks for subject 1: ")), int(input("Enter marks for subject 2: ")), int(input("Enter marks for subject 3: ")))
s1.display()