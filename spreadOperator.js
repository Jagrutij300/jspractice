//The javscript spread operator (...)allows us to
//quickly copy all or part of an existing array or object into another array or object

//spread operator
let num = [40,50,60,70,80,90];
// forEachmethod using copy array
// let num2 = [];
// num.forEach(ele=>{
//     num2.push(ele);
// })
// console.log(num2);

//using spread operator copy all element in array
let num2 = [...num];
console.log(num2);

// copy array in part wise // part element copy
let [item1,item2, ...item3]= num ;
console.log(item1);
console.log(item2);
console.log(item3);

//concatination of array
let colour1 = ['red','orange'];
let colour2 = ['violet','black'];

let colour = [...colour1,...colour2];
console.log(colour);


//obj:
let emp = {
    name: 'sushant',
    age: '25',
    city: 'pune'
};
let emp3 = {...emp};
console.log(emp3);  //object so here we use{}

//concatination of object
let emp1 = {
    name: 'sagar',
    age: '25',
    city: 'pune',
    mob:9898989898
};
let emp2 = {
    name: 'sumit',
    age: '25',
    city: 'pune',
    sal:30000
};
let emp4 = {...emp1,...emp2};//use spread operator if keys are different in both the object
console.log(emp4);//do not use spread operator for object bcz data loss

//object.assign(target,...sources);
let mergedObj = Object.assign({},emp1,emp2);
console.log(mergedObj);

//ternary operator

let marks = 50;
if(marks > 35){
    console.log('pass');
}
else{
    console.log('fail');
}

//condition ? true >> statement1 : False >> statement2
marks > 35 ? console.log('pass') : console.log('fail');

//arrow functions : allow us to write shorter function syntax:
let data = function test(){
    return 20*8;
}

console.log(test());


test1 = ()=> 20*8;
console.log(test1());

