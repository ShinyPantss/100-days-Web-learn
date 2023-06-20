// for loop
let nSum = document.getElementById("user-number")

let entered = 0;
function enteredNumber() {
     entered = nSum.value;
    console.log("enteredNumber: " + entered);

}
nSum.addEventListener("input", enteredNumber);



let calculateSum = document.getElementById("Button-calculate")
let nsSumParagraph = document.getElementById("calculated-sum")

function insertSum(){
 let k = 0;
 for (let i = 0; i <= entered; i++){
    k += i;
    console.log(k);
 }
    nsSumParagraph.textContent = k;
    nsSumParagraph.style.display = "block";
};
calculateSum.addEventListener("click", insertSum);

// for of  loop

const highlighted = document.querySelectorAll("#highlight-links a");
const highLightButton = document.querySelector("#highlight-links button");
console.log(highlighted);
console.log(highLightButton);

function highLightLinks() {
   for (let links of highlighted) {
        links.classList.add("highlighted");

}
}
highLightButton.addEventListener("click", highLightLinks);
console.log(highlighted);


// For in loop
const data = {
    name: "John",
    age: 25,
    city: "Berlin"

}

const displayUserDataButton = document.querySelector("#user-data button");

function displayData() {

    const userData = document.getElementById("output-user-data")
    userData.innerHTML = "";
    for(let key in data){
      const newUserData = document.createElement("li");
        newUserData.textContent = key.toUpperCase()+ ":  " + data[key];
        userData.append(newUserData);
    }

}

displayUserDataButton.addEventListener("click", displayData);


//
const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;

}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = ""; 
    let hasRolledTargetNumber = false;

    let numberOfDiceRolls = 0;
    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        numberOfDiceRolls++;
        const newRollListElement = document.createElement("li");
        const outputText ="Roll" + numberOfDiceRolls + ": " + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        if(rolledNumber == enteredNumber){
            hasRolledTargetNumber = true;
        }
    }
    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");
    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = 
    numberOfDiceRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);