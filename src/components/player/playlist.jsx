import Trackimage from './trackimage'
import Tracktext from './tracktext'
import Trackauthor from './trackauthor'
import Trackalbum from './trackalbum'
import Tracktime from './tracktime'

function Playlist() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <Trackimage />
          <Tracktext />
        </div>
        <Trackauthor />
        <Trackalbum />
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
        <Tracktime />
      </div>
    </div>
  )
}
export default Playlist
