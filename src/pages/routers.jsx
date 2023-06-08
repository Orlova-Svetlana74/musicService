// import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/login_wrapper'
import Registrwrapper from './registration/registr_wrapper'
// import Playlist01 from '../components/sidebar/playlist01'
// import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from '../components/protected-routs/protected-routs'
import Wrapper from '../components/wrapper/wrapper'
import ProfileTrack from './track/profiletrack'
// import Playlist02 from '../components/sidebar/playlist02'
// import Playlist03 from '../components/sidebar/playlist03'
// import Login from './login/login'

export function AppRoutes() {
  const [token, setToken] = useState()
  
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/registration" element={<Registrwrapper />} />
      <Route path="/track/profiletrack:id" element={<ProfileTrack />} />
      {/* <Route path="/playlist01/" element={<Playlist01 />} />
      <Route path="/playlist02/" element={<Playlist02 />} />
      <Route path="/playlist03/" element={<Playlist03 />} /> */}
      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<Wrapper />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
