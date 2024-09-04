const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);//values hame .value ki madad se milte he bo "String" type hoti he use int m chage krne k lie parseint krte he..
  const weight = parseInt(document.querySelector("#weight").value); 
  const result = document.querySelector("#result"); 

// apply some checks in height and weight input for result with input error free...

if(height==""||height<=0||isNaN(height))
{
    result.innerHTML=`Please give a valid height ${height}`;
}
else if (weight == "" || weight <= 0 || isNaN(weight)) {
  result.innerHTML = `Please give a valid weight ${weight}`;
}
else
{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
   result.innerHTML=`<span>${bmi}</span>`
}
}) ; 