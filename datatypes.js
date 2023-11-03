console.log('gfgfh');

// when we enter any word or commant in couma then these is string data type otherwise number or bollen //
let state=""; //empty string

let city="pune"; // string data type

console.log('city 1',city);

city="mumbai";

console.log('city 2',city);


var marks =90; //number
console.log('marks', marks)


var mobno =7083844236;
console.log(mobno); //number

var mobno ='7083844236';//string
console.log(mobno);

var isfavfruit = true; //boolen true or false
console.log(isfavfruit);

var isfavfruit = 'true'; //string true or false
console.log(isfavfruit);


//type of() .it gives type of variable
console.log('data type of isfavfruit var',typeof(isfavfruit));

const match= undefined;
console.log(match);
 
let abc;
console.log(abc)

var myname = null;
console.log(myname);
console.log(typeof(myname));

let a = 999999999999999;
console.log(a);

let c = "9999999999999999";
console.log(BigInt(c));

let d = 9999999999999999n;
console.log(d);




//array = is used to store multipal items
let name = "pooja live in mumbai,mumbai is big city"
console.log(name);

let cities = [];//empty array

cities = ["pune","mumbai","nashik","satara","kolhapur"]; 
console.log(cities);
console.log(typeof(cities)); //array data type is always object
console.log(cities[1]); // mumbai
console.log(cities[7]); //undefined bcz no number is present in our cities list
console.log(cities.length);
console.log(cities[0]);//array first value to determined type 0
console.log(cities[cities.length -1]);//array last index item -1 we get last cities from list