const main_parent=document.querySelector('.parent')
console.log(main_parent.children)

// alert("this is alert");
main_parent.style.backgroundColor='green'
console.log(main_parent.children[0].innerHTML);

// ACCESS THE CHILDERES BY LOOP...
for(let i=0;i<main_parent.children.length;i++)
{
    console.log(main_parent.children[i].innerHTML);
}
console.log(main_parent.children[2].style.backgroundColor='red')

/*
//getElementByClassName...execute in inspect section...
const class_selector=document.getElementsByClassName(day)
class_selector.forEach(function(data){ //foreach is not possible bcz it heppes only in querySelector... 
   console.log(data);
})
   //convert to array for using foreach...
   Array.from(class_selector) //now we able to use foreach...
*/



//NOTES.......
//innerhtml->theygives they gives whole data with html tags...
//innertext->they only gives inner data of id or class any html tag into another html tag is not visible in this....
//textcontent->they give whole data into the selected id or class withod html tags...
