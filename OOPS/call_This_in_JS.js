//The call() method used to calls a function by passing this and specified values as arguments where this refers an object.

function set_username(username)
{
    this.username=username;
    console.log("set_username fn() called...");
}

function create_user(username , email , password)
{
    set_username.call(this,username);
    this.email=email;
    this.password=password;
}

const chai=new create_user("Vijay","gour@gmail.com",12345678);
console.log(chai);