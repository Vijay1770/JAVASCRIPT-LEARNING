document.getElementById('tiger').addEventListener("click",function(){
    alert("You clicked on tiger");
})   

document.getElementById('google').addEventListener('click',function(e){
  e.preventDefault();
  e.stopPropagation();//help to not go to bubbling(to parents) phase  
  console.log("Google Clicked");
})

// Removing of elements ...
document.querySelector('#images').addEventListener("click",function(e){
  console.log(e.target.tagName);//tagname is a way to identify the html element...
  if(e.target.tagName==="IMG")
  {
      let removeIt = e.target.parentNode;
      removeIt.remove();
  }
})
//Capturing=>first excute the top then come to bottom...
//Bubbling=>FIrtst execute the main then goto topside...
