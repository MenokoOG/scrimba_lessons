// Scrimba javaSript pratice lessons, Menoko OG, 12-24-23
const person = {
    name: "Menoko OG",
    age: 107,
    country: "U.S.A."
};

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
};

logData();
console.log("**********************");
let age = 15;
function discount() {
    if (age < 6) {
        console.log("free")
    } else if (age < 18) {
        console.log("Child discount")
    } else if (age < 27) {
        console.log(" Student discount")
    } else if (age < 66) {
        console.log("Full price")
    } else {
        console.log("Senior citizen discount")
    }
};

discount();
console.log("**********************");
// Use a for loop to log the following to the console:
let largeCountries = ["China","India","USA","Indonesia","Pakistan"];
function biggestCountry(){
    console.log("The five largst countries in the world:")
    for (i = 0; i < largeCountries.length; i++){
        console.log("- " + largeCountries[i])
    }
};
biggestCountry();
console.log("**********************");
let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"];
/* You need to help me fixup the largeCountries array so that 
China and Pakistan are added back into their respective places
Use push() & pop() and their counterparts unshift() & shift()
 Google how to use unshift() and shift()
shift() removes the first element from an array and returns it, while unshift() adds one or more elements to the beginning of an array and returns the new length.*/
function fixLargeCountries(){
    let remove1st =  largeCountries2.shift();
    remove1st = largeCountries2;
    let add1st = largeCountries2.unshift("China");
    add1st = largeCountries2;
    let removeLast = largeCountries2.pop();
    removeLast = largeCountries2;
    let addLast = largeCountries2.push("Pakistan")
    addLast = largeCountries2;
    console.log(largeCountries2);
};
fixLargeCountries();
console.log("**********************");
let dayOfMonth = 13;
let weekday = "Friday";
/*If it is Friday the 13th, log out this spooky face: 😱
Use the logical "AND operator" -> && */
function isItFriday13(){
    if( dayOfMonth === 13 && weekday === "Friday"){
        console.log("😱");
    }
};
isItFriday13();
console.log("**********************");
let hands = ["rock", "paper", "scissor"]
// Create a function that returns a random item from the array
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
};

console.log(getHand());
console.log("**********************");
var elem1;
var elem2;
var elemListLength = elemList.length;

elem1 = elemList[Math.floor(Math.random() * elemListLength)];
if (elemListLength > 1) {
    do {
      elem2 = elemList[Math.floor(Math.random() * elemListLength)];
    } while(elem1 == elem2);
}

var elem1;
var elem2;
var elemListLength = elemList.length;

var ix = Math.floor(Math.random() * elemListLength);
elem1 = elemList[ix];

if (elemListLength > 1) {
    elem2 = elemList[(ix + 1 + Math.floor(Math.random() * (elemListLength - 1))) % elemListLength];
}

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);
