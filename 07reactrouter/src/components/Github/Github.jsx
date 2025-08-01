import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [ data, setData ] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Vishad-byte').
    //     then(res => res.json()).
    //     then(data => {
    //         setData(data)
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github following: {data.following}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Vishad-byte')
    return response.json()
}