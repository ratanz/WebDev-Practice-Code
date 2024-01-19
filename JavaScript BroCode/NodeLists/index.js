// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// Add html and css properties

// buttons.forEach(button => {
//     button.style.backgroundColor=  "tomato";
//     button.textContent += "😃"
// });

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "orange";
//     });
// });

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "orange";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(88, 185, 217)";

    });
});

// Add an element
const newButton = document.createElement("button"); // Step 1
newButton.textContent = "Button 5"; // Step 2
newButton.classList = "myButtons";
// Step 3
document.querySelector("body").appendChild(newButton); // Step 4

buttons = document.querySelectorAll(".myButtons") // to add into the nodeList.
console.log(buttons);

// Remove an element
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons"); // to remove button from nodeList
        console.log(buttons);
    });
});