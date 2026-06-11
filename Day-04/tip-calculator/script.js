//alert("Testing tip calculator script page")

function calculateTip()
{
    var myBillAmount = document.getElementById('bill').value;
    var myTipAmount = document.getElementById('tip').value;
    //console.log(myBillAmount)
    //console.log(myTipAmount)
    var myTotalAmount = myBillAmount * (1+myTipAmount/100)
document.getElementById('total').innerHTML = myTotalAmount.toFixed(2)    
}