 //Objects are of two types-->1.Object Literals...2.Singleton
//The below object are "Object Literals" Type object...
let obj=
{
 name:"vijay",
 age:22,
 height:6,
 location:"Bhopal",
 present_date:["Monday,Wednesday,Saturday"]
}
//There is two ways to print the results of objects...
console.log(obj.name);//first...
console.log(obj["location"]);//second...
console.log(obj["age"]);

//SINGLETON OBJECT ARE BELOW...
const my_obj=new Object();
console.log(my_obj);

// How use symbol in objects lets see below...
  
const sym=Symbol("sky"); //this help for information hiding...and add unique property keys to an object...
let obj2=
{
 [sym]:"Proper use of symbol",
 name:"vijay",
 age:22,
 height:6,
 location:"Bhopal",
 present_date:["Monday,Wednesday,Saturday"]
}
// Below are the way to accesss the symbol...
console.log(obj2[sym]);
//below code shows the uniqueness of symbol()...
let s1=Symbol("ajay");
let s2=Symbol("ajay");
console.log(s1==s2);  //this gives false bcz they are unique in nature...

//OBJECTS IN ANOTHER OBJECTS...

const obj1={
    email:"abc@@gmail.com",
    mobile_no:934353,
    obj2:{
       firstname:"Aryan",
       lastname:"Sahu",
       obj3:{
        cast:"OBC",
        age:55
       }
    }
}
// how access obj_another obhj ,,,
console.log(obj1.obj2.obj3);

// HOW TO COMBINE TWO OBJECT ELEMENTS IN A SINGLE OBJECT...
const o1={a:11,b:12};
const o2={c:13,d:14};

const o3=Object.assign(o1,o2);//ASSIGN method help spread elements of objects in another object...
const o4=Object.assign({},o1,o2);//This is the proper way to declare...
const o5={...o1,...o2};//THIS IS BEST WAY TO SPREAD THE ELEMENTS...
console.log(o5);

// Object Destructuring...
let person={
    name:"Vijay",
    cast:"Gour"
}
// DESTRUCTRING..  //destructring is used to extract data from array,objects and assign that data to an new variable...
let{name:Firstname,cast:Lastname}=person

console.log("First name after applying destructring--> "+Firstname); 
console.log("Last name after applying destructring--> "+Lastname);

// ONE MORE WAY BUT THIS IS NOT PROPER WAY FOR DESTRUCTRING ...
fname=person.name;
lname=person.cast;
console.log("First name after applying unproper destructring--> "+fname);
console.log("Last name after applying unproper destructring--> "+lname);

// OBJECT EXECUTION BY FOR IN LOOP...
  let myObj={
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    rb:"Ruby"
  }
  for(let key in myObj)
  {
    // console.log(key);//for execution  of keys...
    // console.log(myObj[key]);//for execution of values...
   console.log(`the ${key} stands for ${myObj[key]}`);
  }