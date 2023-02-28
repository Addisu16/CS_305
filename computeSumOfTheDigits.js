
let prompt=require("prompt-sync")();
let number=parseInt(prompt("Enter a  number and I will compute the sum: "));
let sum=0;
while(number>0){
    number1=number%10;
    sum=sum+number1;
    number=Math.floor(number/10);
}
console.log("The sum of the numbers you're entered is :"+sum);