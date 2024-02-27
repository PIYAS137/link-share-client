import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { FirebaseAuth } from "../Firebase/firebase.config";
import { setUser, toggleLoading } from "../Redux/Features/userSlice";


const ProtectedRoute = ({ children }) => {

    const { isLoading, email } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (user) {
                dispatch(setUser({
                    name: user.displayName,
                    photo: user.photoURL,
                    email: user.email
                }))
                dispatch(toggleLoading(false))
            } else {
                dispatch(toggleLoading(false))
            }
        })
    }, [])

    if (isLoading) {
        return (
            <div className="bg-black w-full flex justify-center items-center">
                <span className="loading loading-infinity loading-lg mt-5"></span>
            </div>
        )
    }

    if (!isLoading && email) {
        return children;
    }

    return <Navigate to={'/login'} />




}

export default ProtectedRoute