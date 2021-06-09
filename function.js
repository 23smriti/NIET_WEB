//function body
function callMe(name)
{
    console.log("calll me function called!!");
    return 10;
}
//function invocation call
console.log(callMe);
let rval=callMe();
console.log(rval);
 callMe("steve");//can pass the parameter 
 //function can be passed as a argument in a function and also they can be returned from the function

 //let sayhi; //undefined
 let sayhi= function()
 {
     console.log("function says hii");
 }
 sayhi(); // error due to stack

 //high order functions and callBack Functions