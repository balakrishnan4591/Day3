/* How to compare two JSON have the same properties without order?
    a. let obj1= { name: "Person 1", age: 5};
    b. let obj2= { age: 5, name: "Person 1"};
*/

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

function compare(obj1, obj2) {
  //convert given JSON objects to strings using stringify & sort them

  var str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  var str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  //compare the sorted data

  return str1 === str2;
}

console.log(compare(obj1, obj2));
