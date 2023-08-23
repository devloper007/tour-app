import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: 'rakesh',
        email: 'rakesh@gmail.com'
    }
})

export default UserContext;