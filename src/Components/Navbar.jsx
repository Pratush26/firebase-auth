import { NavLink } from "react-router";
import '../utils/utility.css'
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function NavBar() {
        const [msg, setMsg] = useState({})
    const { user, signOutUser } = useContext(AuthContext)
    const handleLogout = () => {
        signOutUser().then(() => setMsg({ type: "success", message: "Successfully Signed Out" })).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    console.log(msg)
    return (
        <nav className="flex items-center justify-center gap-5 p-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            {
                user ?
                    <button onClick={handleLogout}>LogOut</button>
                    :
                    <>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </>
            }
        </nav>
    )
}