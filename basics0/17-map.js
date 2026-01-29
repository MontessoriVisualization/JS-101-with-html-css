//map

const map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
map.set("name", "Doe"); // duplicate key
map.set(1, "number one");
map.set(1, "uno"); // duplicate key

for (const [key, value] of map) {
  console.log(key + ": " + value);
}

const object = {
  name: "Alice",
  age: 25,
  city: "New York",
  name: "Bob",
  1: "number one",
};

for (const key in object) {
  console.log(key + ": " + object[key]);
}

//for each
const map1 = new Map();

map1.set("name", "John");
map1.set("age", 30);
map1.set("city", "New York");

map1.forEach((value, key) => {
  console.log(key + ": " + value);
});
//object for each
const object1 = {
  name: "Alice",
  age: 25,
  city: "New York",
};
Object.keys(object1).forEach((key) => {
  console.log(key + ": " + object1[key]);
});

//for each with array
const array = [10, 20, 30, 40, 50];
array.forEach((element, index) => {
  console.log("Index " + index + ": " + element);
});
