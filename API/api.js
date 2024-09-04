// https://api.github.com/users/vijaygour  //api url...

const requestURL = "https://api.github.com/users/vijaygour";
const xhr=new XMLHttpRequest();
xhr.open('GET',requestURL);
xhr.onreadystatechange=function()
{
    console.log(xhr.readyState);//readystate are the states from 0to 4 
    if(xhr.readyState==4)
    {
        const data=JSON.parse(this.responseText
            )
        console.log(typeof data);
        console.log(data.id);
    }
}
xhr.send();