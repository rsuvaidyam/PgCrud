import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header/Header'


const MasterStateTable = () => {

    const [table, setTable] = useState([])
    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }

    const getData = () => {
        axios.get(`http://localhost:3009/api/state`, { headers })
            .then((res) => {
                setTable(res.data)
            })
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div>
            <Header />
            <div className="mt-32 ">
                <p className='text-2xl font-medium w-full flex justify-center mb-3'>State Table</p>
                <div className="w-full flex border-b-2 border-gray-400 px-6 h-10 bg-gray-200 items-center">
                    <div className="w-1/4 text-xl font-semibold">StateId</div>
                    <div className="w-1/4 text-xl font-semibold">State Name</div>
                    {/* <div className="w-1/4 text-xl font-semibold">Mobile No.</div> */}
                </div>
                {table.map(e => (
                    <div className="w-full flex  border-b-2 bg-gray-100 px-6 h-12 items-center">
                        <div className="w-1/4 font-semibold">{e.id}</div>
                        <div className="w-1/4 font-semibold">{e.name}</div>
                        {/* <div className="w-1/4 font-semibold">{e.mobile}</div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MasterStateTable;