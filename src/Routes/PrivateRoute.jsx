/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


  const PrivateRoute = ({children}) => {

    const {token, isLoading} = useSelector((state) => state.userToken)
    const { pathname } = useLocation();

    if (isLoading) {
      return <p className="text-5xl text-center">Loading...</p>;
    }
    if (!token && !isLoading) {
      return <Navigate to="/login" state={{ path: pathname }}></Navigate>;
    }
    return children;
  };


export default PrivateRoute;
