import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "dummyName",
        email: "dummyemail@gmail.com"
    }
})

export default UserContext;