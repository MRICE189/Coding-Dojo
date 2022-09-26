class BankAccount:
    balance = 0
    all_accounts = []

    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
    
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount) == True:
            self.balance-=amount
        else:
            print("Insufficient funds!")
        return self

    def display_account_info(self):
        print('Balance: $' + str(self.balance))
        return self

    def yield_interest(self):
        if (self.balance) > 0:
            self.balance*=(1 + self.int_rate)
        else:
            print("No Balance")
        return self

    @staticmethod
    def can_withdraw(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True

    @classmethod
    def all_balances(cls):
        for account in cls.all_accounts:
            print(account.balance)
        return cls

account1 = BankAccount(0.04, 500)
account2 = BankAccount(0.03, 1000) 

account1.deposit(100).deposit(200).deposit(300).withdraw(100).yield_interest().display_account_info()

account2.deposit(500).deposit(100).withdraw(100).withdraw(100).withdraw(100).withdraw(400).yield_interest().display_account_info()

BankAccount.all_balances()