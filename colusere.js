//A closure is a function having access to the parent scope, even after the parent function has closed.
var sum=function(a)
{
    console.log("This is--> "+a);
var c=5;

return function(b)
{
    return a+b+c;
}
}
var store=sum(10);
console.log(store);
console.log(store(3));