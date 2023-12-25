let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let outPutString = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
function add(){
    let theAnswer = "Sum: " + (num1 + num2) + " (Since 8 + 2 = 10)";
    outPutString.textContent = theAnswer;

};

function subtract(){
    let theAnswer = "Subtract: " + (num1 - num2) + " (Since 8 - 2 = 6)";
    outPutString.textContent = theAnswer;
};

function divide(){
    let theAnswer = "Divide: " + (num1 / num2) + " (Since 8 / 2 = 4)";
    outPutString.textContent = theAnswer;
};

function multiply(){
    let theAnswer = "Subtract: " + (num1 * num2) + " (Since 8 * 2 = 16)";
    outPutString.textContent = theAnswer;
};


// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"