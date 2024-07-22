import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import State from '../../BeneficiForm/State/State'
import District from '../../BeneficiForm/District/District'
import Header from '../../Common/Header/Header'

const initialValues = {
    state: '',
    district: '',
}

const MasterBlockTable = () => {
    const [table, setTable] = useState([])
    const item = useSelector((state) => state.distReducer.state)
    let token = sessionStorage.getItem('token')
    let headers = {
        token,
        dist_id:item
    }

    const getTable=()=>{
        axios.get(`http://localhost:3009/api/block`,{headers})
        .then((res)=>{
            console.log(res)
            setTable(res.data)
        })
    }
    useEffect(() => {
     getTable()
    }, [item])
    
    return (
        <div className='mt-32'>
            <Header />
            <Formik initialValues={initialValues}
           >
                <State/>
                {/* <District/> */}
            </Formik>
            <div className="mt-5">
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

export default MasterBlockTable