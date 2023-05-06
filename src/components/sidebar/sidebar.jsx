import Playlist01 from './playlist01'
import Playlist02 from './playlist02'
import Playlist03 from './playlist03'

function Sidebar() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <Playlist01 />
        <Playlist02 />
        <Playlist03 />
      </div>
    </div>
  )
}

export default Sidebar
