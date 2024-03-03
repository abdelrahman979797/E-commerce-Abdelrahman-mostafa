import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../Context/ContextUser"


export default function ProtectedRouting({ children }) {
    
  let { userData } = useContext(UserContext)
    if (userData){
        return children
    }
  return (
    <Navigate to="/login"></Navigate>
  )
}
