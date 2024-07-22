import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, ErrorMessage } from "formik";

const UserType = () => {


    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }
    const [state, setState] = useState([]);

    const getstate = () => {
        axios.get('http://localhost:3009/api/role', { headers })
            .then((res) => {
                setState(res.data)
            })
    }

    useEffect(() => {
        getstate()
    }, [])


    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="user_type" className="block font-medium">
                    User Type
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none font-medium
                 text-gray-700" id="role_id" name="role_id" as="select" >
                    <option value="0">Select UserType</option>

                    {state.map((ab) => {
                        const { id } = ab
                        return <option key={id} value={ab.id}>{ab.name}</option>;
                    })}
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default UserType;
