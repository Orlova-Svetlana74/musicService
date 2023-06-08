import {useState} from 'react'
import './css/style.css'
// import Wrapper from './components/wrapper/wrapper'
import AppRoutes from './pages/routers'
// import NavBar from './components/nav-bar/nav-bar'
import {USERS}   from './constants'
import UserTrack from './pages/track/usertrack'

function App() {
  const [user] = useState (null);  
  return (
    <div className="App">
      <AppRoutes user={user} />      
      <UserTrack users={USERS} />
    </div>
  )
}
export default App
