import {Outlet} from 'react-router-dom'
import AppNavbar from '../Layouts/AppNavbar'




const RootPage = () => {
  return (
    <div className=' bg-black text-white min-h-screen'>
        <AppNavbar/>
        <Outlet/>
    </div>
  )
}

export default RootPage