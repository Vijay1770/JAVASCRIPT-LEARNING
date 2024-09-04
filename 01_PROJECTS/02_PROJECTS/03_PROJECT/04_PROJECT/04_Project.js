let random_num=parseInt(Math.random()*100+1);
// selection of html elements...
const submit=document.querySelector("#submit");
const userinput=document.querySelector("#guessfield");
const  guessSlots= document.querySelector("#guesses");
const remaining = document.querySelector("#lastresult");
const LowOrHi = document.querySelector("#LowOrHi");
const startover = document.querySelector("#last");

const p=document.querySelector("p");

let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame)
{
    submit.addEventListener('click',function(e)
    { 
        e.preventDefault();//this help to stop the default submission of form and also stop default refreshing of browser...
        const guess=parseInt(userinput.value);
        validateguess(guess);
    });
}

function validateguess(guess)
{
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  }
   else if (guess < 1) {
    alert("Please enter a number more than 1");
  } 
  else if (guess >100) {
    alert("Please enter a number between 1 and 100");
  }
  else{
    prevguess.push(guess);
    if(numguess==11)
    {
        display_updates(guess);
        displaymessage(`Game Over! Random number was ${random_num}`);
        endgame();
    }
    else
    {
        display_updates(guess);
        checkguess(guess);
    }
  }
}

function checkguess(guess) 
{
 if (guess == random_num) {
   displaymessage(`Well Donne! You guessed it right`);
 } else if (guess < random_num) {
   displaymessage(`Entered number is LOW`);
 } else if (guess > random_num) {
   displaymessage(`Entered number is HIGH`);
 }
}

function display_updates(guess)
{
 userinput.value='';//ye simple jo pehle input diya he use ab clean kar degi next input ke lie...
 guessSlots.innerHTML+=`${guess} ,  `
 numguess++;
 remaining.innerHTML=`${11-numguess}`
}

function displaymessage(message) 
{
  LowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endgame()
{
 userinput.value='';
 userinput.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML = `<h2 id="newgame">New Game</h2>`;
 startover.appendChild(p);//startover is a like parent div and appendchild()help to add new childe into the parent div... 
 playgame=false;
 newgame();
}

function newgame()
{
 const newgamebutton=document.querySelector("#newgame");
   newgamebutton.addEventListener('click',function(e){
    random_num = parseInt(Math.random() * 100 + 1);
    
   prevguess = [];
   numguess = 1;
   
   guessSlots.innerHTML='';
   remaining.innerHTML=`${11-numguess}`;
   userinput.removeAttribute('disabled');
   startover.removeChild(p);
   playgame = true;
 });
}