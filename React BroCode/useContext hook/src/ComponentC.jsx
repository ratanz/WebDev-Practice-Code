import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC(){

    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>This is Component C</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentC;