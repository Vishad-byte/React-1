import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='flex bg-[#6D676E] text-[#FBFFFE] p-4 text-2xl justify-center'>User: {userid}</div>
  )
}

export default User