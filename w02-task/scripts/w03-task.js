/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

document.getElementById('addNumbers').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('add1').value);
    let num2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = add(num1, num2);
});

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
};
document.getElementById('subtractNumbers').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('subtract1').value);
    let num2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(num1, num2);
});

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
document.getElementById('multiplyNumbers').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('factor1').value);
    let num2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(num1, num2);
});

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
document.getElementById('divideNumbers').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('dividend').value);
    let num2 = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(num1, num2);
});

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;

    // Apply a 20% discount if the user is a member
    let discount = isMember ? 0.2 : 0;

    // Calculate the total and format it with two decimal places
    let total = (1 - discount) * subtotal;
    document.querySelector('#total').textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
