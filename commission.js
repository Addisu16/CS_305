let prompt = require("prompt-sync")();
let salesEntered = parseInt(prompt("Enter the sales amount? "));
//const salesManGets = require("prompt-sync")();
let salesManGets = parseInt(prompt("Enter the sales man salary? "));

let commissionSales = 0.0;
if ((salesEntered >= 0 && salesEntered < 300) && (salesManGets > 0)) {
    commissionSales = 0.0;
    console.log("The employer gets a total amount of: " + commissionSales);
} else if ((salesEntered >= 300 && salesEntered < 500) && (salesManGets > 0)) {
    commissionSales = salesEntered * 0.01;
    console.log("The employer gets a total amount of: " + commissionSales);
} else if ((salesEntered > 500) && (salesManGets > 0)) {
    commissionSales = salesEntered * 0.02;
    console.log("The employer gets a total amount of: " + commissionSalesTotal);
} else if ((salesEntered >= 300 && salesEntered < 500) && (salesManGets === 0)) {
    commissionSales = salesEntered * 0.02;
    console.log("The employer gets a total amount of: " + commissionSales);
} else if ((salesEntered >= 500) && (salesManGets === 0)) {
    commissionSales = salesEntered * 0.03;
    console.log("The employer gets a total amount of: " + commissionSales);
} else {
    console.log("the input is incorrect")


}
