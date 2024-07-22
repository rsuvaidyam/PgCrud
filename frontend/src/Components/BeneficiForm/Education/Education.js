import React from "react";
import { Field, ErrorMessage } from "formik";

const Education = () => {


    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor="education" className="block font-medium">
                    Education
                </label>
                <Field className=" w-full border-2 py-1.5 px-2 outline-none font-medium text-gray-700"
                    id="education" name="education" as="select">
                    <option value="">Select Gender</option>
                    <option value='1'>8th</option>;
                    <option value='2'>9th</option>;
                    <option value='3'>10th</option>;
                    <option value='4'>11th</option>;
                    <option value='5'>12th</option>;
                    <option value='6'>Graduation</option>;
                    <option value='7'>Postgraduation</option>;
                </Field>
                <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p' />

            </div>
        </>
    );
};

export default Education;
