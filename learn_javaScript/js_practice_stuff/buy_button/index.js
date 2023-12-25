// Use .innerHTML to render a Buy! button inside the div container
const containerEL = document.getElementById("container");
containerEL.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy(){
    containerEL.innerHTML += "<p>Thank you for spending your money</p>"
};
