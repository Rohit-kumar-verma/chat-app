import React, { useEffect } from 'react'
import { useAppStore } from '../../store'
import { useNavigate } from 'react-router-dom'

const Chat = () => {
  const {userInfo}= useAppStore()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast({
        description: "Signup failed. Please try again.",
    });
    navigate("/profile")
    }

  },[userInfo,navigate])
  return (
    <div>
      chat
    </div>
  )
}

export default Chat
