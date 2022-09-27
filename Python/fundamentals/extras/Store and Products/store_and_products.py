import store_class
import product_class

store1 = store_class.Store("Matt's Store")
product1 = product_class.Product('Potatoes', 5.99, 'vegetable', 'potatoes')
product2 = product_class.Product('Corn', 3.00, 'vegetable', 'corn')
product3 = product_class.Product('Hamburger Meat', 8.15, 'meat', 'hamburger_meat')

store1.add_product(product1)
store1.add_product(product2)
store1.add_product(product3)

store1.inflation(50)
store1.set_clearance('meat', 30)
store1.products[0].print_info()
store1.products[1].print_info()
store1.products[2].print_info()

store1.sell_product('hamburger_meat')
