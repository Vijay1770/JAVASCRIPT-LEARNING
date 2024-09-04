//* CREATIION OF NEW ELEMENT BY THE HELP OF JAVSCRIPT...

const div=document.createElement('div')
div.className="div_class"
div.id='div_id'
console.log(div);
div.setAttribute("title","DIV TITLE...")  //help to set new  attiributes into the created elements
div.style.backgroundColor='blue'
div.innerText="Code learning by chai or code" //This write code into the div

document.body.appendChild(div) //THis help to put or apply  the code on webpage..


//* CREATION OF ELEMENT BY TE HELP OF "FUNCTION()..."

function addLetter(lettername)
{
    const li=document.createElement('li');
    li.innerHTML=`${lettername}`
    document.querySelector('ul').appendChild(li)
}
addLetter("EEEEEEEEEEEEEEEEEE")
addLetter("FFFFFFFFFFFFFFFFFFFFFF")
addLetter("Ttttttttttttttt")

//* EDIT OR UPDATE THE ELEMENT....

const edit_li=document.querySelector("li:nth-child(2)")
const edit_practice=document.querySelector("li:nth-child(1)")
edit_practice.innerHTML="eeeeeeeeeeeee"
edit_li.innerHTML="bbbbbbbbbbbbbbb"
// second_approach...
const edit_li2=document.createElement('li')
edit_li2.textContent="bbbBBBbbbBBBbbbBBB"
edit_li.replaceWith(edit_li2)


//*  REMOVING OF ELEMENT...

const del=document.querySelector("li:nth-child(4)")//("li:last-child")...this help to select last child...
del.remove();

