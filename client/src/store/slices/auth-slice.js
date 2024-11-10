const createAuthSlice = (set)=>(
    {
        userInfo:undefined,
        setUserInfo:(user)=>set({userInfo:user}),
    }
)

export default createAuthSlice