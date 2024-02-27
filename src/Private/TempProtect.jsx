import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../Firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "../Redux/Features/userSlice";


const TempProtect = ({ children }) => {

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

    return children;
}

export default TempProtect