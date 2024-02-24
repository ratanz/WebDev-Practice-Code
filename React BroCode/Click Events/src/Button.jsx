// function Button(){

//     let count = 0;
//     const handleClick = (name) => {
    
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} times`);
//         }
//         else{
//             console.log(`${name} stop clicking me`);
//         }

//     }
//     // const handleClick2 = () => alert("stop clicking")
//     return(

//     // <button onClick={() => handleClick ("Yo")}>Click me 😀</button>
//     <button onClick={() => handleClick("Bro")}>Click me 😀</button>
//     )
// }

function Button(){
    const handleClick =(e) => e.target.textContent = "Stop Clicking!! 😲"

    return(<button onClick={(e) => handleClick(e)}>Click me 🤨</button>)
}

export default Button