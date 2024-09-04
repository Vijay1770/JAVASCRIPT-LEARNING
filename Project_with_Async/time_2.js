//first way...

const saydate = function (str) {
  console.log(str, Date.now());
};
let a=setInterval(saydate, 1000, "This is a paremeter for ablove function");
clearInterval(a);

//Second way...
const b=setInterval(function () {
  console.log("Currunt date --> ", Date.now());
}, 2000);
clearInterval(b);

// How to stop Interval....
// project on wepage with button click...

let intervalId;
const tag=document.querySelector("h1");
        const sayDate = function(str) {
           console.log("ececuted due to click");
        };

        document.getElementById("start").addEventListener("click", function() {
            intervalId = setInterval(sayDate, 1000, "Shubhasheesh");
        });

        document.getElementById("stop").addEventListener("click", function() {
            clearInterval(intervalId);
        });
   