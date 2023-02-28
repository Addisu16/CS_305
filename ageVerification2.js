let user_input=require("prompt-sync")();
let age=user_input("Enter your age: ");
while(age<18){
    age=user_input("Enter your age: ");

}
console.log("You are Entered 18 and the loop will stop !");