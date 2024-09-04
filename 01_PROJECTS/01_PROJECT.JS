const buttons=document.querySelectorAll(".button")
const box=document.querySelector("#box");

buttons.forEach(function(button)
{
    button.addEventListener('click',function(event)
    {
      switch(event.target.id)
      {
        case "grey":
        case 'blue':
        case 'yellow':
        case 'white':
        box.style.backgroundColor=event.target.id;
        break;
      }
    })
});

//WITH THE HELP OF IF STATEMENT....
/*
buttons.forEach(function(button)
{
    // console.log(button);
    button.addEventListener('click',function(event)
    {
    //   console.log(event.target)
      if(event.target.id=='grey')
      {
        box.style.backgroundColor='grey'
      }
       if(event.target.id=='white')
      {
        box.style.backgroundColor='white'
      }
       if(event.target.id=='blue')
      {
        box.style.backgroundColor='blue'
      }
       if(event.target.id=='yellow')
      {
        box.style.backgroundColor='yellow'
      }
    })
});
*/

//WITH THE HELP OF SWITCH CASES...

/*
buttons.forEach(function(button)
{
    button.addEventListener('click',function(event)
    {
      switch(event.target.id)
      {
        case "grey":
             box.style.backgroundColor='grey';
             break;
        case 'blue':
             box.style.backgroundColor='blue';
             break;
        case 'yellow':
             box.style.backgroundColor='yellow';
             break;
        case 'white':
             box.style.backgroundColor='white';
             break;
      }
    })
});
*/
