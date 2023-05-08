// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { useState, useEffect } from 'react'
// import 'react-loading-skeleton/dist/skeleton.css'
import PlayImg02 from './playlist01.png'

function Playlist02() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <div className="sidebar__item">
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={8} />
        ) : ( */}
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={PlayImg02}
              alt="day's playlist"
            />
          </a>
        {/* )}
      </SkeletonTheme> */}
    </div>
  )
}
export default Playlist02
