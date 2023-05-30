// import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/login_wrapper'
import Registrwrapper from './registration/registr_wrapper'
import Playlist01 from '../components/sidebar/playlist01'
// import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from '../components/protected-routs/protected-routs'
import Wrapper from '../components/wrapper/wrapper'
import ProfileTrack from './track/profiletrack'

export function AppRoutes() {
  const [token, setToken] = useState()
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/registration" element={<Registrwrapper />} />
      <Route path="/track/:id" element={<ProfileTrack />} />
      <Route path="/sidebar/" element={<Playlist01 />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/app" element={<Wrapper />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
