class Account:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance

    def credit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Credit amount {amount}. New balance is {self.balance}.")
        else:
            print("Credit amount must be positive.")

    def debit(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Debit amount {amount}. New balance is {self.balance}.")
        else:
            print("Debit amount must be positive and less than or equal to the balance.")

    def get_balance(self):
        return self.balance

    def __str__(self):
        return f"Account Number: {self.account_number}, Account Holder: {self.account_holder}, Balance: {self.balance}"



acc1 = Account(int(input("Enter account number: ")), input("Enter account holder name: "), float(input("Enter initial balance:$ ")) )
a = int(input("Enter account number to get account holder name: "))
class_obj = Account.account_holder(a)

print(class_obj)
