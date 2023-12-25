// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorbtn = document.getElementById("error");
function errorClick(){
    errorbtn.textContent = "Something went wrong, please try again";
};