var billAmount = document.getElementById('billamount');
var cashAmount = document.getElementById('cashamount');
var nextButton =document.getElementById('nextbutton');
var checkButton =document.getElementById('checkbutton');
var error = document.getElementById('message');
var noofNotes =document.querySelectorAll(".no-Of-Notes");
var availableNotes=[2000,500,100,20,10,5,1];
const returnAmount= cashAmount.value-billAmount.value;

function hideMessage(){
    error.style.display ="none";  
}

function messageHandle(msg){
    error.style.display="block"
    error.innerHTML = msg;
 }

 
checkButton.addEventListener("click",() =>
{
    let bill =Number(billAmount.value)
    let cash =Number(cashAmount.value)
    hideMessage();

    if(bill> 0){
        if(cash > bill){
            const returnAmount= cash -bill;
            calculateChange(returnAmount);
            console.log(returnAmount)
            
    }
        else{ 
            messageHandle("Cash amount should be greater than or equal to the  bill amount")
        }

    }
    
    else
    {
        messageHandle("Invalid Bill Amount")
    }

})


 

 







function calculateChange(returnAmount){
    for (let i=0;i <=8;i++){
     var amoutofNotes=Math.trunc(
        returnAmount/availableNotes[i]
     );
     

     returnAmount%=availableNotes[i];
     noofNotes[i].innerHTML =amoutofNotes;
     
    }

}

