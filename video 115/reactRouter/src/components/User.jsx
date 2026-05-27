import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
    return (
        <div className='bg-pink-700 text-black flex justify-center items-center'>
            <h1>
                This is {params.username}
            </h1>
        </div>
    )
}

export default User
