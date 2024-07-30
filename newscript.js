console.log('My first code');

// Variables
a=5; //without decleration
var a=6;
console.log(a);
let b=56;
const n=57

{
    const n=90;
    console.log(n);
    var a=34;
    console.log(a);
    let b=89;
    console.log(b);
}
console.log(b);

//type of data
console.log(typeof(b));
var firstName='Mridu';
console.log(typeof(firstName));
let bool=true;
console.log(typeof(bool));
var g;
console.log(typeof(g));
var k='';
console.log(typeof(k));

//Arrays
var arr1=['Pine', 'Acacia', 'Teak', 10];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);

arr1.push('Rosewood');
console.log(arr1);
arr1.pop();
console.log(arr1);

//objects
let person={
    name:'Maya',
    age:80,
    location:'TVM'
};
console.log(person);
console.log(person.age);

let person1=new Object();
person1.name='Maya';
person1.age=80;
person1.location='TVM';
console.log(person1);

//Car Example
var car={
    name:'Alto',
    colour:'Red',
    year:2020
}
console.log(car);