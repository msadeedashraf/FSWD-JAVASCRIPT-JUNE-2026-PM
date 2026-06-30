

fetch ("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then ((response) => response.json())
.then ((data) => {
//console.log(data);
const monkeys = data;
getMonkey(monkeys);
})

function getMonkey(monkeys)
{
    console.log(monkeys);

    let myHTML = "";

for (a = 0; a<monkeys.length ; a++)
{

myHTML += `<div class="card" style="width: 18rem;">
  <img src=${monkeys[a].Image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${monkeys[a].Name}</h5>
    <p class="card-text">${monkeys[a].Details}</p>
    <p class="card-text">Location : ${monkeys[a].Location}</p>
    <p class="card-text">Population :${monkeys[a].Population}</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
        `;
}
document.getElementById("demo").innerHTML = myHTML ;
}


























//alert("test")

/*
fetch ("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then ((response) => response.json())
.then ((data) => {
console.log(data);
})



fetch ("https://www.themealdb.com/api/json/v1/1/random.php")
.then ((response) => response.json())
.then ((data) => {
console.log(data);
})
*/