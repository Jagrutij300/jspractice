let city = ['pune','mumbai','nashik','jaipur',2000];//hetrogenous array
// array means collection of different data type in form list 
console.log(city.length);//length opr will return length of array

//methods
//tostring()    conversion of array into string
console.log(city.toString());

//pop()    in our array list last item will be remove from list will return the same
let popoutitem = city.pop();
console.log(popoutitem);
console.log(city);

//push()    including last item in array list WILL RETURN ARRAY ELEMENTS LIST return length of the original array
let returnedByPush = city.push(6000,'pune');
city.push(6000,'pune');
console.log(city);

// shift() methods remove the first array element and 'shifts' ll other element to the lower index
let colour = ['red','blue','black','yellow'];
let shiftMethodReturnedData = colour.shift()
console.log(colour);
console.log(shiftMethodReturnedData);


//unshift() // adding to first and show length

let colour2 = ['pink','red','blue','black','yellow'];
let unshiftMethodReturnedData = colour2.unshift('black','orange',);
console.log(colour2);
console.log(unshiftMethodReturnedData);

//join() in array different item joint we give by space ya other sign
let v = ['pink','red','blue','black','yellow'];
let v1 = v.join(' * ');
console.log(v1);


//concat()   means connected two or more string at that time
cl2 = ['black','yellow'];
cl3 = ['pink','red','blue'];
let cl4 = cl2.concat(cl3,v);
console.log(cl4);

//delete operator
const fruits = ['bannana','orange','apple','mango'];
delete fruits[1];
console.log(fruits);
console.log(fruits.length);// length after deleting element same
