import { useState } from "react"
import { usePostLinkMutation } from "../Redux/API/baseApi";

const AddLink = () => {

    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const [setNewLink,{data : finalData}] = usePostLinkMutation();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (url !== '' && text !== '') {
            const sendInfo={text,url}
            setNewLink(sendInfo);
            setText('')
            setUrl('')
            setModalStatus(false);
        } else {
            alert("Provide a URL and Anchor Text")
        }
    }



    return (
        <div className=" flex justify-end mr-3 mt-3">
            <button onClick={() => setModalStatus(!modalStatus)} className=" shadow-xl btn bg-yellow-500 hover:bg-yellow-400 text-black border-none flex items-center btn-sm"><span className="-mt-1 text-2xl ">+</span> Add New</button>
            {
                modalStatus &&
                <div className=" absolute top-0 left-0 bg-[#000000d4] w-full h-screen z-30 grid items-center justify-center">
                    <div className="w-[500px] bg-gray-800 p-5 rounded-xl relative">
                        <button onClick={() => setModalStatus(false)} className=" absolute right-4 top-4 bg-gray-700 text-red-700 w-8 aspect-square rounded-full">X</button>
                        <h3 className="font-bold text-2xl text-center mb-4">Add New Link</h3>
                        <div className="">
                            <form onSubmit={handleSubmit} method="dialog" className=" flex justify-center w-full flex-col space-y-3 ">
                                <input onChange={e => setUrl(e.target.value)} value={url} type="text" placeholder="URL" className="input input-bordered w-full bg-gray-900" />
                                <input onChange={e => setText(e.target.value)} value={text} type="text" placeholder="Anchor Text" className="input input-bordered w-full bg-gray-900" />
                                <button className="btn uppercase btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddLink