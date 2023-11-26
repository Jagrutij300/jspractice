//let/var/const  variable name = value

//differance var keyword

//scope differance
//1.  let,const keyword has block level scope , var: functional level scope

function test(){
    let a = 10;
    if(a < 20 ){
        let b = 30; // let keyword have block level scope so we cannot use outside the if block
        var c = 60; //var keyword are used outside the if block it is functional level scope
        const d = 70; // also const vlue not used outside the if block
    }
    console.log(b);
    console.log(c);
    console.log(d);
}
console.log(test());

//2.  redeclaration is not possible with let keyword and const keyword
//redeclaration is possible with var keyword

// let city = 'pune';
// let city = 'mumbai';

// var city = 'pune';
// var city = 'mumbai';

// const city = 'pune';
// const city = 'mumbai';

//reassigment
//resign value to the variable is possible with let,var keyword 
// not possible with const keyword

let marks = 50;
marks = 60;

const s = 67;
s = 77;         

//hoisting : first define value to the variable and declare it;

//hoistingis possible using var keyword
//not possible with const, let keyword

p = 50;
var p;
// p = 50;
// let p;

//defining value at a time of declaration is must with const keyword

let f;
f = 40;
  
var r;
r = 67;

// const y;
// y = 90;

const y = 90;

//function: parameterrised,parameterless
//function used to implement logic in code block
//logic
 
//parameterless
function multiplication(paranthesis){
    //code block
    console.log('parameterless fun');
    let a =20;
    let b =30;
    res = a * b;
    console.log('res', res);
}

//parameterised/argument 
function division(a,b){
    res = a / b;
    console.log('parameterised fun',res);

}









    
