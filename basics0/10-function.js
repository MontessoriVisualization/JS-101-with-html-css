//function is defined as a block of code which performs a specific task

function sayHello() {
  console.log("h");
  console.log("I");
  console.log("am");
  console.log("a");
  console.log("function");
}
sayHello(); //function is invoked or called

function greetUser(name, age) {
  console.log("Hello " + name + " , you are " + age + " years old.");
}

const num1 = 50;
const num2 = 55;
const operation = "+";
operatingNUM(num1, num2, operation);
operatingNUM(num1, num2, "*");
function operatingNUM(num1, num2, operation) {
  if (operation === "+") {
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  } else {
    return "Invalid operation";
  }
}
console.log(operatingNUM(num1, num2, operation));

greetUser("Saugat", 25);
greetUser("Pawan", 22);
greetUser("Ram", 30);

// closure

let value2;
function outerFunction() {
  value2 = 30;
  let value1 = 20;
  function innerFunction() {
    console.log("Inner function called");
    console.log(value1);
    console.log(value2);
    value2 = 40;
    value1 = 50;
  }
  innerFunction();
  console.log(value1);
}
outerFunction();
console.log(value2);
//(...) default parameters .... not jsust functiion any thing with curley braces  (cost function and normal funcion)hoisting
// arrow function this keyword
//implicit return in arrow function
//iifi (immediately invoked function expression)

function multiply(a = 3, b = 1) {
  return a * b;
}
// console.log(multiply(undefined, 9));

function totalSum(...numbers) {
  //[1,2,3,4,5,6,7,8,9]
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    //0+1=1
    //1+2=3
    //3+3=6
    //6+4=10
    //10+5=15
    //15+6=21
    // 21+7=28
    // 28+8=36
    // 36+9=45
  }
  return sum;
}
console.log(totalSum(1, 2, 3, 4, 5, 6, 7, 8, 9));

factorial(2);

function factorial(n) {
  console.log("factorial called for n =", n);
}
// console.log(factorial2(5));

const factorial2 = function (n) {
  return n;
};

const factorial3 = (n) => {
  return n;
};
console.log(factorial3(6));

const factorial4 = (n) => n;
console.log(factorial4(7));

// IIFE Immediately Invoked Function Expression
(function () {
  console.log("IIFE executed");
})();

((name) => {
  console.log(`IIFE executed for ${name}`);
})("Saugat");

//Hw // 1. Write a function to calculate the factorial of a number.
// 2. Write a function to find the largest number in an array.
