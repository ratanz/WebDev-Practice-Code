import { useState } from "react";
import Counter from "./Counter";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Aceu")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed)
    }

    return (<>
        
        <div>
            <p>Your name is: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Your age is: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"} </p>
            <button onClick={toggleEmployed}>is Employed</button>
        </div>
        <br />
        <h3>counter element 👇🏻</h3>

        <Counter />

    </>
    )
}

export default MyComponent;