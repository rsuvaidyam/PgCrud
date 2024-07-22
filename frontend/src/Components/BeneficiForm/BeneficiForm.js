import React, { useState } from 'react'
import { Field, ErrorMessage, Formik, Form } from "formik";
import State from './State/State';
import District from './District/District';
import Block from './Block/Block';
import Village from './Village/Village';
import axios from 'axios';
import Gender from './Gender/Gender';
import Header from '../Common/Header/Header';
import Education from './Education/Education';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {IoIosClose} from 'react-icons/io'

const initialValues = {
    first_name: '',
    email: '',
    mobile: '',
    gender: '',
    education: '',
    photo: '',
    state: '',
    district: '',
    block: '',
    village: '',
    address: '',
}

const BeneficiForm = () => {
    const [isLoding, setisLoding] = useState(false)
    const [msg, setMsg] = useState('')
    const [msgErr, setMsgErr] = useState(200)

    const navigate = useNavigate();

    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }
    const onSubmit = values => {
        console.log(values)
        axios.post(`http://localhost:3009/api/beneficiary`,
            {
                first_name: values.first_name, email: values.email, mobile: values.mobile, gender: values.gender,
                Education: values.education, state: values.state, district: values.district, block: values.block,
                village: values.village, Address: values.address, photo: values.photo
            }, { headers })
            .then((res) => {
                setMsg(res.data.message)
                setMsgErr(res.status)
                setisLoding(true)
                setTimeout(() => {
                    setisLoding(false)
                    navigate('/beneficiarytable')
                }, 4000)
            })
            .catch((err) => {
                setMsg(err.response.data.message)
                setMsgErr(err.status)
                setisLoding(true)
                setTimeout(() => {
                    setisLoding(false)
                }, 4000)
            });
    }
    return (
        <div>
            <Header />
            <div className="w-full flex justify-center h-full mt-36 mb-10 px-4">
                <div className="w-full h-full ">
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        <Form className='h-full flex flex-col gap-3 px-20'>
                            <div className="w-full flex flex-col justify-center lg:justify-around lg:flex-row">
                                <div className="w-full lg:w-1/2 px-8 flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h1 className='text-3xl font-bold'>Beneficiary for an Account</h1>
                                        <p className='font-medium text-sm'>Please provide following details to continue</p>
                                    </div>
                                    <div className="fixed bottom-5 left-5">
                                    {isLoding === true ? <motion.p
                                    initial={{opacity:0, x:200}}
                                    animate={{opacity:1,x:0}}
                                    exit={{opacity:0,x:200}}
                                    className={`text-sm font-medium relative bg-gray-200 py-2 pl-2 pr-5 
                                    ${msgErr === 200 ? 'text-green-600 border-b-2 border-emerald-400' : 'text-red-500 border-b-2 border-red-400'}`}>
                                        {msg} <IoIosClose className='absolute right-0 top-0 text-xl cursor-pointer' onClick={()=>setisLoding(false)}/></motion.p> : null}
                                 </div>
                                    {/* Username */}
                                    <div className=" flex flex-col gap-1 mt-8">
                                        <label htmlFor="first_name" className="font-bold text-gray-900">First Name</label>
                                        <Field type="text" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                            id="first_name" name='first_name' placeholder="Enter Your Name" />
                                        <ErrorMessage name='first_name' component='p' />
                                    </div>
                                    {/* Password */}
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="email" className="font-bold text-gray-900">Email</label>
                                        <Field type="email" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                            id="email" name='email' placeholder="Enter Your Email" />
                                        <ErrorMessage name='password' component='p' />
                                    </div>
                                    {/* Username */}
                                    <div className=" flex flex-col gap-1 ">
                                        <label htmlFor="mobile" className="font-bold text-gray-900">Mobile No.</label>
                                        <Field type="text" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                            id="mobile" name='mobile' placeholder="Enter Your Mobile No." />
                                        <ErrorMessage name='mobile' component='p' />
                                    </div>
                                    {/* Password */}
                                    <Gender />
                                    {/* Username */}
                                    <Education />
                                    {/* photo */}
                                    <div className=" flex flex-col gap-1 ">
                                        <label htmlFor="photo" className="font-bold text-gray-900">Photo</label>
                                        <Field type="file" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                            id="photo" name='photo' placeholder="Enter photo" />
                                        <ErrorMessage name='photo' component='p' />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-8 flex flex-col gap-3">
                                    {/* State */}
                                    <div className='mt-2 lg:mt-[107px]'>
                                        <State />
                                    </div>
                                    {/* District */}
                                    <District />

                                    {/* Block */}
                                    <Block />
                                    {/* Village */}
                                    <Village />
                                    {/* Password */}
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="address" className="font-bold text-gray-900">Address</label>
                                        <Field type="address" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                            id="address" name='address' placeholder="Enter Your Address" />
                                        <ErrorMessage name='address' component='p' />
                                    </div>

                                    {/* Sign In */}
                                    <div className="mt-8">
                                        <button type="submit" className="w-full bg-blue-600 py-2 text-xl font-semibold text-white">
                                            Submit</button>
                                    </div>
                                </div>
                                {/*  */}



                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default BeneficiForm