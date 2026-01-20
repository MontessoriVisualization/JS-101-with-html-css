let num = "10";
if (num === 10) {
  console.log(num);
} else if (num == 10) {
  console.log("num is 10 with type coercion");
} else {
  console.log("num is not 10");
}
// else{

// }
// ==,

//closer
let num1 = 10;
if (true) {
  console.log(num1);
  function outerFunction() {
    let num2 = 20;
    console.log("outer function called");
    console.log(num2);
  }
  outerFunction();
}
