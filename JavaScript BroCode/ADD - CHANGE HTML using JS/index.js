const newH1 = document.createElement("h1");
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato"
newH1.style.textAlign = "center"

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box3").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// document.body.removeChild(newH1);
// document.getElementById("box2").removeChild(newH1)

// - - - - - - - - - - - - - - - - - - - - - 

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.color = "green";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.body.prepend(newListItem);
document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

// document.getElementById("fruits").removeChild(newListItem)
