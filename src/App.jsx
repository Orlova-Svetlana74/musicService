import {useState} from 'react'
import './css/style.css'
import Wrapper from './components/wrapper/wrapper'
import AppRoutes from './pages/routers'
// import NavBar from './components/nav-bar/nav-bar'

function App() {
  const [user] = useState (null);  
  return (
    <div className="App">      
      <AppRoutes user ={user} />
      <Wrapper />
    </div>
  );
}
export default App
