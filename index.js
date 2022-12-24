const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
var checkButton =document.querySelector("#check-button");
var error = document.querySelector("#error-message");
console.log(cashAmount.value);
console.log(billAmount.value);

function checkBillAndCashAmount(){console.log("clicked")};
checkButton.addEventListener("click", checkBillAndCashAmount());

