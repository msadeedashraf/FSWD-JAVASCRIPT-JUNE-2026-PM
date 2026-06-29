//alert("Hello from the joblisting page")

fetch("data/job_listing.json")
.then ((response) => response.json())
.then ((data) => {   

    console.log(data)
    const jobData = data;
    //Action/method to perform

    getJobs(jobData)

} )

function getJobs(jobData)
{
console.log(jobData)

let myHTML = "";

for (a = 0; a <jobData.length; a++)
{
    myHTML += `<div class="jobs-listing">
                <h3>${jobData[a].title}</h3>
              <p>${jobData[a].company}</p>
              <p>${jobData[a].location}</p>
              <p>
                ${jobData[a].jobdesc}
              </p>

            </div> `

}

document.getElementById('job').innerHTML = myHTML

}



/*
//Getting the monley Data
fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then ((response) => response.json())
.then ((data) => {   

    console.log(data)
    const monkeyData = data;
    //Action/method to perform

} )
*/

//To fetch data from a local path/URL
/*
fetch("path")
.then ((response) => response.json())
.then ((data) => {   

    console.log(data)
    const mydata = data;
    //Action/method to perform
} )
*/



//  <!-- <div class="jobs-listing">
//                 <h3>Software Developer</h3>
//               <p>ABC Inc.</p>
//               <p>New York, NY</p>
//               <p>
//                 We are looking for a skilled and experienced Software Developer to
//                 join our team. The ideal candidate should have strong programming
//                 skills in Java and experience with web development technologies
//                 such as HTML, CSS, and JavaScript. Familiarity with databases and
//                 version control systems is a plus.
//               </p>

//             </div>