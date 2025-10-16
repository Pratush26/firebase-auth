import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import '../utils/utility.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function LoginPage() {
    const [msg, setMsg] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const { loading, user, sigInUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const { state } = useLocation()
    if (loading) return;
    if (user) return <Navigate to="/dashboard" ></Navigate>
    const handleLogin = (e) => {
        e.preventDefault();
        sigInUser(e.target.email.value, e.target.password.value).then(() => {
            setMsg({ type: "success", message: "Successfully Signed in" })
            e.target.reset()
            setTimeout(() => navigate(state || '/'), 50);
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    const googleLogin = () => {
        googleSignIn().then(() => setMsg({ type: "success", message: "Successfully Signed in" })).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    return (
        <main className='m-6 min-h-[80vh] flex flex-col items-center justify-center'>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'}`}>{msg.message}</p>}
            <h1 className='text-3xl font-bold text-center m-4'>Login Form</h1>
            <form onSubmit={handleLogin} className="flex flex-col items-start justify-center gap-1 w-1/3 mx-auto">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <label htmlFor="password">Password:</label>
                <div className='relative w-full'>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" placeholder='Enter your password' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute p-1 right-2 top-1/2 -translate-y-1/2 cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <button type="submit" className='btn'>Login</button>
            </form>
            <button onClick={googleLogin} className='btn'>Login with Google</button>
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-500 hover:text-blue-600'>Register</Link></p>
        </main>
    )
}