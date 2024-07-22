import React, { useState } from 'react'
import Header from '../Common/Header/Header'
import { Field, ErrorMessage, Formik, Form } from "formik";
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {IoIosClose} from 'react-icons/io'
import UserType from './UserType';

const initialValues = {
    name: '',
    email: '',
    username: '',
    role_id: '',
    password: '',

}
const UserRegister = () => {
    const [isLoding, setisLoding] = useState(false)
    const [msg, setMsg] = useState('')
    const [msgErr, setMsgErr] = useState(200)
    const navigate = useNavigate();
    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }
    const onSubmit = values => {
        axios.post(`http://localhost:3009/api/register`, {
            name: values.name, email: values.email, username: values.username, role_id: values.role_id,
            password: values.password
        }, { headers })
            .then((res) => {
                setMsg(res.data.message)
                setMsgErr(res.status)
                setisLoding(true)
                setTimeout(() => {
                    setisLoding(false)
                    navigate('/usertable')
                }, 4000)
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
        <div>
            <Header />
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form className='h-full flex flex-col gap-3 px-20 mt-32 mb-10'>
                    <div className="w-full flex flex-col justify-center lg:justify-around lg:flex-row">
                        <div className="w-full lg:w-1/2 px-8 flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <h1 className='text-3xl font-bold'>Create A New Account</h1>
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
                            <div className=" flex flex-col gap-1 mt-4">
                                <label htmlFor="name" className="font-bold text-gray-900">Name</label>
                                <Field type="text" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                    id="name" name='name' placeholder="Enter Your Name" />
                                <ErrorMessage name='name' component='p' />
                            </div>
                            <div className=" flex flex-col gap-1 mt-4">
                                <label htmlFor="email" className="font-bold text-gray-900">Eamil</label>
                                <Field type="email" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                    id="email" name='email' placeholder="Enter Your Email" />
                                <ErrorMessage name='email' component='p' />
                            </div>
                            <div className=" flex flex-col gap-1 mt-4">
                                <label htmlFor="username" className="font-bold text-gray-900">UserName</label>
                                <Field type="text" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                    id="username" name='username' placeholder="Enter Your Username" />
                                <ErrorMessage name='username' component='p' />
                            </div>
                           <UserType/>
                            <div className=" flex flex-col gap-1 mt-4">
                                <label htmlFor="password" className="font-bold text-gray-900">Password</label>
                                <Field type="password" className="w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                                    id="password" name='password' placeholder="Enter Your Password" />
                                <ErrorMessage name='password' component='p' />
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="w-full bg-blue-600 py-2 text-xl font-semibold text-white">
                                    Submit</button>
                            </div>
                        </div>

                        {/*  */}



                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default UserRegister;