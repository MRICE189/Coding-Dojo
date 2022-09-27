class Product:
    def __init__(self, name, price, category, id):
        self.name = name
        self.price = price
        self.category = category
        self.id = id

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price *= (1+(percent_change/100))
        else:
            self.price *= (1-(percent_change/100))
        return self

    def print_info(self):
        print("Name: " + self.name)
        print("Category: " + self.category)
        price_format = "{:.2f}".format(self.price)
        print(f"Price: ${price_format}")
        return self

