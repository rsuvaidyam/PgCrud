import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header/Header'

const BeneficiTable = () => {

    const [table, setTable] = useState([])
    console.log(table)
    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }

    const getData = () => {
        axios.get(`http://localhost:3009/api/beneficiary`, { headers })
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
                <div className="w-full flex justify-between border-b-2 border-gray-400 px-6 h-10 bg-gray-200 items-center">
                    <div className="w-1/4 text-xl font-semibold">First Nmae</div>
                    <div className="w-1/4 text-xl font-semibold">Email</div>
                    <div className="w-1/4 text-xl font-semibold">Mobile No.</div>
                    <div className="w-1/4 text-xl font-semibold">Gender</div>
                </div>
                {table.map(e => (
                    <div className="w-full flex justify-between border-b-2 border-gray-400 bg-slate-100 px-6 h-12 items-center">
                        <div className="w-1/4 font-semibold">{e.first_name}</div>
                        <div className="w-1/4 font-semibold">{e.email}</div>
                        <div className="w-1/4 font-semibold">{e.mobile}</div>
                        <div className="w-1/4 font-semibold">{e.gender==='1'?<>Male</>:<>Female</>}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeneficiTable