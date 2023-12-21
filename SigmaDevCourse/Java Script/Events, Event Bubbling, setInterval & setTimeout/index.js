let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("i was clicked, Yay!")
    document.querySelector(".box").innerHTML = "<b> yay your are clicked, enjoy your click"

})

button.addEventListener("contextmenu", ()=>{
    alert("don't hack us by right click!")

})

document.addEventListener("keydown", (e)=>{

    console.log(e ,e.keyCode, e.key);

})