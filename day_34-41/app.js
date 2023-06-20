let firstInput = document.querySelector("input");
let inputNumber = document.querySelector("#input-number");
let maxAllowedChars = firstInput.getAttribute("maxlength");
console.log(maxAllowedChars);

function retrieveUserInput(event) {
    let entered = firstInput.value;
    // let entered = event.target.value;
    // let entredText = event.data; // this is the last character entered
    let number = 60
    number -= entered.length;
    inputNumber.textContent = number +"/60";

    
   i

    return entered;
}  



firstInput.addEventListener("input", retrieveUserInput);
