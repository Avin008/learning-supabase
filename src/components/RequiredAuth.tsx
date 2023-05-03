import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const RequiredAuth = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const authStatus = useAuthStore(
    (store) => store.authStatus
  );

  if (authStatus) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequiredAuth;
