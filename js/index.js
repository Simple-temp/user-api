const userBox = document.querySelector(".show-data");
const showBox = document.querySelector(".show-details");
document.querySelector("#load-data").addEventListener("click",function(){
    const countText = document.querySelector("#user-amount").value;
    const countNumber = parseFloat(countText);
    if(countText!=countNumber)
    {
        alert("Number de madarboard");
    }
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => {
    data = data.slice(0,countNumber);
    userBox.innerHTML="";
    showBox.innerHTML="";
        for(let i = 0; i<data.length; i++)
        {
            const user = data[i];
            console.log(user);
            const pTag = document.createElement("p");
            pTag.innerHTML=`
            <div class="left-box">
            <h4>Name : ${user.name}</h4>
            <button id="getDetails" onclick="getInfo(${user.id})">Get Details</button></div>
            `;
            userBox.appendChild(pTag);
        }
    })
})

function getInfo(userid)
{
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then(response => response.json())
    .then(data => {
        const p = document.createElement("p");
        p.innerHTML=`
        <div class="user-info">
        Id : ${data.id}<br>
        ${data.name}<br>
        ${data.username}<br>
        ${data.phone}<br>
        ${data.email}<br>
        ${data.company.name}<br>
        ${data.address.city}<br>
        ${data.website}<br>
        </div>
        `;
        showBox.appendChild(p);
    })
}

