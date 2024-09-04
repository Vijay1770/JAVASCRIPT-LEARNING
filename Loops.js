const prompt=require('prompt-sync')()

 let n=prompt("Enter the value of n")
 n=Number.parseInt(n);  //it simply make a value as an integer...
 let i=1;

//  while
 while(i<=n)  
 {
    console.log(i)
    i++;
 }

//  do while
 do{
     console.log(i)
    i++;
 }while(i<=n)

//FOR OF LOOP...
let lan="Javascript";
// let text="";
for(let a of lan)
{
      if(a=="a") continue  //continue statement
    console.log(a);
}

console.log("\n");

for(let i of lan)
  {
    if(i=="s") break
    console.log(i);
  }

//FOR IN LOOP...
// 1st...
const obj =
{
h:6,
v:8,
t:77
};
for(let a in obj)
{
     console.log(a+"-->"+obj[a]);
}

//2nd...
const cars = ["BMW", "Volvo", "Saab", "Ford",];
let texts = "";
for (let x in cars) {
  texts += cars[x] + " ";
  console.log(texts);
}

//FOR EACH LOOP...
const scores = [12, 55, 70, 47];

let total = 0;
scores.forEach((score) => {
  total += score;
});
console.log(total);

//NULL COALESCING OPERATOR (??): NULL UNDEFINED

let value;
value=5??10;
console.log(value);

let val2;
val2=null??10;
console.log(val2);//this gives output 1 because when we want to not come null value in our program so we uuse this ...


//TERNIARY OPERATOR

const price=110;
price<=100?console.log("less then or equal to price"):console.log("greater then price");