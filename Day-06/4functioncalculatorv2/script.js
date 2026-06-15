//alert('testing 4 function calculator')
function calculate()
{
    //alert('testing calculate click button' )

    var num1  = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var opt = document.getElementById('operator').value;

    //console.log(num1 , num2 , opt)



    if (opt == "A")
    {
    
        document.getElementById('result').innerHTML = add(num1,num2)

    }

    else if (opt == "M")
        {
    
        document.getElementById('result').innerHTML = multiply(num1,num2)

    }


     else if (opt == "S")
        {
    
        document.getElementById('result').innerHTML = subtract(num1,num2)

    }
     else if (opt == "D")
        {
    
        document.getElementById('result').innerHTML = divide(num1,num2)

    }







}

function add(num1, num2)
{
    var result = parseFloat(num1) + parseFloat(num2)
    return result.toFixed(4)
}


function subtract(num1, num2)
{
    var result = parseFloat(num1) - parseFloat(num2)
    return result.toFixed(4)
}


function multiply(num1, num2)
{
    var result = parseFloat(num1) * parseFloat(num2)
    return result.toFixed(4)
}


function divide(num1, num2)
{
    var result = parseFloat(num1) / parseFloat(num2)
    return result.toFixed(4)
}