// chrome extension project, Menoko OG, 12-24-23

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inuptBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
};

function renderLeads(){
    let listItems = "";
    for (let i= 0; i < myLeads.length; i++){
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //template string, it is like making f string in python. This makes it more readable than expression above.
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = listItems;
};

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
});

inuptBtn.addEventListener("click", function () {   
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
});


