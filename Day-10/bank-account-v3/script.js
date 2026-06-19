//alert('Testing page load')
let myBalance = 4000;
document.getElementById("balance").innerHTML = myBalance;

function makeTransaction() {
  //alert('submit button test')

  let myTransactionType = document.getElementById("transactionType").value;
  //console.log(myTransactionType)
  let description = document.getElementById("transactionDescription").value;

  if (description == "other") {
    description = document.getElementById("customDescription").value;
  } else {
    description = description;
  }
  //console.log(description)

  let myAmount = parseFloat(document.getElementById("amount").value);
  //console.log(myAmount)

  if (myTransactionType == 'd')
  {
    //Deposit Method
    deposit(myAmount)
  }
  else
  {
    //Withdraw Method
    withdraw(myAmount)
  }


  //Adding Transaction

  let myClassType = '';

  myTransactionType == 'd' ? myClassType = 'Credit' : myClassType = 'Debit'

addTransaction(myClassType,description,myAmount)


}



function addTransaction(type, description, amount) {

    
  const transactionList = document.getElementById("transactions");

  const myDate = new Date().toLocaleString();

  const transactionRow = document.createElement("tr");

  
  transactionRow.innerHTML = `
                            <td>${myDate}</td>
                            <td>${description}</td>
                            <td class="${type.toLowerCase()}">$ ${amount}</td>
                            <td>$ ${myBalance}</td>
                            `;

  transactionList.appendChild(transactionRow);
}



function deposit(amount)
{
//alert(`${myBalance} my balnce into deposit function and the amount is ${amount}`)

myBalance += amount;
//alert(`New Total ${myBalance}` );
document.getElementById("balance").textContent = myBalance;
}

function withdraw(amount)
{
    myBalance -= amount;
    document.getElementById("balance").textContent = myBalance;
}




function toggleTransactionFields() {
  let myTransactionType = document.getElementById("transactionType").value;

  document.getElementById("amount").placeholder =
    myTransactionType == "d"
      ? "Enter the deposit Amount"
      : "Enter the withdrawal Amount";
}

function toggleCustomDescription() {
  let description = document.getElementById("transactionDescription").value;
  let customDestrictionField = document.getElementById("customDescription");

  /*
    if (description == "other")
    {
        customDestrictionField.classList.remove('hidden')
    }
    else
    {
        customDestrictionField.classList.add('hidden')
    }
*/
  //Ternary Operator
  //condition ? true : false

  description == "other"
    ? customDestrictionField.classList.remove("hidden")
    : customDestrictionField.classList.add("hidden");
}
