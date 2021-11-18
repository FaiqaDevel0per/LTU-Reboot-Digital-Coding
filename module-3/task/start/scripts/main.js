console.log("Hello")

// Single line comment

/*-------------


Multiple line comment

---------------*/

let productName = 'Faiqa';
let price = '10.00'
let quantity = 3;
let Instock = true;
let discountAmount = 2;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(Instock);
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