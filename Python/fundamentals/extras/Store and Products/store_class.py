class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        for i in range(0, len(self.products)):
            if self.products[i].id == id:
                sold_product = self.products.pop(i)
                sold_product.print_info()
                return self
        return self
        
    def inflation(self, percent_increase):
        for products in self.products:
            products.update_price(percent_increase, True)
        return self

    def set_clearance(self, category, percent_discount):
        for products in self.products:
            if products.category == category:
                products.update_price(percent_discount, False)
        return self
