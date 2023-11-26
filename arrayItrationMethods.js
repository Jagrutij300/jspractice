const numbers = [45,4,9,16,25,67,88];//9

//using simple loop
let num =[];
for(let i = 0 ; i < numbers.length ; i++){
    if (numbers[i] != 9) {num.push(numbers[i])
    }
}
console.log(num);

//using forEach() array itration methods // break and continue keywords we cannot apply for forEach
let num2 = [];
numbers.forEach(item => {
    if (item != 9){
        num2.push(item)

    }

})
console.log(num2);

//break/continue
num =[];
for(let i = 0 ; i < numbers.length ; i++){
    if (numbers[i] == 16) {
        break; //break out looping
    }
    num.push(numbers[i]);
}
console.log(num);

//simple loop 2nd example
for(let i = 1 ; i <= 50 ; i++){
    if(i >=31 && i <= 40){
        console.log(i);
    }
}

//for each
const item =  [1,2,3,4,5,6,7,8,9,10];
item.forEach(ele=>{
    if(ele >=3 && ele <= 9){
        console.log(ele,'<br>');}})
item.push(44)
document.write(item)


//find() it will return first match that passes your test condition
// let no = item.find(item=>{return item > 7;})
// console.log(no); //9


//indexof()  find value using index of
const fruits = ['apple','orange','apple','mango','orange'];
let n1 = fruits.indexOf('orange');//1
let n = fruits.indexOf('Orange');//-1 no match exact found case sensitive 
console.log(n);

//lastIndexOf() case sensitive // will return -1 if not found exact match
console.log(fruits.lastIndexOf('orange'));

//map()
emp = [
    {
        empName: 'pooja', city: 'pune'
    },
    {
        empName: 'pravin', city: 'satara'

    },
    {
        empName: 'sagar', city: 'nashik'
    }

]
//array of atom only empName return array answer 'pravin'
let names = emp.map(empData =>{
    return empData.empName;
})
console.log(names);
 
//key value both only empName not city  answer empName 'pravin'
let nameObj = emp.map(({empName})=>({empName})) 
console.log(nameObj);

// here we find repeated 20 number for index value
const array = [10,20,30,20,50,20,70,80,20];
const searchElement = 20;
let foundIndex=[];

array.forEach((element,index) => {
    if(element === searchElement){
        foundIndex.push(index);
    }
});
console.log(foundIndex);


//includes()  == to cheak given value included in array id find then give true othewise not found false
const array1 = [10,20,30,20,50,20,70,80,20];
console.log(array1.includes(40));

//duplicate item remove  [... (these is pread operator)]
// Q remove duplicate item from these array
// 1. New Set simple methods
let char = ['a','b','c','a','b','a','a'];
let char2= [...new Set(char)];
console.log(char2);

//duplicate item remove by logical methods
//filter()
let data = char.filter((item,index) => {
    if(char.indexOf(item) === index){
        return item
    }
})
console.log(data);

//using includes()
let uniqueEle = [];
char.forEach((ele,i)=>{
    if(!uniqueEle.includes(ele))
    {
        uniqueEle.push(ele)
    }
})
console.log(uniqueEle);