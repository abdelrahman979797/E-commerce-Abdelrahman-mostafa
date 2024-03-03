import { Navigate } from "react-router-dom"


export default function ProtectedRouting({ children }) {
    
    if (localStorage.getItem("userToken")!=null){
        return children
    }
    else{ 
        <Navigate to="/login"></Navigate>
    }
  return (
    <div>
      
    </div>
  )
}
