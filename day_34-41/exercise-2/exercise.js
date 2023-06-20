// Practice what you learned!
console.dir(document.body);

// 1) Select the two <button> elements and store them in two different variables.




//    - Select the first button without adding or using any "id"

let removeParagraph = document.body.children[2].children[4]

//    - Select the second button by using an "id"

let changeColor = document.querySelector("#change-color")

// changeColor = document.body


// 2) Add "click" event listener to both buttons (with two different functions).
function removingParagraph() {
    console.dir(removeParagraph)
}
function changingColor(event) {
    console.dir(event.target)
}

removeParagraph.addEventListener("click", removingParagraph 
)

changeColor.addEventListener("click", changingColor)

//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
console.log(removeParagraph)
//    - Output the second button WITHOUT using the variable in which it's stored
console.log(changeColor)
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
let firstParagraph = document.body.children[2].children[3]

let thirdParagraph = document.body.children[2].children[1]
// 4) Change the functions from (2) such that:
function removingParagraph() {
    firstParagraph.remove()
}
function changingColor() {
    thirdParagraph.style.backgroundColor = "blue"
}
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes

//    Note: You'll have to add those classes to the styles.css file first!