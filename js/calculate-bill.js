//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var totalCostElement = document.querySelector(".billTotal");

//get a reference to the billString
var billStrings = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {
  // get the string entered in the textArea
  var billString = billStrings.value;

  //split the string
  var billItems = billString.split(",");

  // a variable for the total phone bill.
  var billTotal = 0;

  //loop over all the bill items
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2)
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    //color the total based on the criteria
  }

  if (roundedBillTotal >= 30){
       // adding the danger class will make the text red
       totalCostElement.classList.add("danger");
   }
   if (roundedBillTotal >= 20){
       totalCostElement.classList.add("warning");
   }
   if (roundedBillTotal < 30){
        // adding the danger class will make the text red
        totalCostElement.classList.remove("danger");
    }
    if (roundedBillTotal < 20){
         // adding the danger class will make the text red
         totalCostElement.classList.remove("warning");
     }




}

//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculate.addEventListener('click', calculateBtnClicked);//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var totalCostElement = document.querySelector(".billTotal");


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculate.addEventListener('click', calculateBtnClicked);
