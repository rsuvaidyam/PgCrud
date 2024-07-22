import React from "react";
import { Field, ErrorMessage } from "formik";

const Gender = () => {


    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="gender" className="block font-medium">
                    Gender
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                    id="gender" name="gender" as="select">
                    <option value="">Select Gender</option>
                    <option value='1'>Male</option>;
                    <option value='2'>Female</option>;
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default Gender;
