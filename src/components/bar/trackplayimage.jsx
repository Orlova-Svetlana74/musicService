// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { useState, useEffect } from 'react'
// import 'react-loading-skeleton/dist/skeleton.css'

function Trackplayimage() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <div className="track-play__image">
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={1} />
        ) : ( */}
          <svg className="track-play__svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        {/* )}
      </SkeletonTheme> */}
    </div>
  )
}
export default Trackplayimage