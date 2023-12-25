// chrome extension project, Menoko OG, 12-24-23

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inuptBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inuptBtn.addEventListener("click", function () {   
    myLeads.push(inputEl.value)
    console.log(myLeads)
});

for (let i= 0; i < myLeads.length; i++){
    ulEl.innerHTML +="<li>" + myLeads[i] + "</li> "
};