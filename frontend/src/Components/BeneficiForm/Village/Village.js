import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";

const Village = () => {

    const items = useSelector((state) => state.blockReducer.state)
    let token = sessionStorage.getItem('token')
    let headers = {
        token,
        block_id: items
    }
    const [village, setVillage] = useState([]);
    const getstate = () => {
        axios.get('http://localhost:3009/api/vill', { headers })
            .then((res) => {
                setVillage(res.data)
            })
    }

    useEffect(() => {
        getstate()
    }, [items])

    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="village" className="block font-medium">
                    Village
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                    id="village" name="village" as="select">
                    <option value="">Select Village</option>

                    {village.map((ab) => {
                        const { id } = ab
                        return <option key={id} value={ab.id}>{ab.name}</option>;
                    })}
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default Village;
