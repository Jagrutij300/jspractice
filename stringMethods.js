let text ="user live in roha,i like roha";

//length property
let textlength = text.length;
console.log(textlength);//longcut
console.log(text.length);//short cut

//string slice()
console.log(textlength);

let slicedText = text.slice(2,6); // start index : inclusive end index : exclusive
console.log(slicedText);
console.log(text.slice(5));
console.log(text.slice(10,16));
console.log(text.slice(-13,-5));//// start index : exclusive end index : inclusive



//substring = also consider +ve value and -ve value considered o value


//console.log(text.substr(-10,-4)); // value 0 bcz o to o answer also 0
console.log(text.substring(-1,10)); //-ve value consider as 0 here and ens index value is exclusive

//substr
console.log(text.substr(2,6));//start index, length start index and end index also inclusive

//replce
console.log(text.replace('roha','mumbai'));//replace will eplase first find value
console.log(text.replace('rohis','mumbai'));//output remain same as text bcz not found replace value
console.log(text.replace('Roha','mumbai'));// perform original string bcz Roha is not roha replace case sensitive
console.log(text.replace(/Roha/i,'mumbai'));//cse make insensitive using i
console.log(text.replace(/roha/ig,'mumbai'));//using  g in text all roha words replce by mumbai
 // i= insensitive g= global
 console.log(text.replaceAll('roha','nashik'));//case sensitive
 console.log(text.replaceAll(/roha/ig,'nashik'));//case insensitive

 // toupperCase
 console.log(text.toUpperCase());

 //tolowerCase
 console.log(text.toLowerCase());

 //concat() + concanate operator

 let FirstName = 'jagruti';
 let LastName = 'jadhav';
 //let fullName = FirstName + " " + LastName;
 //let fullName = FirstName.concat(LastName) // connect word both jagrutijadhav
 let fullName = FirstName.concat(' ', LastName,140000)//space add jagruti jadhav140000
 console.log(fullName);
 
 //trim() method remove from both space from string
 let data = '       jagruti       ';
 console.log(data.trim());

 //trimStart() remove starting space
 //trimEnd()remove end space

 var string = "    this    should   bacome   something  else  too .";
 stringData = string.trim().replace(/\s+/g, " ");// remove multipal space only one space have in each word
 console.log(stringData);


 //toString() converted into number to string
 let num = 67679980;
 let data1 = num.toString();
 console.log(data1);

 //parseIn coverted string into number
 let num2 = '565656';
 let m = parseInt(num2)


 //charAt()
 let text1 = "HELLO WORLD";
 let char = text1.charAt(0);//H
 console.log(char);
 console.log(text1.charAt(20));//no indexavaliable so answer empty no answer or null or undefined

 //split()
 let date ='12/02/2002';
let newDate = date.split('/') // it split out data and it will return array
console.log(newDate);
console.log(newDate[2]);

let text4 = 'dkcjdslkfj kdjfir iojowufm kjhfkj';
t4 = text4.split( ' ');
console.log(t4);


//string includes()
let add = 'hsxbjs sjkxsh jagruti dnkedjfr';//include methode true if value include in data else will false
console.log(add.includes('jagruti')); //sensitive means exact match jagruti word.

//startswith
//responce  show

let StatusCode = '100256' 
let a = StatusCode.startsWith('100');
console.log(a);
console.log(StatusCode.endsWith('256'));
// indexof   first index
let text5 = 'Hello World, Welcome to the universe welcome.';
let result = text5.indexOf('Welcome');// inwelcome word then show index of W word alwys give first word meaning
let result = text5.indexOf('toooooo');// answer is -1 bcz could not found 
console.log(result);
//lastindexof     find last index 
text5.lastIndexOf('welcome')
console.log(text5.lastIndexOf('welcome'));

//search

let text6 = 'Mr. Blue has a blue house';
// let position = text6.search('blue');
let position = text6.search(/blue/);//e can add regex pattern in search regex insensitive
console.log(position);// diff betn search and indexof  method = we cannot pass regex pattern to index method

//match()
let text7 = ' The rain in SPAIN stays mainly in the plain';
let g = text7.match('ain');
console.log(g);
console.log(text7.match(/ain/g));

