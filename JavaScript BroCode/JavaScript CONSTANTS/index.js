const PI = 3.14159;
let radius = 10;
let circumference;

// PI = 250.54;

// radius = window.prompt("Enter the radius")
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("H3").textContent = circumference + "cm";
}