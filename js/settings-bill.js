// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
var callCostSettings = document.querySelector('.callCostSetting');
var smsCostSettings = document.querySelector(".smsCostSetting")
var warningLevelSettings = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var settingsAddBtn = document.querySelector(".settingsAddBtn")


//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callamount = 0;
var smsamount = 0;
var totalamount = 0;

var callcost = 0;
var smscost = 0;
var warningLevel = 0;
var criticalevel = 0;
// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

callTotalSettings.innerHTML = "0.00";
smsTotalSettings.innerHTML = "0.00";
totalSettings.innerHTML = "0.00";


//add an event listener for when the add button is pressed
settingsAddBtn.addEventListener('click', BillSettings);

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', update);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function update() {
  callcost = parseFloat(callCostSettings.value);

  smscost = parseFloat(smsCostSettings.value);
  warningLevel = parseFloat(warningLevelSettings.value);
  criticalevel = parseFloat(criticalLevelSetting.value);

}


function BillSettings() {
  var settingsRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (settingsRadioBtn) {
    var settingsItemType = settingsRadioBtn.value



    // update the correct total
    if (settingsItemType === "call") {
      callamount += callcost;
      totalamount += callcost;

      if (totalamount > criticalevel) {
        var diff = totalamount - criticalevel
        callamount -= diff;
        totalamount -= diff;
      }
      callTotalSettings.innerHTML = callamount.toFixed(2);
      totalSettings.innerHTML = totalamount.toFixed(2)

    } else if (settingsItemType === "sms") {
      smsamount += smscost;
      totalamount += smscost;

      if (totalamount > criticalevel) {
        var diff = totalamount - criticalevel
        smsamount -= diff;
        totalamount -= diff;
      }
      smsTotalSettings.innerHTML = smsamount.toFixed(2);
      totalSettings.innerHTML = totalamount.toFixed(2);

    }

    //color the total based on the criteria
    if (totalamount >= criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.add("danger");
    } else if (totalamount >= warningLevel) {
      totalSettings.classList.add("warning");

    }
    if (totalamount < criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.remove("danger");
    } else if (totalamount < warningLevel) {
      totalSettings.classList.remove("warning");

    }
    if (updateSettings < criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.remove("danger");
    } else if (totalamount < warningLevel) {
      totalSettings.classList.remove("warning");

    }
  }


}
