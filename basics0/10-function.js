//function is defined as a block of code which performs a specific task

function sayHello(){

console.log("h");
console.log("I");
console.log("am");
console.log("a");
console.log("function");
}
sayHello(); //function is invoked or called 

function greetUser(name,age){
    console.log("Hello "+name+" , you are "+age+" years old.");
}

const num1 = 50;
const num2 = 55;
const operation = "+";
operatingNUM(num1,num2,operation );
operatingNUM(num1,num2,"*");
function operatingNUM(num1,num2,operation){
    if(operation==="+"){
        console.log(num1+num2); 
    }else if(operation==="-"){
        console.log(num1-num2);
    }else if(operation==="*"){
        console.log(num1*num2);
    }else if(operation==="/"){
        console.log(num1/num2);
    }else{
        console.log("Invalid operation");
    }
}

greetUser("Saugat",25);
greetUser("Pawan",22);
greetUser("Ram",30);
// closure