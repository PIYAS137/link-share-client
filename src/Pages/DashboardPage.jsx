import AddLink from "../Components/AddLink"
import { useGetAllUserQuery, useUpdateUserRoleMutation } from "../Redux/API/baseApi"

const DashboardPage = () => {

  const { data: datas } = useGetAllUserQuery();
  const [setUserRole,{data : updatedRoleData}] = useUpdateUserRoleMutation();
  console.log(updatedRoleData);
  
  console.log(datas);
  const handleClickUpdateUserRole=(uid)=>{
    const updatedInfo={
      uid : uid,
      status : 'admin'
    }
    setUserRole(updatedInfo);
  }


  return (
    <div>
      <AddLink />
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-0">
        <div className="  p-3">
          <h1 className=" text-center font-bold text-2xl uppercase mb-3 text-green-500">Users</h1>
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className=" text-white">
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Role</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  datas?.map((one, i) => {
                    return (
                      <tr key={one?._id}>
                        <th>{i + 1} )</th>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-10 aspect-square">
                              <img src={one?.photo} />
                            </div>
                          </div>
                        </td>
                        <td>{one?.name}</td>
                        <td>{one?.email}</td>
                        <td>
                          {
                            one?.role == 'user' ?
                              <button onClick={()=>handleClickUpdateUserRole(one?._id)} className=" btn btn-xs bg-blue-400 hover:bg-blue-500 text-white border-none">make admin</button>
                              :
                              <span className=" text-purple-500 font-semibold italic">admin</span>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className=" p-3">
          <h1 className=" text-center font-bold text-2xl uppercase mb-3 text-blue-400">Links</h1>
          <div className="overflow-x-auto">
            <table className="table table-zebra border-x border-t">
              {/* head */}
              <thead>
                <tr className=" text-white">
                  <th>SL</th>
                  <th>Anchor Text</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1 )</th>
                  <td>Cy Ganderton</td>
                  <td className=" space-x-2">
                    <button className=" btn btn-xs btn-primary">Edit</button>
                    <button className=" btn btn-xs btn-warning">View</button>
                    <button className=" btn btn-xs btn-error text-white">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage