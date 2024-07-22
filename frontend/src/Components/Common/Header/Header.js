import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import Navabr from '../Navbar/Navabr'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [openNav, setOpenNav] = useState(false)

    const navigate = useNavigate();
    const Nav = () => {
        setOpenNav(!openNav)
    }
    const logout = () => {
        let token = sessionStorage.getItem('token')
        if (token) {
            axios.post(`http://localhost:3009/api/user`, {},
                {
                    headers: {
                        "token": ` ${token}`
                    }
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            sessionStorage.removeItem('token')
            navigate('/')
        } else {
            console.log("token require")
        }
    }
    let paylode = JSON.parse(sessionStorage.getItem('paylode'))
    let { user_type } = paylode
    let admin = false;

    user_type === "1" ? admin = true : admin = false;
    return (
        <>
            <div className="w-full fixed top-0">
                <div className="w-full bg-green-200 h-16 flex items-center justify-between relative" >
                    <div><FaBars className='text-2xl ml-5 cursor-pointer' onClick={Nav} />
                        {openNav === true ? <Navabr /> : <></>}</div>
                    {admin === true ? <p className='text-2xl font-semibold'>Admin</p> :
                        <p className='text-2xl font-semibold'>Feild Officer</p>}
                    <BiLogOutCircle className='mr-5 text-2xl cursor-pointer' onClick={logout} />
                </div>
            </div>
        </>
    )
}

export default Header