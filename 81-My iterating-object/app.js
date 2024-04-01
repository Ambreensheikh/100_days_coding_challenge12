//let an object
let bioData = {
    name: "Ali",
    age: 32,
    degree: "BSc"
};
//making a function taking object as an argument, for/in
for (let property in bioData) {
    console.log(property);
}
export {};
