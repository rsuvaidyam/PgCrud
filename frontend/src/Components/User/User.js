import React, { useState } from 'react'
import { Field, ErrorMessage, Formik, Form } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'


const initialValues = {
    username: '',
    password: ''
}

// const validationSchema = ({


// })

const User = () => {

    const [isLoding, setisLoding] = useState(false)
    const [msg, setMsg] = useState('')
    const [msgErr, setMsgErr] = useState(200)

    const navigate = useNavigate();
    const onSubmit = values => {
        // console.log(values)
        axios.post(`http://localhost:3009/api/login`,
            { username: values.username, password: values.password },)
            .then((res) => {
                sessionStorage.setItem('token', (res.data.token))
                if (res.data.token) {
                    let token = res.data.token
                    let payload = token.split(".")
                    let data = atob(payload[1])

                    sessionStorage.setItem('paylode', data)
                    setMsg(res.data.message)
                    setMsgErr(res.status)
                    setisLoding(true)
                    setTimeout(() => {
                    setisLoding(false)
                    navigate('/beneficiary')
                }, 2000)
                } else {
                    console.log("unauthorized")
                }

            })
            .catch((err) => {
                setMsg(err.response.data.message)
                setMsgErr(err.response.status)
                setisLoding(true)
                setTimeout(() => {
                    setisLoding(false)
                }, 4000)
            });
    }
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full sm:w-[540px] h-full  flex justify-center items-center">
                    <div className="w-full h-[500px] border-2 rounded-3xl relative">
                    <Formik
                            initialValues={initialValues}
                            // validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            <Form className='h-full  w-full flex flex-col gap-3 px-10 py-16'>
                                <div className="w-full flex flex-col items-center gap-2">
                                    <h1 className='text-3xl font-semibold'>Sign up for an Account</h1>
                                    <p className='font-medium text-sm'>Please provide following details to continue</p>
                                </div>
                                <div className="absolute top-0 left-0 w-full">
                                    {isLoding === true ? <motion.p
                                    initial={{opacity:0,}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                    className={`text-md w-full flex justify-center items-center gap-2 rounded-t-3xl font-semibold relative bg-gray-200 py-2 
                                    ${msgErr === 200 ? 'text-green-600 border-b-2 border-emerald-400' : 'text-red-500 border-b-2 border-red-400'}`}>
                                       {msgErr === 200 ?<IoCheckmarkDoneCircleOutline className='text-2xl pt-1'/>:<AiOutlineCloseCircle className='text-2xl pt-1'/>} {msg} </motion.p> : null}
                                 </div>
                                <div className="w-full h-full flex flex-col gap-8">
                                    {/* Username */}
                            
                                <div className=" flex flex-col gap-1 mt-10">
                                    <label htmlFor="username" className="font-semibold text-gray-900">Username</label>
                                    <Field type="text" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                        id="username" name='username' placeholder="Enter Username" />
                                    <ErrorMessage name='username' component='p' />
                                </div>
                                {/* Password */}
                                <div className=" flex flex-col gap-1">
                                    <label htmlFor="password" className="font-semibold text-gray-900">Password</label>
                                    <Field type="password" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                        id="password" name='password' placeholder="Enter Password" />
                                    <ErrorMessage name='password' component='p' />
                                </div>
                                {/* Sign In */}
                                    <button type="submit" className="w-full bg-blue-600 py-2 text-xl font-semibold text-white">
                                        Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User