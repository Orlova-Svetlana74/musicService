// import { useState, useEffect } from 'react'
import Trackimage from './trackimage'
import Tracktext from './tracktext'
import Trackauthor from './trackauthor'
import Trackalbum from './trackalbum'
import Tracktime from './tracktime'
// import SkeletonTrack from './skeletontrack'

function Track() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <Trackimage />

          {/* {loading
            ? Array.from({ length: 1 }).map(() => <SkeletonTrack />)
            : Array.from({ length: 1 }).map(() =>  */}
            
          <Tracktext />
        </div>
        {/* {loading
          ? Array.from({ length: 1 }).map(() => <SkeletonTrack />)
          : Array.from({ length: 1 }).map(() => */}
           
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
export default Track