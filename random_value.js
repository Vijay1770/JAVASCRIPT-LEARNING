console.log(Math.random());//this gives value in decimals also like 0.34t5343453...
console.log((Math.random()*10)+1);//this gives value between 1 to 9 but with decimal also like 5.4555...
console.log(Math.floor(Math.random()*10)+1);//this gives value between  1 to 9 

const max=100
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+1);//they gives value between 10 to 100 with the help of this we gives the range for random value generate