
// MAP IN JS...
const map=new Map();
map.set('age',21)
map.set('name',"VIjay")
map.set('cast',"OBC")
// map.set('age',21)...this is not valid because MAP contain only unique values not duplications...

console.log(map);

for(let a of map)
{
 console.log(a);
}
// If you want to execute key  and values uniquely ....
for(let [key,values] of map)
{
  console.log(values);
}