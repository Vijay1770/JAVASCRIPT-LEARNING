//bind() help to borrow the methods of another object...

let geeks1 = {
  name: "ABC",
  article: "C++",
};

let geeks2 = {
  name: "CDE",
  article: "JAVA",
};

let geeks3 = {
  name: "IJK",
  article: "C#",
};

function printVal() {
  console.log(this.name + " contributes about " + this.article + "<br>");
}

let printFunc2 = printVal.bind(geeks1);
printFunc2();

let printFunc3 = printVal.bind(geeks2);
printFunc3();

let printFunc4 = printVal.bind(geeks3);
printFunc4();
