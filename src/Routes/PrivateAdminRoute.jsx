/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { decodedToken } from "../utils/jwt"

  const PrivateAdminRoute = ({children}) => {

    const {token, isLoading} = useSelector((state) => state.userToken)
    const { pathname } = useLocation();

    const userData = token ? decodedToken(token) : null;
    const navigate = useNavigate();

    if (isLoading) {
      return <p className="text-5xl text-center">Loading...</p>;
    }
    if(userData?.role !== "admin") {
        navigate('/')
      }
  
    if (!token && !isLoading && userData?.role !== "admin") {
      return <Navigate to="/login" state={{ path: pathname }}></Navigate>;
    }
    return children;
  };


export default PrivateAdminRoute;
