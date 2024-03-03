
import {createBrowserRouter} from 'react-router-dom';
import RootPage from '../Pages/RootPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import ProtectedRoute from '../Private/ProtectedRoute';
import DashboardPage from '../Pages/DashboardPage';
import TempProtect from '../Private/TempProtect';
import EditLink from '../Pages/EditLink';

const router = createBrowserRouter([
    {
        path : '/',
        element : <RootPage/>,
        children : [
            {
                path : '/',
                element : <TempProtect><HomePage/></TempProtect>
            },
            {
                path : '/dashboard',
                element : <ProtectedRoute><DashboardPage/></ProtectedRoute>
            },
            {
                path : '/edit/:sid',
                loader : ({params})=>fetch(`https://link-share-server.vercel.app/one/${params.sid}`),
                element : <EditLink/>
            }
        ]
    },
    {
        path : '/login',
        element : <TempProtect><LoginPage/></TempProtect>
    },
    {
        path : '/signup',
        element : <TempProtect><SignUpPage/></TempProtect>
    }
])

export default router;