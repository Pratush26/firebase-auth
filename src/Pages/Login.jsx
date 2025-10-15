import { Link } from 'react-router'
import '../utils/utility.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function LoginPage() {
    const [msg, setMsg] = useState({})
    const { sigInUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        sigInUser(e.target.email.value, e.target.password.value).then(() => {
            setMsg({ type: "success", message: "Successfully Signed in" })
            e.target.reset()
        }).catch((c) => {
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
                <input type="password" name="password" id="password" placeholder='Enter your password' />
                <button type="submit" className='btn'>Login</button>
            </form>
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-500 hover:text-blue-600'>Register</Link></p>
        </main>
    )
}