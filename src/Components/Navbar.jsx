import { Link } from "react-router";

export default function NavBar () {
    return (
        <nav className="space-x-4">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}