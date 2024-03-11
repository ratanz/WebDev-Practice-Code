import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext()

function ComponentA() {

    const [user, setUser] = useState("Aceu")

    return (
        <div className="box">
            <h1>This is Component A</h1>
            <h2>{`Hello ${user}!`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;