const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

// 1. add 'Meat' in the beginning of your shopping cart if it has not been already added
 shoppingCart.unshift("Meat");
console.log(shoppingCart);

//2. remove 'honey' if you are allergic to honey
shoppingCart.pop();
console.log(shoppingCart);

// 3. add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

//4. remove 'honey' if you are allergic to honey
shoppingCart.pop();
console.log(shoppingCart);

//5. modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);
