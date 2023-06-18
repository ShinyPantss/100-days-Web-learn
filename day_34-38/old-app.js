// console.dir(document);

// document.body.children[1].children[0].href = "https://www.google.com.tr"; 

let anchorElement = document.getElementById("external-link")

anchorElement.href =   "https://www.google.com.tr";

document.querySelector("#external-link").href = "https://academind.com";


// Append
let newAnchorElement =document.createElement("a");

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);
newAnchorElement.href = "https://www.google.com.tr";
newAnchorElement.textContent = "\t  This is a link to Google";


//remove 
let h1Element = document.querySelector("h1");

h1Element.remove();
// h1Element.parentElement.removeChild(h1Element);


//Move Elements 
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
firstParagraph.innerHTML = "This is a new <strong>text</strong>";