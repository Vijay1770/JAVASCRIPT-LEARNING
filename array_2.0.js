let arr1=[0,1,2,3,4];
let arr2=[5,6,7,8,9];

// This below code give array in a array ...
arr1.push(arr2);
console.log(arr1);

arr1.concat(arr2);  //it help to join two arrays...
console.log(arr1);

//If we want to spread elements in a single values in an array so do  like below...
let arr3=[0,1,2,3,4];
let arr4=[5,6,7,8,9];
const full_arr=[...arr3,...arr4];
 console.log(full_arr);

 //when we fond array in an another array or another array in already array in array so do below code for solve all in single array ...
 //EX:-
 const Array1=[1,2,3,[4,5],6,[7,8,[9,0]]];
const New_Array=Array1.flat(1);//1->stands for kitne level tk andr jana h array ko single elements me spread krna he...
console.log(New_Array);