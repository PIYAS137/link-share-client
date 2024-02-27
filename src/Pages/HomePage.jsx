

const HomePage = () => {
  return (
    <div>
      
      <div className=" border border-gray-600 p-4 my-10 flex justify-between mx-auto max-w-xl rounded-lg">
        <p className=" flex items-center gap-3"><span className=" w-5 rounded-full aspect-square block bg-green-600"></span> Already Visited Link </p>
        <p className=" flex items-center gap-3">NoN Visited Link <span className=" w-5 rounded-full aspect-square block bg-red-500"></span> </p>
      </div>
      <h1 className="  text-center mb-5 font-bold text-3xl uppercase border-b border-gray-600 max-w-xl mx-auto pb-2">Links </h1>

      <div className=" w-fit mx-auto">
        <a href="https://www.twitter.com" target="_blank" className="custom-anchor hover:text-blue-400 cursor-pointer block text-white mt-3">Twitter </a>
        <a href="https://www.youtube.com" target="_blank" className="custom-anchor hover:text-blue-400 cursor-pointer block text-whit mt-3">Youtube </a>
        <a href="https://www.pink.com" target="_blank" className="custom-anchor hover:text-blue-400 cursor-pointer block text-white mt-3">Pink </a>
      </div>

    </div>
  )
}

export default HomePage