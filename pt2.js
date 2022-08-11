// Create a JS Cart

// Create a JavaScript Function that takes in an:
//     Action String - string representing what the user wants to i.e. "add_to_cart", "remove_from_cart", "remove_all_from_cart", "empty_cart"
//     a Item JS Object [dictionary] (the contents of which are unimportant, other than they have an id key)
//     a Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)


// The function will use a switch statement to preform a different action based on the Action String


// Write the code to add items to the cart, remove a single item from the cart (just 1 item if they have multiple of the same item in the cart), remove all of a single item from the cart (aka if the user bought 3 t-shirts it would remove all 3 of those same tshirts), and the clear the cart (aka give them an empty cart)
// EACH ONE OF THESE ACTIONS SHOULD RETURN a fresh Cart array with the changes
// if the item in not in the cart and the user asked to remove said item then just return the cart unchanged.


// HERE IS THE CATCH:
//      You need each one of these actions to be preformed as an Out-of-Place algorithm not In-Place
// NOTE:
//      Out-of-Place would mean that the cart object that was inputted will never be changed and we will return a brand new copy of cart [array]



function shoppingCart(action, item, cart=[]){
    let shop = cart.slice()
    switch(action){
        case "add_to_cart":
            shop.push(item)
            return shop;
        case "remove_from_cart":
            itemIndex = shop.indexOf(item)
            shop.splice(itemIndex,1)
            return shop;
        case "remove_all_from_cart":
            while(shop.includes(item)){
                itemIndex = shop.indexOf(item)
                shop.splice(itemIndex,1)
            };
            return shop;
        case "empty_cart":
            return [];
        }
}



let item = [
     {
      id: 1,
      name : "RedBull",
      desc : "An everyday necessity",
      price : 3.99
    },

     {
        id: 2,
      name : "ScufF controller",
      desc : "Game on the next level",
      price : 429.99
    },
    {   
        id: 3,
      name : "chocotaco",
      desc : "A treat you wont see again",
      price : 60.00
    },
    
];


userCart = shoppingCart("add_to_cart", item[1]);
userCart = shoppingCart("add_to_cart", item[2], userCart);
userCart = shoppingCart("add_to_cart", item[0], userCart);
userCart = shoppingCart("add_to_cart", item[0], userCart);
userCart = shoppingCart("add_to_cart", item[0], userCart);
userCart = shoppingCart("add_to_cart", item[0], userCart);

console.table(userCart)
console.log("================================================================")
console.log("I have a problem, and need to cut back on caffeine.")

userCart = shoppingCart("remove_from_cart", item[0], userCart);
console.table(userCart)

console.log("more than one needs to go...")
userCart = shoppingCart("remove_all_from_cart", item[0], userCart);
console.table(userCart);

console.log("I dont even want anything now...")
userCart = shoppingCart("empty_cart", null, userCart);
console.table(userCart);
