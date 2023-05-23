import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = '/components/pages/login/login_wrapper', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}