//alert('testing the js page')

let myBalance = 2000

document.getElementById('balance').innerHTML = myBalance

function makeDeposit()
{
const amount= parseFloat(document.getElementById('depositAmount').value)

//console.log(amount)
myBalance += amount

document.getElementById('balance').innerHTML = myBalance

const transactionList = document.getElementById('transaction');
const transactionItem = document.createElement('li')
transactionItem.textContent = 'Credit : $' + amount +  ' | Balance : $' + myBalance

transactionList.appendChild(transactionItem)
    
}




function makeWithdraw()
{
   const amount= parseFloat(document.getElementById('withdrawAmount').value)

//console.log(amount)
myBalance -= amount

document.getElementById('balance').innerHTML = myBalance

const transactionList = document.getElementById('transaction');
const transactionItem = document.createElement('li')
transactionItem.textContent = 'Debit : $' + amount +  ' | Balance : $' + myBalance

transactionList.appendChild(transactionItem)



}
