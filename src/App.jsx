import logo from './logo.svg'
import './App.css'
import Menu from './components/menu/menu'
import Player from './components/player/player'
import Bar from './components/bar/bar'
import Playlist from './components/playlist/playlist'
import SideBar from './components/sidebar/sidebar'

function App() {
  return (
    <div className="App">
      <Menu />
      <Player />
      <Playlist />
      <SideBar />
      <Bar />
    </div>
  )
}
export default App