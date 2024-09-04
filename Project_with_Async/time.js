//First type...
setTimeout(function(){
    console.log("VIjay...")
},2000)

//second type...
const myfun=function()
{
    console.log("THis is predefind function");
}
setTimeout(myfun,4000)
//next example...
const updatehtml=function()
{
    document.querySelector("h1").innerHTML="Learning Async By Youtube";
}
 const stopme=setTimeout(updatehtml, 3000);

 setTimeout(function(){
    document.querySelector("h3").innerHTML="This is only for Practice "
 },2000)
// How to stop settimeout function on web...
const stop=document.querySelector("button").addEventListener('click',function(){
    clearTimeout(stopme)
    console.log("Stoped!")
})