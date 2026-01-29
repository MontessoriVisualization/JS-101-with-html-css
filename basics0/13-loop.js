const Show = function () {
  const self = this;
  console.log("called");
  function inner() {
    return self.value;
  }
  return inner();
};

const arr = [10, 20, 30, 40, 50];
const obj = {
  value: 100,

  show: Show,
};
console.log(obj.show());
const obj2 = {
  value: 200,
  show: Show,
};
console.log(obj2.show());
