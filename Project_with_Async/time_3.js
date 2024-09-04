//Generate a radom color values...

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
 
let interval;

const chageBG = function () {
  document.body.style.backgroundColor = randomColor();
};

const startChange = function () {
  interval=setInterval(chageBG,500);
};

const stopChange = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startChange);
document.querySelector("#stop").addEventListener("click", stopChange);
