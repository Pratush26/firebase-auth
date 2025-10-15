import { Link } from 'react-router'
import '../utils/utility.css'
export default function RegistrationPage () {
    return (
        <main className='m-6 min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-center m-4'>Registration Form</h1>
            <form action="" className="flex flex-col items-start justify-center gap-1 w-1/3 mx-auto">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' />
                <label htmlFor="photoLink">Photo Link:</label>
                <input type="url" name="photoLink" id="photoLink" placeholder='Give your photo url' />
                <button type="submit" className='btn'>Register</button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-500 hover:text-blue-600'>Login</Link></p>
        </main>
    )
}