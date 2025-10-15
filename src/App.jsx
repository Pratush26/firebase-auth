import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/Navbar'
import AuthProvider from './Context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <NavBar />
      <Outlet />
    </AuthProvider>
  )
}

export default App
