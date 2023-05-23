// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginwrapper from './login/login_wrapper'
import Registrwrapper from './registration/registr_wrapper'
// import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from '../components/protected-routs/protected-routs'
import Wrapper from '../components/wrapper/wrapper'

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/" element={<Loginwrapper setUser={setUser} />} />
      <Route path="/registration" element={<Registrwrapper />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>        
        <Route path="/" element={<Wrapper />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
