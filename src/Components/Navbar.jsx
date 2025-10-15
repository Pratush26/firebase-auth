import { Link } from "react-router";
import '../utils/utility.css'

export default function NavBar () {
    return (
        <nav className="flex items-center justify-center gap-5 p-4">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}