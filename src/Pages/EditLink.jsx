import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useUpdateLinkMutation } from '../Redux/API/baseApi';

const EditLink = () => {

    
    const loader = useLoaderData();
    const navigate = useNavigate();
    
    const [text,setText] = useState(loader?.text)
    const [url,setURL] = useState(loader?.url)
    const [setUpdate,{data : updatedLink}] = useUpdateLinkMutation();
    console.log(updatedLink);

    const handleSubmitForm=(event)=>{
        event.preventDefault();
        const updatedInfo = {
            text,url,
            sid : loader?._id
        }
        setUpdate(updatedInfo);
    }

    if(updatedLink?.modifiedCount === 1){
        navigate('/dashboard');
    }


    return (
        <div className=' mt-10'>
            <form onSubmit={handleSubmitForm} className='flex flex-col max-w-xl mx-auto p-5 bg-gray-700 rounded-xl '>
                <h1 className=' uppercase text-center font-bold text-2xl'>Edit Link </h1>
                <small className=' mb-2'> URL</small>
                <input onChange={e=>setURL(e.target.value)} className=' mb-2 rounded-lg p-2 bg-gray-900' type="text" value={url}/>
                <small className=' mb-2'> Text</small>
                <input onChange={e=>setText(e.target.value)} className='rounded-lg p-2 bg-gray-900' type="text" value={text} />
                <button type='submit' className=' btn btn-sm  mt-3 bg-yellow-500 border-none '>Submit</button>
            </form>
        </div>
    )
}

export default EditLink