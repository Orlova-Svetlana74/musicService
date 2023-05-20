import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginwrapper from './login/login_wrapper'
import Registrwrapper from './registration/registr_wrapper'
// import { NotFound } from "./pages/not-found";
// import { Profile } from "./pages/profile";
import { Account } from './pages/account'
// import { Wallet } from "./pages/wallet";
import { ProtectedRoute } from './components/protected-route'

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/login" element={<Loginwrapper setUser={setUser} />} />
      <Route path="/registration" element={<Registrwrapper />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<App />} />
      </Route>   
            
    </Routes>
  )
}
export default AppRoutes