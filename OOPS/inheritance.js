class user{
    constructor(username)
    {
        this.username=username;
    }
    logme()
    {
        console.log(`Username is-->${this.username}`);
    }
}

class teacher extends user
{
    constructor(username,email,password)
    {
        super(username);   //super is maily used for invoke or call parentclass constructor...
        this.email=email;
        this.password=password;
    }
    add_course()
    {
        console.log(`A new course added by ${this.username}`);
    }
}
//end of cllass

const boy=new teacher("Aman","@gmail.com","123");
boy.logme();
boy.add_course();

console.log(boy instanceof user);