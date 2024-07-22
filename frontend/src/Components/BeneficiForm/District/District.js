import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { DistAdd } from "../../Redux/Action/action";

const District = () => {
    const dispatch = useDispatch()

    const [district, setDistrict] = useState([]);
    const items = useSelector((state) => state.stateReducer.state)

    let token = sessionStorage.getItem('token')
    let headers = {
        token,
        state_id: items
    }


    const getstate = () => {
        axios.get('http://localhost:3009/api/dist', { headers })
            .then((res) => {
                setDistrict(res.data)
            })
    }

    useEffect(() => {
        getstate()

    }, [items])

    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="district" className="block font-medium">
                    District
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none font-medium
                 text-gray-700" id="district" name="district" as="select" onClick={(e) => dispatch(DistAdd(e.target.value))}>
                    <option value="0">Select District</option>

                    {district.map((ab) => {
                        const { id } = ab
                        return <option key={id} value={ab.id}>{ab.name}</option>;
                    })}
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default District;
