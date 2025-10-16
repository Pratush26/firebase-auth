import { Link, Navigate, useNavigate } from 'react-router'
import '../utils/utility.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegistrationPage() {
    const [msg, setMsg] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const { user, createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    if (user) return <Navigate to="/" ></Navigate>
    const handleRegister = (e) => {
        e.preventDefault();
        createUser(e.target.email.value, e.target.password.value).then(() => {
            setMsg({ type: "success", message: "Successfully Registered User" })
            e.target.reset()
            setTimeout(() => navigate('/login'), 50);
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })

    }
    return (
        <main className='m-6 min-h-[80vh] flex flex-col items-center justify-center'>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'}`}>{msg.message}</p>}
            <h1 className='text-3xl font-bold text-center m-4'>Registration Form</h1>
            <form onSubmit={handleRegister} className="flex flex-col items-start justify-center gap-1 w-1/3 mx-auto">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <label htmlFor="password">Password:</label>
                <div className='relative w-full'>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" placeholder='Enter your password' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute p-1 right-2 top-1/2 -translate-y-1/2 cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <label htmlFor="photoLink">Photo Link:</label>
                <input type="url" name="photoLink" id="photoLink" placeholder='Give your photo url' />
                <button type="submit" className='btn'>Register</button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-500 hover:text-blue-600'>Login</Link></p>
        </main>
    )
}