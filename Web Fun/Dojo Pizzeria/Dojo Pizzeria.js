function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "alfredo", ["mozarella", "parmesan"], ["chicken", "bacon"]);
console.log(pizza3);

var pizza4 = pizzaOven("personal pan", "traditional", ["mozzarella"], ["canadian bacon"]);
console.log(pizza4);

function randomPizza() {
    var pizza = {};
    var crustType = ["deep dish", "hand tossed", "thin crust"];
    var sauceType = ["traditional", "marinara", "alfredo"];
    var cheeses = ["mozarella", "feta", "parmesan"];
    var toppings = ["bacon", "sausage", "mushrooms", "olives", "onions", "peppers", "pepperoni"];
    pizza.crustType = crustType[Math.floor(Math.random()*3)];
    pizza.sauceType = sauceType[Math.floor(Math.random()*3)];
    pizza.cheeses = [];
    for (i=0; i<cheeses.length; i++) {
        if (Math.floor(Math.random()*2)==1) {
            pizza.cheeses.push(cheeses[i]);
        }
    }
    pizza.toppings = [];
    for (i=0; i<toppings.length; i++) {
        if (Math.floor(Math.random()*2)==1) {
            pizza.toppings.push(toppings[i]);
        }
    }
    return pizza;
}


var pizza5 = randomPizza();
console.log(pizza5);
