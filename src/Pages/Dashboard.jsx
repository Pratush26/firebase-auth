import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export default function DashBoardPage () {
    const { user } = useContext(AuthContext)
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh]">
            <p>Dashboard of {user}</p>
        </main>
    )
}