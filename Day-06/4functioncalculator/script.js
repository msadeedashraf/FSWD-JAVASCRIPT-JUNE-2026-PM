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
    
        document.getElementById('result').innerHTML = parseFloat(num1) + parseFloat(num2)

    }

    else if (opt == "M")
        {
    
        document.getElementById('result').innerHTML = parseFloat(num1) * parseFloat(num2)

    }


     else if (opt == "S")
        {
    
        document.getElementById('result').innerHTML = parseFloat(num1) - parseFloat(num2)

    }
     else if (opt == "D")
        {
    
        document.getElementById('result').innerHTML = parseFloat(num1) / parseFloat(num2)

    }





}