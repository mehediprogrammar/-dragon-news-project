import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivetedRouter = ({children}) => {
  
    const {user, loding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if(loding){
        return <span className="loading loading-spinner text-error"></span>
    }
  

    if(user){
       return children;
    }

    return <Navigate state={location.pathname} to="/login"> </Navigate>
};

export default PrivetedRouter;