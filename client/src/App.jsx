import { Children, useEffect, useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Auth from './pages/auth'
import './App.css'
import Chat from './pages/chat'
import Profile from './pages/profile'
import { useAppStore } from './store'
import apiClient from './lib/api-client'
import { GET_USER_INFO } from './utils/constants'


const PrivateRoute=({Children})=>{
  const {userInfo}= useAppStore()
  // console.log(userInfo);
  const isAuthenticated= !!userInfo
  console.log(isAuthenticated);
  return isAuthenticated ? Children : <Navigate to="/auth"/>
}

const AuthRoute=({children})=>{
  const {userInfo}= useAppStore()
  const isAuthenticated= !!userInfo
  return isAuthenticated ? <Navigate to="/auth"/>: children
}

function App() {

  const {userInfo, setUserInfo}=useAppStore()
  const [loading, setLoading]= useState(true)

  useEffect(()=>{

    const getUserData= async()=>{
      try {
        const response=await apiClient.get(GET_USER_INFO,{withCredentials:true})
        if(response.status===200 && response.data.id){
          setUserInfo(response.data)
        }
        else{
          setUserInfo(undefined)
        }
       
      } catch (err) {
          setUserInfo(undefined)
      }
      finally{
        setLoading(false)
      }
    };
    if(!userInfo){
      getUserData();
    }
    else{
      setLoading(false)
    }
  },[userInfo, setUserInfo])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthRoute>
          <Auth/>
        </AuthRoute>}/>
        <Route path='/chat' element={<PrivateRoute>
          <Chat/>
        </PrivateRoute>}/>
        <Route path='/profile' element={<PrivateRoute>
            <Profile/>
          </PrivateRoute>}/>
        <Route path='*' element={<Navigate to="/auth"/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
