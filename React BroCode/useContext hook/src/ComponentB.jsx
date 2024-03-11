import { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC";

function ComponentB() {

    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>This is Component B</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC />
        </div>
    )
}

export default ComponentB;