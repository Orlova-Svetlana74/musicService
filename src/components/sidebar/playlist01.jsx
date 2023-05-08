import PlayImg01 from './playlist01.png'

function Playlist01() {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={PlayImg01} alt="day's playlist" />
      </a>
    </div>
  )
}
export default Playlist01
