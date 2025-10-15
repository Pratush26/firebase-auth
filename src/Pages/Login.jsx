import { Link } from 'react-router'
import '../utils/utility.css'

export default function LoginPage () {
    const handleLogin = (e) => {
        e.preventDefault();
        e.target.reset()
    }
    return (
        <main className='m-6 min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-center m-4'>Login Form</h1>
            <form action="" className="flex flex-col items-start justify-center gap-1 w-1/3 mx-auto">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' />
                <button onClick={handleLogin} type="submit" className='btn'>Login</button>
            </form>
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-500 hover:text-blue-600'>Register</Link></p>
        </main>
    )
}