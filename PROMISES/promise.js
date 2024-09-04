//one way ....
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promis bodey is here");
    resolve();
  }, 1000);
})
myPromise.then(function(){
    console.log("Promise run sucessfully");
})

//two way...
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promis bodey Second is here");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise Execute sucessfully");
});

//three way...
//CHAINING...
const myNewPromise=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:"Vijay",age:"21"})
        }
        else
        {
            reject("Error Something Went Wrong")
        }
    },2000)
})
myNewPromise.then((user)=>{
     console.log(user);
    return user.age
}).then((username)=>
{
    console.log(username);
}).catch((newerror)=>
{
    console.log(newerror);
}).finally(()=>
{
    console.log("Muje frk nai prta code reject hua ho ya resolve hua ho me to chakunga chahe kuchh v ho jaye...!");
})

//Async is same work as .then && Await is same as .catch and the await is always in async function...
//FETCHING by async and await...
async function getdata()
{
    try {
        const response = await fetch("https://api.github.com/users/vijaygour");
        const data=await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getdata();

//FETCHING by then and catch...
fetch("https://api.github.com/users/vijaygour")
.then((response)=>
{
    return response.json();
})
.then((data)=>
{
    console.log(data);
})
.catch((error)=>
{
    console.log(error);
})






// JS BY HARRAY
/*
// PROMISES
const ticket = new Promise(function (resolve, reject) {
  const jao = false;
  if (jao) {
    resolve("You are  going "); 
  } else {
    reject("You are not going by flight"); 
  }
});
ticket
  .then((data) => {
    console.log("wohoo");
  })
  .catch((error) => {
    console.log("oh no ");
  });
  */