const name="Vijay";
const num=50;
// console.log(name+num+" Value");
console.log(`Hello my name is ${name} and my marks are ${num} value`);

// The best way to declare STRING is below one bcz it provide lots of methods for operation on given string 
const str= new String("   STRING ");//
console.log(str);
console.log(typeof str);
let a="two"
b=a.toUpperCase();
console.log(b);
console.log(str.toLowerCase());
// TRIM method...
let trimstr=str.trimStart();
let trimstrEnd=str.trimEnd();
console.log(str.length);
console.log(trimstr.length);
console.log(trimstrEnd.length);
console.log(str.charAt(4));
console.log(str.indexOf('t'));