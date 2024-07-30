//Functions
function display(fname){
    console.log('Welcome '+fname+' to functions');
}
display('Mridula');

//Function to add 2 numbers
function add(a,b){
    var sum=a+b;
    //console.log(sum);
    return sum;
}
var result=add(10,20);
console.log('The result is '+result);

//Multiplication
function Multiply(a,b){
    var Multiplication=a*b;
    return Multiplication;
}
var result=Multiply(5,20);
console.log('The result is '+result);

//post increment operator
let ab=7;
let abc=ab++;
console.log(ab);
console.log(abc);
//pre increment operator

//BODMAS
var exp=(4*7)-8**2+9;
console.log(exp);

//Conditions
if (exp>0){
    console.log('Value is greater than 0');
}
else if(exp==0){
    console.log('Value is equal to 0');
}else{
    console.log('Value is less than 0');
}

//Logical condition
var tt=56;
var tm='56';  // replacing else if with logical OR
if(tm>tt || tm===tt){ // 3 times === also consider data type
    console.log('Value is greater or equal');
}
else {
    console.log('Value is less');
}

//Ternary Operator
var result1=exp>0? 'Value is greater than zero':'value is less than zero';
console.log(result1); // true, first statement... false, second statement

//Looping Statements
for (let i=0; i<10; i++) {
    console.log(i+1);
}

var array=[1,45,34,56,78];
for (i=0; i<array.length; i++){
    console.log(array[i]);
}

//forin loop used in looping over an object
var obj={fname:'Heera', age:34, place:'tvm'};
for (const i in obj) {
    console.log(obj[i]);
    console.log(i);   //gives the keys
}

//forof loop
for (const i of array) {
    console.log(i);
}

//While loop
var i=1;
while (i<=10) {
    console.log(i);
    i++;
}

//Do while loop
let r=1;
do {
    console.log(r);
    r++;
} while (r<=10);

