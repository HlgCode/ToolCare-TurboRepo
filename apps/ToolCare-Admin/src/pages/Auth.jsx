import { Navigate, Outlet } from "react-router-dom";

export const Auth = ({ user, children, redirectTo="/" }) => {
  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet/>;
}
