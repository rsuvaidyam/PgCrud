import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { BlockAdd } from "../../Redux/Action/action";

const Block = () => {
    const dispatch = useDispatch()

    const items = useSelector((state) => state.distReducer.state)

    let token = sessionStorage.getItem('token')
    let headers = {
        token,
        dist_id: items
    }
    const [block, setBlock] = useState([]);
    const getstate = () => {
        axios.get('http://localhost:3009/api/block', { headers })
            .then((res) => {
                setBlock(res.data)
            })
    }

    useEffect(() => {
        getstate()
    }, [items])

    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="block" className="block font-medium">
                    Block
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none 
                font-medium text-gray-700" id="block" name="block" as="select" onClick={(e) => dispatch(BlockAdd(e.target.value))}>
                    <option value="0">Select Block</option>

                    {block.map((ab) => {
                        const { id } = ab
                        return <option key={id} value={ab.id}>{ab.name}</option>;
                    })}
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default Block;
