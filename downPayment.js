let prompt=require("prompt-sync")();
let theCostOfHouse=prompt("Enter the cost of the house: ");
let downPayment=0;
if(theCostOfHouse>=0&&theCostOfHouse<=50000){
    downPayment=0.05*theCostOfHouse;
}else if(theCostOfHouse>50000&&theCostOfHouse<100000){
    downPayment=1000+0.1*(theCostOfHouse-50000);
}else if(theCostOfHouse>=100000&&theCostOfHouse<200000){
    downPayment=2000+0.15*(theCostOfHouse-100000);
}else if(theCostOfHouse>=200000){
    downPayment=5000+0.1*(theCostOfHouse-200000);

}else{
    console.log("Enter a valid amount:?")
}
console.log("The downPayment is: "+downPayment);
