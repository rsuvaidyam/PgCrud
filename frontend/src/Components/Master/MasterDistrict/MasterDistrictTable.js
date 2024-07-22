import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import State from '../../BeneficiForm/State/State'
import Header from '../../Common/Header/Header'

const initialValues = {
    state: '',
}

const MasterDistrictTable = () => {
    const [table, setTable] = useState([])
    const items = useSelector((state) => state.stateReducer.state)
    let token = sessionStorage.getItem('token')
    let headers = {
        token,
        state_id:items
    }

    const getTable=()=>{
        axios.get(`http://localhost:3009/api/dist`,{headers})
        .then((res)=>{
            console.log(res)
            setTable(res.data)
        })
    }
    useEffect(() => {
     getTable()
    }, [items])
    
    return (
        <div className='mt-32'>
            <Header />
            <Formik initialValues={initialValues}
           >
                <State className=''/>
            </Formik>
            <div className="mt-5">
            <p className='text-2xl font-medium w-full flex justify-center mb-3'>District Table</p>
                <div className="w-full flex border-b-2 border-gray-400 px-6 h-10 bg-gray-200 items-center">
                    <div className="w-1/4 text-xl font-semibold">DistrictId</div>
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

export default MasterDistrictTable