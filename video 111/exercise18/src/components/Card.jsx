import React from 'react'

const Card = ({ userData }) => {
    return (
        <div className='w-[300px] h-[160px] border-2  border-black m-3 p-3 rounded-xl bg-orange-100 font-sans overflow-y-scroll scrollbar-hide'>
            <div className='flex'>
                <h3><b>User Id</b> : {userData.userId}</h3>
                <h4 className='ml-4'><b>Id</b> : {userData.id}</h4>
            </div>
            <h4><b>Title </b> : {userData.title}</h4>
            <p><b>Body </b> : {userData.body}</p>
        </div>
    )
}

export default Card
