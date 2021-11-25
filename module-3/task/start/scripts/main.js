console.log("Hello")

// Single line comment

/*-------------


Multiple line comment

---------------*/

let productName = 'Faiqa';
let price = '10.00'
let quantity = 3;
let inStock = true;
let discountAmount = 2;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);

// declaring the function here

function showProductName(){
    console.log(productName);
}

showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
}

totalPrice(price,quantity);

function squareNumber(number=0){
    let sum = number * number;
    return number;
}

var square = num => num * num;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared);
//showing the difference between a regular function and an arrow function

function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount;
    } else {
        console.log(sum)
    }
}
productDiscount();

//function calculateDiscount(){
    //let sum = price * quantity;
    //if(quantity > 1){
      //  let discount = discountAmount * quantity;
       // sum = sum - discount;
    //}
    //console.log(sum);
//}

//calculateDiscount();

//FUNCTION called DrinkOrder that takes 2 parameters {Size} & {drink}
function drinkOrder (size,drink){
    //VALIDATE the variables passed through
    if (size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a size we do not sell');
        return;
    }

    let message = 'You have ordered a ' + size;
    // SWITCH {drink}
    switch(drink){
        case 'Cola':
            message += ' Coca-Cola';
            break;
        case 'Lemon':
            message += ' Schsewpps';
            break;
        case 'orange':
            message += ' Tango';
            break;
        default:
            message += ' You did not place an order for a drink';
    }
    // RETURN message
    console.log(message);
}

drinkOrder('grande');
drinkOrder('small', 'Cola');
drinkOrder('medium', 'orange');

// FUNCTION calculator {num1} {num2} {operator}
function calculator(num1, num2, operator){
    // VALIDATE all data
    if(isNaNValidator(num1)){
        console.log('Number 1 is not a number');
        return;
    }

    if(isNaNValidator(num2)){
        console.log('Number 2 is not a number');
        return; 
    }
    // SWITCH {operator}
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '*':
        case 'x':
            sum = num1 * num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            console.log('Operator is not recognised');
            return;
        // based on the opertator passed to do math
    // RETURN sum
    }
    return sum;
}


function isNaNValidator(number){
    return isNaN(number);
}

calculator(1,'Faiqa');
calculator ('Faiqa');
calculator (1,1,'Faiqa');
let sum1 = calculator(10,2,'+');
let sum2 = calculator(10,2,'-');
let sum3 = calculator(10,2,'/');
let sum4 = calculator(10,2,'*');
let sum5 = calculator(10,2,'%');
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);


let arrRainbow = ['red','yellow','pink','green','purple','orange','blue'];

// console.log(arrRainbow);
// console.log(arrRainbow.length);


// console.log(arrRainbow[3]);
// arrRainbow[3] = 'black';
// console.log(arrRainbow[3]);

let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrProductData);

console.log(arrProductData[0]);

// let lastArrayKey = arrProductData.length - 1;

console.log(arrProductData[4]);

let objProductData = {
    'productName':productName,
    'price':price,
    'quantity':quantity,
    'inStock':inStock,
    'discountAmount':discountAmount,
};

console.log(objProductData);

objProductData['productName'] = 'light bulbs';

console.log(objProductData.productName);

objProductData.alexExample1 = 'this is new data';

objProductData['alexExample2'] = 2;

console.log(objProductData);

function outputTimesTables(number){
    for(
        counter=1;      //set counter as a variable
        counter<=12;    //continue to run loop whilst this is true
        counter++       //add 1 to counter after each iteration
    ){
        let sum = counter * number;
        let strMessage = counter + ' * ' + number + ' = ' + sum;
        console.log(strMessage);
    }
}

for(multiplyer=1;multiplyer<=12;multiplyer++){
    outputTimesTables(multiplyer);
}

console.log(shoppingCart);


// categories = array filled with values of potential shopping basket types
// type = flatFee, percent, basketTotal
// amount = the amount to be subtracted


function totalPriceOfShopping(shoppingCart, objCoupon={}){
    // LOOP through each item of the array
    let totalPrice = 0;
    for(arrayKey=0; arrayKey < shoppingCart.length; arrayKey++){
        let currentItem = shoppingCart[arrayKey];
        //console.log(currentItem);
        // Get the price of the current item and times it by the quantity
        let currentItemPrice = currentItem.quantity * currentItem.price;
        // if there is a coupon apply a discount to the current item
        let discount = 0;
        // If objCoupon has been passed as an argument and the type is not one that affects the total price
        if(objCoupon && objCoupon.type != 'basketTotal' && objCoupon.type != 'basketPercent'){
            // If the current item type can be found in the array for types of items to be discounted
            if(objCoupon.types.includes(currentItem.type)){
                // Switch statement for type of coupon
                switch(objCoupon.type){
                    case 'flatFee':
                        // work out the total discount based on amount time quantity
                        discount = objCoupon.amount * currentItem.quantity
                        // remove the discounted amount from the current item price
                        currentItemPrice = currentItemPrice - discount;
                        break;
                    case 'precentage':
                        // work out the total percentage to be removed 
                        let discount = (currentItemPrice / 100) * objCoupon.amount;
                        // remove the discounted amount from the current item price 
                        currentItemPrice = currentItemPrice - discount;
                        break;
                }
            }
        }
        // console.log(currentItemPrice)
        // Add the sume to the total price
        totalPrice += parseFloat(currentItemPrice);
    }
    // if coupon type is to affect the whole basket
    if(objCoupon && objCoupon.type != 'basketTotal' || objCoupon.type == 'basketPercent'){
    // switch statement for type of coupon 
        switch(objCoupon.type){
            case 'basketTotal':
                //take the amout of the total price 
                totalPrice = totalPrice - objCoupon.amount;
                break;
            case 'basketPercent':
                // work out the tottal percentage to be removed
                discount = (totalPrice / 100) * objCoupon.amount;
                totalPrice = totalPrice - discount;
                break;
        }
    }
    // Return total price
    return totalPrice.toFixed(2);
}

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);

let objCoupon1 = {
    types:['tolietries', 'condeiment'],
    type: 'flatFee',
    amount: 0.5,
};

let objCoupon2 = {
    types:['canned', 'snacks'],
    type: 'percentage',
    amount: 30,
};

let objCoupon3 = {
    types:[''],
    type: 'basketTotal',
    amount:25,
};

let objCoupon4 = {
    types:[''],
    type: 'basketPercent',
    amount: 40,
};

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);
let shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon1);
console.log(shoppingCartPrice);
let shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon2);
console.log(shoppingCartPrice);
let shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon3);
console.log(shoppingCartPrice);
let shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon4);
console.log(shoppingCartPrice);
