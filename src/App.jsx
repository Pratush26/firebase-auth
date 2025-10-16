import { Outlet, useNavigation } from 'react-router'
import './App.css'
import NavBar from './Components/Navbar'
import AuthProvider from './Context/AuthProvider'

function App() {
  const { state } = useNavigation()
  return (
    <AuthProvider>
      <NavBar />
      {
        state === "loading" ?
          <section className="flex items-center justify-center gap-2 min-h-[70vh]">
            <div className="h-2 w-2 animate-ping bg-white rounded-full" style={{ animationDelay: "0s" }}></div>
            <div className="h-2 w-2 animate-ping bg-white rounded-full" style={{ animationDelay: "0.2s" }}></div>
            <div className="h-2 w-2 animate-ping bg-white rounded-full" style={{ animationDelay: "0.4s" }}></div>
          </section>
          :
          <Outlet />
      }
    </AuthProvider>
  )
}

export default App
