function addition(a,b)//a,b are the parementeres...
{
  console.log(a+b);
}

addition(3,33);//3,33 are the arguments...

// When we pass multiple arguments in a single paremeter how to manage this situation...
function rest_operator(...num)
{
    // return num;
    console.log(num);
}
// console.log(rest_operator(100,499,45,888,9087));
rest_operator(1,2,3,4,5);

// ARRRAY PASSING...
const newArray=[1,2,3,4,5,6,7,8,9,0];
function elements_of_array(array)
{
    return array[3];
}
console.log(elements_of_array(newArray));


// TWO DIFFERENT  TYPES OF DECLERATION OF FUNCTIONS...
//1.
function adding(num)
{
    return num+2;
}
console.log(adding(5));
//2.
let adding2=function(num)
{
    return num+2; 
}
console.log(adding2(5));