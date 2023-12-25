let fruit = ["Apple", "Orange", "Apple", "Apple", "Orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function putOnShelf(){
    for (i=0; i < fruit.length; i++){
        if (fruit[i] === "Apple"){
            appleShelf.textContent += fruit[i]  + " "
        } else if (fruit[i] === "Orange"){
            orangeShelf.textContent += fruit[i] + " "
        };
    };
    
};
putOnShelf();
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.