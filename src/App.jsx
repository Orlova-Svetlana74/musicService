import './App.css'
import Menu from './components/menu/menu'
import Filtr from './components/player/filtr'
import Player from './components/player/player'
import Playlist from './components/player/playlist'
import Poisk from './components/player/poisk'
import Treki from './components/player/treki'
import Bar from './components/bar/bar'

import SideBar from './components/sidebar/sidebar'

function App() {
  return (
    <div className="App">
      <Menu />
      <Player>
        <Filtr />
        <Player />
        <Poisk />
        <Treki />
        <Playlist />
      </Player>

      <SideBar />

      <Bar />
    </div>
  )
}
export default App
