import React, { useState } from 'react'
import { useAppStore } from '../../store'
import {IoArrowBack} from 'react-icons/io5'

function Profile() {
  const {userInfo} = useAppStore()
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [image, setImage]= useState(null)
  const [hovered, setHovered]= useState(false)
  const [selectedColor, setSelectedColor]= useState(0)

  return (
    <div className='bg-[#1b1c24] h-[100vh] flex items-center flex-col justify-center gap-10'>
        <div className='flex flex-col w-[80vw] md:w-max gap-10'>
          <IoArrowBack/>
        </div>
    </div>
  )
}

export default Profile
