// NORMAL FUNCTION...
const chai =function()
{
    console.log("This is chai wala function()");
}

// ARROW FUNCTION...
const coffee=()=>
{
    console.log("This is coffee wala function()");
}
chai();
coffee();

// IMPLICIT(arrow function) RETURN-->means you have only one line of code and want to execute in same line...
const addition=(a,b)=>(a+b);
console.log(addition(4,4));

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)...
(function tea(){
    console.log("Tata tea agni");
})();

(function coffee(name){
console.log(`${name} is a brand of coffee`);
})("nestle")