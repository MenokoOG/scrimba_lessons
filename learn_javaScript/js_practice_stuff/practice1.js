// JS practice stuff, Menoko OG 12-22-23

let Fname = "Menoko";
let Lname = "OG";
let FullName = Fname + " " + Lname;
console.log(FullName);

// Create a function that logs out "Hi there, Linda!" when called

function lindaHi() {
    let name = "Linda";
    let greeting = " Hi there";

    console.log(greeting + ", " + name + "!")
};
lindaHi()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints = myPoints += 3;
};

function remove1Point() {
    myPoints = myPoints -= 1;
};

add3Points() //6
add3Points()// 9
add3Points() // 12
remove1Point() //11
remove1Point()//10
// Call the functions to that the line below logs out 10
console.log(myPoints)
// Try to predict what each of the lines will log out
console.log("2" + 2) //"22"
console.log(11 + 7) //18
console.log(6 + "5") //"65"
console.log("My points: " + 5 + 9) //"My points: " "59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"
// Arrays 
let rifles = [
    "ak-47",
    "mp-5",
    "m-16"
];
console.log(rifles[0]);
console.log(rifles[1]);
console.log(rifles[2]);
for (i = 0; i < rifles.length; i++){
    console.log(rifles[i]);
};
rifles.push("musket");
for (i = 0; i < rifles.length; i++){
    console.log(rifles[i]);
};
rifles.pop();
for (i = 0; i < rifles.length; i++){
    console.log(rifles[i]);
};

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalRaceTime(){
    return player1Time + player2Time;
};

let totalRace = totalRaceTime();
console.log(totalRace);
//random numbers
function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber
};

console.log(rollDice());

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

let hasSolvedChallenge = false
let hasHintsLeft = false
// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (hasSolvedChallenge === false && hasHintsLeft === false){
   showSolution();
};
function showSolution() {
    console.log("Showing the solution....")
};
