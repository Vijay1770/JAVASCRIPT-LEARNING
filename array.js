let arr=[1,2,5,6,33,88];
console.log(arr);

//1...convert the array into string 
console.log(arr.toString());

//2...join the array elements by given condition in " "
console.log(arr.join("+"));

//3...pop from back 
console.log(arr.pop());

//4...push from back 
arr.push(546);
console.log(arr);

//5...shift method REMOVE the element from front of array 
arr.shift();
console.log(arr);

//6...unshift method ADD the element from front of array 
arr.unshift(44);
console.log(arr);

//7...sort method sort the array accoding to alphabhatically not integerly and also this method change the whole array...
arr.sort();
console.log(arr);

//if we want to sort the array in accending or decening order so firstly we need to declare a function that compare array values then sort...
console.log("sort by using compare function...");
let compare=(a,b)=>
{
    return a-b;
}
arr.sort(compare);
console.log(arr);
arr.reverse();
console.log(arr);    
//8...The SPLICE() method remove the elements and put new elements into the array...below ex.the "2"->is statrting point
   //and "3"->is space for removing 3 elements and put 3 new elements that is 1111,2222,3333...
arr.splice(2,3,1111,2222,3333);
console.log(arr);
//"The SLICE() return the selected elements as an array in new array"2-->starting point and 4--> is an end point NOTE=starting index is also return in resulted array...
const newarr=arr.slice(2,4);
console.log(newarr);

//-----------------------------------------------------------------------------------------------------------------------------------------
//if we want to convert an string into array so...
let a="vijay";
let array=Array.from(a);
console.log(array);

//for of
for(let a of arr)
{
    console.log(a);
}

//for in
for(let a in arr)
{
    console.log(arr[a]);
}