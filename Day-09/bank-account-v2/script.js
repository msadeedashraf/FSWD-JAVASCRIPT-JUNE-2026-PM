//alert('testing the loading')

let myBalance = 5000;

document.getElementById('balance').innerHTML = myBalance




function makeDeposit()
{
    //alert('Checking the deposit button')
    const amount = parseFloat(document.getElementById("depositAmount").value);
if (amount > 0 )
{
    myBalance += amount
    document.getElementById('balance').innerHTML = myBalance   
    //Add the transaction 
    addTransaction("Credit", amount)

}
else
{
    alert("Enter a valid deposit amount")
}

}

function makeWithdrawal()
{
    ///alert('Checking the withdraw button')

      //alert('Checking the deposit button')
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
if (amount > 0 && amount <= myBalance   )
{
    myBalance -= amount
    document.getElementById('balance').innerHTML = myBalance   
    //Add the transaction 
    addTransaction("Debit", amount)

}
else if (amount > myBalance)
{
    alert("Insufficcient Balance")
}
else

    {
        alert('Enter the valid withdrawal amount')
    }

}

function addTransaction(type, amount)
{

    const transactionList = document.getElementById("transaction");
    const myDate = new Date().toLocaleString();
    const transactionRow = document.createElement('tr');

    transactionRow.innerHTML = 

    `<td>${myDate}</td>
                <td>${type == "Credit" ? "Deposit" : "Withdrawal"}</td>
                <td class="${type.toLowerCase()}">$ ${amount}</td>
                <td>$ ${myBalance}</td>`

transactionList.appendChild(transactionRow)
//  <tr>

                // <td>2026/06/18</td>
                // <td>Withdrawal</td>
                // <td>$ 100</td>
                // <td>$ 5100</td>
                
//             </tr>



}


 /*
  //replace this block of code with Ternary operator
  //https://www.freecodecamp.org/news/javascript-string-format-how-to-use-string-interpolation-in-js/
  //https://www.w3schools.com/js/js_string_methods.asp#mark_tolowercase
  
 //Syntax: condition ? <expression if true> : <expression if false>
 //type == 'Credit' ? "Deposit" : "Withdrawal"

  
  
  if (type == 'Credit')
  {
    type = 'Deposit';
  }

  else
  {
    type = 'Withdrawal';
  }
*/