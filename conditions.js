//if condition,  syntex for if condition if(){code block}
//if else, syntex for if else if(condition){code block}else{}
//else if, syntex if(){}else if{}else if{}...as so on else if else{}
//switch
// items greater than orequl to 50 
let items = 40;

if(items > 50){console.log("stock available");}

//if else
if(items >= 50){
    console.log("stock is available");
}
else{console.log("limited stock available");}

//else if multipal conditions
if(items >=50){
    document.write("stock avaliable");

}
else if(items >= 20 && <=50)
{
    document.write("few items left");
} 
    
else if(items >= 1 && <=20){
    document.write("hurry up few stock avaliable");
} 
else{
    document.write("out of stock");}


   //switch//
   let marks = 40;

   switch (marks) {
    case marks >35 && <= 50:
        document.write('pass');
         break;
         
    case marks >50 && <= 60:
        document.write('second class');
         break;
    case marks >60 && <= 75:
            document.write('first class');
             break;
    case marks > 75:
        document.write('Distinction');
         break;
         default
         document.write('fail');
         break;;





   
       
    default:
        break;
   }
