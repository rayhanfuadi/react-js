/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useUserStore } from '@/stores/apiStores';


const PrivateRoute = ({ children }) => {
    const user = useUserStore((state) => state.user);
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
/* eslint-enable react/prop-types */
