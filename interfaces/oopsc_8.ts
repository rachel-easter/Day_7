//Interfaces:
//explicit names of type checking
//Gives better type annotation 
//Example-1
//interface is the keyword  
interface Convert{
(str:string):string;
}
let lowerCase:Convert;//declaring the interface to the lowerCase variable

lowerCase=function(str:string):string{
    return str.toLowerCase();
}

console.log(lowerCase("I LoVE CoDiNg"));
