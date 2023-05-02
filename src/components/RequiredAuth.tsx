import { Navigate } from "react-router-dom";

const RequiredAuth = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  if (false) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequiredAuth;
