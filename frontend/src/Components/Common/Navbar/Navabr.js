import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Navabr = () => {

const navigationFO =[
    { name: 'Beneficiary', to:'/beneficiary', current: true },
    { name: 'Beneficiary Table', to:'/beneficiarytable', current: false },
]
const navigationAD =[
    { name: 'Beneficiary', to:'/beneficiary', current: true },
    { name: 'Beneficiary Table', to:'/beneficiarytable', current: false },
    { name: 'User', to:'/user', current: false },
    { name: 'State', to:'/state', current: false },
    { name: 'District', to:'/district', current: false },
    { name: 'Block', to:'/block', current: false },
    { name: 'Village', to:'/village', current: false },
    { name: 'User Table', to:'/usertable', current: false },
    { name: 'State Table', to:'/statetable', current: false },
    { name: 'District Table', to:'/districttable', current: false },
    { name: 'Block Table', to:'/blocktable', current: false },
    { name: 'Village Table', to:'/villagetable', current: false },
   
]

    let paylode = JSON.parse(sessionStorage.getItem('paylode'))
    let { role_id } = paylode
    let admin = false;

    role_id === 1 ? admin = true : admin = false;
    return (
        <>
            <motion.div
                initial={{opacity:0, x:200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:200}}
                className="fixed top-16 w-full">
               
                {admin ===true?<div className="w-full h-12 bg-green-100  flex items-center gap-3 px-4 overflow-x-scroll scrollbar-none">
                {navigationAD.map(e=>(
                        <Link key={e.name} to={e.to} className=" h-8  rounded-3xl border border-red-600 cursor-pointer bg-green-200 flex
                        font-medium text-md  px-2 hover:bg-green-300 items-center">{e.name}</Link>
                        ))}
                </div>:
                 <div className="w-full h-12 bg-green-100  flex items-center gap-3 px-4 ">
                 {navigationFO.map(e=>(
                         <Link key={e.name} to={e.to} className=" h-8  rounded-3xl border border-red-600 cursor-pointer bg-green-200 flex
                         font-medium text-md  px-2 hover:bg-green-300 items-center">{e.name}</Link>
                         ))}
                 </div>}
            </motion.div>
        </>
    )
}

export default Navabr