console.log("hello world");
document.body.firstElementChild[1]
document.body.firstElementChild.childNodes // gives nodes , comment nodes, and element
document.body.firstElementChild.children[3] // gives only element which are present
document.body.firstElementChild.children[3].nextElementSibling // gives next element 
document.body.firstElementChild.children[3].previousElementSibling// gives previous element 
document.body.firstElementChild.children[3].previousSibling// gives previous nodes
document.body.firstElementChild.children[3].parentElement// gives parent element 
