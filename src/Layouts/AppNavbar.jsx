import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signoutUser } from '../Redux/Features/userSlice';
import { FirebaseAuth } from '../Firebase/firebase.config';
import { useCheckAdminQuery } from '../Redux/API/baseApi';


const AppNavbar = () => {

    const { email } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { data: adminStatus } = useCheckAdminQuery(email);
    console.log(adminStatus);

    const navLinks = <>
        <li><NavLink to='/'>Homepage</NavLink></li>
        {
            adminStatus && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    const handleSignout = () => {
        signOut(FirebaseAuth);
        dispatch(signoutUser());
    }

    return (
        <nav className="navbar bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">~ . ~</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    email ? <button onClick={handleSignout} className="btn btn-error text-white">Logout</button>
                        :
                        <Link to={'/login'}>
                            <button className="btn btn-primary text-white">Login</button>
                        </Link>
                }
            </div>
        </nav>
    )
}

export default AppNavbar