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

// copy array in part wise
let [item1,item2, ...item3]= num ;
console.log(item1);
console.log(item2);
console.log(item3);
