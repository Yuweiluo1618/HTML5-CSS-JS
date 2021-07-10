// console.log('Hello World!');

// const person = {
//     name: "jack"
// }

// let name = "cx";
// let {name:p_name} = person;
// console.log(name);
// console.log(p_name);

// let arr =[1,2,3,[4,5]];
// let [,,,[a,b]] = arr;
// console.log(`${a}${b}`);

// let str = "hello";
// let[c,d] = str;
// console.log(c,d);

// const obj = {name: "Ana",
//              age: 17}

// function test({name = "jack",age = 11} = {}){
//     console.log(name, age);
    
// }

// test();
// test(obj)


// const obj1 = {
//     name: "1",
//     age: 10
// }

// const obj2 = {
//     name: "2",
//     email: "google"
// }

// const obj3 = {...obj1, ...obj2};

// // console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// let func = () => {
//     return {
//         a:100
//     }
// }

// console.log(func());


// class Animal{
//     constructor(name,num){
//         this.name = name;
//         this.num = num;
//     }
// }

// // console.log(Animal.num);
// const cat = new Animal("jack", 3);
// console.log(cat.name);



// setTimeout(()=>{
//     console.log(this===global);
    
// }, 1000)

// console.log(global);

// const m1 = require("./module/m1.js");
// console.log(m1);
// console.log(m1.num);
// console.log(m1.sum(1,2));
// const p1 = new m1.P();
// console.log(p1.age);


let a = 10;
exports.a = a;
// module.exports = {
//     a
// }

// exports = module.exports
// console.log(exports === module.exports);
console.log(exports == this);








