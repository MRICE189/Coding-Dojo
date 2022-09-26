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

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email;
        self.account1 = BankAccount(int_rate=0.02, balance=0)
        self.account2 = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self, amount, account_num):
        if account_num == 1:
            self.account1.deposit(amount)
        elif account_num == 2:
            self.account2.deposit(amount)
        return self

    def make_withdrawal(self, amount, account_num):
        if account_num == 1:
            self.account1.withdraw(amount)
        elif account_num == 2:
            self.account2.withdraw(amount)
        return self
    
    def display_user_balance(self, account_num):
        if account_num == 1:
            print('Balance: $' + str(self.account1.balance))
        if account_num == 2:
            print('Balance: $' + str(self.account2.balance))
        return self

    def transfer_money(self, amount, other_user):
        if self.account1.balance >= amount:
            self.account1.balance -= amount
            other_user.account1.balance += amount
        return self

user1 = User('Matt', 'matt@email.com')
user2 = User('Rob', 'rob@email.com')

user1.make_deposit(1000, 1).display_user_balance(1)

user1.transfer_money(500, user2)
user1.display_user_balance(1)
user2.display_user_balance(1)

