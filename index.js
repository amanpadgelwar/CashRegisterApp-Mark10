var billAmount = document.getElementById('bill-amount');
var cashAmount = document.getElementById('cash-amount');
var checkButton =document.getElementById('check-button');
var error = document.getElementById('message');
var noofNotes =document.getElementsByClassName('no-Of-Notes');
var availableNotes=[2000,500,100,20,10,5,1];
console.log("clicked");

checkButton.addEventListener("click",function checkBillAndCashAmount()
{
hideMessage();
    if(billAmount.value>0){
        if(cashAmount.value > billAmount.value){
            var returnAmount= cashAmount.value-billAmount.value;
    }
        else{
            messageHandle("Cash amount should be greater than or equal to the  bill amount")
        }

    }else{
        messageHandle("Invalid Bill Amount")
    }


function calculateChange(returnAmount){
    for (let i=0;i<availableNotes.length;i++){
     var amoutofNotes=Math.trunc(
        returnAmount/availableNotes[i]
     );

     returnAmount%=availableNotes[i];
     noofNotes[i].innerHTML =amoutofNotes;

    }

}

function hideMessage(){
    error.style.display ="none";  
}

 function messageHandle(message){
    error.style.display="block";
    error.innertext = message;
 }


});


