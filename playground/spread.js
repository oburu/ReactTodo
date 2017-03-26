// function add(a,b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// let toAdd = [3,6];
//
// console.log(add(...toAdd)); // <- this is awesome

// let groupA = ['huesos', 'chorrumas'];
// let groupB = ['augustoso'];
//
// let final = [...groupB, 3, ...groupA];
//
// console.log(final);


//ejer 1
let person1 = ['andrew', 25];
let person2 = ['chorrumas', 26];

function sayHi(name, age){
  return 'Hello ' + name + ', you are ' +age;
}

console.log(sayHi(...person1));
console.log(sayHi(...person2));

//ejer 2
let names = ['huesos','chorrita', 'chorrumosis'];
let final = ['oburu',...names];

final.forEach((name)=>{
  console.log('Hi ' + name);
});
