console.log("hacker hai bhai hacker");
console.log("ratan hecker hai bhai");

setTimeout(() => {
    console.log("this is inside set timeout");
}, 2000);

setTimeout(() => {
    console.log("this is inside set timeout 2");
}, 3000);

console.log("The end");

const fn = () => {
    console.log("Nothing");
}

const callback = (arg, fn) =>{
    console.log(arg);
}

const loadScript = (src, callback) => {
 
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);