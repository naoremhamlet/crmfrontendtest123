import React, { useState,useContext, useCallback } from 'react';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    token: "",
    name: "",
    userId: "",
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{},
});



const AuthContextProvider = ({children})=>{
    const [user,setUser]=useState({accessToken: window.localStorage.getItem('accessToken')||"",
    name: window.localStorage.getItem('name')||"",
    email: window.localStorage.getItem('email')||""})
    const ctx = useContext(AuthContext);
    const [isLoggedIn,setIsLoggedIn]=useState(window.localStorage.getItem('email')!=null);
    const name = ctx.name;
    const userId = ctx.userId;
    const token = ctx.token;

    const loginHandler = useCallback((email,name,token,rememberme)=>{
        console.log("Loggin in");
        setUser({email:email,name:name,accessToken:token})
        if(rememberme)
        {
            window.localStorage.setItem('email',email)
            window.localStorage.setItem('name',name)
            window.localStorage.setItem('accessToken',token)

        }
        
        setIsLoggedIn(true)},[]);
    const logoutHandler = useCallback(()=>{window.localStorage.clear();setIsLoggedIn(false);},[]);

    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn,userId:user.email,name:user.name,token:user.accessToken,login:loginHandler,logout:logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

