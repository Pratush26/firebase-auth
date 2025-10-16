import { use } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router"
import Loader from "../Components/Loader"

export default function PrivateRoute ({children}) {
    const {user, loading} = use(AuthContext)
    const {pathname} = useLocation()
    if (loading) return <Loader />;
    if (!user) return <Navigate state={pathname} to='/login'></Navigate>;
    return (
        <>
        {children}
        </>
    )
}