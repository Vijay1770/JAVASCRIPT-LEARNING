//array
//function
//object
//callback
//Event handling...
//Higer order function 
//asynchronous operations...
//Promise...
//Hosting...
//add elements inhtml by using js...

//HOw use Styling on html elements by using Javascript...
const div=document.getElementById('div1');
div.style.backgroundColor="green";
div.style.color="white";
div.style.fontSize="30px";

//This  is for add element into the below of selected element(Child Element..).
let newpara=document.createElement('p');
newpara.textContent="This is para crreated by js";
div.appendChild(newpara);

//put new element before specific element...
let elem_h3= document.createElement("h3");
elem_h3.textContent = "This is h3 tag created by js";
let select_h2=document.getElementById("h2");
select_h2.parentNode.insertBefore(elem_h3,select_h2);

//Create input field....

var new_field=document.createElement("input");
new_field.type="number";
new_field.id="field_2";
new_field.name="phone No.";
new_field.placeholder="contact No...";

div.appendChild(new_field);