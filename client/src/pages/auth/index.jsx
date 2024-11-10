import Victory from '../../../src/assets/victory-hand.svg'
import { useState } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'
import {useToast} from '../../components/ui/use-toast'
import apiClient from '../../lib/api-client.js'
import { SIGNUP_ROUTE, LOGIN_ROUTE } from '../../utils/constants.js'
import { useAppStore } from '../../store'
import {useNavigate} from 'react-router-dom'

const Auth = () => {
    const navigate=useNavigate()
    const {setUserInfo}=useAppStore()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const { toast } = useToast()

    const validateLogin=()=>{
        if(!email.length){
            toast({
                description: "Email is required.",
              })
              return false
        }
        if(!password.length){
            toast({
                description: "Passwprd is required.",
              })
              return false
        }

        return true
    }
    const validatesignup=()=>{
        if(!email.length){
            toast({
                description: "Email is required.",
              })
              return false
        }
        if(!password.length){
            toast({
                description: "Passwprd is required.",
              })
              return false
        }
        if(!confirmPassword.length){
            toast({
                description: "Password and confirm password should be same.",
              })
              return false
        }
        return true
    }
    const handleLogin=async()=>{
        if(validateLogin()){
            try {
                const response = await apiClient.post(LOGIN_ROUTE, { email, password },{withCredentials:true});
                console.log(response); // Or handle success (e.g., redirect)
                if(response.data.user.id){
                    setUserInfo(response.data.user)
                    if(response.data.user.profileSetup) navigate("/chat")
                    else navigate("/profile ")
                }
            } catch (error) {
                toast({
                    description: "Login failed. Please try again.",
                });
                console.error(error); // Log error for debugging
            }
        }
    }
    
    const handleSignup = async () => {
        if (validatesignup()) {
            try {
                const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
                console.log(response);
                if(response.status===(200||201)) {
                    setUserInfo(response.data.user)
                    navigate("/profile")
                }// Or handle success (e.g., redirect)
            } catch (error) {
                toast({
                    description: "Signup failed. Please try again.",
                });
                console.error(error); // Log error for debugging
            }
        }
    };
    

  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
        <div className="h-[80vh] border-2 border-white bg-white text-opacity-90 shadow-xl w-[80%] md:w-[90%] lg:w-[60%] xl:w-[60%] rounded-3xl grid xl:grid-cols">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <h1 className="text-5xl font-bold md:text-6xl">Welcome </h1>
                        <img src={Victory} alt="Victory emoji logo" className='h-[100px]'/>
                    </div>
                    <p className='font-medium text-center'>Fill in the details to get started with the best chat app!</p>
                </div>
                <div className='flex items-center justify-center w-full'>
                <Tabs defaultValue="login" className="w-3/4" >
                    <TabsList className='bg-transparent rounded-none w-full'>
                        <TabsTrigger  className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value="login">Login </TabsTrigger>
                        <TabsTrigger  className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent  className='flex flex-col gap-5' value="login">
                        <Input
                            placeholder='email'
                            type='email'
                            value={email}
                            className='rounded-full p-6'
                            onChange={(e)=>setEmail(e.target.value)}
                         />
                         <Input
                            placeholder='password'
                            type='password'
                            value={password}
                            className='rounded-full p-6'
                            onChange={(e)=>setPassword(e.target.value)}
                         />
                         <Button className='bg-black rounded-full p-6 text-white' onClick={handleLogin}>Login</Button>
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-5' value="signup">
                    <Input
                            placeholder='email'
                            type='email'
                            value={email}
                            className='rounded-full p-6'
                            onChange={(e)=>setEmail(e.target.value)}
                         />
                         <Input
                            placeholder='password'
                            type='password'
                            value={password}
                            className='rounded-full p-6'
                            onChange={(e)=>setPassword(e.target.value)}
                         />
                         <Input
                            placeholder='confirm Password'
                            type='password'
                            value={confirmPassword}
                            className='rounded-full p-6'
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                         />
                         <Button className='bg-black rounded-full text-white p-6' onClick={handleSignup}>Signup</Button>
                    </TabsContent>
                    </Tabs>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Auth
