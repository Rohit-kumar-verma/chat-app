import Victory from '../../../src/assets/victory-hand.svg'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'

const Auth = () => {
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
                <Tabs defaultValue="account" className="w-3/4">
                    <TabsList className='bg-transparent rounded-none w-full'>
                        <TabsTrigger  className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value="login">Login </TabsTrigger>
                        <TabsTrigger  className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent  className='' value="login"></TabsContent>
                    <TabsContent className='' value="signup"></TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Auth