import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header/Header'

const UserTable = () => {

    const [table, setTable] = useState([])
    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }

    const getData = () => {
        axios.get(`http://localhost:3009/api/user`, { headers })
            .then((res) => {
                console.log(res.data.Users)
                setTable(res.data.Users)
            })
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div>
            <Header />
            <div className="mt-32 ">
                <p className='text-2xl font-medium w-full flex justify-center mb-3 '>User Table</p>
                <div className="w-full flex justify-between border-b-2 border-gray-400 px-6 h-10 bg-gray-200 items-center">
                    <div className="w-1/4 text-xl font-semibold">Name</div>
                    <div className="w-1/4 text-xl font-semibold">Email</div>
                    <div className="w-1/4 text-xl font-semibold">username</div>
                    <div className="w-1/4 text-xl font-semibold">User Type</div>
                </div>
                {table.map(e => (
                    <div key={e.id} className="w-full flex justify-between border-b-2 bg-gray-100 px-6 h-12 items-center">
                        <div className="w-1/4 font-semibold">{e.name}</div>
                        <div className="w-1/4 font-semibold">{e.email}</div>
                        <div className="w-1/4 font-semibold">{e.username}</div>
                        <div className="w-1/4 font-semibold">{e.role_id===1?<>ADMIN</>:<>USER</>}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserTable;

