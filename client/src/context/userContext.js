import React, { createContext, useState } from "react";

const UserContext = createContext(null);

const UserState = (props) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        uid: "",
    });
    const updateUser = (user) => {
        if (user) {
            setUser({
                name: user.displayName,
                email: user.email,
                uid: user.uid
            });
        }
        else {
            setUser({
                name: "",
                email: "",
                uid: "",
            });
        }
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserState }