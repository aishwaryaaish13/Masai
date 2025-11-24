

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];

console.log("Merged Array:", merged);  



const sum = (...nums) => nums.reduce((total, n) => total + n, 0);

console.log("Sum:", sum(1, 2, 3, 4));  





const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {
  name,
  address: { city, pin }
} = user;

console.log("Name:", name);   
console.log("City:", city);  
console.log("PIN:", pin);     
