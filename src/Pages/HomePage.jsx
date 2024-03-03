import { useGetAllLinksQuery } from "../Redux/API/baseApi"


const HomePage = () => {

  const {data : datas} = useGetAllLinksQuery();


  return (
    <div>
      
      <div className=" border border-gray-600 p-4 my-10 flex justify-between mx-auto max-w-xl rounded-lg">
        <p className=" flex items-center gap-3"><span className=" w-5 rounded-full aspect-square block bg-green-600"></span> Already Visited Link </p>
        <p className=" flex items-center gap-3">NoN Visited Link <span className=" w-5 rounded-full aspect-square block bg-red-500"></span> </p>
      </div>
      <h1 className="  text-center mb-5 font-bold text-3xl uppercase border-b border-gray-600 max-w-xl mx-auto pb-2">Links </h1>

      <div className=" w-fit mx-auto">
        {
          datas?.map((one)=><a key={one?._id} href={one?.url} target="_blank" className="custom-anchor hover:text-blue-400 cursor-pointer block text-white mt-3">{one?.text} </a>)
        }
      </div>

    </div>
  )
}

export default HomePage