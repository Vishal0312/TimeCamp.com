import React from "react";

const AuthContext = React.createContext()


export default function AuthContextProvider({children}){

    const [isAuth, dispatch] = React.useReducer(reducer, false)


return(
    <AuthContext.Provider value={{isAuth, }}>
{
    children
}
    </AuthContext.Provider>
)


}