//for loop
// for in loop
// for of loop
// do while loop

// for loop

console.log("1");

for (let a = 1 ; a <= 10 ; a++  ) {
   console.log(a);
}
// for(;;){
//     console.log('jagruti'); // infinite loop
// 

//for in loop - it is used to itreate operate (ES1 version feature)

let student = {
    name : 'pooja',
    age : 20,
    city : 'pune'
}
// syntax
for( let x in student){
    console.log(student[x]); //[]property axcess symbol [x]
}

//for of 
let colour = ['red','orange','purple','pink','blue',]
for(let item of colour){
console.log(item);
}

//do while

let number = 0;
let a=0;
do {
    console.log(a); a++
    } while (a<=5){
        console.log(a);
    }



