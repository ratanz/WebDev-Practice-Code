// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// - - - - - - - .firstElementChild - - - - - - -

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "pink";

const ulElementFirst = document.querySelectorAll("ul")
ulElementFirst.forEach(ulElementFirst => {
    const firstChild = ulElementFirst.firstElementChild;
    firstChild.style.backgroundColor = "pink"
});


// - - - - - - - .lastElementChild - - - - - - -

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

const ulElementLast = document.querySelectorAll("ul")
ulElementLast.forEach(ulElementLast => {
    const lastChild = ulElementLast.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
});


// - - - - - - - .nextElementSibling - - - - - - -

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightblue"


// - - - - - - - .previousElementSibling - - - - - - -

// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor ="lightgrey";


// - - - - - - - .parentElement - - - - - - -

// const element = document.getElementById("ice cream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "orange";


// - - - - - - - .children - - - - - - -

const element = document.getElementById("vegetables");
const children = element.children;

children[1].style.backgroundColor = "green"

// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "green"
// })

// console.log(children);