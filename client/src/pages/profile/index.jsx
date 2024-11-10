import React, { useState } from 'react'
import { useAppStore } from '../../store'
import {IoArrowBack} from 'react-icons/io5'
import {FaTrash, FaPlus} from 'react-icons/fa'
import {AvatarImage} from '../../components/ui/avatar'
import { Avatar } from '@radix-ui/react-avatar'

function Profile() {
  const {userInfo} = useAppStore()
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [image, setImage]= useState(null)
  const [hovered, setHovered]= useState(false)
  const [selectedColor, setSelectedColor]= useState(0)

  return (
    <div className='bg-[#1b1c24] h-[100vh] flex items-center flex-col justify-center gap-10'>
        {/* <div className='flex flex-col w-[80vw] md:w-max gap-10'>
          <IoArrowBack/>
        </div>
        <div className='grid grid-cols-2'>
          <div className='h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center'
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}>
            <Avatar className='h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden'>
            {image ? (
            <AvatarImage
            src={image}
            alt='profile'
            className='object-cover w-full h-full bg-black'/>
            ):(
            <div
            className={`uppercase h-32 w-32 md:w-48 md-h-48 text-5xl border-[1px] flex items-center`}
             >
              {
                firstName ? firstName.split("").shift()
                : userInfo.email.split("").shift()
              }
              </div>
              )}
            </Avatar>
            {hovered  && <div>{image?<FaTrash/> : <FaPlus/>}</div>}
          </div>
        </div> */}
        hiii
    </div>
  )
}

export default Profile
