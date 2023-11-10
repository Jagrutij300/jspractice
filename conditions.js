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
    console.log("stock avaliable");

}
else if(items >= 20)
{
    console.log("few items left");
} 
    
else if(items >= 1){
    console.log("hurry up few stock avaliable");
} 
else{
    console.log("out of stock");}

