// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `
Line One
Line Two
Line Three
`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// 2. Arrow Functions & this
const square = n => n * n;

const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test();

const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copy = { ...product };

const aObj = { x: 1 };
const bObj = { y: 2 };
const mergedObj = { ...aObj, ...bObj };

const maxValue = (...nums) => Math.max(...nums);


// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

const info = {};
console.log(info.user?.name);


// 5. Scoping
for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
// console.log(j);

const exampleConst = "constant";


// 6. Ternary Operator – Practice
let speed = kmph > 60 ? "Fast" : "Normal";

const type = age >= 18 ? "Adult" : "Minor";

const check =
  num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";


// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];

const printNames = (...names) => names;


// 8. Object Destructuring & Shorthand
const user1 = { id: 101, status: "active" };
const { id, status } = user1;

const id1 = 101;
const role = "admin";
const user2 = { id1, role };

const person = {
  name: "Aish",
  age: 22,
  greet() {
    console.log("Hello!");
  }
};


// 9. Template Literals 
console.log(`Today is ${new Date().toDateString()}`);

const NAME = "Aish";
const SCORE = 90;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands
const add = (x, y) => x + y;
const isAdult = age => age >= 18;
const double = n => n * 2;


// 11. Spread Operator (Arrays & Objects)
const arrClone = [...nums];

const arr2 = [100, ...nums];

const o1 = { a: 1 };
const o2 = { a: 99, b: 2 };
const mergedObj2 = { ...o1, ...o2 };


// 12. Optional Chainin
const user = {
  name: "Alex",
  address: { city: "Bangalore" }
};

console.log(user.address?.city);
console.log(user.job?.title);

const data = { product: {} };
console.log(data.product?.specs?.cpu);
