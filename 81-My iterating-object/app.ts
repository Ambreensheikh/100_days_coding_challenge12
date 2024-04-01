//let an object
let bioData = {
    name: "Ali",
    age: 32,
    degree: "BSc"
}
//making a function taking  iterating object as an argument, for/in
// it checks one by one object keys as,iterating object
 for(let property in bioData){
  console.log(property);
}

